import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// GET - Buscar um produto específico
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'Produto não encontrado' },
          { status: 404 }
        )
      }
      console.error('Erro ao buscar produto:', error)
      return NextResponse.json(
        { error: 'Erro ao buscar produto' },
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

// PUT - Atualizar um produto
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { name, description, price, category, image_url } = body

    const { data, error } = await supabase
      .from('products')
      .update({
        name,
        description,
        price,
        category,
        image_url,
        updated_at: new Date().toISOString(),
      })
      .eq('id', params.id)
      .select()

    if (error) {
      console.error('Erro ao atualizar produto:', error)
      return NextResponse.json(
        { error: 'Erro ao atualizar produto' },
        { status: 500 }
      )
    }

    if (data.length === 0) {
      return NextResponse.json(
        { error: 'Produto não encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json(data[0])
  } catch (error) {
    console.error('Erro interno:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// DELETE - Deletar um produto
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', params.id)

    if (error) {
      console.error('Erro ao deletar produto:', error)
      return NextResponse.json(
        { error: 'Erro ao deletar produto' },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Produto deletado com sucesso' })
  } catch (error) {
    console.error('Erro interno:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

