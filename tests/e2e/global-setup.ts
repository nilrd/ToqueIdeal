import { chromium, FullConfig } from '@playwright/test'

async function globalSetup(config: FullConfig) {
  console.log('🚀 Iniciando setup global dos testes E2E...')

  // Verificar se os serviços estão rodando
  const frontendUrl = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3001'
  const backendUrl = 'http://localhost:3000'

  try {
    // Verificar frontend
    const frontendResponse = await fetch(frontendUrl)
    if (!frontendResponse.ok) {
      throw new Error(`Frontend não está respondendo: ${frontendResponse.status}`)
    }
    console.log('✅ Frontend está rodando')

    // Verificar backend
    const backendResponse = await fetch(`${backendUrl}/health`)
    if (!backendResponse.ok) {
      throw new Error(`Backend não está respondendo: ${backendResponse.status}`)
    }
    console.log('✅ Backend está rodando')

    // Setup adicional se necessário
    const browser = await chromium.launch()
    const page = await browser.newPage()

    // Fazer qualquer setup necessário (criar dados de teste, etc.)
    console.log('🔧 Executando setup adicional...')

    // Exemplo: Verificar se a página inicial carrega
    await page.goto(frontendUrl)
    await page.waitForLoadState('networkidle')
    
    console.log('✅ Página inicial carregou com sucesso')

    await browser.close()
    console.log('✅ Setup global concluído com sucesso')

  } catch (error) {
    console.error('❌ Erro no setup global:', error)
    throw error
  }
}

export default globalSetup

