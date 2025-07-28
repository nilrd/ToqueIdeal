import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo-section">
            <div className="logo-circle">
              <span>TI</span>
            </div>
            <div className="logo-text">
              <h1>Toque Ideal</h1>
              <p>Artigos de Decoração</p>
            </div>
          </div>
          
          <nav className="nav-menu">
            <Link href="/">Início</Link>
            <Link href="/produtos">Produtos</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>
          </nav>
          
          <button className="btn-primary">
            Orçamento
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Transforme seu
              <span className="highlight"> Ambiente</span>
              <br />com Elegância
            </h1>
            <p>
              Há mais de 7 anos criando peças de decoração e acessórios para banheiro 
              que combinam modernidade, qualidade e design sofisticado.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                Ver Catálogo
              </button>
              <button className="btn-secondary">
                Solicitar Orçamento
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-card">
              <div className="product-grid">
                <div className="product-placeholder">Produto 1</div>
                <div className="product-placeholder">Produto 2</div>
                <div className="product-placeholder">Produto 3</div>
                <div className="product-placeholder">Produto 4</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="section">
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
                Criar peças de decoração e acessórios para banheiro que combinem 
                modernidade, qualidade e design sofisticado.
              </p>
            </div>
            
            <div className="card">
              <div className="card-icon">👁️</div>
              <h3>Visão</h3>
              <p>
                Ser referência no mercado nacional em produtos decorativos de alto padrão, 
                encantando clientes e parceiros.
              </p>
            </div>
            
            <div className="card">
              <div className="card-icon">⭐</div>
              <h3>Valores</h3>
              <p>
                Inovação, qualidade, exclusividade e atendimento personalizado 
                para clientes exigentes.
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
              Produtos desenvolvidos especialmente para arquitetos, designers e público de luxo.
            </p>
          </div>
          
          <div className="diferenciais-grid">
            <div className="diferencial">
              <div className="diferencial-icon">🎨</div>
              <h3>Design Exclusivo</h3>
              <p>Peças únicas desenvolvidas por nossa equipe de design.</p>
            </div>
            
            <div className="diferencial">
              <div className="diferencial-icon">🏭</div>
              <h3>Produção Própria</h3>
              <p>Controle total da qualidade com atenção aos mínimos detalhes.</p>
            </div>
            
            <div className="diferencial">
              <div className="diferencial-icon">💎</div>
              <h3>Alto Padrão</h3>
              <p>Produtos premium para clientes exigentes e projetos sofisticados.</p>
            </div>
            
            <div className="diferencial">
              <div className="diferencial-icon">🤝</div>
              <h3>Atendimento Personalizado</h3>
              <p>Suporte dedicado para arquitetos, designers e revendedores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-dark">
        <div className="section-container">
          <div className="section-header">
            <h2>Pronto para Transformar seu Projeto?</h2>
            <p>
              Entre em contato conosco e descubra como nossos produtos podem elevar 
              o padrão dos seus ambientes.
            </p>
          </div>
          <div className="cta-buttons">
            <button className="btn-primary">
              Ver Catálogo Completo
            </button>
            <button className="btn-white">
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="logo-section">
                <div className="logo-circle">
                  <span>TI</span>
                </div>
                <div className="logo-text">
                  <h4>Toque Ideal</h4>
                  <p>Artigos de Decoração</p>
                </div>
              </div>
              <p style={{marginTop: '20px', color: '#ccc', fontSize: '14px'}}>
                Há mais de 7 anos criando produtos de decoração de alto padrão 
                para arquitetos, designers e clientes exigentes.
              </p>
            </div>
            
            <div className="footer-section">
              <h4>Navegação</h4>
              <ul>
                <li><Link href="/">Início</Link></li>
                <li><Link href="/produtos">Produtos</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
                <li><Link href="/contato">Contato</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Categorias</h4>
              <ul>
                <li><Link href="/produtos/banheiro">Acessórios para Banheiro</Link></li>
                <li><Link href="/produtos/decoracao">Decoração</Link></li>
                <li><Link href="/produtos/iluminacao">Iluminação</Link></li>
                <li><Link href="/produtos/organizadores">Organizadores</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contato</h4>
              <div style={{fontSize: '14px', color: '#ccc'}}>
                <p>📧 contato@toqueideal.com.br</p>
                <p>📱 WhatsApp: (11) 99999-9999</p>
                <p>📍 São Paulo, SP</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2025 Toque Ideal. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

