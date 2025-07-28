'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface DashboardStats {
  totalProducts: number;
  totalQuotes: number;
  totalRepresentatives: number;
  totalEvents: number;
  recentQuotes: any[];
  popularProducts: any[];
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    loadDashboardData();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me');
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        router.push('/admin/login');
      }
    } catch (error) {
      router.push('/admin/login');
    }
  };

  const loadDashboardData = async () => {
    try {
      const response = await fetch('/api/admin/dashboard');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Erro ao carregar dados do dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="loading-spinner"></div>
        <p>Carregando painel administrativo...</p>
      </div>
    );
  }

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <h2>Toque Ideal</h2>
          <span>Painel Administrativo</span>
        </div>
        
        <nav className="admin-nav">
          <a href="/admin" className="nav-item active">
            📊 Dashboard
          </a>
          <a href="/admin/products" className="nav-item">
            🛍️ Produtos
          </a>
          <a href="/admin/quotes" className="nav-item">
            💬 Orçamentos
          </a>
          <a href="/admin/events" className="nav-item">
            📅 Eventos
          </a>
          <a href="/admin/representatives" className="nav-item">
            👥 Representantes
          </a>
          <a href="/admin/jobs" className="nav-item">
            💼 Vagas
          </a>
          <a href="/admin/settings" className="nav-item">
            ⚙️ Configurações
          </a>
        </nav>

        <div className="admin-user">
          <div className="user-info">
            <span>Olá, {user?.name || 'Admin'}</span>
            <button onClick={logout} className="logout-btn">
              Sair
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <h1>Dashboard</h1>
          <p>Visão geral do seu negócio</p>
        </header>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🛍️</div>
            <div className="stat-content">
              <h3>{stats?.totalProducts || 0}</h3>
              <p>Produtos Cadastrados</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">💬</div>
            <div className="stat-content">
              <h3>{stats?.totalQuotes || 0}</h3>
              <p>Orçamentos Recebidos</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <h3>{stats?.totalRepresentatives || 0}</h3>
              <p>Representantes Ativos</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📅</div>
            <div className="stat-content">
              <h3>{stats?.totalEvents || 0}</h3>
              <p>Eventos Cadastrados</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="dashboard-content">
          <div className="content-section">
            <h2>Orçamentos Recentes</h2>
            <div className="recent-quotes">
              {stats?.recentQuotes?.length ? (
                stats.recentQuotes.map((quote: any) => (
                  <div key={quote.id} className="quote-item">
                    <div className="quote-info">
                      <h4>{quote.customer_name}</h4>
                      <p>{quote.customer_email}</p>
                      <span className="quote-date">
                        {new Date(quote.created_at).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <div className="quote-status">
                      <span className={`status ${quote.status}`}>
                        {quote.status === 'pending' ? 'Pendente' : 
                         quote.status === 'responded' ? 'Respondido' : 'Finalizado'}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="empty-state">Nenhum orçamento recente</p>
              )}
            </div>
          </div>

          <div className="content-section">
            <h2>Produtos Mais Solicitados</h2>
            <div className="popular-products">
              {stats?.popularProducts?.length ? (
                stats.popularProducts.map((product: any) => (
                  <div key={product.id} className="product-item">
                    <div className="product-info">
                      <h4>{product.name}</h4>
                      <p>{product.category}</p>
                    </div>
                    <div className="product-requests">
                      <span>{product.request_count} solicitações</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="empty-state">Nenhum dado disponível</p>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h2>Ações Rápidas</h2>
          <div className="actions-grid">
            <a href="/admin/products/new" className="action-card">
              <div className="action-icon">➕</div>
              <h3>Adicionar Produto</h3>
              <p>Cadastrar novo produto no catálogo</p>
            </a>

            <a href="/admin/events/new" className="action-card">
              <div className="action-icon">📅</div>
              <h3>Criar Evento</h3>
              <p>Adicionar nova feira ou evento</p>
            </a>

            <a href="/admin/quotes" className="action-card">
              <div className="action-icon">💬</div>
              <h3>Ver Orçamentos</h3>
              <p>Gerenciar solicitações de clientes</p>
            </a>

            <a href="/admin/representatives" className="action-card">
              <div className="action-icon">👥</div>
              <h3>Representantes</h3>
              <p>Gerenciar rede de representantes</p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

