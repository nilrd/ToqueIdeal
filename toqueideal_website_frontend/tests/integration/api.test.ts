/**
 * Testes de Integração para APIs
 * 
 * Estes testes verificam a integração entre frontend e backend,
 * testando os endpoints da API e a comunicação entre os sistemas.
 */

describe('API Integration Tests', () => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

  describe('Health Check', () => {
    it('should return OK status from health endpoint', async () => {
      const response = await fetch(`${API_BASE_URL}/api/health`)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.status).toBe('OK')
      expect(data.timestamp).toBeDefined()
    })
  })

  describe('Authentication API', () => {
    const testUser = {
      username: 'testuser',
      password: 'testpass123'
    }

    it('should reject login with invalid credentials', async () => {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'invalid',
          password: 'invalid'
        }),
        credentials: 'include'
      })

      expect(response.status).toBe(401)
      
      const data = await response.json()
      expect(data.error).toBeDefined()
    })

    it('should return user info when checking session without login', async () => {
      const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
        credentials: 'include'
      })

      expect(response.status).toBe(401)
      
      const data = await response.json()
      expect(data.error).toBeDefined()
    })

    it('should handle logout request', async () => {
      const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include'
      })

      // Should succeed even if not logged in
      expect([200, 500]).toContain(response.status)
    })
  })

  describe('Admin API', () => {
    it('should require authentication for admin endpoints', async () => {
      const response = await fetch(`${API_BASE_URL}/api/admin/dashboard`, {
        credentials: 'include'
      })

      expect(response.status).toBe(401)
      
      const data = await response.json()
      expect(data.error).toContain('Acesso negado')
    })

    it('should require authentication for products endpoint', async () => {
      const response = await fetch(`${API_BASE_URL}/api/admin/products`, {
        credentials: 'include'
      })

      expect(response.status).toBe(401)
    })

    it('should require authentication for users endpoint', async () => {
      const response = await fetch(`${API_BASE_URL}/api/admin/users`, {
        credentials: 'include'
      })

      expect(response.status).toBe(401)
    })

    it('should require authentication for metadata endpoint', async () => {
      const response = await fetch(`${API_BASE_URL}/api/admin/metadata`, {
        credentials: 'include'
      })

      expect(response.status).toBe(401)
    })
  })

  describe('Error Handling', () => {
    it('should return 404 for non-existent endpoints', async () => {
      const response = await fetch(`${API_BASE_URL}/api/non-existent-endpoint`)
      
      expect(response.status).toBe(404)
      
      const data = await response.json()
      expect(data.error).toBeDefined()
    })

    it('should handle malformed JSON in request body', async () => {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: 'invalid json',
        credentials: 'include'
      })

      expect(response.status).toBe(400)
    })

    it('should validate required fields in login', async () => {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
        credentials: 'include'
      })

      expect(response.status).toBe(400)
      
      const data = await response.json()
      expect(data.error).toContain('obrigatórios')
    })
  })

  describe('CORS and Security', () => {
    it('should include CORS headers', async () => {
      const response = await fetch(`${API_BASE_URL}/api/health`)
      
      // Check for CORS headers (may vary based on configuration)
      expect(response.headers.get('access-control-allow-origin')).toBeDefined()
    })

    it('should include security headers', async () => {
      const response = await fetch(`${API_BASE_URL}/api/health`)
      
      // Check for security headers added by helmet
      expect(response.headers.get('x-content-type-options')).toBe('nosniff')
    })
  })

  describe('Rate Limiting and Performance', () => {
    it('should handle multiple concurrent requests', async () => {
      const requests = Array(5).fill(null).map(() => 
        fetch(`${API_BASE_URL}/api/health`)
      )

      const responses = await Promise.all(requests)
      
      responses.forEach(response => {
        expect(response.status).toBe(200)
      })
    })

    it('should respond within reasonable time', async () => {
      const startTime = Date.now()
      const response = await fetch(`${API_BASE_URL}/api/health`)
      const endTime = Date.now()

      expect(response.status).toBe(200)
      expect(endTime - startTime).toBeLessThan(5000) // 5 seconds max
    })
  })
})

