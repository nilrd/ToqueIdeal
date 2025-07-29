import { Product } from '@/types'

// Dados dos produtos baseados no catálogo da Toque Ideal
export const products: Product[] = [
  // Coleção Dourada
  {
    id: 'dourado-001',
    code: 'TI-DOU-001',
    name: 'Conjunto Banheiro Dourado Luxo',
    description: 'Conjunto completo para banheiro com acabamento dourado premium, incluindo porta sabonete, porta escova e dispenser',
    dimensions: '30x20x15cm',
    color: 'Dourado',
    collection: 'Dourada',
    material: 'Metal com banho dourado 24k',
    images: [
      {
        id: 'dou-001-1',
        url: '/images/products/dourado-conjunto-luxo-1.jpg',
        alt: 'Conjunto Banheiro Dourado Luxo - Vista frontal',
        isPrimary: true,
        order: 1
      },
      {
        id: 'dou-001-2',
        url: '/images/products/dourado-conjunto-luxo-2.jpg',
        alt: 'Conjunto Banheiro Dourado Luxo - Vista lateral',
        isPrimary: false,
        order: 2
      }
    ],
    isHighlight: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'dourado-002',
    code: 'TI-DOU-002',
    name: 'Porta Sabonete Dourado Elegance',
    description: 'Porta sabonete individual com design sofisticado e acabamento dourado brilhante',
    dimensions: '15x10x8cm',
    color: 'Dourado',
    collection: 'Dourada',
    material: 'Metal com banho dourado',
    images: [
      {
        id: 'dou-002-1',
        url: '/images/products/dourado-porta-sabonete-1.jpg',
        alt: 'Porta Sabonete Dourado Elegance',
        isPrimary: true,
        order: 1
      }
    ],
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },

  // Coleção Prata
  {
    id: 'prata-001',
    code: 'TI-PRA-001',
    name: 'Conjunto Banheiro Prata Premium',
    description: 'Conjunto completo em prata com design moderno e funcional',
    dimensions: '28x18x14cm',
    color: 'Prata',
    collection: 'Prata',
    material: 'Metal cromado premium',
    images: [
      {
        id: 'pra-001-1',
        url: '/images/products/prata-conjunto-premium-1.jpg',
        alt: 'Conjunto Banheiro Prata Premium',
        isPrimary: true,
        order: 1
      }
    ],
    isHighlight: true,
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01')
  },

  // Coleção Bronze
  {
    id: 'bronze-001',
    code: 'TI-BRO-001',
    name: 'Dispenser Bronze Antique',
    description: 'Dispenser de sabão líquido com acabamento bronze envelhecido',
    dimensions: '12x8x20cm',
    color: 'Bronze',
    collection: 'Bronze',
    material: 'Metal com pátina bronze',
    images: [
      {
        id: 'bro-001-1',
        url: '/images/products/bronze-dispenser-antique-1.jpg',
        alt: 'Dispenser Bronze Antique',
        isPrimary: true,
        order: 1
      }
    ],
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-10')
  },

  // Coleção Colors
  {
    id: 'colors-001',
    code: 'TI-COL-001',
    name: 'Conjunto Colors Turquesa',
    description: 'Conjunto vibrante em turquesa para banheiros modernos',
    dimensions: '25x15x12cm',
    color: 'Turquesa',
    collection: 'Colors',
    material: 'Cerâmica esmaltada',
    images: [
      {
        id: 'col-001-1',
        url: '/images/products/colors-turquesa-conjunto-1.jpg',
        alt: 'Conjunto Colors Turquesa',
        isPrimary: true,
        order: 1
      }
    ],
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-02-15')
  },
  {
    id: 'colors-002',
    code: 'TI-COL-002',
    name: 'Porta Escova Colors Vermelho',
    description: 'Porta escova de dente em vermelho vibrante',
    dimensions: '8x8x12cm',
    color: 'Vermelho',
    collection: 'Colors',
    material: 'Cerâmica esmaltada',
    images: [
      {
        id: 'col-002-1',
        url: '/images/products/colors-vermelho-porta-escova-1.jpg',
        alt: 'Porta Escova Colors Vermelho',
        isPrimary: true,
        order: 1
      }
    ],
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-02-20')
  },

  // Coleção Branco
  {
    id: 'branco-001',
    code: 'TI-BRA-001',
    name: 'Conjunto Branco Clássico',
    description: 'Conjunto atemporal em branco puro com linhas clássicas',
    dimensions: '30x20x15cm',
    color: 'Branco',
    collection: 'Branco',
    material: 'Porcelana premium',
    images: [
      {
        id: 'bra-001-1',
        url: '/images/products/branco-conjunto-classico-1.jpg',
        alt: 'Conjunto Branco Clássico',
        isPrimary: true,
        order: 1
      }
    ],
    isHighlight: true,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  },

  // Coleção Preto
  {
    id: 'preto-001',
    code: 'TI-PRE-001',
    name: 'Conjunto Preto Minimalista',
    description: 'Design minimalista em preto fosco para ambientes contemporâneos',
    dimensions: '26x16x13cm',
    color: 'Preto',
    collection: 'Preto',
    material: 'Metal com acabamento fosco',
    images: [
      {
        id: 'pre-001-1',
        url: '/images/products/preto-conjunto-minimalista-1.jpg',
        alt: 'Conjunto Preto Minimalista',
        isPrimary: true,
        order: 1
      }
    ],
    isHighlight: true,
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-01')
  },

  // Coleção Grafite
  {
    id: 'grafite-001',
    code: 'TI-GRA-001',
    name: 'Dispenser Grafite Industrial',
    description: 'Dispenser com design industrial em grafite texturizado',
    dimensions: '10x10x22cm',
    color: 'Grafite',
    collection: 'Grafite',
    material: 'Alumínio anodizado',
    images: [
      {
        id: 'gra-001-1',
        url: '/images/products/grafite-dispenser-industrial-1.jpg',
        alt: 'Dispenser Grafite Industrial',
        isPrimary: true,
        order: 1
      }
    ],
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-03-05')
  },

  // Coleção Mel
  {
    id: 'mel-001',
    code: 'TI-MEL-001',
    name: 'Conjunto Mel Aconchegante',
    description: 'Conjunto em tom mel para criar ambientes acolhedores',
    dimensions: '28x18x14cm',
    color: 'Mel',
    collection: 'Mel',
    material: 'Cerâmica com esmalte especial',
    images: [
      {
        id: 'mel-001-1',
        url: '/images/products/mel-conjunto-aconchegante-1.jpg',
        alt: 'Conjunto Mel Aconchegante',
        isPrimary: true,
        order: 1
      }
    ],
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10')
  },

  // Coleção Provençal
  {
    id: 'provencal-001',
    code: 'TI-PRO-001',
    name: 'Conjunto Provençal Romântico',
    description: 'Conjunto com detalhes florais e acabamento provençal',
    dimensions: '32x22x16cm',
    color: 'Branco Provençal',
    collection: 'Provençal',
    material: 'Porcelana com detalhes em relevo',
    images: [
      {
        id: 'pro-001-1',
        url: '/images/products/provencal-conjunto-romantico-1.jpg',
        alt: 'Conjunto Provençal Romântico',
        isPrimary: true,
        order: 1
      }
    ],
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-03-15')
  }
]

