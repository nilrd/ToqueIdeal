
'use client';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import Cart from '@/components/Cart';

interface Product {
  id: string;
  name: string;
  color: string;
  category: string;
  image: string;
  description: string;
  available_colors?: string[];
  available_sizes?: string[];
  price?: number;
}

export default function Catalogo() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedColor, setSelectedColor] = useState('Todas');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Produtos reais baseados nas fotos enviadas
  const products: Product[] = useMemo(() => [
    {
      id: '1012',
      name: 'Centro de Mesa Elegante',
      color: 'Bronze com Âmbar',
      category: 'Centros de Mesa',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/1012 BRONZE COM AMBAR.jpg',
      description: 'Centro de mesa em vidro com acabamento bronze e âmbar, perfeito para decoração sofisticada.',
      available_colors: ['Bronze com Âmbar', 'Transparente'],
      available_sizes: ['Pequeno', 'Médio'],
      price: 150.00
    },
    {
      id: '1144',
      name: 'Cuba Decorativa Premium',
      color: 'Bronze',
      category: 'Cubas',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/1144 BRONZE.jpg',
      description: 'Cuba decorativa em vidro bronze, ideal para ambientes modernos e elegantes.',
      available_colors: ['Bronze', 'Transparente'],
      available_sizes: ['Médio'],
      price: 220.00
    },
    {
      id: '1403-bronze',
      name: 'Acessório para Banheiro',
      color: 'Bronze',
      category: 'Acessórios para Banheiro',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/1403 BRONZE.jpg',
      description: 'Acessório para banheiro em vidro bronze, combinando funcionalidade e design.',
      available_colors: ['Bronze', 'Turquesa'],
      available_sizes: ['Único'],
      price: 80.00
    },
    {
      id: '1403-turquesa',
      name: 'Acessório para Banheiro',
      color: 'Turquesa',
      category: 'Acessórios para Banheiro',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/1403 TURQUESA.jpg',
      description: 'Acessório para banheiro em vidro turquesa, trazendo cor e elegância ao ambiente.',
      available_colors: ['Bronze', 'Turquesa'],
      available_sizes: ['Único'],
      price: 80.00
    },
    {
      id: '1410',
      name: 'Centro de Mesa Verde',
      color: 'Verde',
      category: 'Centros de Mesa',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/1410 - VERDE.jpg',
      description: 'Centro de mesa em vidro verde, perfeito para decorações naturais e sofisticadas.',
      available_colors: ['Verde', 'Transparente'],
      available_sizes: ['Grande'],
      price: 180.00
    },
    {
      id: '1512',
      name: 'Cuba Grafite',
      color: 'Grafite',
      category: 'Cubas',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/1512 GRAFITE.jpg',
      description: 'Cuba em vidro grafite, ideal para ambientes contemporâneos e minimalistas.',
      available_colors: ['Grafite', 'Preto'],
      available_sizes: ['Médio'],
      price: 250.00
    },
    {
      id: '1603-bronze',
      name: 'Centro de Mesa Bronze',
      color: 'Bronze',
      category: 'Centros de Mesa',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/1603 BRONZE.jpg',
      description: 'Centro de mesa em vidro bronze, elegante e versátil para qualquer ambiente.',
      available_colors: ['Bronze', 'Dourado'],
      available_sizes: ['Pequeno', 'Médio'],
      price: 120.00
    },
    {
      id: '1603-turquesa',
      name: 'Centro de Mesa Turquesa',
      color: 'Turquesa',
      category: 'Centros de Mesa',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/1603 TURQUESA.jpg',
      description: 'Centro de mesa em vidro turquesa, trazendo cor e vida à decoração.',
      available_colors: ['Turquesa', 'Azul'],
      available_sizes: ['Pequeno', 'Médio'],
      price: 120.00
    },
    {
      id: '1704',
      name: 'Cuba Verde Premium',
      color: 'Verde',
      category: 'Cubas',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/1704- VERDE.jpg',
      description: 'Cuba premium em vidro verde, combinando beleza e funcionalidade.',
      available_colors: ['Verde', 'Transparente'],
      available_sizes: ['Grande'],
      price: 280.00
    },
    {
      id: '1720',
      name: 'Centro de Mesa Luxo',
      color: 'Bronze com Âmbar',
      category: 'Centros de Mesa',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/1720 BRONZE COM AMBAR.jpg',
      description: 'Centro de mesa de luxo em vidro bronze com âmbar, para ambientes requintados.',
      available_colors: ['Bronze com Âmbar', 'Dourado'],
      available_sizes: ['Extra Grande'],
      price: 350.00
    },
    {
      id: '1782-mel',
      name: 'Acessório Mel',
      color: 'Mel',
      category: 'Acessórios para Banheiro',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/1782 MEL.jpg',
      description: 'Acessório para banheiro em vidro mel, trazendo calor e elegância.',
      available_colors: ['Mel', 'Transparente'],
      available_sizes: ['Único'],
      price: 90.00
    },
    {
      id: '1782-preto',
      name: 'Acessório Preto',
      color: 'Preto',
      category: 'Acessórios para Banheiro',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/1782 PRETO.jpg',
      description: 'Acessório para banheiro em vidro preto, moderno e sofisticado.',
      available_colors: ['Preto', 'Grafite'],
      available_sizes: ['Único'],
      price: 90.00
    },
    {
      id: '1814-branco',
      name: 'Centro de Mesa Branco',
      color: 'Branco',
      category: 'Centros de Mesa',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/1814 BRANCO.jpg',
      description: 'Centro de mesa em vidro branco, clássico e elegante para qualquer decoração.',
      available_colors: ['Branco', 'Transparente'],
      available_sizes: ['Médio', 'Grande'],
      price: 160.00
    },
    {
      id: '1814-turquesa',
      name: 'Centro de Mesa Turquesa',
      color: 'Turquesa',
      category: 'Centros de Mesa',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/1814 TURQUESA.jpg',
      description: 'Centro de mesa em vidro turquesa, vibrante e moderno.',
      available_colors: ['Turquesa', 'Azul'],
      available_sizes: ['Médio', 'Grande'],
      price: 160.00
    },
    {
      id: '1902',
      name: 'Cuba Grafite Premium',
      color: 'Grafite',
      category: 'Cubas',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/1902  GRAFITE.jpg',
      description: 'Cuba premium em vidro grafite, design contemporâneo e elegante.',
      available_colors: ['Grafite', 'Preto'],
      available_sizes: ['Grande'],
      price: 300.00
    },
    {
      id: '2002',
      name: 'Acessório Turquesa',
      color: 'Turquesa',
      category: 'Acessórios para Banheiro',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/2002 TURQUESA.jpg',
      description: 'Acessório para banheiro em vidro turquesa, colorido e moderno.',
      available_colors: ['Turquesa', 'Verde'],
      available_sizes: ['Único'],
      price: 75.00
    },
    {
      id: '2140-branco',
      name: 'Centro de Mesa Clássico',
      color: 'Branco',
      category: 'Centros de Mesa',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/2140 BRANCO.jpg',
      description: 'Centro de mesa clássico em vidro branco, atemporal e elegante.',
      available_colors: ['Branco', 'Transparente'],
      available_sizes: ['Pequeno', 'Médio', 'Grande'],
      price: 190.00
    },
    {
      id: '2140-mel',
      name: 'Centro de Mesa Mel',
      color: 'Mel',
      category: 'Centros de Mesa',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/2140 MEL.jpg',
      description: 'Centro de mesa em vidro mel, trazendo calor e aconchego ao ambiente.',
      available_colors: ['Mel', 'Bronze'],
      available_sizes: ['Pequeno', 'Médio', 'Grande'],
      price: 190.00
    },
    {
      id: '2207',
      name: 'Cuba Bronze Âmbar',
      color: 'Bronze com Âmbar',
      category: 'Cubas',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/2207 BRONZE COM AMBAR.jpg',
      description: 'Cuba em vidro bronze com âmbar, luxuosa e sofisticada.',
      available_colors: ['Bronze com Âmbar', 'Dourado'],
      available_sizes: ['Médio'],
      price: 320.00
    },
    {
      id: '2280',
      name: 'Acessório Grafite',
      color: 'Grafite',
      category: 'Acessórios para Banheiro',
      image: '/products/FTS FUNDO BRANCO SEM SOMBRA/2280 GRAFITE.jpg',
      description: 'Acessório para banheiro em vidro grafite, moderno e minimalista.',
      available_colors: ['Grafite', 'Preto'],
      available_sizes: ['Único'],
      price: 85.00
    }
  ], []);

  const categories = ['Todos', 'Centros de Mesa', 'Cubas', 'Acessórios para Banheiro'];
  const colors = ['Todas', 'Bronze', 'Bronze com Âmbar', 'Turquesa', 'Verde', 'Grafite', 'Mel', 'Preto', 'Branco', 'Dourado', 'Azul', 'Transparente'];

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (selectedColor !== 'Todas') {
      filtered = filtered.filter(product => product.color === selectedColor);
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedColor, products]);

  const handleBudget = () => {
    setIsCartOpen(true);
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <Image 
              src="/1.png" 
              alt="Toque Ideal Logo" 
              width={36} 
              height={36}
              style={{ objectFit: 'contain' }}
            />
            <span className="logo-text">TOQUE IDEAL</span>
          </div>
          
          <nav className="nav">
            <Link href="/">Início</Link>
            <Link href="/catalogo">Produtos</Link>
            <Link href="/#sobre">Sobre</Link>
            <Link href="/#contato">Contato</Link>
            <button className="btn-header" onClick={handleBudget}>
              Solicitar Orçamento
            </button>
          </nav>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-nav open">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Início</Link>
            <Link href="/catalogo" onClick={() => setMobileMenuOpen(false)}>Produtos</Link>
            <Link href="/#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</Link>
            <Link href="/#contato" onClick={() => setMobileMenuOpen(false)}>Contato</Link>
          </nav>
        )}
      </header>

      {/* Catalog Hero */}
      <section className="catalog-hero">
        <div className="catalog-container">
          <h1>Nosso Catálogo</h1>
          <p>
            Descubra nossa coleção completa de centros de mesa, cubas decorativas e acessórios para banheiro 
            em múltiplas cores premium. Cada peça é cuidadosamente criada para transformar seu ambiente.
          </p>
        </div>
      </section>

      {/* Catalog Content */}
      <div className="catalog-container">
        {/* Filters */}
        <div className="filters-section">
          <h2 className="filters-title">Filtrar Produtos</h2>
          
          <div className="filter-group">
            <h3>Categoria</h3>
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>Cor</h3>
            <div className="filter-buttons">
              {colors.map(color => (
                <button
                  key={color}
                  className={`filter-btn ${selectedColor === color ? 'active' : ''}`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Count */}
        <div className="products-count">
          Exibindo {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={(product) => {
                // Função temporária - será implementada com o sistema de carrinho
                console.log('Produto adicionado:', product);
              }}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            color: 'var(--gray-600)'
          }}>
            <p>Nenhum produto encontrado com os filtros selecionados.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="cta-section">
          <h2>Não encontrou o que procura?</h2>
          <p>
            Entre em contato conosco! Podemos criar peças personalizadas 
            de acordo com suas necessidades e preferências.
          </p>
          <button 
            className="btn-primary"
            onClick={handleBudget}
          >
            Solicitar Produto Personalizado
          </button>
        </div>
      </div>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}


