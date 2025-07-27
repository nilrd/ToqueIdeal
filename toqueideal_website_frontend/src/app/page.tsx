'use client'

import { Button, Card } from '@/components/ui'
import { ProductCard } from '@/components/common'
import { Product } from '@/types'

// Dados de exemplo para teste
const sampleProducts: Product[] = [
  {
    id: '1',
    code: 'TI-001',
    name: 'Conjunto Dourado Elegance',
    description: 'Conjunto completo para banheiro com acabamento dourado premium',
    dimensions: '30x20x15cm',
    color: 'Dourado',
    collection: 'Elegance',
    material: 'Metal com banho dourado',
    images: [
      {
        id: '1',
        url: '/placeholder-product.jpg',
        alt: 'Conjunto Dourado Elegance',
        isPrimary: true,
        order: 1
      }
    ],
    isHighlight: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    code: 'TI-002',
    name: 'Porta Sabonete Cristal',
    description: 'Porta sabonete em cristal com detalhes em prata',
    dimensions: '15x10x8cm',
    color: 'Transparente',
    collection: 'Cristal',
    material: 'Cristal e metal prateado',
    images: [
      {
        id: '2',
        url: '/placeholder-product.jpg',
        alt: 'Porta Sabonete Cristal',
        isPrimary: true,
        order: 1
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-100">
        <div className="container-luxury text-center">
          <h1 className="text-6xl lg:text-8xl font-display font-bold text-accent-950 mb-6">
            <span className="text-gradient-gold">Toque</span> Ideal
          </h1>
          <p className="text-xl lg:text-2xl text-secondary-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Há mais de 7 anos criando peças de decoração e acessórios para banheiro que combinam 
            <span className="text-primary-600 font-semibold"> modernidade, qualidade e design sofisticado</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg">
              Explorar Catálogo
            </Button>
            <Button variant="secondary" size="lg">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">✨</div>
        <div className="absolute bottom-32 right-16 text-4xl animate-float opacity-30" style={{ animationDelay: '1s' }}>🏺</div>
        <div className="absolute top-40 right-20 text-5xl animate-float opacity-25" style={{ animationDelay: '2s' }}>💎</div>
      </section>

      {/* Sobre Section */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-accent-950 mb-6">
                Quem <span className="text-gradient-gold">Somos</span>
              </h2>
              <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                A <strong>Toque Ideal</strong> é fruto da parceria entre os sócios <strong>Devid Bomfim</strong> e 
                <strong> Luana Andrade</strong>, que uniram suas expertises complementares para oferecer ao setor 
                de decoração uma linha completa de produtos da mais alta qualidade.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-primary-500 text-xl mt-1">🎯</span>
                  <div>
                    <h3 className="font-semibold text-accent-950">Missão</h3>
                    <p className="text-secondary-600">Criar peças que combinem modernidade, qualidade e design sofisticado.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary-500 text-xl mt-1">👁️</span>
                  <div>
                    <h3 className="font-semibold text-accent-950">Visão</h3>
                    <p className="text-secondary-600">Ser referência no mercado nacional em produtos decorativos de alto padrão.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card variant="luxury" className="p-8">
                <h3 className="text-2xl font-display font-bold text-accent-950 mb-4">
                  Nossos Diferenciais
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Design exclusivo</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Produção própria com atenção aos detalhes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Produtos para clientes exigentes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Atendimento personalizado</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="section-padding bg-secondary-50">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-accent-950 mb-4">
              Produtos em <span className="text-gradient-gold">Destaque</span>
            </h2>
            <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
              Conheça alguns de nossos produtos mais procurados, desenvolvidos com a mais alta qualidade e design exclusivo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToQuote={(product) => console.log('Adicionado ao orçamento:', product.name)}
              />
            ))}
            
            {/* Card de Ver Mais */}
            <Card variant="luxury" className="flex items-center justify-center min-h-[400px] group cursor-pointer">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  👀
                </div>
                <h3 className="text-xl font-display font-semibold text-accent-950 mb-2">
                  Ver Mais Produtos
                </h3>
                <p className="text-secondary-600 mb-4">
                  Explore nosso catálogo completo
                </p>
                <Button variant="primary">
                  Ir para Catálogo
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent-950 text-white">
        <div className="container-luxury text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Pronto para Transformar seu <span className="text-gradient-gold">Ambiente</span>?
          </h2>
          <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e solicite um orçamento personalizado para seus projetos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Solicitar Orçamento
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent-950">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

