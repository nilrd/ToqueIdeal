import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const id = url.pathname.split('/').pop()

    if (!id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 })
    }
    
    const { data: product, error: dbError } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()

    if (dbError) {
      return NextResponse.json({ error: dbError.message }, { status: 500 })
    }

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Internal server error'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}


