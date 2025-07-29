'use client'

import { Button, Card } from '@/components/ui'
import Image from 'next/image'

export default function QuemSomos() {
  const timeline = [
    {
      year: '2017',
      title: 'Fundação da Toque Ideal',
      description: 'Devid Bomfim e Luana Andrade unem suas expertises para criar a Toque Ideal, focada em produtos de decoração de alta qualidade.'
    },
    {
      year: '2018',
      title: 'Primeira Linha de Produtos',
      description: 'Lançamento da primeira coleção de acessórios para banheiro com design exclusivo e acabamento premium.'
    },
    {
      year: '2020',
      title: 'Expansão do Catálogo',
      description: 'Ampliação significativa do portfólio com novas coleções em diferentes cores e materiais.'
    },
    {
      year: '2022',
      title: 'Reconhecimento no Mercado',
      description: 'Consolidação como referência em produtos decorativos de luxo, atendendo arquitetos e designers renomados.'
    },
    {
      year: '2024',
      title: 'Inovação Contínua',
      description: 'Investimento em novas tecnologias de produção e desenvolvimento de produtos ainda mais sofisticados.'
    }
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Inovação',
      description: 'Sempre buscando novas formas de surpreender nossos clientes com designs únicos e funcionais.'
    },
    {
      icon: '💎',
      title: 'Qualidade',
      description: 'Compromisso inabalável com a excelência em cada detalhe de nossos produtos.'
    },
    {
      icon: '✨',
      title: 'Exclusividade',
      description: 'Criamos peças únicas que transformam ambientes em espaços verdadeiramente especiais.'
    },
    {
      icon: '🤝',
      title: 'Atendimento Personalizado',
      description: 'Cada cliente é único e merece um atendimento diferenciado e sob medida.'
    }
  ]

  const team = [
    {
      name: 'Devid Bomfim',
      role: 'Co-fundador & Diretor Criativo',
      description: 'Especialista em design de produto com mais de 15 anos de experiência no mercado de luxo.',
      image: '/images/placeholders/team-member.jpg'
    },
    {
      name: 'Luana Andrade',
      role: 'Co-fundadora & Diretora Comercial',
      description: 'Expert em relacionamento com clientes e desenvolvimento de negócios no setor de decoração.',
      image: '/images/placeholders/team-member.jpg'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-primary-50 to-secondary-100 flex items-center justify-center">
        <div className="container-luxury text-center">
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-accent-950 mb-6">
            Quem <span className="text-gradient-gold">Somos</span>
          </h1>
          <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
            Conheça a história, valores e pessoas por trás da Toque Ideal
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-display font-bold text-accent-950 mb-6">
                Nossa <span className="text-gradient-gold">História</span>
              </h2>
              <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                A <strong>Toque Ideal</strong> nasceu em 2017 do sonho compartilhado de dois profissionais apaixonados 
                por design e qualidade. <strong>Devid Bomfim</strong> e <strong>Luana Andrade</strong> identificaram 
                uma oportunidade no mercado de decoração: criar produtos que combinassem funcionalidade, beleza e 
                sofisticação em um só lugar.
              </p>
              <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                Ao longo de mais de 7 anos, construímos uma reputação sólida baseada na excelência de nossos produtos 
                e no atendimento personalizado. Hoje, somos reconhecidos como uma das principais referências em 
                acessórios decorativos de luxo no Brasil.
              </p>
              <Button variant="primary" size="lg">
                Ver Nossos Produtos
              </Button>
            </div>
            <div className="relative">
              <Card variant="luxury" padding="none" className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-200 flex items-center justify-center">
                  <span className="text-6xl">🏢</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary-50">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-accent-950 mb-4">
              Nossa <span className="text-gradient-gold">Trajetória</span>
            </h2>
            <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
              Acompanhe os principais marcos da nossa jornada de crescimento e inovação
            </p>
          </div>

          <div className="relative">
            {/* Linha do tempo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 hidden lg:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1 lg:pr-8">
                    <Card variant="luxury" className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="text-primary-500 font-bold text-2xl mb-2">{item.year}</div>
                      <h3 className="text-xl font-display font-semibold text-accent-950 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-secondary-600 leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  </div>
                  
                  {/* Ponto na linha do tempo */}
                  <div className="hidden lg:flex w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="flex-1 lg:pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-accent-950 mb-4">
              Nossos <span className="text-gradient-gold">Valores</span>
            </h2>
            <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e cada produto que criamos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} variant="luxury" className="text-center group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-accent-950 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="section-padding bg-secondary-50">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-accent-950 mb-4">
              Nossa <span className="text-gradient-gold">Equipe</span>
            </h2>
            <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
              Conheça as pessoas por trás da Toque Ideal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} variant="luxury" className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-100 to-secondary-200 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="text-2xl font-display font-semibold text-accent-950 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-secondary-600 leading-relaxed">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent-950 text-white">
        <div className="container-luxury text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Pronto para Conhecer Nossos <span className="text-gradient-gold">Produtos</span>?
          </h2>
          <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
            Explore nosso catálogo completo e descubra como podemos transformar seus ambientes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Ver Catálogo
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent-950">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

