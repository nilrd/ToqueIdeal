'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface User {
  name: string;
}

interface DashboardStats {
  totalProducts: number;
  totalQuotes: number;
  pendingQuotes: number;
  totalRepresentatives: number;
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalQuotes: 0,
    pendingQuotes: 0,
    totalRepresentatives: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
    fetchDashboardData()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me')
      if (response.ok) {
        const userData = await response.json()
        setUser(userData)
      } else {
        window.location.href = '/admin/login'
      }
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error)
      window.location.href = '/admin/login'
    }
  }

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('/api/admin/dashboard')
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (error) {
      console.error('Erro ao carregar dados do dashboard:', error)
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      window.location.href = '/admin/login'
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'var(--neutral-light)'
      }}>
        <div style={{
          textAlign: 'center',
          color: 'var(--neutral-medium)'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '3px solid var(--neutral-light)',
            borderTop: '3px solid var(--primary-blue)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem'
          }}></div>
          Carregando painel administrativo...
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--neutral-light)' }}>
      {/* Header Administrativo */}
      <div className="admin-header">
        <div>
          <h1 style={{ margin: 0, fontSize: '1.8rem' }}>
            🏢 Painel Administrativo - Toque Ideal
          </h1>
          <p style={{ margin: '0.5rem 0 0 0', opacity: 0.8 }}>
            Sistema de gerenciamento completo
          </p>
        </div>
        
        <div className="admin-user">
          <div className="user-info">
            <span>Olá, {user?.name || 'Admin'}</span>
            <button onClick={logout} className="logout-btn">
              Sair
            </button>
          </div>
        </div>
      </div>

      <div className="admin-container">
        {/* Navegação */}
        <nav className="admin-nav">
          <Link href="/admin" className="active">
            📊 Dashboard
          </Link>
          <Link href="/admin/products">
            📦 Produtos
          </Link>
          <Link href="/admin/quotes">
            💼 Orçamentos
          </Link>
          <Link href="/admin/representatives">
            👥 Representantes
          </Link>
          <Link href="/admin/events">
            📅 Eventos & Feiras
          </Link>
          <Link href="/admin/settings">
            ⚙️ Configurações
          </Link>
        </nav>

        {/* Cards de Estatísticas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 10px 30px var(--shadow-light)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📦</div>
            <h3 style={{ color: 'var(--primary-blue)', margin: '0 0 0.5rem 0' }}>
              {stats.totalProducts}
            </h3>
            <p style={{ color: 'var(--neutral-medium)', margin: 0 }}>
              Total de Produtos
            </p>
          </div>

          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 10px 30px var(--shadow-light)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💼</div>
            <h3 style={{ color: 'var(--accent-gold)', margin: '0 0 0.5rem 0' }}>
              {stats.totalQuotes}
            </h3>
            <p style={{ color: 'var(--neutral-medium)', margin: 0 }}>
              Total de Orçamentos
            </p>
          </div>

          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 10px 30px var(--shadow-light)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>⏳</div>
            <h3 style={{ color: 'var(--accent-copper)', margin: '0 0 0.5rem 0' }}>
              {stats.pendingQuotes}
            </h3>
            <p style={{ color: 'var(--neutral-medium)', margin: 0 }}>
              Orçamentos Pendentes
            </p>
          </div>

          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 10px 30px var(--shadow-light)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>👥</div>
            <h3 style={{ color: 'var(--primary-dark)', margin: '0 0 0.5rem 0' }}>
              {stats.totalRepresentatives}
            </h3>
            <p style={{ color: 'var(--neutral-medium)', margin: 0 }}>
              Representantes
            </p>
          </div>
        </div>

        {/* Ações Rápidas */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 10px 30px var(--shadow-light)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>
            Ações Rápidas
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            <Link href="/admin/products/new" className="btn-primary" style={{
              textAlign: 'center',
              padding: '1rem',
              textDecoration: 'none'
            }}>
              ➕ Adicionar Produto
            </Link>
            
            <Link href="/admin/quotes" className="btn-primary" style={{
              textAlign: 'center',
              padding: '1rem',
              textDecoration: 'none',
              background: 'var(--accent-gold)'
            }}>
              📋 Ver Orçamentos
            </Link>
            
            <Link href="/admin/events/new" className="btn-primary" style={{
              textAlign: 'center',
              padding: '1rem',
              textDecoration: 'none',
              background: 'var(--accent-copper)'
            }}>
              📅 Novo Evento
            </Link>
            
            <Link href="/catalogo" className="btn-primary" style={{
              textAlign: 'center',
              padding: '1rem',
              textDecoration: 'none',
              background: 'var(--neutral-medium)'
            }}>
              🌐 Ver Site
            </Link>
          </div>
        </div>

        {/* Informações do Sistema */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 10px 30px var(--shadow-light)'
        }}>
          <h2 style={{ color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>
            Sistema de Gerenciamento
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div>
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>
                Funcionalidades Disponíveis
              </h3>
              <ul style={{ color: 'var(--neutral-medium)', lineHeight: 1.8 }}>
                <li>✅ Gerenciamento completo de produtos</li>
                <li>✅ Sistema de orçamentos</li>
                <li>✅ Cadastro de representantes</li>
                <li>✅ Gestão de eventos e feiras</li>
                <li>✅ Painel de estatísticas</li>
                <li>✅ Sistema de autenticação seguro</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>
                Acesso ao Sistema
              </h3>
              <p style={{ color: 'var(--neutral-medium)', lineHeight: 1.6 }}>
                Este painel permite que a equipe da Toque Ideal gerencie 
                todos os aspectos do site de forma autônoma, sem necessidade 
                de conhecimento técnico. Todas as alterações são aplicadas 
                automaticamente no site público.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

