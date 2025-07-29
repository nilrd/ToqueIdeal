'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui'
import Image from 'next/image'

interface User {
  name: string
  role: string
}

interface Product {
  id: string
  code: string
  name: string
  collection: string
  color: string
  material: string
  createdAt: string
}

interface DashboardStats {
  totalProducts: number
  totalOrders: number
  totalCustomers: number
  monthlyRevenue: number
}

export default function AdminPanel() {
  const [user, setUser] = useState<User | null>(null)
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalOrders: 0,
    totalCustomers: 0,
    monthlyRevenue: 0
  })
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular dados do usuário logado
    setUser({ name: 'Admin', role: 'Administrador' })
    
    // Simular dados do dashboard
    setStats({
      totalProducts: 127,
      totalOrders: 89,
      totalCustomers: 456,
      monthlyRevenue: 125000
    })

    // Simular produtos recentes
    setProducts([
      {
        id: '1',
        code: '2140',
        name: 'Conjunto Elegance Branco',
        collection: 'Elegance',
        color: 'Branco',
        material: 'Metal Premium',
        createdAt: '2025-07-28'
      },
      {
        id: '2',
        code: '2140',
        name: 'Conjunto Elegance Mel',
        collection: 'Elegance',
        color: 'Mel',
        material: 'Metal Dourado',
        createdAt: '2025-07-28'
      },
      {
        id: '3',
        code: '2207',
        name: 'Conjunto Bronze com Âmbar',
        collection: 'Premium',
        color: 'Bronze com Âmbar',
        material: 'Metal Bronze',
        createdAt: '2025-07-27'
      }
    ])

    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-secondary-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-secondary-600">Carregando painel administrativo...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <header className="bg-white shadow-luxury border-b border-secondary-200">
        <div className="container-luxury">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Image
                src="/logos/retangular logo.png"
                alt="Toque Ideal"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
              <div className="border-l border-secondary-300 pl-4">
                <h1 className="text-xl font-display font-bold text-primary-600">
                  Painel Administrativo
                </h1>
                <p className="text-sm text-secondary-600">Sistema de Gerenciamento</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-primary-600">{user?.name}</p>
                <p className="text-xs text-secondary-600">{user?.role}</p>
              </div>
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {user?.name?.charAt(0)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-luxury py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-luxury p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-secondary-600 mb-1">Total de Produtos</p>
                <p className="text-3xl font-bold text-primary-600">{stats.totalProducts}</p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
          </Card>

          <Card className="card-luxury p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-secondary-600 mb-1">Pedidos do Mês</p>
                <p className="text-3xl font-bold text-accent-600">{stats.totalOrders}</p>
              </div>
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
          </Card>

          <Card className="card-luxury p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-secondary-600 mb-1">Clientes Ativos</p>
                <p className="text-3xl font-bold text-primary-600">{stats.totalCustomers}</p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
            </div>
          </Card>

          <Card className="card-luxury p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-secondary-600 mb-1">Receita Mensal</p>
                <p className="text-3xl font-bold text-accent-600">
                  R$ {stats.monthlyRevenue.toLocaleString('pt-BR')}
                </p>
              </div>
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="card-luxury p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-display font-bold text-primary-600">
                  Produtos Recentes
                </h3>
                <button className="btn-primary text-sm py-2 px-4">
                  Ver Todos
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-secondary-200">
                      <th className="text-left py-3 px-2 text-sm font-semibold text-secondary-700">Código</th>
                      <th className="text-left py-3 px-2 text-sm font-semibold text-secondary-700">Nome</th>
                      <th className="text-left py-3 px-2 text-sm font-semibold text-secondary-700">Coleção</th>
                      <th className="text-left py-3 px-2 text-sm font-semibold text-secondary-700">Cor</th>
                      <th className="text-left py-3 px-2 text-sm font-semibold text-secondary-700">Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="border-b border-secondary-100 hover:bg-secondary-50">
                        <td className="py-3 px-2 text-sm font-mono text-primary-600">{product.code}</td>
                        <td className="py-3 px-2 text-sm font-medium text-secondary-800">{product.name}</td>
                        <td className="py-3 px-2 text-sm text-secondary-600">{product.collection}</td>
                        <td className="py-3 px-2 text-sm text-secondary-600">{product.color}</td>
                        <td className="py-3 px-2 text-sm text-secondary-600">
                          {new Date(product.createdAt).toLocaleDateString('pt-BR')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          <div>
            <Card className="card-luxury p-6">
              <h3 className="text-xl font-display font-bold text-primary-600 mb-6">
                Ações Rápidas
              </h3>
              
              <div className="space-y-4">
                <button className="w-full btn-primary text-left flex items-center space-x-3 p-4 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Adicionar Produto</span>
                </button>
                
                <button className="w-full btn-outline text-left flex items-center space-x-3 p-4 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Gerenciar Pedidos</span>
                </button>
                
                <button className="w-full btn-outline text-left flex items-center space-x-3 p-4 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                  <span>Clientes</span>
                </button>
                
                <button className="w-full btn-outline text-left flex items-center space-x-3 p-4 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                  </svg>
                  <span>Relatórios</span>
                </button>
              </div>
            </Card>
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="card-luxury p-6">
          <h3 className="text-xl font-display font-bold text-primary-600 mb-6">
            Atividade Recente
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-secondary-50 rounded-lg">
              <div className="w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-secondary-800">
                  Novo produto adicionado: Conjunto Elegance Branco
                </p>
                <p className="text-xs text-secondary-600">Há 2 horas</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-secondary-50 rounded-lg">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-secondary-800">
                  Pedido #1234 foi processado
                </p>
                <p className="text-xs text-secondary-600">Há 4 horas</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-secondary-50 rounded-lg">
              <div className="w-2 h-2 bg-accent-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium text-secondary-800">
                  Novo cliente cadastrado: João Silva
                </p>
                <p className="text-xs text-secondary-600">Ontem</p>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}

