import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X, MessageCircle, Search, User, Heart, Mail, Phone } from 'lucide-react'
import AdminPanel from './components/AdminPanel.jsx'
import './App.css'

// Dados de exemplo para produtos (catálogo para orçamentos)
const products = [
  {
    id: 1,
    name: "Sofá Elegante Premium",
    description: "Sofá de alta qualidade com design contemporâneo, ideal para ambientes sofisticados.",
    image: "/1.png",
    category: "Sofás"
  },
  {
    id: 2,
    name: "Mesa de Centro Moderna",
    description: "Mesa de centro com design minimalista e acabamento premium.",
    image: "/3.png",
    category: "Mesas"
  },
  {
    id: 3,
    name: "Poltrona de Design",
    description: "Poltrona ergonômica com design exclusivo para projetos de arquitetura.",
    image: "/4.png",
    category: "Poltronas"
  },
  {
    id: 4,
    name: "Luminária Sofisticada",
    description: "Luminária de design único que combina funcionalidade e elegância.",
    image: "/1.png",
    category: "Iluminação"
  }
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [quoteFormOpen, setQuoteFormOpen] = useState(false)
  const [showAdmin, setShowAdmin] = useState(false)

  const requestQuote = (product) => {
    setSelectedProduct(product)
    setQuoteFormOpen(true)
  }

  const closeQuoteForm = () => {
    setQuoteFormOpen(false)
    setSelectedProduct(null)
  }

  // Se estiver no modo admin, mostrar o painel administrativo
  if (showAdmin) {
    return <AdminPanel />
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="header-nav sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img src="/retangularlogo.png" alt="Toque Ideal" className="h-8 w-auto" />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="nav-link">Início</a>
              <a href="#catalog" className="nav-link">Catálogo</a>
              <a href="#about" className="nav-link">Sobre</a>
              <a href="#contact" className="nav-link">Contato</a>
              <button onClick={() => setShowAdmin(true)} className="nav-link">Admin</button>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-gold">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-gold">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-gold">
                <Phone className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
              <div className="flex flex-col space-y-2">
                <a href="#home" className="nav-link">Início</a>
                <a href="#catalog" className="nav-link">Catálogo</a>
                <a href="#about" className="nav-link">Sobre</a>
                <a href="#contact" className="nav-link">Contato</a>
                <button onClick={() => setShowAdmin(true)} className="nav-link text-left">Admin</button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="hero-title">
            Transforme Seu Espaço com Elegância
          </h1>
          <p className="hero-subtitle">
            Móveis e decorações premium para arquitetos, designers e pessoas que valorizam a sofisticação em cada detalhe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="btn-primary">
              Explorar Catálogo
            </Button>
            <Button variant="outline" className="btn-secondary">
              Falar com Consultor
            </Button>
          </div>
        </div>
      </section>

      {/* Catálogo Section */}
      <section id="catalog" className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Catálogo Premium</h2>
            <p className="section-subtitle">
              Descubra nossa seleção exclusiva de móveis e decorações que combinam design sofisticado com qualidade excepcional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-image"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                  <h3 className="text-lg font-semibold text-navy-dark mb-3">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex flex-col gap-2">
                    <Button 
                      className="btn-primary w-full"
                      onClick={() => requestQuote(product)}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Solicitar Orçamento
                    </Button>
                    <Button 
                      variant="outline" 
                      className="btn-secondary w-full"
                      onClick={() => window.open(`https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre: ${product.name}`, '_blank')}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">Sobre a Toque Ideal</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Há mais de uma década, a Toque Ideal é referência em móveis e decorações premium para profissionais da arquitetura e design de interiores.
            </p>
            <p className="text-lg text-muted-foreground mb-12">
              Nossa missão é oferecer peças exclusivas que transformam ambientes em verdadeiras obras de arte, combinando funcionalidade, beleza e qualidade excepcional.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">500+</div>
                <div className="text-muted-foreground">Projetos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">15+</div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contact" className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">Entre em Contato</h2>
            <p className="section-subtitle mb-8">
              Pronto para transformar seu projeto? Nossa equipe de especialistas está aqui para ajudar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">
                Solicitar Orçamento
              </Button>
              <Button variant="outline" className="btn-secondary">
                Agendar Visita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/retangularlogo.png" alt="Toque Ideal" className="h-8 w-auto mb-4" />
              <p className="text-sm text-gray-300">
                Transformando espaços com elegância e sofisticação há mais de uma década.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Navegação</h3>
              <div className="space-y-2">
                <a href="#home" className="block text-sm text-gray-300 hover:text-white">Início</a>
                <a href="#catalog" className="block text-sm text-gray-300 hover:text-white">Catálogo</a>
                <a href="#about" className="block text-sm text-gray-300 hover:text-white">Sobre</a>
                <a href="#contact" className="block text-sm text-gray-300 hover:text-white">Contato</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Categorias</h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-300 hover:text-white">Sofás</a>
                <a href="#" className="block text-sm text-gray-300 hover:text-white">Mesas</a>
                <a href="#" className="block text-sm text-gray-300 hover:text-white">Poltronas</a>
                <a href="#" className="block text-sm text-gray-300 hover:text-white">Iluminação</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>contato@toqueideal.com.br</p>
                <p>(11) 99999-9999</p>
                <p>São Paulo, SP</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-300">
              © 2024 Toque Ideal. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div 
        className="whatsapp-float"
        onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento.', '_blank')}
      >
        <MessageCircle className="h-6 w-6" />
      </div>

      {/* Quote Form Modal */}
      {quoteFormOpen && (
        <>
          <div className="overlay active" onClick={closeQuoteForm} />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Solicitar Orçamento</h3>
                  <Button variant="ghost" size="icon" onClick={closeQuoteForm}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                {selectedProduct && (
                  <div className="mb-6">
                    <div className="flex items-center gap-4 p-4 border rounded-lg bg-light-gray">
                      <img 
                        src={selectedProduct.image} 
                        alt={selectedProduct.name} 
                        className="w-16 h-16 object-cover rounded" 
                      />
                      <div>
                        <h4 className="font-medium">{selectedProduct.name}</h4>
                        <p className="text-sm text-muted-foreground">{selectedProduct.category}</p>
                      </div>
                    </div>
                  </div>
                )}

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Empresa/Projeto</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="Nome da empresa ou projeto"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem</label>
                    <textarea 
                      rows="4"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="Descreva seu projeto e necessidades..."
                    ></textarea>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      type="button"
                      variant="outline" 
                      className="flex-1"
                      onClick={closeQuoteForm}
                    >
                      Cancelar
                    </Button>
                    <Button 
                      type="submit"
                      className="btn-primary flex-1"
                    >
                      Enviar Solicitação
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default App

