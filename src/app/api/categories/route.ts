import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// GET - Listar todas as categorias
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name', { ascending: true })

    if (error) {
      console.error('Erro ao buscar categorias:', error)
      return NextResponse.json(
        { error: 'Erro ao buscar categorias' },
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

// POST - Criar uma nova categoria
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description } = body

    // Validação básica
    if (!name) {
      return NextResponse.json(
        { error: 'Campo obrigatório: name' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('categories')
      .insert([
        {
          name,
          description: description || null,
        },
      ])
      .select()

    if (error) {
      console.error('Erro ao criar categoria:', error)
      return NextResponse.json(
        { error: 'Erro ao criar categoria' },
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

