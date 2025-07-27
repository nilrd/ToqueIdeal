# Plano de Qualidade (QA) e Estratégia de Testes para o Website Toque Ideal

## 1. Objetivo

O principal objetivo deste Plano de Qualidade é garantir que o website da Toque Ideal seja entregue sem falhas, com alta usabilidade, performance e confiabilidade, atendendo plenamente aos requisitos de negócio e técnicos. A estratégia central será o **Shift-Left Testing**, integrando as atividades de teste desde as fases iniciais do Ciclo de Vida de Desenvolvimento de Software (SDLC).

## 2. Princípios do Shift-Left Testing

O Shift-Left Testing visa encontrar e corrigir defeitos o mais cedo possível no processo de desenvolvimento, reduzindo custos e tempo de retrabalho. Isso será alcançado através de:

*   **Envolvimento Precoce:** A equipe de QA e os desenvolvedores colaborarão desde a fase de levantamento de requisitos e design.
*   **Automação:** Priorização da automação de testes em todos os níveis (unitário, integração, E2E).
*   **Testes Contínuos:** Integração de testes no pipeline de CI/CD para execução automática a cada commit.
*   **Feedback Rápido:** Fornecimento de feedback imediato aos desenvolvedores sobre a qualidade do código.
*   **Qualidade como Responsabilidade de Todos:** Incentivar a mentalidade de qualidade em toda a equipe de desenvolvimento.

## 3. Níveis de Teste e Ferramentas

### 3.1. Testes Unitários

*   **Foco:** Testar as menores unidades de código isoladamente (funções, componentes React, métodos de back-end).
*   **Ferramentas:**
    *   **Front-end (Next.js/React):** Jest e React Testing Library.
    *   **Back-end (Node.js):** Jest ou Mocha/Chai.
*   **Integração no SDLC:** Desenvolvedores escreverão testes unitários para o código que produzem, com revisão de código para garantir a cobertura e a qualidade dos testes.

### 3.2. Testes de Integração

*   **Foco:** Verificar a interação entre diferentes módulos ou serviços (ex: front-end com back-end, back-end com banco de dados, APIs internas).
*   **Ferramentas:**
    *   **Back-end (APIs):** Postman (para testes manuais e automatizados via Newman), Jest/Supertest.
    *   **Front-end:** Testes que simulam chamadas de API ou interações entre componentes.
*   **Integração no SDLC:** Executados após os testes unitários, garantindo que as interfaces entre os componentes funcionem conforme o esperado.

### 3.3. Testes End-to-End (E2E)

*   **Foco:** Simular o fluxo completo do usuário através da aplicação, desde a interface do usuário até o banco de dados.
*   **Ferramentas:** Cypress ou Playwright.
    *   **Justificativa:** Ambas são excelentes opções para testes E2E modernos, oferecendo boa performance, depuração fácil e suporte a múltiplos navegadores. A escolha final dependerá de uma análise mais detalhada das necessidades específicas do projeto e da familiaridade da equipe.
*   **Integração no SDLC:** Executados em um ambiente de staging que mimetiza a produção. Fluxos críticos (catálogo, orçamento, login administrativo) serão priorizados para automação E2E.

### 3.4. Testes de Performance

*   **Foco:** Avaliar a velocidade de carregamento, responsividade e estabilidade do site sob diferentes condições de carga.
*   **Ferramentas:** Google Lighthouse, GTMetrix, WebPageTest.
*   **Integração no SDLC:** Monitoramento contínuo da performance, com métricas sendo incorporadas ao pipeline de CI/CD para alertar sobre regressões de performance.

### 3.5. Testes de Usabilidade

*   **Foco:** Avaliar a facilidade de uso, a experiência do usuário e a conformidade com os princípios de design.
*   **Ferramentas:** Hotjar (para mapas de calor e gravações de sessão), testes manuais em diferentes dispositivos (desktop, tablet, mobile) e navegadores.
*   **Integração no SDLC:** Realizados por designers de UX e QA, com base em cenários de uso e personas.

### 3.6. Testes de Segurança

*   **Foco:** Identificar vulnerabilidades e garantir a proteção dos dados e da aplicação.
*   **Ferramentas:** Análise de código estática (SAST), análise de vulnerabilidades de dependências, testes de penetração (manuais ou automatizados).
*   **Integração no SDLC:** Revisões de segurança do código, uso de bibliotecas e frameworks seguros, e testes de segurança automatizados no pipeline.

## 4. Documentação de Testes

*   **Plano de Testes:** Este documento, que será atualizado conforme o projeto avança.
*   **Casos de Teste (CTs):** Documentos detalhados descrevendo os passos para executar um teste, resultados esperados e critérios de aceitação. Serão criados para as funcionalidades do catálogo, carrinho de orçamentos, formulários e painel administrativo.
*   **Matriz de Rastreabilidade:** Um documento que mapeia os requisitos de negócio e funcionais aos casos de teste correspondentes, garantindo que todos os requisitos sejam testados.
*   **Relatórios de Bugs:** Documentação de defeitos encontrados, incluindo passos para reprodução, severidade, prioridade e status.

## 5. Processo de QA no SDLC (Shift-Left)

1.  **Requisitos e Design:** QA revisa os requisitos e wireframes, identificando cenários de teste e critérios de aceitação. Matriz de rastreabilidade iniciada.
2.  **Desenvolvimento:** Desenvolvedores escrevem testes unitários e de integração junto com o código. Revisões de código incluem a qualidade dos testes.
3.  **Build e CI/CD:** Testes unitários e de integração são executados automaticamente a cada commit. Se os testes falharem, o build é quebrado, fornecendo feedback imediato.
4.  **Ambiente de Staging:** Testes E2E automatizados são executados. Testes de performance e usabilidade são realizados neste ambiente.
5.  **Homologação/UAT:** Clientes e stakeholders validam a aplicação em um ambiente próximo à produção.
6.  **Produção:** Monitoramento contínuo de performance e erros. Testes de fumaça (smoke tests) automatizados para verificar a saúde da aplicação após o deploy.

## 6. Ferramentas de Automação Adicionais

*   **Selenium + Java + JUnit:** Conforme solicitado, será utilizado para automação de fluxos críticos que possam exigir interações mais complexas com o navegador ou integração com ecossistemas Java existentes, se aplicável. No entanto, Cypress ou Playwright serão a primeira escolha para a maioria dos testes E2E devido à sua facilidade de uso e performance com aplicações modernas de React/Next.js.

## 7. Métricas de Qualidade

*   **Cobertura de Testes:** Percentual de código coberto por testes unitários.
*   **Taxa de Defeitos:** Número de defeitos encontrados por módulo ou funcionalidade.
*   **Tempo de Resolução de Defeitos:** Tempo médio para corrigir um defeito.
*   **Performance:** Métricas de Lighthouse (FCP, LCP, CLS).

Este plano será um documento vivo, adaptando-se às necessidades do projeto e às descobertas durante o ciclo de desenvolvimento.

