import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Card } from '../Card'

describe('Card Component', () => {
  it('renders card with children', () => {
    render(
      <Card>
        <h2>Card Title</h2>
        <p>Card content</p>
      </Card>
    )
    
    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('applies default variant styles', () => {
    render(<Card data-testid="card">Default Card</Card>)
    const card = screen.getByTestId('card')
    
    expect(card).toHaveClass('bg-white', 'border', 'border-secondary-200', 'rounded-lg', 'shadow-sm')
  })

  it('applies luxury variant styles', () => {
    render(<Card variant="luxury" data-testid="card">Luxury Card</Card>)
    const card = screen.getByTestId('card')
    
    expect(card).toHaveClass('bg-white', 'border-2', 'border-primary-200', 'rounded-xl', 'shadow-luxury')
  })

  it('applies elevated variant styles', () => {
    render(<Card variant="elevated" data-testid="card">Elevated Card</Card>)
    const card = screen.getByTestId('card')
    
    expect(card).toHaveClass('bg-white', 'rounded-lg', 'shadow-lg')
  })

  it('applies custom className', () => {
    render(<Card className="custom-class" data-testid="card">Custom Card</Card>)
    const card = screen.getByTestId('card')
    
    expect(card).toHaveClass('custom-class')
  })

  it('has correct padding by default', () => {
    render(<Card data-testid="card">Padded Card</Card>)
    const card = screen.getByTestId('card')
    
    expect(card).toHaveClass('p-6')
  })

  it('can override padding with custom className', () => {
    render(<Card className="p-4" data-testid="card">Custom Padding</Card>)
    const card = screen.getByTestId('card')
    
    expect(card).toHaveClass('p-4')
  })

  it('forwards additional props', () => {
    render(
      <Card data-testid="card" role="region" aria-label="Test card">
        Card with props
      </Card>
    )
    const card = screen.getByTestId('card')
    
    expect(card).toHaveAttribute('role', 'region')
    expect(card).toHaveAttribute('aria-label', 'Test card')
  })

  it('renders as different HTML element when "as" prop is provided', () => {
    render(
      <Card as="section" data-testid="card">
        Section Card
      </Card>
    )
    const card = screen.getByTestId('card')
    
    expect(card.tagName).toBe('SECTION')
  })
})

