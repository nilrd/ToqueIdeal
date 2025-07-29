import React from 'react'
import { BaseComponent } from '@/types'

interface CardProps extends BaseComponent {
  variant?: 'default' | 'luxury' | 'product' | 'testimonial'
  hoverable?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

const Card: React.FC<CardProps> = ({
  variant = 'default',
  hoverable = true,
  padding = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'bg-white rounded-xl transition-all duration-300'
  
  const variantClasses = {
    default: 'shadow-md hover:shadow-lg',
    luxury: 'shadow-luxury hover:shadow-luxury-hover',
    product: 'shadow-md hover:shadow-xl border border-secondary-100',
    testimonial: 'shadow-lg bg-gradient-to-br from-white to-secondary-50'
  }
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  }
  
  const hoverClasses = hoverable ? 'transform hover:-translate-y-1 cursor-pointer' : ''
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Card

