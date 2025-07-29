import { Metadata } from 'next'
import { Product } from '@/types'

const baseUrl = 'https://www.toqueideal.com.br'
const siteName = 'Toque Ideal'
const defaultDescription = 'Há mais de 7 anos criando peças de decoração e acessórios para banheiro que combinam modernidade, qualidade e design sofisticado.'

export function generateProductMetadata(product: Product): Metadata {
  const title = `${product.name} - ${product.collection} | ${siteName}`
  const description = `${product.description} Coleção ${product.collection} em ${product.color}. Material: ${product.material}. Dimensões: ${product.dimensions}.`
  const url = `${baseUrl}/catalogo/${product.id}`
  const primaryImage = product.images.find(img => img.isPrimary) || product.images[0]

  return {
    title,
    description,
    keywords: [
      product.name,
      product.collection,
      product.color,
      'decoração',
      'banheiro',
      'acessórios',
      'toque ideal',
      'design',
      'luxo'
    ],
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: primaryImage ? [
        {
          url: `${baseUrl}${primaryImage.url}`,
          width: 600,
          height: 600,
          alt: primaryImage.alt,
        }
      ] : [],
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: primaryImage ? [`${baseUrl}${primaryImage.url}`] : [],
    },
    alternates: {
      canonical: url,
    },
  }
}

export function generatePageMetadata(
  title: string,
  description?: string,
  path?: string
): Metadata {
  const fullTitle = `${title} | ${siteName}`
  const fullDescription = description || defaultDescription
  const url = path ? `${baseUrl}${path}` : baseUrl

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: [
      'toque ideal',
      'decoração',
      'banheiro',
      'acessórios',
      'design',
      'luxo',
      'qualidade',
      'sofisticação'
    ],
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName,
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
    },
    alternates: {
      canonical: url,
    },
  }
}

export function generateCollectionMetadata(collection: string): Metadata {
  const title = `Coleção ${collection}`
  const description = `Explore todos os produtos da Coleção ${collection} da Toque Ideal. Peças exclusivas de decoração e acessórios para banheiro com design sofisticado.`
  
  return generatePageMetadata(title, description, `/catalogo?collection=${collection}`)
}

// Dados estruturados para produtos
export function generateProductStructuredData(product: Product) {
  const primaryImage = product.images.find(img => img.isPrimary) || product.images[0]
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'Toque Ideal'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Toque Ideal'
    },
    image: primaryImage ? `${baseUrl}${primaryImage.url}` : undefined,
    color: product.color,
    material: product.material,
    category: product.collection,
    sku: product.code,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'BRL',
      seller: {
        '@type': 'Organization',
        name: 'Toque Ideal'
      }
    }
  }
}

// Dados estruturados para a organização
export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Toque Ideal',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description: defaultDescription,
    foundingDate: '2017',
    founders: [
      {
        '@type': 'Person',
        name: 'Devid Bomfim'
      },
      {
        '@type': 'Person',
        name: 'Luana Andrade'
      }
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-11-99999-9999',
      contactType: 'customer service',
      availableLanguage: 'Portuguese'
    },
    sameAs: [
      'https://instagram.com/toqueideal',
      'https://facebook.com/toqueideal',
      'https://pinterest.com/toqueideal'
    ]
  }
}

