# Arquitetura Proposta para o Website Toque Ideal

## 1. Visão Geral

O website da Toque Ideal será construído como uma aplicação web moderna, utilizando uma arquitetura baseada em micro-frontends e micro-serviços, com foco em performance, escalabilidade, SEO e facilidade de manutenção. A abordagem de "shift-left testing" será integrada em todas as fases do SDLC para garantir a qualidade desde o início do desenvolvimento.

## 2. Tecnologias Escolhidas

Com base nos requisitos técnicos fornecidos, as seguintes tecnologias serão utilizadas:

### 2.1. Front-end

*   **Framework:** Next.js (com TypeScript)
    *   **Justificativa:** Escolhido por sua capacidade de Server-Side Rendering (SSR) e Static Site Generation (SSG), que são cruciais para um SEO otimizado e um carregamento rápido das páginas. O TypeScript garante maior robustez e menos erros em tempo de desenvolvimento.
*   **Estilização:** Tailwind CSS
    *   **Justificativa:** Oferece uma abordagem utilitária para CSS, acelerando o desenvolvimento e garantindo consistência no design. É altamente configurável e otimizado para performance.
*   **Gerenciamento de Estado:** React Context API / Zustand (a ser definido com base na complexidade)
    *   **Justificativa:** Para gerenciar o estado global da aplicação, como dados do catálogo, carrinho de orçamentos e autenticação do usuário.

### 2.2. Back-end

*   **Framework:** Node.js (com Express.js ou NestJS)
    *   **Justificativa:** Permite a construção de APIs RESTful eficientes e escaláveis para gerenciar o catálogo de produtos, orçamentos, usuários e a área administrativa. A escolha entre Express.js (mais leve) e NestJS (mais estruturado, para projetos maiores) será feita após uma análise mais aprofundada da complexidade do painel administrativo.
*   **Banco de Dados:** MySQL
    *   **Justificativa:** Um banco de dados relacional robusto e amplamente utilizado, adequado para armazenar dados estruturados como informações de produtos, usuários e orçamentos.
*   **ORM:** Sequelize ou Prisma (a ser definido)
    *   **Justificativa:** Para facilitar a interação com o banco de dados MySQL, proporcionando uma camada de abstração e segurança.

### 2.3. CMS (Content Management System)

*   **Opções:** Painel customizado (com base em Node.js) ou Strapi (Headless CMS)
    *   **Justificativa:** O requisito de um painel administrativo seguro e intuitivo pode ser atendido por um CMS headless como Strapi, que oferece uma interface de usuário pronta e APIs robustas, ou por um painel customizado para maior flexibilidade e controle total sobre as funcionalidades. A decisão final dependerá da complexidade das funcionalidades administrativas e do tempo disponível.

### 2.4. Hospedagem e Deploy

*   **Front-end:** Vercel
    *   **Justificativa:** Ideal para aplicações Next.js, oferece deploy contínuo, CDN global e escalabilidade automática, além de ser compatível com o plano gratuito inicial.
*   **Back-end:** A ser definido (possivelmente um serviço de PaaS como Heroku, Render, ou um VPS com Docker)
    *   **Justificativa:** O back-end precisará de um ambiente de hospedagem que suporte Node.js e MySQL. A escolha dependerá da necessidade de escalabilidade e do orçamento.

## 3. Integrações e APIs

*   **WhatsApp API:** Para facilitar o envio de orçamentos.
*   **Google Analytics:** Para monitoramento de tráfego e comportamento do usuário.
*   **Google Search Console:** Para otimização de SEO e monitoramento de performance de busca.
*   **Hotjar:** Para análise de usabilidade e mapas de calor.
*   **APIs de Redes Sociais:** Para integração com Instagram, Facebook, TikTok, YouTube, Pinterest (compartilhamento, feeds).

## 4. Estratégia de Testes (Shift-Left Testing)

A qualidade será garantida desde as primeiras etapas do SDLC, com a implementação das seguintes práticas:

*   **Testes Unitários:** Para componentes React e funções do back-end (Jest, React Testing Library).
*   **Testes de Integração:** Para verificar a comunicação entre módulos e APIs.
*   **Testes End-to-End (E2E):** Para simular fluxos de usuário completos (Cypress ou Playwright).
*   **Testes de Performance:** Utilizando ferramentas como Google Lighthouse e GTMetrix.
*   **Testes de Usabilidade:** Em diferentes dispositivos e navegadores.
*   **Automação de Testes:** Com foco em fluxos críticos (Selenium + Java + JUnit para casos mais complexos, Postman para APIs).

## 5. Estrutura de Diretórios (Front-end - Next.js)

