import { FullConfig } from '@playwright/test'

async function globalTeardown(config: FullConfig) {
  console.log('🧹 Iniciando teardown global dos testes E2E...')

  try {
    // Cleanup de dados de teste se necessário
    console.log('🔧 Executando limpeza...')

    // Exemplo: Limpar dados de teste criados durante os testes
    // await cleanupTestData()

    // Exemplo: Resetar estado da aplicação
    // await resetApplicationState()

    console.log('✅ Teardown global concluído com sucesso')

  } catch (error) {
    console.error('❌ Erro no teardown global:', error)
    // Não fazer throw para não falhar os testes por causa do cleanup
  }
}

export default globalTeardown

