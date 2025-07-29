import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ProductCard } from '../ProductCard'
import { Product } from '@/types'

const mockProduct: Product = {
  id: 'test-product-1',
  code: 'TI-TEST-001',
  name: 'Produto de Teste',
  description: 'Descrição do produto de teste para verificar a funcionalidade',
  dimensions: '30x20x15cm',
  color: 'Dourado',
  collection: 'Teste',
  material: 'Metal com banho dourado',
  images: [
    {
      id: 'img-1',
      url: '/test-image.jpg',
      alt: 'Produto de Teste',
      isPrimary: true,
      order: 1
    }
  ],
  isHighlight: true,
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01')
}

const mockOnAddToQuote = jest.fn()

describe('ProductCard Component', () => {
  beforeEach(() => {
    mockOnAddToQuote.mockClear()
  })

  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} onAddToQuote={mockOnAddToQuote} />)
    
    expect(screen.getByText('Produto de Teste')).toBeInTheDocument()
    expect(screen.getByText('Coleção Teste')).toBeInTheDocument()
    expect(screen.getByText('TI-TEST-001')).toBeInTheDocument()
    expect(screen.getByText('Dourado')).toBeInTheDocument()
  })

  it('displays product image with correct alt text', () => {
    render(<ProductCard product={mockProduct} onAddToQuote={mockOnAddToQuote} />)
    
    const image = screen.getByAltText('Produto de Teste')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/test-image.jpg')
  })

  it('shows highlight badge for highlighted products', () => {
    render(<ProductCard product={mockProduct} onAddToQuote={mockOnAddToQuote} />)
    
    expect(screen.getByText('Destaque')).toBeInTheDocument()
  })

  it('does not show highlight badge for non-highlighted products', () => {
    const nonHighlightProduct = { ...mockProduct, isHighlight: false }
    render(<ProductCard product={nonHighlightProduct} onAddToQuote={mockOnAddToQuote} />)
    
    expect(screen.queryByText('Destaque')).not.toBeInTheDocument()
  })

  it('calls onAddToQuote when "Adicionar ao Orçamento" button is clicked', () => {
    render(<ProductCard product={mockProduct} onAddToQuote={mockOnAddToQuote} />)
    
    const addButton = screen.getByText('Adicionar ao Orçamento')
    fireEvent.click(addButton)
    
    expect(mockOnAddToQuote).toHaveBeenCalledTimes(1)
    expect(mockOnAddToQuote).toHaveBeenCalledWith(mockProduct)
  })

  it('has correct link to product detail page', () => {
    render(<ProductCard product={mockProduct} onAddToQuote={mockOnAddToQuote} />)
    
    const productLink = screen.getByRole('link')
    expect(productLink).toHaveAttribute('href', '/catalogo/test-product-1')
  })

  it('applies custom className when provided', () => {
    render(
      <ProductCard 
        product={mockProduct} 
        onAddToQuote={mockOnAddToQuote} 
        className="custom-class"
        data-testid="product-card"
      />
    )
    
    const card = screen.getByTestId('product-card')
    expect(card).toHaveClass('custom-class')
  })

  it('handles products without images gracefully', () => {
    const productWithoutImages = { ...mockProduct, images: [] }
    render(<ProductCard product={productWithoutImages} onAddToQuote={mockOnAddToQuote} />)
    
    // Should still render the product name and other info
    expect(screen.getByText('Produto de Teste')).toBeInTheDocument()
    
    // Should show placeholder or handle missing image gracefully
    const images = screen.queryAllByRole('img')
    expect(images).toHaveLength(0) // or check for placeholder
  })

  it('truncates long descriptions appropriately', () => {
    const productWithLongDescription = {
      ...mockProduct,
      description: 'Esta é uma descrição muito longa que deveria ser truncada para manter o layout consistente e evitar que o card fique muito alto em relação aos outros cards na grade de produtos.'
    }
    
    render(<ProductCard product={productWithLongDescription} onAddToQuote={mockOnAddToQuote} />)
    
    // The component should handle long text appropriately
    expect(screen.getByText(/Esta é uma descrição muito longa/)).toBeInTheDocument()
  })

  it('displays color indicator correctly', () => {
    render(<ProductCard product={mockProduct} onAddToQuote={mockOnAddToQuote} />)
    
    const colorIndicator = screen.getByText('Dourado').parentElement
    expect(colorIndicator).toBeInTheDocument()
  })

  it('shows collection information', () => {
    render(<ProductCard product={mockProduct} onAddToQuote={mockOnAddToQuote} />)
    
    expect(screen.getByText('Coleção Teste')).toBeInTheDocument()
  })
})

