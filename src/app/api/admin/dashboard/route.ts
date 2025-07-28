import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    // Verificar autenticação (implementar middleware depois)
    
    // Buscar estatísticas
    const [
      { count: totalProducts },
      { count: totalQuotes },
      { count: totalRepresentatives },
      { count: totalEvents }
    ] = await Promise.all([
      supabase.from('products').select('*', { count: 'exact', head: true }),
      supabase.from('quotes').select('*', { count: 'exact', head: true }),
      supabase.from('representatives').select('*', { count: 'exact', head: true }),
      supabase.from('events').select('*', { count: 'exact', head: true })
    ])

    // Buscar orçamentos recentes
    const { data: recentQuotes } = await supabase
      .from('quotes')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5)

    // Buscar produtos mais solicitados (simulado por enquanto)
    const { data: popularProducts } = await supabase
      .from('products')
      .select('id, name, category')
      .limit(5)

    // Adicionar contagem simulada de solicitações
    const popularProductsWithCount = popularProducts?.map(product => ({
      ...product,
      request_count: Math.floor(Math.random() * 20) + 1
    })) || []

    return NextResponse.json({
      totalProducts: totalProducts || 0,
      totalQuotes: totalQuotes || 0,
      totalRepresentatives: totalRepresentatives || 0,
      totalEvents: totalEvents || 0,
      recentQuotes: recentQuotes || [],
      popularProducts: popularProductsWithCount
    })

  } catch (error) {
    console.error('Erro ao buscar dados do dashboard:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

