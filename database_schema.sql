-- Schema do banco de dados para o website Toque Ideal
-- Execute este script no SQL Editor do seu painel Supabase

-- Tabela de categorias
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabela de produtos
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR(100) NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  FOREIGN KEY (category) REFERENCES categories(name) ON UPDATE CASCADE
);

-- Tabela de usuários administrativos (além da auth.users do Supabase)
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  role VARCHAR(20) DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Inserir categorias iniciais
INSERT INTO categories (name, description) VALUES
('Acessórios para Banheiro', 'Produtos para decoração e funcionalidade do banheiro'),
('Decoração', 'Itens decorativos para ambientes'),
('Organizadores', 'Produtos para organização de espaços'),
('Iluminação', 'Luminárias e acessórios de iluminação'),
('Espelhos', 'Espelhos decorativos e funcionais')
ON CONFLICT (name) DO NOTHING;

-- Inserir alguns produtos de exemplo
INSERT INTO products (name, description, price, category, image_url) VALUES
('Porta Sabonete Líquido Premium', 'Porta sabonete líquido em aço inox escovado com acabamento premium', 89.90, 'Acessórios para Banheiro', NULL),
('Toalheiro de Parede Moderno', 'Toalheiro de parede em alumínio com design moderno e minimalista', 129.90, 'Acessórios para Banheiro', NULL),
('Espelho Decorativo Redondo', 'Espelho decorativo redondo com moldura dourada, 60cm de diâmetro', 199.90, 'Espelhos', NULL),
('Organizador de Bancada', 'Organizador multiuso para bancada de banheiro em acrílico transparente', 79.90, 'Organizadores', NULL),
('Luminária LED para Espelho', 'Luminária LED com luz branca neutra, ideal para espelhos de banheiro', 159.90, 'Iluminação', NULL)
ON CONFLICT DO NOTHING;

-- Criar índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_created_at ON products(created_at);
CREATE INDEX IF NOT EXISTS idx_categories_name ON categories(name);

-- Habilitar RLS (Row Level Security) para segurança
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Políticas de segurança para leitura pública
CREATE POLICY "Categories are viewable by everyone" ON categories
  FOR SELECT USING (true);

CREATE POLICY "Products are viewable by everyone" ON products
  FOR SELECT USING (true);

-- Políticas de segurança para administradores (apenas usuários autenticados podem modificar)
CREATE POLICY "Only authenticated users can insert categories" ON categories
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can update categories" ON categories
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can delete categories" ON categories
  FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can insert products" ON products
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can update products" ON products
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can delete products" ON products
  FOR DELETE USING (auth.role() = 'authenticated');

-- Políticas para admin_users (apenas o próprio usuário pode ver seus dados)
CREATE POLICY "Users can view own admin data" ON admin_users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can insert own admin data" ON admin_users
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own admin data" ON admin_users
  FOR UPDATE USING (auth.uid() = id);

