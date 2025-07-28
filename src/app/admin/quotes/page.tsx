
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface QuoteItem {
  name: string;
  color: string;
  size?: string;
  quantity: number;
}

interface Quote {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  representative_id?: string;
  representative_name?: string;
  items: QuoteItem[];
  message: string;
  status: 'pending' | 'responded' | 'completed';
  created_at: string;
}

export default function AdminQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);

  useEffect(() => {
    loadQuotes();
  }, []);

  const loadQuotes = async () => {
    try {
      const response = await fetch('/api/admin/quotes');
      if (response.ok) {
        const data = await response.json();
        setQuotes(data);
      }
    } catch (error) {
      console.error('Erro ao carregar orçamentos:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateQuoteStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/quotes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        loadQuotes();
        setSelectedQuote(null);
      }
    } catch (error) {
      console.error('Erro ao atualizar orçamento:', error);
    }
  };

  const filteredQuotes = quotes.filter(quote => {
    const matchesSearch = quote.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         quote.customer_email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || quote.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Pendente';
      case 'responded': return 'Respondido';
      case 'completed': return 'Finalizado';
      default: return status;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'pending': return 'status-pending';
      case 'responded': return 'status-responded';
      case 'completed': return 'status-completed';
      default: return '';
    }
  };

  if (loading) {
    return (
      <div className="admin-layout">
        <div className="admin-loading">
          <div className="loading-spinner"></div>
          <p>Carregando orçamentos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <h2>Toque Ideal</h2>
          <span>Painel Administrativo</span>
        </div>
        
        <nav className="admin-nav">
          <Link href="/admin" className="nav-item">
            📊 Dashboard
          </Link>
          <Link href="/admin/products" className="nav-item">
            🛍️ Produtos
          </Link>
          <Link href="/admin/quotes" className="nav-item active">
            💬 Orçamentos
          </Link>
          <Link href="/admin/events" className="nav-item">
            📅 Eventos
          </Link>
          <Link href="/admin/representatives" className="nav-item">
            👥 Representantes
          </Link>
          <Link href="/admin/jobs" className="nav-item">
            💼 Vagas
          </Link>
          <Link href="/admin/settings" className="nav-item">
            ⚙️ Configurações
          </Link>
        </nav>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div className="header-content">
            <h1>Gestão de Orçamentos</h1>
            <p>Gerencie as solicitações de orçamento dos clientes</p>
          </div>
        </header>

        {/* Filters */}
        <div className="admin-filters">
          <div className="filter-group">
            <input
              type="text"
              placeholder="Buscar por nome ou email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-group">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="filter-select"
            >
              <option value="">Todos os status</option>
              <option value="pending">Pendente</option>
              <option value="responded">Respondido</option>
              <option value="completed">Finalizado</option>
            </select>
          </div>
        </div>

        {/* Quotes Table */}
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Contato</th>
                <th>Representante</th>
                <th>Itens</th>
                <th>Data</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredQuotes.map(quote => (
                <tr key={quote.id}>
                  <td>
                    <div className="customer-info">
                      <h4>{quote.customer_name}</h4>
                      <p>{quote.customer_email}</p>
                    </div>
                  </td>
                  <td>{quote.customer_phone}</td>
                  <td>
                    {quote.representative_name || 'Direto'}
                  </td>
                  <td>
                    <span className="items-count">
                      {quote.items?.length || 0} itens
                    </span>
                  </td>
                  <td>
                    {new Date(quote.created_at).toLocaleDateString('pt-BR')}
                  </td>
                  <td>
                    <span className={`status-badge ${getStatusClass(quote.status)}`}>
                      {getStatusText(quote.status)}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        onClick={() => setSelectedQuote(quote)}
                        className="btn-action view"
                        title="Ver detalhes"
                      >
                        👁️
                      </button>
                      {quote.status === 'pending' && (
                        <button
                          onClick={() => updateQuoteStatus(quote.id, 'responded')}
                          className="btn-action respond"
                          title="Marcar como respondido"
                        >
                          ✉️
                        </button>
                      )}
                      {quote.status === 'responded' && (
                        <button
                          onClick={() => updateQuoteStatus(quote.id, 'completed')}
                          className="btn-action complete"
                          title="Marcar como finalizado"
                        >
                          ✅
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredQuotes.length === 0 && (
            <div className="empty-state">
              <p>Nenhum orçamento encontrado</p>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="admin-summary">
          <p>
            Mostrando {filteredQuotes.length} de {quotes.length} orçamentos
            {searchTerm && ` • Filtro: "${searchTerm}"`}
            {statusFilter && ` • Status: ${getStatusText(statusFilter)}`}
          </p>
        </div>

        {/* Quote Details Modal */}
        {selectedQuote && (
          <div className="modal-overlay" onClick={() => setSelectedQuote(null)}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Detalhes do Orçamento</h2>
                <button
                  onClick={() => setSelectedQuote(null)}
                  className="modal-close"
                >
                  ✕
                </button>
              </div>

              <div className="modal-content">
                <div className="quote-details">
                  <div className="detail-section">
                    <h3>Informações do Cliente</h3>
                    <p><strong>Nome:</strong> {selectedQuote.customer_name}</p>
                    <p><strong>Email:</strong> {selectedQuote.customer_email}</p>
                    <p><strong>Telefone:</strong> {selectedQuote.customer_phone}</p>
                    {selectedQuote.representative_name && (
                      <p><strong>Representante:</strong> {selectedQuote.representative_name}</p>
                    )}
                  </div>

                  <div className="detail-section">
                    <h3>Produtos Solicitados</h3>
                    {selectedQuote.items?.length > 0 ? (
                      <div className="items-list">
                        {selectedQuote.items.map((item, index) => (
                          <div key={index} className="item-card">
                            <h4>{item.name}</h4>
                            <p>Cor: {item.color}</p>
                            {item.size && <p>Tamanho: {item.size}</p>}
                            <p>Quantidade: {item.quantity}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>Nenhum item especificado</p>
                    )}
                  </div>

                  {selectedQuote.message && (
                    <div className="detail-section">
                      <h3>Mensagem do Cliente</h3>
                      <p className="quote-message">{selectedQuote.message}</p>
                    </div>
                  )}

                  <div className="detail-section">
                    <h3>Status do Orçamento</h3>
                    <div className="status-actions">
                      <span className={`status-badge ${getStatusClass(selectedQuote.status)}`}>
                        {getStatusText(selectedQuote.status)}
                      </span>
                      
                      <div className="status-buttons">
                        {selectedQuote.status === 'pending' && (
                          <button
                            onClick={() => updateQuoteStatus(selectedQuote.id, 'responded')}
                            className="btn-primary"
                          >
                            Marcar como Respondido
                          </button>
                        )}
                        {selectedQuote.status === 'responded' && (
                          <button
                            onClick={() => updateQuoteStatus(selectedQuote.id, 'completed')}
                            className="btn-primary"
                          >
                            Marcar como Finalizado
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}


