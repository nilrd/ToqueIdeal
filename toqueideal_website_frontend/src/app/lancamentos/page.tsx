'use client'

import { Button, Card } from '@/components/ui'
import { ProductCard } from '@/components/common'
import { Product } from '@/types'

export default function Lancamentos() {
  // Dados de exemplo para lançamentos
  const newProducts: Product[] = [
    {
      id: 'new-1',
      code: 'TI-NEW-001',
      name: 'Coleção Aurora Dourada',
      description: 'Nova linha premium com acabamento dourado texturizado e detalhes em cristal',
      dimensions: '35x25x18cm',
      color: 'Dourado',
      collection: 'Aurora',
      material: 'Metal nobre com banho dourado e cristais',
      images: [
        {
          id: 'new-1-img',
          url: '/images/placeholders/product-placeholder.jpg',
          alt: 'Coleção Aurora Dourada',
          isPrimary: true,
          order: 1
        }
      ],
      isHighlight: true,
      createdAt: new Date('2024-12-01'),
      updatedAt: new Date('2024-12-01')
    },
    {
      id: 'new-2',
      code: 'TI-NEW-002',
      name: 'Série Minimalista Black',
      description: 'Design contemporâneo com linhas clean e acabamento fosco premium',
      dimensions: '30x20x12cm',
      color: 'Preto Fosco',
      collection: 'Minimalista',
      material: 'Alumínio anodizado',
      images: [
        {
          id: 'new-2-img',
          url: '/images/placeholders/product-placeholder.jpg',
          alt: 'Série Minimalista Black',
          isPrimary: true,
          order: 1
        }
      ],
      isHighlight: true,
      createdAt: new Date('2024-11-15'),
      updatedAt: new Date('2024-11-15')
    },
    {
      id: 'new-3',
      code: 'TI-NEW-003',
      name: 'Conjunto Elegance Rose',
      description: 'Sofisticação em rose gold com detalhes artesanais únicos',
      dimensions: '28x22x15cm',
      color: 'Rose Gold',
      collection: 'Elegance',
      material: 'Liga metálica com banho rose gold',
      images: [
        {
          id: 'new-3-img',
          url: '/images/placeholders/product-placeholder.jpg',
          alt: 'Conjunto Elegance Rose',
          isPrimary: true,
          order: 1
        }
      ],
      createdAt: new Date('2024-11-01'),
      updatedAt: new Date('2024-11-01')
    }
  ]

  const upcomingProducts = [
    {
      name: 'Coleção Cristal Premium',
      description: 'Peças em cristal lapidado com bases em mármore',
      launchDate: 'Janeiro 2025',
      image: '/images/placeholders/coming-soon.jpg'
    },
    {
      name: 'Linha Sustentável Eco',
      description: 'Produtos eco-friendly com materiais reciclados',
      launchDate: 'Fevereiro 2025',
      image: '/images/placeholders/coming-soon.jpg'
    },
    {
      name: 'Série Smart Home',
      description: 'Acessórios inteligentes com conectividade IoT',
      launchDate: 'Março 2025',
      image: '/images/placeholders/coming-soon.jpg'
    }
  ]

  const handleAddToQuote = (product: Product) => {
    console.log('Produto adicionado ao orçamento:', product.name)
    alert(`${product.name} foi adicionado ao seu orçamento!`)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-primary-50 to-secondary-100 flex items-center justify-center">
        <div className="container-luxury text-center">
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-accent-950 mb-6">
            <span className="text-gradient-gold">Lançamentos</span>
          </h1>
          <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
            Descubra as mais novas criações da Toque Ideal, sempre na vanguarda do design e da inovação
          </p>
        </div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 text-4xl animate-float opacity-30">🆕</div>
        <div className="absolute bottom-20 right-16 text-5xl animate-float opacity-25" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute top-32 right-20 text-3xl animate-float opacity-35" style={{ animationDelay: '2s' }}>🎉</div>
      </section>

      {/* Novidades Recentes */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-accent-950 mb-4">
              Novidades <span className="text-gradient-gold">Recentes</span>
            </h2>
            <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
              Conheça os produtos mais recentes que acabaram de chegar ao nosso catálogo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {newProducts.map((product) => (
              <div key={product.id} className="relative">
                {/* Badge de Novo */}
                <div className="absolute -top-2 -right-2 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10 shadow-lg">
                  NOVO
                </div>
                <ProductCard
                  product={product}
                  onAddToQuote={handleAddToQuote}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="primary" size="lg">
              Ver Todos os Produtos
            </Button>
          </div>
        </div>
      </section>

      {/* Em Breve */}
      <section className="section-padding bg-secondary-50">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-accent-950 mb-4">
              Em <span className="text-gradient-gold">Breve</span>
            </h2>
            <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
              Fique por dentro dos próximos lançamentos que estão sendo desenvolvidos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingProducts.map((product, index) => (
              <Card key={index} variant="luxury" className="text-center group overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-secondary-100 to-primary-100 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                  <span className="text-6xl opacity-50">🔮</span>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">EM BREVE</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-semibold text-accent-950 mb-3">
                  {product.name}
                </h3>
                
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="bg-primary-100 rounded-lg p-3 mb-4">
                  <span className="text-primary-700 font-semibold">
                    Previsão: {product.launchDate}
                  </span>
                </div>
                
                <Button variant="secondary" size="sm" className="w-full">
                  Quero ser Notificado
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <Card variant="luxury" className="text-center max-w-4xl mx-auto">
            <div className="text-5xl mb-6">📬</div>
            <h2 className="text-3xl font-display font-bold text-accent-950 mb-4">
              Seja o Primeiro a Saber dos <span className="text-gradient-gold">Lançamentos</span>
            </h2>
            <p className="text-lg text-secondary-700 mb-8 max-w-2xl mx-auto">
              Cadastre-se em nossa newsletter e receba em primeira mão informações sobre novos produtos, 
              promoções exclusivas e tendências em decoração.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 outline-none"
              />
              <Button variant="primary" size="md" className="sm:px-8">
                Cadastrar
              </Button>
            </div>
            
            <p className="text-sm text-secondary-500 mt-4">
              Não enviamos spam. Você pode cancelar a qualquer momento.
            </p>
          </Card>
        </div>
      </section>

      {/* Destaque Especial */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">
                Exclusividade em Primeira Mão
              </h2>
              <p className="text-xl mb-6 opacity-90 leading-relaxed">
                Nossos clientes VIP têm acesso antecipado aos lançamentos, com descontos especiais 
                e condições exclusivas de pagamento.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Acesso antecipado aos lançamentos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Descontos exclusivos de até 20%</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Atendimento personalizado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Frete grátis em todo o Brasil</span>
                </li>
              </ul>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-500">
                Quero ser VIP
              </Button>
            </div>
            
            <div className="relative">
              <Card variant="luxury" padding="none" className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-white to-secondary-100 flex items-center justify-center">
                  <span className="text-8xl">👑</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-accent-950 text-white">
        <div className="container-luxury text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Interessado em Algum <span className="text-gradient-gold">Lançamento</span>?
          </h2>
          <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e solicite mais informações sobre nossos produtos
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

