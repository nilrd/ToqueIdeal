'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`main-content ${isLoaded ? 'loaded' : ''}`}>
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
            <Link href="#sobre" className="nav-link">Sobre</Link>
            <Link href="#contato" className="nav-link">Contato</Link>
            <Link href="/admin" className="btn-primary">Área Administrativa</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1>Transforme Seus Ambientes</h1>
          <p>
            Peças exclusivas de decoração em vidro artesanal que combinam elegância, 
            sofisticação e design contemporâneo para criar ambientes únicos.
          </p>
          <Link href="/catalogo" className="btn-primary">
            Explorar Catálogo
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section">
        <div className="section-container">
          <h2 className="section-title">Quem Somos</h2>
          <p className="section-subtitle">
            A Toque Ideal é fruto da parceria entre os sócios David Bomfim e Luana Andrade, 
            que uniram suas expertises para oferecer produtos de decoração da mais alta qualidade.
          </p>
          
          <div className="about-grid">
            <div className="about-card">
              <h3>Missão</h3>
              <p>
                Criar peças de decoração e acessórios para banheiro que combinem 
                modernidade, qualidade e design sofisticado, transformando ambientes 
                com elegância e funcionalidade.
              </p>
            </div>
            
            <div className="about-card">
              <h3>Visão</h3>
              <p>
                Ser referência nacional em produtos de decoração em vidro, 
                reconhecida pela excelência, inovação e compromisso com a 
                satisfação total de nossos clientes.
              </p>
            </div>
            
            <div className="about-card">
              <h3>Valores</h3>
              <p>
                Qualidade, elegância, inovação e compromisso com a satisfação 
                total de nossos clientes. Cada peça é cuidadosamente desenvolvida 
                para superar expectativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section" style={{ backgroundColor: 'var(--neutral-light)' }}>
        <div className="section-container">
          <h2 className="section-title">Nossos Produtos</h2>
          <p className="section-subtitle">
            Especializados em peças de vidro artesanais, criamos centros de mesa, 
            cubas decorativas e acessórios para banheiro que transformam ambientes 
            com elegância e sofisticação.
          </p>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/catalogo" className="btn-primary">
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="section">
        <div className="section-container">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Pronto para transformar seu ambiente? Entre em contato conosco e 
            descubra como nossas peças podem elevar a decoração do seu espaço.
          </p>
          
          <div style={{ textAlign: 'center' }}>
            <a 
              href="https://wa.me/5511999999999?text=Olá! Gostaria de conhecer mais sobre os produtos da Toque Ideal."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ display: 'inline-block', marginTop: '1rem' }}
            >
              Falar no WhatsApp
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
    </div>
  )
}

