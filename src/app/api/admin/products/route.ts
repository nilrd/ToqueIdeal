import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const { data: products, error: dbError } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })

    if (dbError) {
      console.error('Erro ao buscar produtos:', dbError)
      return NextResponse.json({ error: dbError.message }, { status: 500 })
    }

    return NextResponse.json(products)

  } catch (error) {
    console.error('Erro inesperado ao buscar produtos:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const productData = await request.json()

    const { data: product, error: dbError } = await supabase
      .from('products')
      .insert([{
        name: productData.name,
        description: productData.description,
        category: productData.category,
        color: productData.color,
        image: productData.image,
        available_colors: productData.available_colors || [productData.color],
        available_sizes: productData.available_sizes || [],
        price: productData.price,
        active: productData.active !== false
      }])
      .select()
      .single()

    if (dbError) {
      console.error('Erro ao criar produto:', dbError)
      return NextResponse.json({ error: dbError.message }, { status: 500 })
    }

    return NextResponse.json(product, { status: 201 })

  } catch (error) {
    console.error('Erro inesperado ao criar produto:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}


