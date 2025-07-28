'use client';

import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  color: string;
  image: string;
  description: string;
  price?: string;
}

export default function Catalogo() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedColor, setSelectedColor] = useState('todas');
  const [loading, setLoading] = useState(true);

  // Produtos baseados nas fotos reais enviadas
  const productData: Product[] = [
    {
      id: 1012,
      name: "Centro de Mesa Elegance",
      category: "centros-mesa",
      color: "Bronze com Âmbar",
      image: "/products/1012 BRONZE COM AMBAR.jpg",
      description: "Centro de mesa sofisticado com acabamento bronze e detalhes âmbar. Perfeito para ambientes de alto padrão."
    },
    {
      id: 1144,
      name: "Cuba Decorativa Premium",
      category: "cubas",
      color: "Bronze",
      image: "/products/1144 BRONZE.jpg",
      description: "Cuba decorativa com design exclusivo em bronze. Ideal para projetos arquitetônicos sofisticados."
    },
    {
      id: 1403,
      name: "Acessório Banheiro Luxury",
      category: "acessorios-banheiro",
      color: "Bronze",
      image: "/products/1403 BRONZE.jpg",
      description: "Acessório para banheiro com acabamento premium em bronze. Combina funcionalidade e elegância."
    },
    {
      id: 1403,
      name: "Acessório Banheiro Luxury",
      category: "acessorios-banheiro",
      color: "Turquesa",
      image: "/products/1403 TURQUESA.jpg",
      description: "Acessório para banheiro com acabamento premium em turquesa. Combina funcionalidade e elegância."
    },
    {
      id: 1410,
      name: "Centro de Mesa Nature",
      category: "centros-mesa",
      color: "Verde",
      image: "/products/1410 - VERDE.jpg",
      description: "Centro de mesa com acabamento verde vibrante. Traz vida e sofisticação para qualquer ambiente."
    },
    {
      id: 1512,
      name: "Cuba Moderna",
      category: "cubas",
      color: "Grafite",
      image: "/products/1512 GRAFITE.jpg",
      description: "Cuba com design contemporâneo em grafite. Perfeita para projetos modernos e minimalistas."
    },
    {
      id: 1603,
      name: "Peça Decorativa Exclusive",
      category: "centros-mesa",
      color: "Bronze",
      image: "/products/1603 BRONZE.jpg",
      description: "Peça decorativa exclusiva com acabamento bronze. Design único para ambientes diferenciados."
    },
    {
      id: 1603,
      name: "Peça Decorativa Exclusive",
      category: "centros-mesa",
      color: "Turquesa",
      image: "/products/1603 TURQUESA.jpg",
      description: "Peça decorativa exclusiva com acabamento turquesa. Design único para ambientes diferenciados."
    },
    {
      id: 1704,
      name: "Centro de Mesa Garden",
      category: "centros-mesa",
      color: "Verde",
      image: "/products/1704- VERDE.jpg",
      description: "Centro de mesa com inspiração natural em verde. Perfeito para criar pontos focais elegantes."
    },
    {
      id: 1720,
      name: "Peça Premium Collection",
      category: "centros-mesa",
      color: "Bronze com Âmbar",
      image: "/products/1720 BRONZE COM AMBAR.jpg",
      description: "Peça da coleção premium com acabamento bronze e âmbar. Exclusividade e sofisticação em cada detalhe."
    },
    {
      id: 1782,
      name: "Acessório Honey",
      category: "acessorios-banheiro",
      color: "Mel",
      image: "/products/1782 MEL.jpg",
      description: "Acessório com acabamento mel, trazendo calor e elegância para o ambiente."
    },
    {
      id: 1782,
      name: "Acessório Classic",
      category: "acessorios-banheiro",
      color: "Preto",
      image: "/products/1782 PRETO.jpg",
      description: "Acessório clássico em preto. Elegância atemporal para projetos sofisticados."
    },
    {
      id: 1814,
      name: "Cuba Pure",
      category: "cubas",
      color: "Branco",
      image: "/products/1814 BRANCO.jpg",
      description: "Cuba com acabamento branco puro. Minimalismo e sofisticação em perfeita harmonia."
    },
    {
      id: 1814,
      name: "Cuba Ocean",
      category: "cubas",
      color: "Turquesa",
      image: "/products/1814 TURQUESA.jpg",
      description: "Cuba com acabamento turquesa oceânico. Traz frescor e modernidade ao ambiente."
    },
    {
      id: 1902,
      name: "Peça Urban",
      category: "acessorios-banheiro",
      color: "Grafite",
      image: "/products/1902  GRAFITE.jpg",
      description: "Peça com design urbano em grafite. Modernidade e funcionalidade em cada detalhe."
    },
    {
      id: 2002,
      name: "Centro de Mesa Aqua",
      category: "centros-mesa",
      color: "Turquesa",
      image: "/products/2002 TURQUESA.jpg",
      description: "Centro de mesa com acabamento aqua turquesa. Elegância e frescor para ambientes únicos."
    },
    {
      id: 2140,
      name: "Acessório Minimal",
      category: "acessorios-banheiro",
      color: "Branco",
      image: "/products/2140 BRANCO.jpg",
      description: "Acessório minimalista em branco. Pureza e sofisticação para projetos contemporâneos."
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos os Produtos', icon: '🏺' },
    { id: 'centros-mesa', name: 'Centros de Mesa', icon: '🌟' },
    { id: 'cubas', name: 'Cubas Decorativas', icon: '🚿' },
    { id: 'acessorios-banheiro', name: 'Acessórios Banheiro', icon: '✨' }
  ];

  const colors = [
    { id: 'todas', name: 'Todas as Cores', color: 'linear-gradient(45deg, #40E0D0, #2B4A6B)' },
    { id: 'Bronze com Âmbar', name: 'Bronze com Âmbar', color: '#CD7F32' },
    { id: 'Bronze', name: 'Bronze', color: '#CD7F32' },
    { id: 'Turquesa', name: 'Turquesa', color: '#40E0D0' },
    { id: 'Verde', name: 'Verde', color: '#228B22' },
    { id: 'Mel', name: 'Mel', color: '#FFB347' },
    { id: 'Grafite', name: 'Grafite', color: '#36454F' },
    { id: 'Preto', name: 'Preto', color: '#000000' },
    { id: 'Branco', name: 'Branco', color: '#FFFFFF' }
  ];

  useEffect(() => {
    setProducts(productData);
    setFilteredProducts(productData);
    setLoading(false);
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'todos') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (selectedColor !== 'todas') {
      filtered = filtered.filter(product => product.color === selectedColor);
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedColor, products]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = (product?: Product) => {
    const message = product 
      ? `Olá! Gostaria de saber mais sobre o produto: ${product.name} (${product.color})`
      : 'Olá! Gostaria de conhecer os produtos da Toque Ideal.';
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #faf9f6 0%, #ffffff 100%)'
      }}>
        <div style={{textAlign: 'center'}}>
          <div style={{
            width: '60px',
            height: '60px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #40E0D0',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem'
          }}></div>
          <p style={{color: '#2B4A6B', fontSize: '1.1rem'}}>Carregando catálogo...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{minHeight: '100vh', background: 'linear-gradient(135deg, #faf9f6 0%, #ffffff 100%)'}}>
      {/* Header */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(43, 74, 107, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: '1rem 0'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer'}}
               onClick={() => window.location.href = '/'}>
            <img src="/logo.png" alt="Toque Ideal Logo" style={{
              width: '50px',
              height: '50px',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(43, 74, 107, 0.1)'
            }} />
            <div>
              <h1 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#2B4A6B',
                margin: 0,
                letterSpacing: '2px',
                fontFamily: 'Cormorant Garamond, serif'
              }}>TOQUE IDEAL</h1>
              <p style={{
                fontSize: '0.75rem',
                color: '#6b6b6b',
                margin: 0,
                fontWeight: '300',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>Catálogo de Produtos</p>
            </div>
          </div>
          <button 
            onClick={() => handleWhatsApp()}
            style={{
              background: 'linear-gradient(135deg, #40E0D0 0%, #7FFFD4 100%)',
              color: 'white',
              padding: '0.8rem 2rem',
              border: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              boxShadow: '0 10px 30px rgba(64, 224, 208, 0.3)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            Solicitar Orçamento
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #2B4A6B 0%, #1e3a5f 100%)',
        color: 'white',
        padding: '6rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2340E0D0' fill-opacity='0.05'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'float 25s ease-in-out infinite'
        }}></div>
        <div style={{position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto'}}>
          <h1 style={{
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: '700',
            marginBottom: '2rem',
            fontFamily: 'Cormorant Garamond, serif',
            lineHeight: '1.1'
          }}>
            Catálogo <span style={{color: '#40E0D0'}}>Premium</span>
          </h1>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '3rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 3rem',
            lineHeight: '1.6'
          }}>
            Descubra nossa coleção exclusiva de centros de mesa, cubas e acessórios 
            para banheiro em múltiplas cores sofisticadas.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '2rem'
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <span style={{color: '#40E0D0', fontSize: '1.5rem'}}>🎨</span>
              <span>9 Cores Disponíveis</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <span style={{color: '#40E0D0', fontSize: '1.5rem'}}>✨</span>
              <span>Design Exclusivo</span>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <span style={{color: '#40E0D0', fontSize: '1.5rem'}}>💎</span>
              <span>Alto Padrão</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section style={{
        background: 'white',
        padding: '3rem 2rem',
        borderBottom: '1px solid rgba(43, 74, 107, 0.1)'
      }}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <h2 style={{
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#2B4A6B',
            fontSize: '2.5rem',
            fontFamily: 'Cormorant Garamond, serif'
          }}>
            Filtrar Produtos
          </h2>
          
          {/* Filtro por Categoria */}
          <div style={{marginBottom: '3rem'}}>
            <h3 style={{
              marginBottom: '1.5rem',
              color: '#2B4A6B',
              fontSize: '1.3rem',
              fontFamily: 'Cormorant Garamond, serif'
            }}>
              Categorias
            </h3>
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{
                    background: selectedCategory === category.id 
                      ? 'linear-gradient(135deg, #40E0D0 0%, #7FFFD4 100%)'
                      : 'transparent',
                    color: selectedCategory === category.id ? 'white' : '#2B4A6B',
                    border: selectedCategory === category.id ? 'none' : '2px solid #2B4A6B',
                    padding: '1rem 2rem',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                >
                  <span style={{fontSize: '1.2rem'}}>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Filtro por Cor */}
          <div>
            <h3 style={{
              marginBottom: '1.5rem',
              color: '#2B4A6B',
              fontSize: '1.3rem',
              fontFamily: 'Cormorant Garamond, serif'
            }}>
              Cores Disponíveis
            </h3>
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              {colors.map(color => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  style={{
                    background: selectedColor === color.id ? '#2B4A6B' : 'white',
                    color: selectedColor === color.id ? 'white' : '#2B4A6B',
                    border: '2px solid #2B4A6B',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontWeight: '500',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: color.color,
                    border: color.name === 'Branco' ? '1px solid #ddd' : 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}></div>
                  {color.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Produtos */}
      <section style={{padding: '4rem 2rem'}}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <h2 style={{
              color: '#2B4A6B',
              fontSize: '2.5rem',
              fontFamily: 'Cormorant Garamond, serif',
              margin: 0
            }}>
              {filteredProducts.length} Produto{filteredProducts.length !== 1 ? 's' : ''} Encontrado{filteredProducts.length !== 1 ? 's' : ''}
            </h2>
            <p style={{
              color: '#6b6b6b',
              fontSize: '1rem',
              margin: 0
            }}>
              {selectedCategory !== 'todos' && `Categoria: ${categories.find(c => c.id === selectedCategory)?.name}`}
              {selectedCategory !== 'todos' && selectedColor !== 'todas' && ' • '}
              {selectedColor !== 'todas' && `Cor: ${selectedColor}`}
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              background: 'white',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(43, 74, 107, 0.1)'
            }}>
              <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🔍</div>
              <h3 style={{
                color: '#2B4A6B',
                marginBottom: '1rem',
                fontFamily: 'Cormorant Garamond, serif'
              }}>
                Nenhum produto encontrado
              </h3>
              <p style={{color: '#6b6b6b', marginBottom: '2rem'}}>
                Tente ajustar os filtros para encontrar o produto desejado.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('todos');
                  setSelectedColor('todas');
                }}
                style={{
                  background: 'linear-gradient(135deg, #40E0D0 0%, #7FFFD4 100%)',
                  color: 'white',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                Limpar Filtros
              </button>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {filteredProducts.map((product, index) => (
                <div
                  key={`${product.id}-${product.color}-${index}`}
                  style={{
                    background: 'white',
                    borderRadius: '25px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(43, 74, 107, 0.1)',
                    transition: 'all 0.4s ease',
                    border: '1px solid rgba(64, 224, 208, 0.1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 30px 80px rgba(43, 74, 107, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(43, 74, 107, 0.1)';
                  }}
                >
                  <div style={{position: 'relative', overflow: 'hidden'}}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(43, 74, 107, 0.9)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {product.color}
                    </div>
                  </div>
                  <div style={{padding: '2rem'}}>
                    <h3 style={{
                      color: '#2B4A6B',
                      fontSize: '1.5rem',
                      marginBottom: '1rem',
                      fontFamily: 'Cormorant Garamond, serif',
                      fontWeight: '600'
                    }}>
                      {product.name}
                    </h3>
                    <p style={{
                      color: '#6b6b6b',
                      lineHeight: '1.6',
                      marginBottom: '2rem',
                      fontSize: '0.95rem'
                    }}>
                      {product.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'center'
                    }}>
                      <button
                        onClick={() => handleWhatsApp(product)}
                        style={{
                          background: 'linear-gradient(135deg, #40E0D0 0%, #7FFFD4 100%)',
                          color: 'white',
                          padding: '0.8rem 1.5rem',
                          border: 'none',
                          borderRadius: '50px',
                          cursor: 'pointer',
                          fontWeight: '600',
                          fontSize: '0.85rem',
                          flex: 1,
                          transition: 'all 0.3s ease',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 10px 25px rgba(64, 224, 208, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        Solicitar Orçamento
                      </button>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: colors.find(c => c.id === product.color)?.color || '#40E0D0',
                        border: product.color === 'Branco' ? '2px solid #ddd' : 'none',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        flexShrink: 0
                      }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #2B4A6B 0%, #1e3a5f 100%)',
        color: 'white',
        padding: '6rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '700',
            marginBottom: '2rem',
            fontFamily: 'Cormorant Garamond, serif'
          }}>
            Não encontrou o que procura?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '3rem',
            opacity: 0.9,
            lineHeight: '1.6'
          }}>
            Desenvolvemos peças personalizadas sob medida para seu projeto. 
            Entre em contato e vamos criar algo único para você.
          </p>
          <button
            onClick={() => handleWhatsApp()}
            style={{
              background: 'linear-gradient(135deg, #40E0D0 0%, #7FFFD4 100%)',
              color: 'white',
              padding: '1.2rem 3rem',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'all 0.4s ease',
              boxShadow: '0 15px 40px rgba(64, 224, 208, 0.3)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(64, 224, 208, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(64, 224, 208, 0.3)';
            }}
          >
            Falar com Especialista
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.1; }
        }
        
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

