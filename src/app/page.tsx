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
              width={36} 
              height={36}
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
                <span className="stat-text">+7 anos de experiência</span>
              </div>
              <div className="stat-item">
                <span className="stat-text">Design exclusivo</span>
              </div>
              <div className="stat-item">
                <span className="stat-text">Alto padrão</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <Image 
              src="/products/FTS FUNDO BRANCO SEM SOMBRA/1814 TURQUESA.jpg" 
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
      <section className="about-section" id="sobre">
        <div className="about-container">
          <h2>Quem Somos</h2>
          <p>
            A Toque Ideal é fruto da parceria entre os sócios Devid Bomfim e Luana Andrade, 
            que uniram suas expertises para oferecer produtos de decoração da mais alta qualidade. 
            Especializados em peças de vidro artesanais, criamos centros de mesa, cubas decorativas 
            e acessórios para banheiro que transformam ambientes com elegância e sofisticação.
          </p>

          <div className="values-grid">
            <div className="value-card">
              <h3>Missão</h3>
              <p>
                Criar peças de decoração e acessórios para banheiro que combinem 
                modernidade, qualidade e design sofisticado.
              </p>
            </div>

            <div className="value-card">
              <h3>Visão</h3>
              <p>
                Ser referência nacional em produtos de decoração em vidro, 
                reconhecida pela excelência e inovação.
              </p>
            </div>

            <div className="value-card">
              <h3>Valores</h3>
              <p>
                Qualidade, elegância, inovação e compromisso com a satisfação 
                total de nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contato">
        <div className="contact-container">
          <h2>Entre em Contato</h2>
          <p>
            Pronto para transformar seu ambiente? Entre em contato conosco e 
            descubra como nossas peças podem elevar a decoração do seu espaço.
          </p>
          <button className="btn-contact" onClick={handleWhatsApp}>
            Falar no WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}

