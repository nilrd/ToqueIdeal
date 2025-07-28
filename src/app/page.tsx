export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo-section">
            <img src="/logo.png" alt="Toque Ideal" className="logo-image" />
            <div className="logo-text">
              <h1>TOQUE IDEAL</h1>
              <p>Artigos de Decoração</p>
            </div>
          </div>
          <nav className="nav-menu">
            <a href="#inicio">Início</a>
            <a href="#produtos">Produtos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>
          <button className="btn-primary">Orçamento</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="inicio">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Transforme seu 
              <span className="highlight">Ambiente</span>
              com Elegância
            </h1>
            <p>
              Há mais de 7 anos criando centros de mesa, cubas e acessórios para banheiro 
              que combinam modernidade, qualidade e design sofisticado em múltiplas cores.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Ver Catálogo</button>
              <button className="btn-secondary">Solicitar Orçamento</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <h3 style={{color: '#2B4A6B', marginBottom: '1.5rem', fontSize: '1.5rem'}}>
                Nossos Produtos
              </h3>
              <div className="product-showcase">
                <div className="product-item">
                  <h4>Centros de Mesa</h4>
                  <p>Design exclusivo</p>
                </div>
                <div className="product-item">
                  <h4>Cubas Decorativas</h4>
                  <p>Múltiplas cores</p>
                </div>
                <div className="product-item">
                  <h4>Acessórios Banheiro</h4>
                  <p>Alto padrão</p>
                </div>
                <div className="product-item">
                  <h4>Peças Personalizadas</h4>
                  <p>Sob medida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="section" id="sobre">
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
                modernidade, qualidade e design sofisticado em diversas cores.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">👁️</div>
              <h3>Visão</h3>
              <p>
                Ser referência no mercado nacional em produtos decorativos de alto padrão, 
                encantando clientes e parceiros com nossa diversidade de cores.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">⭐</div>
              <h3>Valores</h3>
              <p>
                Inovação, qualidade, exclusividade e atendimento personalizado para 
                clientes exigentes que buscam peças únicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="section section-alt">
        <div className="section-container">
          <div className="section-header">
            <h2>Nossos Diferenciais</h2>
            <p>
              Produtos desenvolvidos especialmente para arquitetos, designers e público de luxo, 
              com variedade de cores e acabamentos premium.
            </p>
          </div>
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">🎨</div>
              <h3>Design Exclusivo</h3>
              <p>
                Centros de mesa e cubas com design único, disponíveis em bronze, 
                mel, turquesa, verde, grafite e outras cores sofisticadas.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🏭</div>
              <h3>Produção Própria</h3>
              <p>
                Controle total da qualidade com atenção aos mínimos detalhes 
                em cada peça produzida em nosso atelier.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">💎</div>
              <h3>Alto Padrão</h3>
              <p>
                Produtos premium para clientes exigentes e projetos sofisticados 
                que demandam qualidade excepcional.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3>Atendimento Personalizado</h3>
              <p>
                Suporte dedicado para arquitetos, designers e revendedores, 
                com consultoria especializada para cada projeto.
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
            <p style={{color: 'rgba(255, 255, 255, 0.9)'}}>
              Entre em contato conosco e descubra como nossos centros de mesa, cubas e 
              acessórios podem elevar o padrão dos seus ambientes.
            </p>
            <div className="hero-buttons" style={{marginTop: '2rem'}}>
              <button className="btn-primary">Ver Catálogo Completo</button>
              <button className="btn-secondary" style={{color: '#40E0D0', borderColor: '#40E0D0'}}>
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>Toque Ideal</h4>
              <p style={{color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6'}}>
                Há mais de 7 anos criando peças de decoração únicas que transformam 
                ambientes com elegância e sofisticação.
              </p>
            </div>
            <div className="footer-section">
              <h4>Produtos</h4>
              <ul>
                <li><a href="#centros-mesa">Centros de Mesa</a></li>
                <li><a href="#cubas">Cubas Decorativas</a></li>
                <li><a href="#acessorios">Acessórios para Banheiro</a></li>
                <li><a href="#personalizados">Peças Personalizadas</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Cores Disponíveis</h4>
              <ul>
                <li><a href="#bronze">Bronze com Âmbar</a></li>
                <li><a href="#turquesa">Turquesa</a></li>
                <li><a href="#verde">Verde</a></li>
                <li><a href="#mel">Mel</a></li>
                <li><a href="#grafite">Grafite</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contato</h4>
              <ul>
                <li><a href="tel:+5511999999999">(11) 99999-9999</a></li>
                <li><a href="mailto:contato@toqueideal.com.br">contato@toqueideal.com.br</a></li>
                <li><a href="#endereco">São Paulo, SP</a></li>
                <li><a href="#whatsapp">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Toque Ideal. Todos os direitos reservados. Desenvolvido com excelência para transformar ambientes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

