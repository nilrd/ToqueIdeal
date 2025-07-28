# Guia Completo: Configurando Variáveis de Ambiente na Vercel

## Por que são necessárias?

As variáveis de ambiente são essenciais para que seu projeto Next.js funcione corretamente em produção na Vercel. Elas contêm informações sensíveis como credenciais do banco de dados (Supabase) que não devem ser expostas no código-fonte.

## Passo a Passo Detalhado

### 1. Acessar o Painel da Vercel

1. **Faça login na Vercel**: Acesse [vercel.com](https://vercel.com) e faça login com sua conta
2. **Encontre seu projeto**: Procure pelo projeto "ToqueIdeal" na sua lista de projetos
3. **Clique no projeto**: Isso abrirá a página principal do projeto

### 2. Navegar para as Configurações

1. **Clique na aba "Settings"**: No topo da página do projeto, você verá várias abas (Overview, Functions, Analytics, Settings, etc.)
2. **Selecione "Settings"**: Clique nesta aba para acessar as configurações do projeto

### 3. Acessar Environment Variables

1. **No menu lateral esquerdo**: Procure por "Environment Variables" ou "Variáveis de Ambiente"
2. **Clique em "Environment Variables"**: Isso abrirá a página de configuração das variáveis

### 4. Adicionar as Variáveis Necessárias

Você precisa adicionar **2 variáveis** essenciais:

#### Variável 1: NEXT_PUBLIC_SUPABASE_URL
- **Name (Nome)**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value (Valor)**: `https://pmfhhngnugtpqihttvkx.supabase.co`
- **Environment**: Selecione "Production", "Preview" e "Development" (todas as opções)

#### Variável 2: NEXT_PUBLIC_SUPABASE_ANON_KEY
- **Name (Nome)**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value (Valor)**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtZmhobmdudWd0cHFpaHR0dmt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2NTYyOTYsImV4cCI6MjA2OTIzMjI5Nn0.QAo7FLGccpi87NGpA0LF8mSZrUKQlzh3PHr4fN0B6So`
- **Environment**: Selecione "Production", "Preview" e "Development" (todas as opções)

### 5. Como Adicionar Cada Variável

Para cada variável:

1. **Clique em "Add New"** ou "Adicionar Nova"
2. **Preencha o campo "Name"** com o nome exato da variável
3. **Preencha o campo "Value"** com o valor correspondente
4. **Selecione os ambientes**: Marque todas as opções (Production, Preview, Development)
5. **Clique em "Save"** ou "Salvar"

### 6. Verificar se as Variáveis foram Adicionadas

Após adicionar ambas as variáveis, você deve ver uma lista similar a esta:

```
NEXT_PUBLIC_SUPABASE_URL
Production, Preview, Development
https://pmfhhngnugtpqihttvkx.supabase.co

NEXT_PUBLIC_SUPABASE_ANON_KEY  
Production, Preview, Development
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (valor truncado por segurança)
```

### 7. Redeployar o Projeto

Após adicionar as variáveis:

1. **Volte para a aba "Deployments"**
2. **Clique em "Redeploy"** no deployment mais recente
3. **Aguarde o processo de build e deploy**

### 8. Testar o Funcionamento

Após o redeploy:

1. **Acesse seu site**: `https://toque-ideal-egpt18jfx-nilsons-projects-fd38695b.vercel.app`
2. **Teste as APIs**: Acesse `/api/products` e `/api/categories` para verificar se estão funcionando
3. **Verifique se não há erros**: O site deve carregar normalmente com os estilos aplicados

## Dicas Importantes

- **Não compartilhe as chaves**: Nunca compartilhe suas chaves de API publicamente
- **Ambientes**: Sempre configure para todos os ambientes (Production, Preview, Development)
- **Redeploy necessário**: Sempre faça redeploy após adicionar/modificar variáveis
- **Case-sensitive**: Os nomes das variáveis são sensíveis a maiúsculas/minúsculas

## Solução de Problemas

### Se o site ainda não funcionar após configurar:

1. **Verifique os nomes**: Certifique-se de que os nomes das variáveis estão exatos
2. **Verifique os valores**: Confirme se os valores foram copiados corretamente
3. **Force redeploy**: Tente fazer um novo commit no GitHub para forçar um novo deploy
4. **Verifique os logs**: Na aba "Functions" da Vercel, verifique se há erros nos logs

### Se as APIs retornarem erro:

1. **Verifique o Supabase**: Confirme se o projeto Supabase está ativo
2. **Teste localmente**: Execute `npm run dev` localmente para verificar se funciona
3. **Verifique as políticas RLS**: No Supabase, confirme se as políticas de segurança estão corretas

## Próximos Passos

Após configurar as variáveis de ambiente, seu site deve estar funcionando corretamente com:
- ✅ Estilos CSS aplicados
- ✅ APIs de produtos funcionando
- ✅ APIs de categorias funcionando
- ✅ Conexão com o banco de dados Supabase

Me avise quando tiver configurado as variáveis para que possamos continuar com o desenvolvimento das páginas principais!

