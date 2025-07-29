import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/app/page'

// Mock do Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    
    // Verifica se existe o título principal da Toque Ideal
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/Toque Ideal/i)
  })

  it('renders the hero section', () => {
    render(<Home />)
    
    // Verifica se existe a seção hero
    const heroText = screen.getByText(/Artigos de Decoração/i)
    expect(heroText).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<Home />)
    
    // Verifica se existe a seção "Quem Somos"
    const aboutSection = screen.getByText(/Quem Somos/i)
    expect(aboutSection).toBeInTheDocument()
  })

  it('renders product highlights', () => {
    render(<Home />)
    
    // Verifica se existe a seção de produtos em destaque
    const productsSection = screen.getByText(/Produtos em Destaque/i)
    expect(productsSection).toBeInTheDocument()
  })

  it('renders call-to-action buttons', () => {
    render(<Home />)
    
    // Verifica se existem botões de ação
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })
})

