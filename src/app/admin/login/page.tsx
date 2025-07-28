
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link'; // Importar Link

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(''); // Renomeado 'error' para 'loginError'
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLoginError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push('/admin');
      } else {
        const data = await response.json();
        setLoginError(data.error || 'Erro ao fazer login');
      }
    } catch (error) {
      setLoginError('Erro de conexão. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="login-container">
        <div className="login-header">
          <Image 
            src="/1.png" 
            alt="Toque Ideal Logo" 
            width={60} 
            height={60}
            style={{ objectFit: 'contain' }}
          />
          <h1>Toque Ideal</h1>
          <p>Painel Administrativo</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="seu@email.com"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="form-input"
            />
          </div>

          {loginError && (
            <div className="error-message">
              {loginError}
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="login-btn"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className="login-footer">
          <p>Acesso restrito aos administradores da Toque Ideal</p>
          <Link href="/" className="back-to-site"> {/* Substituído <a> por <Link> */}
            ← Voltar ao site
          </Link>
        </div>
      </div>
    </div>
  );
}