// Coleções disponíveis
export const collections = [
  { id: 'dourada', name: 'Coleção Dourada', description: 'Elegância e sofisticação em dourado premium' },
  { id: 'prata', name: 'Coleção Prata', description: 'Modernidade e brilho em acabamento cromado' },
  { id: 'bronze', name: 'Coleção Bronze', description: 'Charme clássico com pátina bronze' },
  { id: 'colors', name: 'Coleção Colors', description: 'Cores vibrantes para ambientes alegres' },
  { id: 'branco', name: 'Coleção Branco', description: 'Pureza e atemporalidade em branco' },
  { id: 'preto', name: 'Coleção Preto', description: 'Sofisticação contemporânea em preto' },
  { id: 'grafite', name: 'Coleção Grafite', description: 'Design industrial em grafite' },
  { id: 'mel', name: 'Coleção Mel', description: 'Aconchego e calor em tons de mel' },
  { id: 'provencal', name: 'Coleção Provençal', description: 'Romance e delicadeza provençal' }
]

// Cores disponíveis
export const colors = [
  'Dourado',
  'Prata', 
  'Bronze',
  'Turquesa',
  'Vermelho',
  'Branco',
  'Preto',
  'Grafite',
  'Mel',
  'Branco Provençal'
]

// Materiais disponíveis
export const materials = [
  'Metal com banho dourado 24k',
  'Metal com banho dourado',
  'Metal cromado premium',
  'Metal com pátina bronze',
  'Cerâmica esmaltada',
  'Porcelana premium',
  'Metal com acabamento fosco',
  'Alumínio anodizado',
  'Cerâmica com esmalte especial',
  'Porcelana com detalhes em relevo'
]

