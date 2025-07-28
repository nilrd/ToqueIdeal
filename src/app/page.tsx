import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-gold rounded-full flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-xl">TI</span>
              </div>
              <div>
                <h1 className="text-2xl font-playfair font-bold text-secondary-charcoal">
                  Toque Ideal
                </h1>
                <p className="text-sm text-neutral-gray-500">Artigos de Decoração</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-secondary-charcoal hover:text-primary-gold transition-colors">
                Início
              </Link>
              <Link href="/produtos" className="text-secondary-charcoal hover:text-primary-gold transition-colors">
                Produtos
              </Link>
              <Link href="/sobre" className="text-secondary-charcoal hover:text-primary-gold transition-colors">
                Sobre
              </Link>
              <Link href="/contato" className="text-secondary-charcoal hover:text-primary-gold transition-colors">
                Contato
              </Link>
            </nav>
            
            <Button variant="primary" size="sm">
              Orçamento
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-accent-cream to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-secondary-charcoal mb-6">
                Transforme seu
                <span className="text-gradient-gold block">
                  Ambiente
                </span>
                com Elegância
              </h1>
              <p className="text-xl text-neutral-gray-600 mb-8 leading-relaxed">
                Há mais de 7 anos criando peças de decoração e acessórios para banheiro 
                que combinam modernidade, qualidade e design sofisticado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg">
                  Ver Catálogo
                </Button>
                <Button variant="outline-gold" size="lg">
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-gold rounded-2xl transform rotate-6"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-premium">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="w-full h-32 bg-neutral-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-neutral-gray-400 text-sm">Produto 1</span>
                      </div>
                      <div className="w-full h-24 bg-neutral-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-neutral-gray-400 text-sm">Produto 2</span>
                      </div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="w-full h-24 bg-neutral-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-neutral-gray-400 text-sm">Produto 3</span>
                      </div>
                      <div className="w-full h-32 bg-neutral-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-neutral-gray-400 text-sm">Produto 4</span>
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
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-secondary-charcoal mb-6">
              Quem Somos
            </h2>
            <p className="text-xl text-neutral-gray-600 max-w-3xl mx-auto">
              A Toque Ideal é fruto da parceria entre os sócios Devid Bomfim e Luana Andrade, 
              que uniram suas expertises para oferecer produtos de decoração da mais alta qualidade.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="premium" className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <CardTitle>Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Criar peças de decoração e acessórios para banheiro que combinem 
                  modernidade, qualidade e design sofisticado.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card variant="premium" className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👁️</span>
                </div>
                <CardTitle>Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ser referência no mercado nacional em produtos decorativos de alto padrão, 
                  encantando clientes e parceiros.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card variant="premium" className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⭐</span>
                </div>
                <CardTitle>Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Inovação, qualidade, exclusividade e atendimento personalizado 
                  para clientes exigentes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="section-padding bg-accent-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-secondary-charcoal mb-6">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-neutral-gray-600 max-w-3xl mx-auto">
              Produtos desenvolvidos especialmente para arquitetos, designers e público de luxo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-secondary-charcoal mb-3">
                Design Exclusivo
              </h3>
              <p className="text-neutral-gray-600">
                Peças únicas desenvolvidas por nossa equipe de design.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🏭</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-secondary-charcoal mb-3">
                Produção Própria
              </h3>
              <p className="text-neutral-gray-600">
                Controle total da qualidade com atenção aos mínimos detalhes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-secondary-charcoal mb-3">
                Alto Padrão
              </h3>
              <p className="text-neutral-gray-600">
                Produtos premium para clientes exigentes e projetos sofisticados.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-secondary-charcoal mb-3">
                Atendimento Personalizado
              </h3>
              <p className="text-neutral-gray-600">
                Suporte dedicado para arquitetos, designers e revendedores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-charcoal text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Pronto para Transformar seu Projeto?
          </h2>
          <p className="text-xl text-neutral-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossos produtos podem elevar 
            o padrão dos seus ambientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Ver Catálogo Completo
            </Button>
            <Button variant="secondary" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-secondary-charcoal">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-charcoal-dark text-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-playfair font-bold">TI</span>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold">Toque Ideal</h3>
                  <p className="text-sm text-neutral-gray-400">Artigos de Decoração</p>
                </div>
              </div>
              <p className="text-neutral-gray-400 text-sm">
                Há mais de 7 anos criando produtos de decoração de alto padrão 
                para arquitetos, designers e clientes exigentes.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-playfair font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-neutral-gray-400 hover:text-primary-gold transition-colors">Início</Link></li>
                <li><Link href="/produtos" className="text-neutral-gray-400 hover:text-primary-gold transition-colors">Produtos</Link></li>
                <li><Link href="/sobre" className="text-neutral-gray-400 hover:text-primary-gold transition-colors">Sobre</Link></li>
                <li><Link href="/contato" className="text-neutral-gray-400 hover:text-primary-gold transition-colors">Contato</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-playfair font-semibold mb-4">Categorias</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/produtos/banheiro" className="text-neutral-gray-400 hover:text-primary-gold transition-colors">Acessórios para Banheiro</Link></li>
                <li><Link href="/produtos/decoracao" className="text-neutral-gray-400 hover:text-primary-gold transition-colors">Decoração</Link></li>
                <li><Link href="/produtos/iluminacao" className="text-neutral-gray-400 hover:text-primary-gold transition-colors">Iluminação</Link></li>
                <li><Link href="/produtos/organizadores" className="text-neutral-gray-400 hover:text-primary-gold transition-colors">Organizadores</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-playfair font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-neutral-gray-400">
                <p>📧 contato@toqueideal.com.br</p>
                <p>📱 WhatsApp: (11) 99999-9999</p>
                <p>📍 São Paulo, SP</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm text-neutral-gray-400">
              © 2025 Toque Ideal. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

