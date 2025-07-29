'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Card } from '@/components/ui'
import { ProductCard } from '@/components/common'
import { products } from '@/data/products'
import { Product } from '@/types'
import { generateProductStructuredData } from '@/lib/metadata'

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  
  const product = products.find(p => p.id === productId)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card variant="luxury" className="text-center max-w-md">
          <div className="text-6xl mb-6">❌</div>
          <h1 className="text-2xl font-display font-bold text-accent-950 mb-4">
            Produto não encontrado
          </h1>
          <p className="text-secondary-600 mb-6">
            O produto que você está procurando não existe ou foi removido.
          </p>
          <Link href="/catalogo">
            <Button variant="primary">
              Voltar ao Catálogo
            </Button>
          </Link>
        </Card>
      </div>
    )
  }

  // Produtos relacionados (mesma coleção)
  const relatedProducts = products
    .filter(p => p.collection === product.collection && p.id !== product.id)
    .slice(0, 3)

  const handleAddToQuote = () => {
    console.log('Produto adicionado ao orçamento:', product.name, 'Quantidade:', quantity)
    alert(`${product.name} (${quantity}x) foi adicionado ao seu orçamento!`)
  }

  const handleAddToFavorites = () => {
    console.log('Produto adicionado aos favoritos:', product.name)
    alert(`${product.name} foi adicionado aos seus favoritos!`)
  }

  return (
    <>
      {/* Dados estruturados */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateProductStructuredData(product))
        }}
      />
      
      <div className="min-h-screen">
        {/* Breadcrumb */}
        <section className="bg-secondary-50 py-4">
          <div className="container-luxury">
            <nav className="flex items-center space-x-2 text-sm" aria-label="Breadcrumb">
              <Link href="/" className="text-secondary-600 hover:text-primary-600 transition-colors">
                Home
              </Link>
              <span className="text-secondary-400">/</span>
              <Link href="/catalogo" className="text-secondary-600 hover:text-primary-600 transition-colors">
                Catálogo
              </Link>
              <span className="text-secondary-400">/</span>
              <Link 
                href={`/catalogo?collection=${product.collection}`}
                className="text-secondary-600 hover:text-primary-600 transition-colors"
              >
                {product.collection}
              </Link>
              <span className="text-secondary-400">/</span>
              <span className="text-accent-950 font-medium">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Produto Principal */}
        <section className="section-padding bg-white">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Galeria de Imagens */}
              <div>
                {/* Imagem Principal */}
                <div className="aspect-square mb-6 bg-secondary-100 rounded-lg overflow-hidden">
                  {product.images[selectedImageIndex] ? (
                    <Image
                      src={product.images[selectedImageIndex].url}
                      alt={product.images[selectedImageIndex].alt}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-8xl text-secondary-400">📦</span>
                    </div>
                  )}
                </div>

                {/* Miniaturas */}
                {product.images.length > 1 && (
                  <div className="flex space-x-4">
                    {product.images.map((image, index) => (
                      <button
                        key={image.id}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          selectedImageIndex === index
                            ? 'border-primary-500 ring-2 ring-primary-200'
                            : 'border-secondary-200 hover:border-primary-300'
                        }`}
                        aria-label={`Ver imagem ${index + 1} de ${product.images.length}`}
                      >
                        <Image
                          src={image.url}
                          alt={image.alt}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Informações do Produto */}
              <div>
                <div className="mb-4">
                  <span className="text-sm text-primary-600 font-medium">
                    Coleção {product.collection}
                  </span>
                  <span className="text-sm text-secondary-400 ml-4">
                    Cód: {product.code}
                  </span>
                </div>

                <h1 className="text-4xl font-display font-bold text-accent-950 mb-6">
                  {product.name}
                </h1>

                <p className="text-lg text-secondary-700 mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Especificações */}
                <Card variant="luxury" className="mb-8">
                  <h3 className="text-xl font-display font-semibold text-accent-950 mb-4">
                    Especificações
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-secondary-600">Dimensões:</span>
                      <p className="font-medium text-accent-950">{product.dimensions}</p>
                    </div>
                    <div>
                      <span className="text-sm text-secondary-600">Cor:</span>
                      <div className="flex items-center space-x-2 mt-1">
                        <div
                          className="w-4 h-4 rounded-full border-2 border-secondary-300"
                          style={{ backgroundColor: product.color.toLowerCase() }}
                        />
                        <span className="font-medium text-accent-950">{product.color}</span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <span className="text-sm text-secondary-600">Material:</span>
                      <p className="font-medium text-accent-950">{product.material}</p>
                    </div>
                  </div>
                </Card>

                {/* Ações */}
                <div className="space-y-6">
                  {/* Quantidade */}
                  <div>
                    <label className="block text-sm font-medium text-accent-950 mb-2">
                      Quantidade
                    </label>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-lg border-2 border-secondary-200 flex items-center justify-center hover:border-primary-500 transition-colors"
                        aria-label="Diminuir quantidade"
                      >
                        -
                      </button>
                      <span className="text-xl font-semibold text-accent-950 min-w-[2rem] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-lg border-2 border-secondary-200 flex items-center justify-center hover:border-primary-500 transition-colors"
                        aria-label="Aumentar quantidade"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Botões de Ação */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={handleAddToQuote}
                      className="flex-1"
                    >
                      Adicionar ao Orçamento
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={handleAddToFavorites}
                    >
                      ❤️ Favoritar
                    </Button>
                  </div>

                  {/* Informações Adicionais */}
                  <div className="bg-primary-50 rounded-lg p-6">
                    <h4 className="font-semibold text-accent-950 mb-3">
                      💡 Informações Importantes
                    </h4>
                    <ul className="space-y-2 text-sm text-secondary-700">
                      <li>• Produto artesanal com possíveis variações naturais</li>
                      <li>• Prazo de entrega: 15 a 30 dias úteis</li>
                      <li>• Frete calculado no checkout</li>
                      <li>• Garantia de 12 meses contra defeitos de fabricação</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos Relacionados */}
        {relatedProducts.length > 0 && (
          <section className="section-padding bg-secondary-50">
            <div className="container-luxury">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-display font-bold text-accent-950 mb-4">
                  Produtos <span className="text-gradient-gold">Relacionados</span>
                </h2>
                <p className="text-lg text-secondary-700">
                  Outros produtos da Coleção {product.collection}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                    onAddToQuote={(product) => {
                      console.log('Produto relacionado adicionado:', product.name)
                      alert(`${product.name} foi adicionado ao seu orçamento!`)
                    }}
                  />
                ))}
              </div>

              <div className="text-center mt-12">
                <Link href={`/catalogo?collection=${product.collection}`}>
                  <Button variant="secondary" size="lg">
                    Ver Toda a Coleção {product.collection}
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="section-padding bg-accent-950 text-white">
          <div className="container-luxury text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Dúvidas sobre este <span className="text-gradient-gold">Produto</span>?
            </h2>
            <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para esclarecer todas as suas dúvidas e ajudar na escolha perfeita
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Falar com Especialista
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent-950">
                WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

