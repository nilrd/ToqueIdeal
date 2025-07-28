'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  color: string;
  image: string;
  available_colors: string[];
  available_sizes: string[];
  price?: number;
  active: boolean;
  created_at: string;
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [showInactive, setShowInactive] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await fetch('/api/admin/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleProductStatus = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/admin/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ active: !currentStatus }),
      });

      if (response.ok) {
        loadProducts();
      }
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
    }
  };

  const deleteProduct = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este produto?')) return;

    try {
      const response = await fetch(`/api/admin/products/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        loadProducts();
      }
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || product.category === categoryFilter;
    const matchesStatus = showInactive || product.active;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const categories = [...new Set(products.map(p => p.category))];

  if (loading) {
    return (
      <div className="admin-layout">
        <div className="admin-loading">
          <div className="loading-spinner"></div>
          <p>Carregando produtos...</p>
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
          <a href="/admin" className="nav-item">
            📊 Dashboard
          </a>
          <a href="/admin/products" className="nav-item active">
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
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div className="header-content">
            <h1>Gestão de Produtos</h1>
            <p>Gerencie o catálogo de produtos da Toque Ideal</p>
          </div>
          <Link href="/admin/products/new" className="btn-primary">
            ➕ Adicionar Produto
          </Link>
        </header>

        {/* Filters */}
        <div className="admin-filters">
          <div className="filter-group">
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-group">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="filter-select"
            >
              <option value="">Todas as categorias</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={showInactive}
                onChange={(e) => setShowInactive(e.target.checked)}
              />
              Mostrar inativos
            </label>
          </div>
        </div>

        {/* Products Table */}
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Imagem</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Cor Principal</th>
                <th>Cores Disponíveis</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(product => (
                <tr key={product.id} className={!product.active ? 'inactive-row' : ''}>
                  <td>
                    <div className="product-image-cell">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={60}
                        height={45}
                        style={{ objectFit: 'cover' }}
                        className="table-image"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="product-name-cell">
                      <h4>{product.name}</h4>
                      <p>{product.description.substring(0, 50)}...</p>
                    </div>
                  </td>
                  <td>{product.category}</td>
                  <td>
                    <span className="color-badge">{product.color}</span>
                  </td>
                  <td>
                    <div className="colors-list">
                      {product.available_colors?.slice(0, 3).map(color => (
                        <span key={color} className="color-tag">{color}</span>
                      ))}
                      {product.available_colors?.length > 3 && (
                        <span className="color-more">+{product.available_colors.length - 3}</span>
                      )}
                    </div>
                  </td>
                  <td>
                    <span className={`status-badge ${product.active ? 'active' : 'inactive'}`}>
                      {product.active ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <Link 
                        href={`/admin/products/${product.id}/edit`}
                        className="btn-action edit"
                        title="Editar"
                      >
                        ✏️
                      </Link>
                      <button
                        onClick={() => toggleProductStatus(product.id, product.active)}
                        className={`btn-action ${product.active ? 'deactivate' : 'activate'}`}
                        title={product.active ? 'Desativar' : 'Ativar'}
                      >
                        {product.active ? '👁️‍🗨️' : '👁️'}
                      </button>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="btn-action delete"
                        title="Excluir"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredProducts.length === 0 && (
            <div className="empty-state">
              <p>Nenhum produto encontrado</p>
              <Link href="/admin/products/new" className="btn-primary">
                Adicionar Primeiro Produto
              </Link>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="admin-summary">
          <p>
            Mostrando {filteredProducts.length} de {products.length} produtos
            {searchTerm && ` • Filtro: "${searchTerm}"`}
            {categoryFilter && ` • Categoria: ${categoryFilter}`}
          </p>
        </div>
      </main>
    </div>
  );
}

