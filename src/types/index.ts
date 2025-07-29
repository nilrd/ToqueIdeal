// Tipos básicos para o sistema
export interface BaseComponent {
  id?: string
  className?: string
  children?: React.ReactNode
}

// Tipos para produtos
export interface Product {
  id: string
  code: string
  name: string
  description: string
  dimensions: string
  color: string
  collection: string
  material?: string
  images: ProductImage[]
  price?: number
  isHighlight?: boolean
  createdAt: Date
  updatedAt: Date
}

export interface ProductImage {
  id: string
  url: string
  alt: string
  isPrimary: boolean
  order: number
}

// Tipos para coleções
export interface Collection {
  id: string
  name: string
  description?: string
  image?: string
  products: Product[]
}

// Tipos para filtros
export interface ProductFilter {
  collections?: string[]
  colors?: string[]
  materials?: string[]
  priceRange?: {
    min: number
    max: number
  }
  search?: string
}

// Tipos para orçamento
export interface QuoteItem {
  productId: string
  product: Product
  quantity: number
  notes?: string
}

export interface Quote {
  id: string
  items: QuoteItem[]
  customerInfo: CustomerInfo
  representativeInfo?: string
  status: 'pending' | 'sent' | 'responded'
  createdAt: Date
  updatedAt: Date
}

export interface CustomerInfo {
  name: string
  email: string
  phone: string
  company?: string
  message?: string
}

// Tipos para usuários (admin)
export interface User {
  id: string
  name: string
  email: string
  role: 'super_admin' | 'editor'
  isActive: boolean
  createdAt: Date
  lastLogin?: Date
}

// Tipos para componentes UI
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

export type InputType = 'text' | 'email' | 'password' | 'tel' | 'url' | 'search'

// Tipos para navegação
export interface NavItem {
  label: string
  href: string
  icon?: React.ComponentType
  children?: NavItem[]
}

// Tipos para SEO
export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
}

