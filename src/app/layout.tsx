import type { Metadata } from 'next'
import './globals.css'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Toque Ideal - Artigos de Decoração Premium',
  description: 'Centros de mesa, cubas decorativas e acessórios para banheiro em vidro premium. Há mais de 7 anos criando peças que combinam modernidade, qualidade e design sofisticado.',
  keywords: 'decoração, vidro, centros de mesa, cubas, acessórios banheiro, design, premium',
  authors: [{ name: 'Toque Ideal' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        {/* O ThemeToggle pode ser colocado em um componente de Header ou em um layout específico para o site */}
        {/* <ThemeToggle /> */}
        {children}
      </body>
    </html>
  )
}