```
toqueideal_website_frontend/
├── public/             # Arquivos estáticos (imagens, favicon)
├── src/
│   ├── app/            # Rotas e layouts do Next.js App Router
│   │   ├── (auth)/     # Rotas de autenticação (login, registro)
│   │   ├── (main)/     # Rotas principais (home, quem-somos, contato)
│   │   ├── catalogo/   # Rotas do catálogo de produtos
│   │   ├── admin/      # Rotas da área administrativa
│   │   ├── api/        # Rotas de API do Next.js (para funcionalidades específicas)
│   │   ├── layout.tsx  # Layout principal da aplicação
│   │   └── page.tsx    # Página inicial
│   ├── components/     # Componentes React reutilizáveis
│   │   ├── ui/         # Componentes de UI genéricos (botões, inputs)
│   │   └── common/     # Componentes comuns (header, footer)
│   ├── styles/         # Arquivos de estilo globais e Tailwind CSS
│   ├── lib/            # Funções utilitárias, helpers, configurações
│   ├── hooks/          # Custom React Hooks
│   ├── types/          # Definições de tipos TypeScript
│   └── context/        # Contextos React para gerenciamento de estado
├── tests/              # Arquivos de testes (unitários, integração, E2E)
├── .env                # Variáveis de ambiente
├── next.config.js      # Configuração do Next.js
├── package.json        # Dependências e scripts do projeto
├── tsconfig.json       # Configuração do TypeScript
└── tailwind.config.ts  # Configuração do Tailwind CSS
```

## 6. Estrutura de Diretórios (Back-end - Node.js/Express.js)

```
toqueideal_website_backend/
├── src/
│   ├── config/         # Configurações do ambiente, banco de dados
│   ├── controllers/    # Lógica de negócio para rotas
│   ├── models/         # Definições de modelos de dados (Sequelize/Prisma)
│   ├── routes/         # Definição de rotas da API
│   ├── services/       # Lógica de negócio complexa, integração com APIs externas
│   ├── middlewares/    # Middlewares para autenticação, validação
│   ├── utils/          # Funções utilitárias
│   ├── app.ts          # Arquivo principal da aplicação
│   └── server.ts       # Inicialização do servidor
├── tests/              # Arquivos de testes (unitários, integração)
├── .env                # Variáveis de ambiente
├── package.json        # Dependências e scripts do projeto
├── tsconfig.json       # Configuração do TypeScript
└── Dockerfile          # Para conteinerização (opcional)
```

## 7. Próximos Passos

1.  Configurar o ambiente de desenvolvimento para Front-end e Back-end.
2.  Definir a estrutura de testes e integrar as ferramentas de QA.
3.  Iniciar o desenvolvimento do Design System e componentes base.




## 8. Funcionalidades e Módulos Principais

Com base nos requisitos funcionais e regras de negócio, o site será dividido nos seguintes módulos e funcionalidades:

### 8.1. Módulo de Catálogo

*   **RF01:** Catálogo dinâmico com filtros (tipo, coleção, cor, material, tamanho).
*   **RF02:** Visualização 360º para produtos de destaque (requer assets específicos).
*   **RN02:** Produtos com código, nome, descrição, dimensões, cor, coleção e imagens.
*   **US01:** Filtragem de produtos por coleção, cor e material.

### 8.2. Módulo de Orçamento

*   **RF03:** Adição de produtos a um carrinho de orçamentos.
*   **RF04:** Envio de orçamentos via WhatsApp e e-mail.
*   **RF05:** Geração automática de PDF do orçamento.
*   **RN03:** Orçamentos enviados geram registro interno.
*   **US02:** Adicionar múltiplos produtos ao carrinho para solicitar preços.
*   **US03:** Enviar orçamento via WhatsApp para retorno rápido.

### 8.3. Módulo Administrativo

*   **RF06:** Área administrativa para gerenciar produtos, textos, imagens, lançamentos e usuários.
*   **RF07:** Log de atividades administrativas.
*   **RN01:** Apenas usuários autenticados com perfil administrativo podem alterar conteúdo.
*   **RN05:** Níveis de permissão (Super Admin e Editor).
*   **US04:** Gerenciar produtos, textos, imagens e usuários com autonomia.

### 8.4. Módulo de Contato e Representantes

*   **RF08:** Formulário com campo opcional “Você chegou ao site através de um representante? Qual?”.
*   **RN04:** Campo “Representante” opcional, mas armazenado para relatórios.
*   **US05:** Saber se o cliente chegou por indicação de representante.

### 8.5. Módulo de SEO e Integrações

*   **RNF04:** SEO otimizado (URLs amigáveis, meta descrições, microdados).
*   **SEO:** meta descrições, sitemap, microdados, integração com Google Search Console.
*   **Redes Sociais:** Instagram, Facebook, TikTok, YouTube, Pinterest.
*   **Análises:** Google Analytics e Hotjar.

### 8.6. Módulo de Design e UX

*   **Estética:** inspirada em marcas de luxo (sofisticação e desejo).
*   **Paleta de cores:** dourado, preto, branco e cinza.
*   **Tipografia:** títulos serifados elegantes + textos sans-serif modernos.
*   **Homepage:** banner fullscreen, destaques, lançamentos e chamadas para ação.
*   **Logo e favicon:** aplicados em alta definição.
*   **RNF02:** Layout responsivo (desktop, tablet e mobile).

### 8.7. Módulo de Qualidade e Testes

*   **QA – Plano de Qualidade:** Garantir site sem falhas, com alta usabilidade e confiabilidade.
*   **Documentos:** Plano de Testes, Casos de Teste, Matriz de Rastreabilidade, Relatórios de Bugs.
*   **Técnicas:** Testes funcionais, de usabilidade, de performance.
*   **Automação:** Selenium + Java + JUnit (fluxos críticos) e Postman (APIs).

Esta estrutura modular permitirá um desenvolvimento organizado e a aplicação de testes específicos para cada funcionalidade, alinhado com a estratégia de shift-left testing.

