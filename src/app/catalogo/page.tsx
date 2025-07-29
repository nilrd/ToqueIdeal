'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'

interface Product {
  id: string
  name: string
  color: string
  category: string
  image: string
  description: string
  availableColors?: string[]
  availableSizes?: string[]
}

export default function Catalogo() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    if (selectedCategory === 'Todos') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory))
    }
  }, [products, selectedCategory])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      if (response.ok) {
        const data = await response.json()
        setProducts(data)
        setFilteredProducts(data)
      }
    } catch (error) {
      console.error('Erro ao carregar produtos:', error)
    } finally {
      setLoading(false)
    }
  }

  const categories = ['Todos', 'Centros de Mesa', 'Cubas', 'Acessórios para Banheiro']

  return (
    <div className="main-content">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <Link href="/" className="logo">
            <div className="logo-icon">TI</div>
            <span className="logo-text">TOQUE IDEAL</span>
          </Link>
          
          <nav className="nav">
            <Link href="/" className="nav-link">Início</Link>
            <Link href="/catalogo" className="nav-link">Produtos</Link>
            <Link href="/#sobre" className="nav-link">Sobre</Link>
            <Link href="/#contato" className="nav-link">Contato</Link>
            <Link href="/admin" className="btn-primary">Área Administrativa</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="catalog-hero">
        <div className="section-container">
          <h1>Nosso Catálogo</h1>
          <p>
            Descubra nossa coleção completa de centros de mesa, cubas decorativas 
            e acessórios para banheiro em múltiplas cores premium. Cada peça é 
            cuidadosamente criada para transformar seu ambiente.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="filters-section">
        <div className="filters-container">
          <div className="filter-group">
            <h3>Categoria</h3>
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div style={{ 
            textAlign: 'center', 
            color: 'var(--neutral-medium)',
            fontSize: '0.9rem',
            marginTop: '1rem'
          }}>
            Exibindo {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="products-section">
        <div className="section-container">
          {loading ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '4rem 0',
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
              Carregando produtos...
            </div>
          ) : filteredProducts.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '4rem 0',
              color: 'var(--neutral-medium)'
            }}>
              <h3>Nenhum produto encontrado</h3>
              <p>Tente selecionar uma categoria diferente.</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={(product) => {
                    // Função temporária - será implementada com o sistema de carrinho
                    console.log('Produto adicionado:', product);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{ backgroundColor: 'var(--neutral-light)' }}>
        <div className="section-container">
          <h2 className="section-title">Não Encontrou o que Procura?</h2>
          <p className="section-subtitle">
            Trabalhamos com projetos personalizados. Entre em contato conosco 
            e vamos criar a peça perfeita para seu ambiente.
          </p>
          
          <div style={{ textAlign: 'center' }}>
            <a 
              href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um projeto personalizado."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Solicitar Projeto Personalizado
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        background: 'var(--primary-dark)', 
        color: 'white', 
        padding: '3rem 0',
        textAlign: 'center'
      }}>
        <div className="section-container">
          <div className="logo" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
            <div className="logo-icon">TI</div>
            <span className="logo-text" style={{ color: 'white' }}>TOQUE IDEAL</span>
          </div>
          <p style={{ opacity: 0.8 }}>
            © 2024 Toque Ideal. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Theme Toggle */}
      <button 
        className="theme-toggle"
        onClick={() => {
          const theme = document.documentElement.getAttribute('data-theme')
          document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark')
        }}
        title="Alternar tema"
      >
        🌙
      </button>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

