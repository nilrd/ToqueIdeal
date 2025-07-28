import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toque Ideal - Artigos de Decoração Premium",
  description: "Há mais de 7 anos criando peças de decoração e acessórios para banheiro que combinam modernidade, qualidade e design sofisticado.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
        {children}
      </body>
    </html>
  );
}

