'use client'

import { useState, useMemo } from 'react'
import { Button, Card, Input } from '@/components/ui'
import { ProductCard } from '@/components/common'
import { products, collections, colors, materials } from '@/data/products'
import { Product } from '@/types'

export default function Catalogo() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCollection, setSelectedCollection] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  // Filtrar produtos
  const filteredProducts = useMemo(() => {
    // Aplicar filtros
    const filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.code.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCollection = !selectedCollection || 
                               product.collection.toLowerCase() === selectedCollection.toLowerCase()
      
      const matchesColor = !selectedColor || product.color === selectedColor
      
      const matchesMaterial = !selectedMaterial || product.material.includes(selectedMaterial)

      return matchesSearch && matchesCollection && matchesColor && matchesMaterial
    })

    // Ordenar produtos
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case 'collection':
          return a.collection.localeCompare(b.collection)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCollection, selectedColor, selectedMaterial, sortBy])

  const handleAddToQuote = (product: Product) => {
    console.log('Produto adicionado ao orçamento:', product.name)
    alert(`${product.name} foi adicionado ao seu orçamento!`)
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCollection('')
    setSelectedColor('')
    setSelectedMaterial('')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-primary-50 to-secondary-100 flex items-center justify-center">
        <div className="container-luxury text-center">
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-accent-950 mb-6">
            <span className="text-gradient-gold">Catálogo</span>
          </h1>
          <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
            Explore nossa coleção completa de produtos de decoração e acessórios para banheiro
          </p>
        </div>
      </section>

      {/* Filtros e Busca */}
      <section className="section-padding bg-white border-b border-secondary-200">
        <div className="container-luxury">
          <Card variant="luxury" className="mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
              {/* Busca */}
              <div className="lg:col-span-2">
                <Input
                  label="Buscar produtos"
                  placeholder="Digite o nome, código ou descrição..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Ordenação */}
              <div>
                <label className="block text-sm font-medium text-accent-950 mb-2">
                  Ordenar por
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 outline-none"
                >
                  <option value="name">Nome A-Z</option>
                  <option value="newest">Mais recentes</option>
                  <option value="collection">Coleção</option>
                </select>
              </div>

              {/* Modo de visualização */}
              <div>
                <label className="block text-sm font-medium text-accent-950 mb-2">
                  Visualização
                </label>
                <div className="flex space-x-2">
                  <Button
                    variant={viewMode === 'grid' ? 'primary' : 'secondary'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="flex-1"
                  >
                    Grade
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'primary' : 'secondary'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="flex-1"
                  >
                    Lista
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Filtro por Coleção */}
              <div>
                <label className="block text-sm font-medium text-accent-950 mb-2">
                  Coleção
                </label>
                <select
                  value={selectedCollection}
                  onChange={(e) => setSelectedCollection(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 outline-none"
                >
                  <option value="">Todas as coleções</option>
                  {collections.map((collection) => (
                    <option key={collection.id} value={collection.name.replace('Coleção ', '')}>
                      {collection.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtro por Cor */}
              <div>
                <label className="block text-sm font-medium text-accent-950 mb-2">
                  Cor
                </label>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 outline-none"
                >
                  <option value="">Todas as cores</option>
                  {colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtro por Material */}
              <div>
                <label className="block text-sm font-medium text-accent-950 mb-2">
                  Material
                </label>
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 outline-none"
                >
                  <option value="">Todos os materiais</option>
                  {materials.map((material) => (
                    <option key={material} value={material}>
                      {material}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Botão Limpar Filtros */}
            {(searchTerm || selectedCollection || selectedColor || selectedMaterial) && (
              <div className="mt-6 pt-6 border-t border-secondary-200">
                <Button variant="secondary" onClick={clearFilters}>
                  Limpar Filtros
                </Button>
              </div>
            )}
          </Card>

          {/* Resultados */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-display font-semibold text-accent-950">
              {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
            </h2>
          </div>
        </div>
      </section>

      {/* Lista de Produtos */}
      <section className="section-padding bg-secondary-50">
        <div className="container-luxury">
          {filteredProducts.length === 0 ? (
            <Card variant="luxury" className="text-center py-16">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-display font-semibold text-accent-950 mb-4">
                Nenhum produto encontrado
              </h3>
              <p className="text-lg text-secondary-600 mb-8">
                Tente ajustar os filtros ou realizar uma nova busca
              </p>
              <Button variant="primary" onClick={clearFilters}>
                Limpar Filtros
              </Button>
            </Card>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToQuote={handleAddToQuote}
                  className={viewMode === 'list' ? 'flex-row' : ''}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Coleções em Destaque */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-accent-950 mb-4">
              Nossas <span className="text-gradient-gold">Coleções</span>
            </h2>
            <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
              Explore nossas coleções exclusivas, cada uma com sua personalidade única
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.slice(0, 6).map((collection) => (
              <Card key={collection.id} variant="luxury" className="group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-200 rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-6xl">✨</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-accent-950 mb-3">
                  {collection.name}
                </h3>
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {collection.description}
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full"
                  onClick={() => setSelectedCollection(collection.name.replace('Coleção ', ''))}
                >
                  Ver Produtos
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent-950 text-white">
        <div className="container-luxury text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Não Encontrou o que Procurava?
          </h2>
          <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e solicite um produto personalizado ou tire suas dúvidas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Solicitar Produto Personalizado
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

