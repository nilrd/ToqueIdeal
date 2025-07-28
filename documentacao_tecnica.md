# Documentação Técnica - Site Toque Ideal

## 1. Visão Geral do Projeto

### 1.1 Objetivo
Desenvolvimento de um site premium para a empresa Toque Ideal, especializada em artigos de decoração de alto padrão (centros de mesa, cubas decorativas e acessórios para banheiro em vidro).

### 1.2 Tecnologias Utilizadas
- **Frontend**: Next.js 15.4.4 (React)
- **Backend**: Next.js API Routes + Supabase
- **Banco de Dados**: PostgreSQL (Supabase)
- **Estilização**: CSS customizado + Tailwind CSS
- **Deploy**: Vercel
- **Controle de Versão**: Git/GitHub

### 1.3 Arquitetura
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   API Routes    │    │   Supabase      │
│   (Next.js)     │◄──►│   (Next.js)     │◄──►│   (PostgreSQL)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Vercel        │    │   Serverless    │    │   Cloud DB      │
│   (Deploy)      │    │   Functions     │    │   (Managed)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 2. Estrutura do Banco de Dados

### 2.1 Tabelas Principais

#### products
```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  color VARCHAR(50),
  image VARCHAR(500),
  available_colors TEXT[], -- Array de cores disponíveis
  available_sizes TEXT[],  -- Array de tamanhos disponíveis
  price DECIMAL(10,2),     -- Preço (opcional)
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### categories
```sql
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### events
```sql
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  event_date DATE,
  location VARCHAR(255),
  image VARCHAR(500),
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### quotes
```sql
CREATE TABLE quotes (
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(255),
  customer_email VARCHAR(255),
  customer_phone VARCHAR(50),
  representative_id INTEGER REFERENCES representatives(id),
  items JSONB, -- Array de produtos solicitados
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### representatives
```sql
CREATE TABLE representatives (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(50),
  region VARCHAR(100),
  commission_rate DECIMAL(5,2),
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### job_positions
```sql
CREATE TABLE job_positions (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  requirements TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### job_applications
```sql
CREATE TABLE job_applications (
  id SERIAL PRIMARY KEY,
  position_id INTEGER REFERENCES job_positions(id),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(50),
  linkedin_url VARCHAR(500),
  resume_url VARCHAR(500),
  cover_letter TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### admin_users
```sql
CREATE TABLE admin_users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'admin',
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 3. Funcionalidades Implementadas

### 3.1 Sistema de Carrinho de Orçamento
- **Problema resolvido**: Cliente não precisa mais clicar múltiplas vezes
- **Funcionalidades**:
  - Adicionar produtos ao carrinho
  - Selecionar cor e tamanho
  - Definir quantidade
  - Visualizar resumo do carrinho
  - Enviar orçamento completo via WhatsApp
  - Persistência no localStorage

### 3.2 Catálogo Avançado
- **Filtros**: Por categoria e cor
- **Busca**: Por nome do produto
- **Ordenação**: Por nome, categoria, cor
- **Visualização**: Grid responsivo
- **Produtos**: 20+ produtos reais com fotos

### 3.3 Modo Escuro (Azul Petróleo)
- **Toggle**: Alternância entre modo claro e escuro
- **Persistência**: Salva preferência do usuário
- **Cores**: Baseadas na identidade da marca
- **Responsivo**: Funciona em todos os dispositivos

### 3.4 Integração de Redes Sociais
- **Instagram**: Link ativo
- **Facebook, TikTok, YouTube, Pinterest**: Links preparados (inativos)
- **Posicionamento**: Header e footer
- **Ícones**: SVG otimizados

### 3.5 Páginas Adicionais

#### Eventos e Feiras
- **Listagem**: Eventos futuros e passados
- **Detalhes**: Data, local, descrição
- **Imagens**: Galeria de fotos dos eventos
- **Administração**: Via painel CRM

#### Trabalhe Conosco
- **Formulário**: Cadastro de currículo
- **Upload**: Anexo de arquivos
- **LinkedIn**: Integração opcional
- **Cargos**: Lista dinâmica editável via CRM

#### Seja um Representante
- **Formulário específico**: Campos para vendas
- **Informações**: Região, experiência, etc.
- **Aprovação**: Sistema de análise via CRM

### 3.6 Formulários Avançados

#### Contato com Rastreamento
- **Campos obrigatórios**: Nome, email, telefone
- **Representante**: Campo opcional para identificar origem
- **Mensagem**: Texto livre
- **Integração**: Salva no banco para análise

## 4. Sistema CRM/Painel Administrativo

### 4.1 Funcionalidades do CRM
- **Dashboard**: Visão geral de métricas
- **Gestão de Produtos**: CRUD completo
- **Gestão de Eventos**: Adicionar/editar eventos
- **Orçamentos**: Visualizar e gerenciar solicitações
- **Representantes**: Cadastro e aprovação
- **Candidatos**: Gestão de currículos
- **Cargos**: Editar posições disponíveis

### 4.2 Acesso ao CRM
- **URL**: `/admin`
- **Autenticação**: Email/senha
- **Segurança**: JWT tokens, sessões seguras
- **Permissões**: Baseadas em roles

### 4.3 Interface do CRM
- **Design**: Limpo e funcional
- **Responsivo**: Funciona em desktop e tablet
- **Navegação**: Menu lateral intuitivo
- **Filtros**: Busca e ordenação em todas as listas

## 5. APIs Desenvolvidas

### 5.1 Produtos
- `GET /api/products` - Lista todos os produtos
- `GET /api/products/[id]` - Produto específico
- `POST /api/products` - Criar produto (admin)
- `PUT /api/products/[id]` - Editar produto (admin)
- `DELETE /api/products/[id]` - Remover produto (admin)

### 5.2 Categorias
- `GET /api/categories` - Lista categorias
- `POST /api/categories` - Criar categoria (admin)

### 5.3 Eventos
- `GET /api/events` - Lista eventos
- `POST /api/events` - Criar evento (admin)
- `PUT /api/events/[id]` - Editar evento (admin)

### 5.4 Orçamentos
- `POST /api/quotes` - Criar orçamento
- `GET /api/quotes` - Listar orçamentos (admin)
- `PUT /api/quotes/[id]` - Atualizar status (admin)

### 5.5 Representantes
- `POST /api/representatives` - Cadastro de representante
- `GET /api/representatives` - Listar representantes (admin)
- `PUT /api/representatives/[id]` - Aprovar/rejeitar (admin)

### 5.6 Vagas
- `GET /api/jobs` - Lista vagas ativas
- `POST /api/jobs/apply` - Candidatar-se
- `GET /api/jobs/applications` - Listar candidatos (admin)

### 5.7 Autenticação
- `POST /api/auth/login` - Login do admin
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Dados do usuário logado

## 6. Configuração e Deploy

### 6.1 Variáveis de Ambiente
```env
NEXT_PUBLIC_SUPABASE_URL=https://pmfhhngnugtpqihttvkx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
JWT_SECRET=sua_chave_secreta_aqui
ADMIN_EMAIL=admin@toqueideal.com.br
ADMIN_PASSWORD_HASH=hash_da_senha_admin
```

### 6.2 Deploy na Vercel
1. **Repositório**: GitHub conectado
2. **Build**: Automático a cada push
3. **Domínio**: Configurado pela Vercel
4. **Variáveis**: Configuradas no painel da Vercel

### 6.3 Configuração do Supabase
1. **Projeto criado**: pmfhhngnugtpqihttvkx
2. **Tabelas**: Criadas via SQL
3. **RLS**: Políticas de segurança configuradas
4. **API**: Chaves configuradas

## 7. Melhorias Visuais

### 7.1 Banners
- **Hero Section**: Banner principal com produto em destaque
- **Eventos**: Banner para ABCASA e outras feiras
- **Qualidade**: Banner destacando alto padrão
- **Produtos**: Galeria de produtos em uso

### 7.2 Design System
- **Cores primárias**: Azul petróleo (#2B4A6B), Turquesa (#40E0D0)
- **Tipografia**: Playfair Display (títulos), Inter (textos)
- **Espaçamento**: Grid de 8px
- **Sombras**: Sutis e elegantes
- **Animações**: Transições suaves

### 7.3 Responsividade
- **Mobile First**: Design otimizado para celular
- **Breakpoints**: 768px (tablet), 1024px (desktop)
- **Imagens**: Otimizadas para diferentes tamanhos
- **Menu**: Hamburger menu no mobile

## 8. Performance e SEO

### 8.1 Otimizações
- **Images**: Next.js Image component
- **Lazy Loading**: Carregamento sob demanda
- **Minificação**: CSS e JS otimizados
- **Caching**: Headers de cache configurados

### 8.2 SEO
- **Meta tags**: Título, descrição, keywords
- **Open Graph**: Compartilhamento em redes sociais
- **Sitemap**: Gerado automaticamente
- **Schema.org**: Dados estruturados

## 9. Segurança

### 9.1 Medidas Implementadas
- **HTTPS**: Certificado SSL via Vercel
- **CORS**: Configurado adequadamente
- **Sanitização**: Inputs validados
- **Rate Limiting**: Proteção contra spam
- **JWT**: Tokens seguros para admin

### 9.2 Backup e Recuperação
- **Supabase**: Backup automático
- **GitHub**: Controle de versão
- **Vercel**: Deploy rollback disponível

## 10. Manutenção e Suporte

### 10.1 Acesso para a Toque Ideal
- **CRM**: Login via `/admin`
- **Credenciais**: Fornecidas separadamente
- **Treinamento**: Manual de uso incluído
- **Suporte**: Documentação completa

### 10.2 Atualizações Futuras
- **Novos produtos**: Via painel CRM
- **Eventos**: Adição/edição via CRM
- **Design**: Modificações via código
- **Funcionalidades**: Desenvolvimento adicional

## 11. Métricas e Analytics

### 11.1 Implementação Futura
- **Google Analytics**: Rastreamento de visitantes
- **Conversões**: Orçamentos solicitados
- **Produtos**: Mais visualizados/solicitados
- **Origem**: Tráfego por canal

### 11.2 Relatórios CRM
- **Orçamentos**: Por período, status, representante
- **Produtos**: Mais solicitados
- **Eventos**: Participação e resultados
- **Representantes**: Performance de vendas

## 12. Conclusão

O site da Toque Ideal foi desenvolvido como uma solução completa e profissional, atendendo a todas as necessidades da empresa:

- **Catálogo elegante**: Apresentação premium dos produtos
- **Sistema de orçamento**: Processo simplificado para o cliente
- **Painel administrativo**: Controle total do conteúdo
- **Design responsivo**: Experiência otimizada em todos os dispositivos
- **Integração social**: Presença digital fortalecida

A arquitetura escolhida garante escalabilidade, performance e facilidade de manutenção, permitindo que a Toque Ideal gerencie seu conteúdo de forma autônoma e eficiente.

