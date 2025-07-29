'use client'

import { Button, Card } from '@/components/ui'
import { ProductCard } from '@/components/common'
import { Product } from '@/types'
import Image from 'next/image'

// Dados de produtos reais baseados nas imagens fornecidas
const sampleProducts: Product[] = [
  {
    id: '1',
    code: '2140',
    name: 'Conjunto Elegance Branco',
    description: 'Conjunto completo para banheiro com acabamento branco premium e design sofisticado',
    dimensions: '30x20x15cm',
    color: 'Branco',
    collection: 'Elegance',
    material: 'Metal com acabamento premium',
    images: [
      {
        id: '1',
        url: '/fotos1/FTS FUNDO BRANCO SEM SOMBRA/2140 BRANCO.jpg',
        alt: 'Conjunto Elegance Branco',
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
    code: '2140',
    name: 'Conjunto Elegance Mel',
    description: 'Conjunto completo para banheiro com acabamento mel dourado e design exclusivo',
    dimensions: '30x20x15cm',
    color: 'Mel',
    collection: 'Elegance',
    material: 'Metal com banho dourado',
    images: [
      {
        id: '2',
        url: '/fotos1/FTS FUNDO BRANCO SEM SOMBRA/2140 MEL.jpg',
        alt: 'Conjunto Elegance Mel',
        isPrimary: true,
        order: 1
      }
    ],
    isHighlight: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    code: '2207',
    name: 'Conjunto Bronze com Âmbar',
    description: 'Peça exclusiva com acabamento bronze e detalhes em âmbar, ideal para ambientes sofisticados',
    dimensions: '25x18x12cm',
    color: 'Bronze com Âmbar',
    collection: 'Premium',
    material: 'Metal bronze com âmbar',
    images: [
      {
        id: '3',
        url: '/fotos1/FTS FUNDO BRANCO SEM SOMBRA/2207 BRONZE COM AMBAR.jpg',
        alt: 'Conjunto Bronze com Âmbar',
        isPrimary: true,
        order: 1
      }
    ],
    isHighlight: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Premium */}
      <section className="hero-section">
        <div className="container-luxury text-center">
          <div className="mb-8">
            <Image
              src="/logos/retangular logo.png"
              alt="Toque Ideal"
              width={300}
              height={120}
              className="mx-auto mb-6"
              priority
            />
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-primary-600 mb-6 text-shadow-luxury">
            Artigos de Decoração
            <span className="block text-accent-500">Premium</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-secondary-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Há mais de 7 anos desenvolvendo peças de decoração e acessórios para banheiro que combinam 
            <span className="text-primary-600 font-semibold"> design sofisticado, qualidade superior e acabamento impecável</span> 
            para projetos de arquitetura e decoração de alto padrão.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="primary" size="lg" className="btn-primary">
              Explorar Catálogo
            </Button>
            <Button variant="secondary" size="lg" className="btn-secondary">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="section-premium bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-600 mb-8">
                Excelência em <span className="text-gradient-gold">Decoração</span>
              </h2>
              <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                A <strong>Toque Ideal</strong> nasceu da visão compartilhada dos sócios <strong>Devid Bomfim</strong> e 
                <strong> Luana Andrade</strong>, profissionais com vasta experiência no mercado de decoração e design de interiores.
              </p>
              <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                Nossa empresa se dedica ao desenvolvimento de produtos que atendem às necessidades mais exigentes de 
                arquitetos, decoradores e clientes que buscam peças únicas e de qualidade superior.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-600 mb-1">Qualidade Garantida</h3>
                    <p className="text-secondary-600 text-sm">Produtos testados e aprovados por profissionais</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent-600 mb-1">Design Exclusivo</h3>
                    <p className="text-secondary-600 text-sm">Peças únicas desenvolvidas por nossa equipe</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-600 mb-1">Preço Justo</h3>
                    <p className="text-secondary-600 text-sm">Melhor custo-benefício do mercado</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent-600 mb-1">Atendimento VIP</h3>
                    <p className="text-secondary-600 text-sm">Suporte personalizado para cada cliente</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="card-luxury p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary-600 mb-2">
                    Mais de 7 Anos
                  </h3>
                  <p className="text-secondary-600 mb-6">
                    De experiência no mercado de decoração premium
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-secondary-200">
                    <span className="text-secondary-700">Produtos Desenvolvidos</span>
                    <span className="font-semibold text-primary-600">500+</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-secondary-200">
                    <span className="text-secondary-700">Clientes Atendidos</span>
                    <span className="font-semibold text-primary-600">2.000+</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-secondary-200">
                    <span className="text-secondary-700">Projetos Realizados</span>
                    <span className="font-semibold text-primary-600">1.500+</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-secondary-700">Seguidores Instagram</span>
                    <span className="font-semibold text-accent-600">8.005</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="section-premium bg-secondary-50">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-600 mb-6">
              Produtos em <span className="text-gradient-gold">Destaque</span>
            </h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto leading-relaxed">
              Conheça alguns de nossos produtos mais procurados por arquitetos e decoradores. 
              Cada peça é desenvolvida com atenção aos detalhes e acabamento impecável.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {sampleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToQuote={(product) => console.log('Adicionado ao orçamento:', product.name)}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="primary" size="lg" className="btn-primary">
              Ver Catálogo Completo
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-premium bg-primary-600 text-white">
        <div className="container-luxury text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-shadow-luxury">
            Transforme seu Projeto com
            <span className="block text-accent-400">Peças Exclusivas</span>
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco e solicite um orçamento personalizado. 
            Nossa equipe está pronta para atender suas necessidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-accent-500 hover:bg-accent-600 text-white"
            >
              Solicitar Orçamento
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

