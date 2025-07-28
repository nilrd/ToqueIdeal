# Variáveis de Ambiente - INFORMAÇÕES COMPLETAS

## Passo 1: Adicionar Primeira Variável

1. **No campo "Key"** (onde está escrito "e.g. CLIENT_KEY"), digite EXATAMENTE:
```
NEXT_PUBLIC_SUPABASE_URL
```

2. **No campo "Value"** (ao lado), digite EXATAMENTE:
```
https://pmfhhngnugtpqihttvkx.supabase.co
```

3. **Clique no botão "Add Another"** (círculo com +)

## Passo 2: Adicionar Segunda Variável

1. **No novo campo "Key"**, digite EXATAMENTE:
```
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

2. **No campo "Value"**, digite EXATAMENTE (TODA esta linha longa):
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtZmhobmdudWd0cHFpaHR0dmt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2NTYyOTYsImV4cCI6MjA2OTIzMjI5Nn0.QAo7FLGccpi87NGpA0LF8mSZrUKQlzh3PHr4fN0B6So
```

## Passo 3: Salvar
1. **Clique no botão "Save"** (no canto inferior direito)

## Passo 4: Redeploy
1. **Após salvar**, vá para "Deployments"
2. **Clique em "Redeploy"** novamente

## IMPORTANTE:
- **Copie e cole** as informações exatamente como estão acima
- **Não adicione espaços** antes ou depois
- **A segunda chave é muito longa** - certifique-se de copiar tudo

## Resultado Final:
Você deve ter 2 variáveis:
1. `NEXT_PUBLIC_SUPABASE_URL` = `https://pmfhhngnugtpqihttvkx.supabase.co`
2. `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (chave longa)

Me avise quando tiver adicionado as duas variáveis!

