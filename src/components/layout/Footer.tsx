import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/toqueideal', icon: '📷' },
    { name: 'Facebook', href: 'https://facebook.com/toqueideal', icon: '📘' },
    { name: 'Pinterest', href: 'https://pinterest.com/toqueideal', icon: '📌' },
    { name: 'YouTube', href: 'https://youtube.com/toqueideal', icon: '📺' },
  ]
  
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Catálogo', href: '/catalogo' },
    { name: 'Contato', href: '/contato' },
  ]
  
  const collections = [
    { name: 'Coleção Dourada', href: '/catalogo?collection=dourada' },
    { name: 'Coleção Prata', href: '/catalogo?collection=prata' },
    { name: 'Coleção Bronze', href: '/catalogo?collection=bronze' },
    { name: 'Coleção Colors', href: '/catalogo?collection=colors' },
  ]
  
  return (
    <footer className="bg-accent-950 text-white">
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="text-3xl font-display font-bold text-gradient-gold">
                Toque Ideal
              </div>
            </Link>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Há mais de 7 anos criando peças de decoração e acessórios para banheiro que combinam modernidade, qualidade e design sofisticado.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-primary-400">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Coleções */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-primary-400">
              Coleções
            </h3>
            <ul className="space-y-3">
              {collections.map((collection) => (
                <li key={collection.name}>
                  <Link
                    href={collection.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {collection.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-6 text-primary-400">
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-primary-400 mt-1">📧</span>
                <div>
                  <p className="text-secondary-300">Email</p>
                  <a
                    href="mailto:contato@toqueideal.com.br"
                    className="text-white hover:text-primary-400 transition-colors duration-300"
                  >
                    contato@toqueideal.com.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-primary-400 mt-1">📱</span>
                <div>
                  <p className="text-secondary-300">WhatsApp</p>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-400 transition-colors duration-300"
                  >
                    (11) 99999-9999
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-primary-400 mt-1">🌐</span>
                <div>
                  <p className="text-secondary-300">Website</p>
                  <span className="text-white">www.toqueideal.com.br</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Linha divisória */}
        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © {currentYear} Toque Ideal. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/politica-privacidade"
                className="text-secondary-400 hover:text-primary-400 transition-colors duration-300"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos-uso"
                className="text-secondary-400 hover:text-primary-400 transition-colors duration-300"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

