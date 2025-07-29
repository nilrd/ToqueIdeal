import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from '../Button'

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button>Test Button</Button>)
    expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument()
  })

  it('applies primary variant styles by default', () => {
    render(<Button>Primary Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-gradient-to-r', 'from-primary-500', 'to-primary-600')
  })

  it('applies secondary variant styles', () => {
    render(<Button variant="secondary">Secondary Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-white', 'border-2', 'border-secondary-300')
  })

  it('applies outline variant styles', () => {
    render(<Button variant="outline">Outline Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-transparent', 'border-2', 'border-primary-500')
  })

  it('applies different sizes correctly', () => {
    const { rerender } = render(<Button size="sm">Small</Button>)
    expect(screen.getByRole('button')).toHaveClass('px-4', 'py-2', 'text-sm')

    rerender(<Button size="md">Medium</Button>)
    expect(screen.getByRole('button')).toHaveClass('px-6', 'py-3', 'text-base')

    rerender(<Button size="lg">Large</Button>)
    expect(screen.getByRole('button')).toHaveClass('px-8', 'py-4', 'text-lg')
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>)
    const button = screen.getByRole('button')
    
    expect(button).toBeDisabled()
    expect(button).toHaveClass('opacity-50', 'cursor-not-allowed')
  })

  it('shows loading state', () => {
    render(<Button loading>Loading Button</Button>)
    const button = screen.getByRole('button')
    
    expect(button).toBeDisabled()
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<Button ref={ref}>Ref Button</Button>)
    
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('renders as different HTML element when "as" prop is provided', () => {
    render(<Button as="a" href="/test">Link Button</Button>)
    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test')
  })
})

