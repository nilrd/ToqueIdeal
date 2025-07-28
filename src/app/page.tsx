'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de conhecer os produtos da Toque Ideal.', '_blank');
  };

  const handleCatalog = () => {
    window.location.href = '/catalogo';
  };

  const handleBudget = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento.', '_blank');
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <Image 
              src="/1.png" 
              alt="Toque Ideal Logo" 
              width={40} 
              height={40}
              style={{ objectFit: 'contain' }}
            />
            <span className="logo-text">TOQUE IDEAL</span>
          </div>
          
          <nav className="nav">
            <a href="#inicio">Início</a>
            <a href="/catalogo">Produtos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
            <button className="btn-header" onClick={handleBudget}>
              Solicitar Orçamento
            </button>
          </nav>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-nav open">
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Início</a>
            <a href="/catalogo" onClick={() => setMobileMenuOpen(false)}>Produtos</a>
            <a href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
            <a href="#contato" onClick={() => setMobileMenuOpen(false)}>Contato</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero" id="inicio">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Transforme seu 
              <span className="highlight"> Ambiente</span>
              <br />com Elegância
            </h1>
            <p>
              Há mais de 7 anos criando centros de mesa, cubas decorativas e acessórios para banheiro 
              que combinam modernidade, qualidade e design sofisticado em múltiplas cores premium.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={handleCatalog}>Ver Catálogo</button>
              <button className="btn-secondary" onClick={handleBudget}>Solicitar Orçamento</button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-icon">✨</span>
                <span className="stat-text">+7 anos de experiência</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">🎨</span>
                <span className="stat-text">Design exclusivo</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">💎</span>
                <span className="stat-text">Alto padrão</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <Image 
              src="/products/1814 TURQUESA.jpg" 
              alt="Produto Toque Ideal em Turquesa" 
              width={500} 
              height={400}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" style={{
        padding: '4rem 0',
        background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '2.5rem',
            color: 'var(--primary-blue)',
            marginBottom: '1.5rem',
            fontWeight: '600'
          }}>
            Quem Somos
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-light)',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            A Toque Ideal é fruto da parceria entre os sócios Devid Bomfim e Luana Andrade, 
            que uniram suas expertises para oferecer produtos de decoração da mais alta qualidade. 
            Especializados em peças de vidro artesanais, criamos centros de mesa, cubas decorativas 
            e acessórios para banheiro que transformam ambientes com elegância e sofisticação.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div style={{
              background: 'var(--white)',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
            }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem'
              }}>🎯</div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.3rem',
                color: 'var(--primary-blue)',
                marginBottom: '1rem'
              }}>Missão</h3>
              <p style={{
                color: 'var(--text-light)',
                lineHeight: '1.6'
              }}>
                Criar peças de decoração e acessórios para banheiro que combinem 
                modernidade, qualidade e design sofisticado.
              </p>
            </div>

            <div style={{
              background: 'var(--white)',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
            }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem'
              }}>👁️</div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.3rem',
                color: 'var(--primary-blue)',
                marginBottom: '1rem'
              }}>Visão</h3>
              <p style={{
                color: 'var(--text-light)',
                lineHeight: '1.6'
              }}>
                Ser referência nacional em produtos de decoração em vidro, 
                reconhecida pela excelência e inovação.
              </p>
            </div>

            <div style={{
              background: 'var(--white)',
              padding: '2rem',
              borderRadius: '16px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
            }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem'
              }}>💎</div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.3rem',
                color: 'var(--primary-blue)',
                marginBottom: '1rem'
              }}>Valores</h3>
              <p style={{
                color: 'var(--text-light)',
                lineHeight: '1.6'
              }}>
                Qualidade, elegância, inovação e compromisso com a satisfação 
                total de nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" style={{
        background: 'var(--primary-blue)',
        color: 'var(--white)',
        padding: '4rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '2.5rem',
            marginBottom: '1.5rem',
            fontWeight: '600'
          }}>
            Entre em Contato
          </h2>
          <p style={{
            fontSize: '1.1rem',
            opacity: '0.9',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Pronto para transformar seu ambiente? Entre em contato conosco e 
            descubra como nossas peças podem elevar a decoração do seu espaço.
          </p>
          <button className="btn-primary" onClick={handleWhatsApp}>
            Falar no WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}

