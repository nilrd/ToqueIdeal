import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const { data: quotes, error } = await supabase
      .from('quotes')
      .select(`
        *,
        representatives (
          name
        )
      `)
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Formatar dados para incluir nome do representante
    const formattedQuotes = quotes?.map(quote => ({
      ...quote,
      representative_name: quote.representatives?.name || null
    })) || []

    return NextResponse.json(formattedQuotes)

  } catch (error) {
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const quoteData = await request.json()

    const { data: quote, error } = await supabase
      .from('quotes')
      .insert([{
        customer_name: quoteData.customer_name,
        customer_email: quoteData.customer_email,
        customer_phone: quoteData.customer_phone,
        representative_id: quoteData.representative_id || null,
        items: quoteData.items || [],
        message: quoteData.message || '',
        status: 'pending'
      }])
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(quote, { status: 201 })

  } catch (error) {
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

