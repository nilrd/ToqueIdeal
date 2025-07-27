import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// GET - Listar todos os produtos
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const search = searchParams.get('search')

    let query = supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })

    // Filtrar por categoria se especificado
    if (category) {
      query = query.eq('category', category)
    }

    // Buscar por nome se especificado
    if (search) {
      query = query.ilike('name', `%${search}%`)
    }

    const { data, error } = await query

    if (error) {
      console.error('Erro ao buscar produtos:', error)
      return NextResponse.json(
        { error: 'Erro ao buscar produtos' },
        { status: 500 }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Erro interno:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// POST - Criar um novo produto
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description, price, category, image_url } = body

    // Validação básica
    if (!name || !description || !price || !category) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: name, description, price, category' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('products')
      .insert([
        {
          name,
          description,
          price,
          category,
          image_url: image_url || null,
        },
      ])
      .select()

    if (error) {
      console.error('Erro ao criar produto:', error)
      return NextResponse.json(
        { error: 'Erro ao criar produto' },
        { status: 500 }
      )
    }

    return NextResponse.json(data[0], { status: 201 })
  } catch (error) {
    console.error('Erro interno:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

