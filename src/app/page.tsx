'use client';

import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de conhecer os produtos da Toque Ideal.', '_blank');
  };

  const handleCatalog = () => {
    scrollToSection('produtos');
  };

  const handleBudget = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento.', '_blank');
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo-section" onClick={() => scrollToSection('inicio')}>
            <img src="/logo.png" alt="Toque Ideal Logo" className="logo-image" />
            <div className="logo-text">
              <h1>TOQUE IDEAL</h1>
              <p>Artigos de Decoração</p>
            </div>
          </div>
          <nav className="nav-menu">
            <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>Início</a>
            <a href="#produtos" onClick={(e) => { e.preventDefault(); scrollToSection('produtos'); }}>Produtos</a>
            <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollToSection('sobre'); }}>Sobre</a>
            <a href="#contato" onClick={(e) => { e.preventDefault(); scrollToSection('contato'); }}>Contato</a>
          </nav>
          <button className="btn-primary" onClick={handleBudget}>Orçamento</button>
        </div>
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
              Há mais de 7 anos criando centros de mesa, cubas e acessórios para banheiro 
              que combinam modernidade, qualidade e design sofisticado em múltiplas cores premium.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={handleCatalog}>Ver Catálogo</button>
              <button className="btn-secondary" onClick={handleBudget}>Solicitar Orçamento</button>
            </div>
            <div style={{display: 'flex', gap: '2rem', alignItems: 'center', marginTop: '2rem', flexWrap: 'wrap'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span style={{color: '#40E0D0', fontSize: '1.5rem'}}>✨</span>
                <span style={{color: '#6b6b6b', fontSize: '0.9rem', fontWeight: '500'}}>+7 anos de experiência</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span style={{color: '#40E0D0', fontSize: '1.5rem'}}>🎨</span>
                <span style={{color: '#6b6b6b', fontSize: '0.9rem', fontWeight: '500'}}>Design exclusivo</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span style={{color: '#40E0D0', fontSize: '1.5rem'}}>💎</span>
                <span style={{color: '#6b6b6b', fontSize: '0.9rem', fontWeight: '500'}}>Alto padrão</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <h3 style={{color: '#2B4A6B', marginBottom: '2rem', fontSize: '1.8rem', fontFamily: 'Cormorant Garamond, serif'}}>
                Nossos Produtos Premium
              </h3>
              <div className="product-showcase">
                <div className="product-item" onClick={() => scrollToSection('produtos')}>
                  <h4>Centros de Mesa</h4>
                  <p>Design exclusivo em múltiplas cores</p>
                </div>
                <div className="product-item" onClick={() => scrollToSection('produtos')}>
                  <h4>Cubas Decorativas</h4>
                  <p>Acabamento premium</p>
                </div>
                <div className="product-item" onClick={() => scrollToSection('produtos')}>
                  <h4>Acessórios Banheiro</h4>
                  <p>Sofisticação e funcionalidade</p>
                </div>
                <div className="product-item" onClick={() => scrollToSection('produtos')}>
                  <h4>Peças Personalizadas</h4>
                  <p>Sob medida para seu projeto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section className="section" id="produtos">
        <div className="section-container">
          <div className="section-header">
            <h2>Nossos Produtos</h2>
            <p>
              Peças únicas desenvolvidas especialmente para arquitetos, designers e clientes 
              exigentes que buscam qualidade excepcional e design diferenciado.
            </p>
          </div>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">🏺</div>
              <h3>Centros de Mesa</h3>
              <p>
                Peças decorativas exclusivas disponíveis em bronze com âmbar, turquesa, 
                verde, mel, grafite e outras cores sofisticadas. Perfeitas para 
                ambientes residenciais e comerciais de alto padrão.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🚿</div>
              <h3>Cubas e Acessórios para Banheiro</h3>
              <p>
                Linha completa de cubas decorativas e acessórios para banheiro com 
                acabamento premium. Combinam funcionalidade e beleza em projetos 
                arquitetônicos sofisticados.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">✨</div>
              <h3>Peças Personalizadas</h3>
              <p>
                Desenvolvimento de peças exclusivas sob medida para projetos especiais. 
                Trabalhamos em parceria com arquitetos e designers para criar 
                soluções únicas e diferenciadas.
              </p>
            </div>
          </div>
          <div style={{textAlign: 'center', marginTop: '4rem'}}>
            <h3 style={{marginBottom: '2rem', color: '#2B4A6B', fontFamily: 'Cormorant Garamond, serif'}}>
              Cores Disponíveis
            </h3>
            <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'}}>
              {[
                {name: 'Bronze com Âmbar', color: '#CD7F32'},
                {name: 'Turquesa', color: '#40E0D0'},
                {name: 'Verde', color: '#228B22'},
                {name: 'Mel', color: '#FFB347'},
                {name: 'Grafite', color: '#36454F'},
                {name: 'Prata', color: '#C0C0C0'},
                {name: 'Branco', color: '#FFFFFF'},
                {name: 'Preto', color: '#000000'},
                {name: 'Vermelho', color: '#DC143C'}
              ].map((cor, index) => (
                <div key={index} style={{textAlign: 'center', margin: '0.5rem'}}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: cor.color,
                    margin: '0 auto 0.5rem',
                    border: cor.name === 'Branco' ? '2px solid #ddd' : 'none',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                  }}></div>
                  <span style={{fontSize: '0.8rem', color: '#6b6b6b'}}>{cor.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="section section-alt" id="sobre">
        <div className="section-container">
          <div className="section-header">
            <h2>Quem Somos</h2>
            <p>
              A Toque Ideal é fruto da parceria entre os sócios Devid Bomfim e Luana Andrade, 
              que uniram suas expertises para oferecer produtos de decoração da mais alta qualidade.
            </p>
          </div>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">🎯</div>
              <h3>Missão</h3>
              <p>
                Criar centros de mesa, cubas e acessórios para banheiro que combinem 
                modernidade, qualidade e design sofisticado, oferecendo soluções únicas 
                em diversas cores para projetos diferenciados.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">👁️</div>
              <h3>Visão</h3>
              <p>
                Ser referência no mercado nacional em produtos decorativos de alto padrão, 
                encantando clientes, arquitetos e designers com nossa diversidade de cores 
                e acabamentos premium.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">⭐</div>
              <h3>Valores</h3>
              <p>
                Inovação constante, qualidade excepcional, exclusividade no design e 
                atendimento personalizado para clientes exigentes que buscam peças 
                únicas e diferenciadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="section">
        <div className="section-container">
          <div className="section-header">
            <h2>Nossos Diferenciais</h2>
            <p>
              Produtos desenvolvidos especialmente para arquitetos, designers e público de luxo, 
              com variedade de cores e acabamentos que elevam o padrão de qualquer ambiente.
            </p>
          </div>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">🎨</div>
              <h3>Design Exclusivo</h3>
              <p>
                Centros de mesa e cubas com design único e contemporâneo, disponíveis em 
                bronze com âmbar, mel, turquesa, verde, grafite e outras cores sofisticadas 
                que se adaptam a qualquer projeto.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🏭</div>
              <h3>Produção Própria</h3>
              <p>
                Controle total da qualidade com atenção aos mínimos detalhes em cada peça 
                produzida em nosso atelier. Garantimos acabamento impecável e durabilidade 
                em todos os nossos produtos.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">💎</div>
              <h3>Alto Padrão</h3>
              <p>
                Produtos premium desenvolvidos para clientes exigentes e projetos 
                sofisticados que demandam qualidade excepcional e design diferenciado 
                no mercado de decoração.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3>Atendimento Personalizado</h3>
              <p>
                Suporte dedicado para arquitetos, designers e revendedores, com consultoria 
                especializada para cada projeto e desenvolvimento de peças personalizadas 
                sob medida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{background: 'linear-gradient(135deg, #2B4A6B 0%, #1e3a5f 100%)', color: 'white'}}>
        <div className="section-container">
          <div className="section-header">
            <h2 style={{color: 'white'}}>Pronto para Transformar seu Projeto?</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              Entre em contato conosco e descubra como nossos centros de mesa, cubas e 
              acessórios podem elevar o padrão dos seus ambientes com elegância e sofisticação.
            </p>
            <div className="hero-buttons" style={{marginTop: '3rem'}}>
              <button className="btn-primary" onClick={handleCatalog}>Ver Catálogo Completo</button>
              <button 
                className="btn-secondary" 
                style={{color: '#40E0D0', borderColor: '#40E0D0'}}
                onClick={handleWhatsApp}
              >
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contato">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>Toque Ideal</h4>
              <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8', fontSize: '1.1rem'}}>
                Há mais de 7 anos criando peças de decoração únicas que transformam 
                ambientes com elegância, sofisticação e qualidade excepcional.
              </p>
            </div>
            <div className="footer-section">
              <h4>Produtos</h4>
              <ul>
                <li><a href="#produtos" onClick={(e) => { e.preventDefault(); scrollToSection('produtos'); }}>Centros de Mesa</a></li>
                <li><a href="#produtos" onClick={(e) => { e.preventDefault(); scrollToSection('produtos'); }}>Cubas Decorativas</a></li>
                <li><a href="#produtos" onClick={(e) => { e.preventDefault(); scrollToSection('produtos'); }}>Acessórios para Banheiro</a></li>
                <li><a href="#produtos" onClick={(e) => { e.preventDefault(); scrollToSection('produtos'); }}>Peças Personalizadas</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Cores Disponíveis</h4>
              <ul>
                <li><a href="#produtos" onClick={(e) => { e.preventDefault(); scrollToSection('produtos'); }}>Bronze com Âmbar</a></li>
                <li><a href="#produtos" onClick={(e) => { e.preventDefault(); scrollToSection('produtos'); }}>Turquesa</a></li>
                <li><a href="#produtos" onClick={(e) => { e.preventDefault(); scrollToSection('produtos'); }}>Verde</a></li>
                <li><a href="#produtos" onClick={(e) => { e.preventDefault(); scrollToSection('produtos'); }}>Mel e Grafite</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contato</h4>
              <ul>
                <li><a href="tel:+5511999999999">(11) 99999-9999</a></li>
                <li><a href="mailto:contato@toqueideal.com.br">contato@toqueideal.com.br</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); }}>São Paulo, SP</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleWhatsApp(); }}>WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Toque Ideal. Todos os direitos reservados. Desenvolvido com excelência para transformar ambientes com elegância e sofisticação.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

