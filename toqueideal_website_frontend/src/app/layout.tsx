import type { Metadata } from 'next'
import './globals.css'
import { Header, Footer } from '@/components/layout'
import { generateOrganizationStructuredData } from '@/lib/metadata'

export const metadata: Metadata = {
  title: {
    default: 'Toque Ideal - Artigos de Decoração e Itens para Banheiro',
    template: '%s | Toque Ideal'
  },
  description: 'Há mais de 7 anos criando peças de decoração e acessórios para banheiro que combinam modernidade, qualidade e design sofisticado.',
  keywords: ['decoração', 'banheiro', 'acessórios', 'design', 'luxo', 'qualidade', 'toque ideal'],
  authors: [{ name: 'Toque Ideal' }],
  creator: 'Toque Ideal',
  publisher: 'Toque Ideal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.toqueideal.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.toqueideal.com.br',
    siteName: 'Toque Ideal',
    title: 'Toque Ideal - Artigos de Decoração e Itens para Banheiro',
    description: 'Há mais de 7 anos criando peças de decoração e acessórios para banheiro que combinam modernidade, qualidade e design sofisticado.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Toque Ideal - Artigos de Decoração',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toque Ideal - Artigos de Decoração e Itens para Banheiro',
    description: 'Há mais de 7 anos criando peças de decoração e acessórios para banheiro que combinam modernidade, qualidade e design sofisticado.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationStructuredData())
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

