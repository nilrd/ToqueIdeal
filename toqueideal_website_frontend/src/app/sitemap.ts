import { MetadataRoute } from 'next'
import { products } from '@/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.toqueideal.com.br'
  
  // URLs estáticas
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/quem-somos`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/catalogo`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lancamentos`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/politica-privacidade`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/termos-uso`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // URLs dinâmicas dos produtos
  const productUrls = products.map((product) => ({
    url: `${baseUrl}/catalogo/${product.id}`,
    lastModified: new Date(product.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticUrls, ...productUrls]
}

