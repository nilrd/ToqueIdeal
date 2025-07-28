# URGENTE: Corrigir Root Directory na Vercel

## Problema Identificado
O deploy está falhando porque a Vercel está procurando por "toqueideal_website_frontend" que não existe.

## Solução: Configurar Root Directory

### Passo 1: Acessar Project Settings
1. No seu projeto na Vercel, clique em **"Settings"** (no topo da página)
2. No menu lateral esquerdo, clique em **"General"**

### Passo 2: Encontrar Root Directory
1. Role a página até encontrar a seção **"Root Directory"**
2. Você verá que está configurado como: `toqueideal_website_frontend`

### Passo 3: Corrigir o Root Directory
1. Clique no botão **"Edit"** ao lado de "Root Directory"
2. **APAGUE** o texto `toqueideal_website_frontend`
3. **DEIXE EM BRANCO** (vazio) ou digite apenas `.` (ponto)
4. Clique em **"Save"**

### Passo 4: Fazer Redeploy
1. Vá para a aba **"Deployments"**
2. Clique em **"Redeploy"** no último deployment
3. Aguarde o processo de build

## Por que isso aconteceu?
Na conversa anterior, o projeto foi configurado para procurar por uma pasta específica, mas nosso projeto Next.js está na raiz do repositório.

## Resultado Esperado
Após essa correção, o deploy deve funcionar corretamente e você poderá adicionar as variáveis de ambiente.

---

# Como Adicionar Variáveis de Ambiente (Após corrigir o Root Directory)

Baseado na sua captura de tela, siga estes passos:

### Passo 1: Adicionar Primeira Variável
1. No campo **"Key"** (onde está escrito "e.g. CLIENT_KEY"), digite:
   ```
   NEXT_PUBLIC_SUPABASE_URL
   ```

2. No campo **"Value"** (ao lado), digite:
   ```
   https://pmfhhngnugtpqihttvkx.supabase.co
   ```

3. Clique no botão **"Add Another"** (círculo com +)

### Passo 2: Adicionar Segunda Variável
1. No novo campo **"Key"**, digite:
   ```
   NEXT_PUBLIC_SUPABASE_ANON_KEY
   ```

2. No campo **"Value"**, digite:
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtZmhobmdudWd0cHFpaHR0dmt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2NTYyOTYsImV4cCI6MjA2OTIzMjI5Nn0.QAo7FLGccpi87NGpA0LF8mSZrUKQlzh3PHr4fN0B6So
   ```

### Passo 3: Salvar
1. Clique no botão **"Save"** (no canto inferior direito)

### Passo 4: Redeploy
1. Após salvar, vá para **"Deployments"**
2. Clique em **"Redeploy"** novamente

## ORDEM IMPORTANTE:
1. **PRIMEIRO**: Corrigir Root Directory
2. **SEGUNDO**: Adicionar variáveis de ambiente
3. **TERCEIRO**: Fazer redeploy final

Me avise quando tiver feito essas correções!

