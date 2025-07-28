import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">TI</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800 font-serif">
                  Toque Ideal
                </h1>
                <p className="text-sm text-gray-500">Artigos de Decoração</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-800 hover:text-yellow-600 transition-colors">
                Início
              </Link>
              <Link href="/produtos" className="text-gray-800 hover:text-yellow-600 transition-colors">
                Produtos
              </Link>
              <Link href="/sobre" className="text-gray-800 hover:text-yellow-600 transition-colors">
                Sobre
              </Link>
              <Link href="/contato" className="text-gray-800 hover:text-yellow-600 transition-colors">
                Contato
              </Link>
            </nav>
            
            <button className="btn-primary">
              Orçamento
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 font-serif">
                Transforme seu
                <span className="block text-gradient-gold">
                  Ambiente
                </span>
                com Elegância
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Há mais de 7 anos criando peças de decoração e acessórios para banheiro 
                que combinam modernidade, qualidade e design sofisticado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">
                  Ver Catálogo
                </button>
                <button className="btn-outline-gold">
                  Solicitar Orçamento
                </button>
              </div>
            </div>
            
            <div>
              <div className="relative">
                <div className="absolute inset-0 gradient-gold rounded-2xl transform rotate-6"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Produto 1</span>
                      </div>
                      <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Produto 2</span>
                      </div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Produto 3</span>
                      </div>
                      <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Produto 4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-serif">
              Quem Somos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A Toque Ideal é fruto da parceria entre os sócios Devid Bomfim e Luana Andrade, 
              que uniram suas expertises para oferecer produtos de decoração da mais alta qualidade.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-premium text-center p-8">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Missão</h3>
              <p className="text-gray-600">
                Criar peças de decoração e acessórios para banheiro que combinem 
                modernidade, qualidade e design sofisticado.
              </p>
            </div>
            
            <div className="card-premium text-center p-8">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Visão</h3>
              <p className="text-gray-600">
                Ser referência no mercado nacional em produtos decorativos de alto padrão, 
                encantando clientes e parceiros.
              </p>
            </div>
            
            <div className="card-premium text-center p-8">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Valores</h3>
              <p className="text-gray-600">
                Inovação, qualidade, exclusividade e atendimento personalizado 
                para clientes exigentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-serif">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Produtos desenvolvidos especialmente para arquitetos, designers e público de luxo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">
                Design Exclusivo
              </h3>
              <p className="text-gray-600">
                Peças únicas desenvolvidas por nossa equipe de design.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">
                Produção Própria
              </h3>
              <p className="text-gray-600">
                Controle total da qualidade com atenção aos mínimos detalhes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">
                Alto Padrão
              </h3>
              <p className="text-gray-600">
                Produtos premium para clientes exigentes e projetos sofisticados.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">
                Atendimento Personalizado
              </h3>
              <p className="text-gray-600">
                Suporte dedicado para arquitetos, designers e revendedores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-serif">
            Pronto para Transformar seu Projeto?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossos produtos podem elevar 
            o padrão dos seus ambientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Ver Catálogo Completo
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 px-6 py-3 rounded-lg font-medium transition-all duration-300">
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">TI</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif">Toque Ideal</h3>
                  <p className="text-sm text-gray-400">Artigos de Decoração</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Há mais de 7 anos criando produtos de decoração de alto padrão 
                para arquitetos, designers e clientes exigentes.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 font-serif">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-400 hover:text-yellow-600 transition-colors">Início</Link></li>
                <li><Link href="/produtos" className="text-gray-400 hover:text-yellow-600 transition-colors">Produtos</Link></li>
                <li><Link href="/sobre" className="text-gray-400 hover:text-yellow-600 transition-colors">Sobre</Link></li>
                <li><Link href="/contato" className="text-gray-400 hover:text-yellow-600 transition-colors">Contato</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 font-serif">Categorias</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/produtos/banheiro" className="text-gray-400 hover:text-yellow-600 transition-colors">Acessórios para Banheiro</Link></li>
                <li><Link href="/produtos/decoracao" className="text-gray-400 hover:text-yellow-600 transition-colors">Decoração</Link></li>
                <li><Link href="/produtos/iluminacao" className="text-gray-400 hover:text-yellow-600 transition-colors">Iluminação</Link></li>
                <li><Link href="/produtos/organizadores" className="text-gray-400 hover:text-yellow-600 transition-colors">Organizadores</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 font-serif">Contato</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📧 contato@toqueideal.com.br</p>
                <p>📱 WhatsApp: (11) 99999-9999</p>
                <p>📍 São Paulo, SP</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 Toque Ideal. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

