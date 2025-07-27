import { Request, Response, NextFunction } from 'express';
import { UserService } from '../models/User';

const userService = new UserService();

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    username: string;
    email: string;
    role: 'admin' | 'editor';
  };
}

export const requireAuth = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  if (!req.session || !req.session.userId) {
    return res.status(401).json({ 
      error: 'Acesso negado. Faça login para continuar.' 
    });
  }

  next();
};

export const requireAdmin = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  if (!req.session || !req.session.userId) {
    return res.status(401).json({ 
      error: 'Acesso negado. Faça login para continuar.' 
    });
  }

  try {
    const user = await userService.findById(req.session.userId);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ 
        error: 'Acesso negado. Permissões de administrador necessárias.' 
      });
    }

    req.user = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    };

    next();
  } catch (error) {
    return res.status(500).json({ 
      error: 'Erro interno do servidor.' 
    });
  }
};

export const requireEditor = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  if (!req.session || !req.session.userId) {
    return res.status(401).json({ 
      error: 'Acesso negado. Faça login para continuar.' 
    });
  }

  try {
    const user = await userService.findById(req.session.userId);
    if (!user || !['admin', 'editor'].includes(user.role)) {
      return res.status(403).json({ 
        error: 'Acesso negado. Permissões de editor necessárias.' 
      });
    }

    req.user = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    };

    next();
  } catch (error) {
    return res.status(500).json({ 
      error: 'Erro interno do servidor.' 
    });
  }
};

export const attachUser = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  if (req.session && req.session.userId) {
    try {
      const user = await userService.findById(req.session.userId);
      if (user) {
        req.user = {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
        };
      }
    } catch (error) {
      // Silently fail - user will be undefined
    }
  }
  next();
};

// Extend session interface
declare module 'express-session' {
  interface SessionData {
    userId: string;
  }
}

