import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'
import session from 'express-session'
import path from 'path'
import fs from 'fs'

// Importar rotas
import authRoutes from './routes/auth'
import adminRoutes from './routes/admin'

// Load environment variables
dotenv.config()

const app = express()

// Criar diretórios necessários
const uploadsDir = path.join(__dirname, '../uploads/products')
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true })
}

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}))

// CORS configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3001',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
}))

// Logging middleware
app.use(morgan('combined'))

// Body parsing middleware
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Configuração de sessão
app.use(session({
  secret: process.env.SESSION_SECRET || 'toque-ideal-secret-key-change-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 horas
  },
}))

// Servir arquivos estáticos (uploads)
app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  })
})

// Rotas da API
app.use('/api/auth', authRoutes)
app.use('/api/admin', adminRoutes)

// API routes fallback
app.use('/api', (req, res) => {
  res.status(200).json({
    message: 'Toque Ideal API is running',
    version: '1.0.0'
  })
})

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl
  })
})

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Erro não tratado:', err)
  
  // Erro de upload de arquivo
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({
      error: 'Arquivo muito grande. Tamanho máximo: 5MB'
    })
  }

  // Outros erros
  res.status(500).json({
    error: process.env.NODE_ENV === 'production' 
      ? 'Erro interno do servidor.' 
      : err.message
  })
})

export default app

