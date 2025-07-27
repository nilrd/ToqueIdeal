'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, Button } from '@/components/ui'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
  onAddToQuote?: (product: Product) => void
  className?: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToQuote,
  className = ''
}) => {
  const primaryImage = product.images.find(img => img.isPrimary) || product.images[0]
  
  const handleAddToQuote = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (onAddToQuote) {
      onAddToQuote(product)
    }
  }
  
  return (
    <Link href={`/catalogo/${product.id}`}>
      <Card
        variant="product"
        padding="none"
        className={`group overflow-hidden ${className}`}
      >
        {/* Imagem do Produto */}
        <div className="relative aspect-square overflow-hidden">
          {primaryImage ? (
            <Image
              src={primaryImage.url}
              alt={primaryImage.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-secondary-100 flex items-center justify-center">
              <span className="text-secondary-400 text-4xl">📦</span>
            </div>
          )}
          
          {/* Badge de Destaque */}
          {product.isHighlight && (
            <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Destaque
            </div>
          )}
          
          {/* Overlay com botão de ação */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <Button
              variant="primary"
              size="sm"
              onClick={handleAddToQuote}
              className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            >
              Adicionar ao Orçamento
            </Button>
          </div>
        </div>
        
        {/* Informações do Produto */}
        <div className="p-6">
          <div className="mb-2">
            <span className="text-sm text-secondary-600 font-medium">
              {product.collection}
            </span>
            <span className="text-sm text-secondary-400 ml-2">
              Cód: {product.code}
            </span>
          </div>
          
          <h3 className="text-lg font-display font-semibold text-accent-950 mb-2 group-hover:text-primary-600 transition-colors duration-300">
            {product.name}
          </h3>
          
          <p className="text-secondary-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div
                className="w-4 h-4 rounded-full border-2 border-secondary-300"
                style={{ backgroundColor: product.color.toLowerCase() }}
                title={product.color}
              />
              <span className="text-sm text-secondary-600">
                {product.color}
              </span>
            </div>
            
            {product.dimensions && (
              <span className="text-sm text-secondary-500">
                {product.dimensions}
              </span>
            )}
          </div>
          
          {product.material && (
            <div className="mt-3 pt-3 border-t border-secondary-100">
              <span className="text-sm text-secondary-600">
                Material: <span className="font-medium">{product.material}</span>
              </span>
            </div>
          )}
        </div>
      </Card>
    </Link>
  )
}

export default ProductCard

