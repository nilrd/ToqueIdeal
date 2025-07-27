import { Router } from 'express';
import { UserService } from '../models/User';
import { AuthenticatedRequest, attachUser } from '../middleware/auth';

const router = Router();
const userService = new UserService();

// Login
router.post('/login', async (req: AuthenticatedRequest, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        error: 'Username e senha são obrigatórios.'
      });
    }

    // Buscar usuário
    const user = await userService.findByUsername(username);
    if (!user) {
      return res.status(401).json({
        error: 'Credenciais inválidas.'
      });
    }

    // Verificar se o usuário está ativo
    if (!user.isActive) {
      return res.status(401).json({
        error: 'Conta desativada. Entre em contato com o administrador.'
      });
    }

    // Validar senha
    const isValidPassword = await userService.validatePassword(user, password);
    if (!isValidPassword) {
      return res.status(401).json({
        error: 'Credenciais inválidas.'
      });
    }

    // Criar sessão
    req.session.userId = user.id;

    // Atualizar último login
    await userService.updateLastLogin(user.id);

    // Retornar dados do usuário (sem senha)
    const { password: _, ...userWithoutPassword } = user;
    res.json({
      message: 'Login realizado com sucesso.',
      user: userWithoutPassword
    });

  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({
      error: 'Erro interno do servidor.'
    });
  }
});

// Logout
router.post('/logout', (req: AuthenticatedRequest, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({
        error: 'Erro ao fazer logout.'
      });
    }
    
    res.clearCookie('connect.sid');
    res.json({
      message: 'Logout realizado com sucesso.'
    });
  });
});

// Verificar sessão atual
router.get('/me', attachUser, async (req: AuthenticatedRequest, res) => {
  if (!req.user) {
    return res.status(401).json({
      error: 'Não autenticado.'
    });
  }

  try {
    const user = await userService.findById(req.user.id);
    if (!user || !user.isActive) {
      return res.status(401).json({
        error: 'Usuário não encontrado ou inativo.'
      });
    }

    const { password: _, ...userWithoutPassword } = user;
    res.json({
      user: userWithoutPassword
    });

  } catch (error) {
    console.error('Erro ao verificar usuário:', error);
    res.status(500).json({
      error: 'Erro interno do servidor.'
    });
  }
});

// Alterar senha
router.post('/change-password', attachUser, async (req: AuthenticatedRequest, res) => {
  if (!req.user) {
    return res.status(401).json({
      error: 'Não autenticado.'
    });
  }

  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        error: 'Senha atual e nova senha são obrigatórias.'
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        error: 'A nova senha deve ter pelo menos 6 caracteres.'
      });
    }

    // Buscar usuário
    const user = await userService.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        error: 'Usuário não encontrado.'
      });
    }

    // Validar senha atual
    const isValidPassword = await userService.validatePassword(user, currentPassword);
    if (!isValidPassword) {
      return res.status(401).json({
        error: 'Senha atual incorreta.'
      });
    }

    // Atualizar senha
    const bcrypt = require('bcryptjs');
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    await userService.update(user.id, { 
      password: hashedPassword as any // Type assertion para contornar a interface
    });

    res.json({
      message: 'Senha alterada com sucesso.'
    });

  } catch (error) {
    console.error('Erro ao alterar senha:', error);
    res.status(500).json({
      error: 'Erro interno do servidor.'
    });
  }
});

export default router;

