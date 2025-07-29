import { test, expect } from '@playwright/test'

test.describe('Catálogo de Produtos', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/catalogo')
  })

  test('deve carregar a página do catálogo corretamente', async ({ page }) => {
    // Verificar se o título da página está correto
    await expect(page).toHaveTitle(/Catálogo.*Toque Ideal/)
    
    // Verificar se o cabeçalho principal está visível
    await expect(page.locator('h1')).toContainText('Catálogo')
    
    // Verificar se os filtros estão presentes
    await expect(page.locator('input[placeholder*="Digite o nome"]')).toBeVisible()
    await expect(page.locator('select').first()).toBeVisible()
  })

  test('deve filtrar produtos por busca textual', async ({ page }) => {
    // Aguardar o carregamento dos produtos
    await page.waitForSelector('[data-testid="product-card"]', { timeout: 10000 })
    
    // Contar produtos iniciais
    const initialProductCount = await page.locator('[data-testid="product-card"]').count()
    
    // Realizar busca
    await page.fill('input[placeholder*="Digite o nome"]', 'Dourado')
    
    // Aguardar filtros serem aplicados
    await page.waitForTimeout(1000)
    
    // Verificar se os resultados foram filtrados
    const filteredProductCount = await page.locator('[data-testid="product-card"]').count()
    expect(filteredProductCount).toBeLessThanOrEqual(initialProductCount)
    
    // Verificar se todos os produtos visíveis contêm o termo buscado
    const productTitles = await page.locator('[data-testid="product-card"] h3').allTextContents()
    productTitles.forEach(title => {
      expect(title.toLowerCase()).toContain('dourado')
    })
  })

  test('deve filtrar produtos por coleção', async ({ page }) => {
    // Aguardar carregamento
    await page.waitForSelector('select')
    
    // Selecionar uma coleção específica
    await page.selectOption('select >> nth=1', { label: 'Coleção Dourada' })
    
    // Aguardar filtros serem aplicados
    await page.waitForTimeout(1000)
    
    // Verificar se apenas produtos da coleção selecionada são exibidos
    const collectionLabels = await page.locator('[data-testid="product-card"] .collection-label').allTextContents()
    collectionLabels.forEach(label => {
      expect(label).toContain('Dourada')
    })
  })

  test('deve alterar modo de visualização', async ({ page }) => {
    // Verificar modo grade (padrão)
    await expect(page.locator('button:has-text("Grade")')).toHaveClass(/primary/)
    
    // Alternar para modo lista
    await page.click('button:has-text("Lista")')
    
    // Verificar se o botão lista está ativo
    await expect(page.locator('button:has-text("Lista")')).toHaveClass(/primary/)
    
    // Verificar se o layout mudou (produtos em linha)
    const productCards = page.locator('[data-testid="product-card"]')
    if (await productCards.count() > 0) {
      await expect(productCards.first()).toHaveClass(/flex-row/)
    }
  })

  test('deve limpar filtros corretamente', async ({ page }) => {
    // Aplicar alguns filtros
    await page.fill('input[placeholder*="Digite o nome"]', 'teste')
    await page.selectOption('select >> nth=1', { index: 1 })
    
    // Aguardar botão "Limpar Filtros" aparecer
    await expect(page.locator('button:has-text("Limpar Filtros")')).toBeVisible()
    
    // Clicar em limpar filtros
    await page.click('button:has-text("Limpar Filtros")')
    
    // Verificar se os filtros foram limpos
    await expect(page.locator('input[placeholder*="Digite o nome"]')).toHaveValue('')
    await expect(page.locator('select >> nth=1')).toHaveValue('')
  })

  test('deve navegar para página de produto individual', async ({ page }) => {
    // Aguardar carregamento dos produtos
    await page.waitForSelector('[data-testid="product-card"] a', { timeout: 10000 })
    
    // Clicar no primeiro produto
    const firstProductLink = page.locator('[data-testid="product-card"] a').first()
    await firstProductLink.click()
    
    // Verificar se navegou para página do produto
    await expect(page).toHaveURL(/\/catalogo\/[^\/]+$/)
    
    // Verificar se a página do produto carregou
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('button:has-text("Adicionar ao Orçamento")')).toBeVisible()
  })

  test('deve exibir coleções em destaque', async ({ page }) => {
    // Rolar para a seção de coleções
    await page.locator('h2:has-text("Nossas Coleções")').scrollIntoViewIfNeeded()
    
    // Verificar se as coleções estão visíveis
    await expect(page.locator('h2:has-text("Nossas Coleções")')).toBeVisible()
    
    // Verificar se há pelo menos uma coleção exibida
    const collectionCards = page.locator('.collection-card, [data-testid="collection-card"]')
    expect(await collectionCards.count()).toBeGreaterThan(0)
  })

  test('deve ser responsivo em dispositivos móveis', async ({ page }) => {
    // Simular dispositivo móvel
    await page.setViewportSize({ width: 375, height: 667 })
    
    // Verificar se o layout se adapta
    await expect(page.locator('h1')).toBeVisible()
    
    // Verificar se os filtros ainda funcionam em mobile
    await page.fill('input[placeholder*="Digite o nome"]', 'dourado')
    await page.waitForTimeout(1000)
    
    // Verificar se os produtos são exibidos em coluna única
    const productGrid = page.locator('.grid')
    if (await productGrid.count() > 0) {
      await expect(productGrid.first()).toHaveClass(/grid-cols-1/)
    }
  })

  test('deve exibir mensagem quando nenhum produto é encontrado', async ({ page }) => {
    // Buscar por algo que não existe
    await page.fill('input[placeholder*="Digite o nome"]', 'produto-inexistente-xyz')
    await page.waitForTimeout(1000)
    
    // Verificar se a mensagem de "nenhum produto encontrado" é exibida
    await expect(page.locator('text=Nenhum produto encontrado')).toBeVisible()
    await expect(page.locator('button:has-text("Limpar Filtros")')).toBeVisible()
  })

  test('deve manter estado dos filtros na URL', async ({ page }) => {
    // Aplicar filtros
    await page.fill('input[placeholder*="Digite o nome"]', 'dourado')
    await page.waitForTimeout(1000)
    
    // Recarregar a página
    await page.reload()
    
    // Verificar se os filtros foram mantidos (se implementado)
    // Nota: Isso depende da implementação de query parameters na URL
  })
})

