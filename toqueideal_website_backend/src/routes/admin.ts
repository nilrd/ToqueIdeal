import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { ProductService } from '../models/Product';
import { UserService } from '../models/User';
import { AuthenticatedRequest, requireEditor, requireAdmin } from '../middleware/auth';

const router = Router();
const productService = new ProductService();
const userService = new UserService();

// Configuração do multer para upload de imagens
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/products/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Apenas imagens são permitidas (JPEG, PNG, WebP)'));
    }
  }
});

// Dashboard - estatísticas gerais
router.get('/dashboard', requireEditor, async (req: AuthenticatedRequest, res) => {
  try {
    const productStats = await productService.getStats();
    const users = await userService.getAllUsers();
    
    res.json({
      stats: {
        products: productStats,
        users: {
          total: users.length,
          active: users.filter(u => u.isActive).length,
          admins: users.filter(u => u.role === 'admin').length,
          editors: users.filter(u => u.role === 'editor').length,
        }
      }
    });
  } catch (error) {
    console.error('Erro ao buscar estatísticas:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

// Produtos - listar todos
router.get('/products', requireEditor, async (req: AuthenticatedRequest, res) => {
  try {
    const filters = {
      collection: req.query.collection as string,
      color: req.query.color as string,
      material: req.query.material as string,
      isHighlight: req.query.isHighlight ? req.query.isHighlight === 'true' : undefined,
      isActive: req.query.isActive ? req.query.isActive === 'true' : undefined,
      search: req.query.search as string,
    };

    const products = await productService.findAll(filters);
    res.json({ products });
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

// Produtos - buscar por ID
router.get('/products/:id', requireEditor, async (req: AuthenticatedRequest, res) => {
  try {
    const product = await productService.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado.' });
    }
    res.json({ product });
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

// Produtos - criar novo
router.post('/products', requireEditor, upload.array('images', 10), async (req: AuthenticatedRequest, res) => {
  try {
    const { code, name, description, dimensions, color, collection, material, isHighlight } = req.body;

    // Validações básicas
    if (!code || !name || !description) {
      return res.status(400).json({
        error: 'Código, nome e descrição são obrigatórios.'
      });
    }

    // Verificar se o código já existe
    const existingProduct = await productService.findByCode(code);
    if (existingProduct) {
      return res.status(400).json({
        error: 'Já existe um produto com este código.'
      });
    }

    // Processar imagens enviadas
    const images = (req.files as Express.Multer.File[])?.map((file, index) => ({
      url: `/uploads/products/${file.filename}`,
      alt: `${name} - Imagem ${index + 1}`,
      isPrimary: index === 0,
      order: index + 1,
    })) || [];

    const productData = {
      code,
      name,
      description,
      dimensions: dimensions || '',
      color: color || '',
      collection: collection || '',
      material: material || '',
      images,
      isHighlight: isHighlight === 'true',
      createdBy: req.user!.id,
    };

    const product = await productService.create(productData);
    res.status(201).json({ 
      message: 'Produto criado com sucesso.',
      product 
    });

  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

// Produtos - atualizar
router.put('/products/:id', requireEditor, upload.array('images', 10), async (req: AuthenticatedRequest, res) => {
  try {
    const { code, name, description, dimensions, color, collection, material, isHighlight, isActive } = req.body;

    const existingProduct = await productService.findById(req.params.id);
    if (!existingProduct) {
      return res.status(404).json({ error: 'Produto não encontrado.' });
    }

    // Se o código foi alterado, verificar se não existe outro produto com o mesmo código
    if (code && code !== existingProduct.code) {
      const productWithSameCode = await productService.findByCode(code);
      if (productWithSameCode) {
        return res.status(400).json({
          error: 'Já existe um produto com este código.'
        });
      }
    }

    // Processar novas imagens se enviadas
    let images = existingProduct.images;
    if (req.files && (req.files as Express.Multer.File[]).length > 0) {
      const newImages = (req.files as Express.Multer.File[]).map((file, index) => ({
        id: `img-${Date.now()}-${index}`,
        url: `/uploads/products/${file.filename}`,
        alt: `${name || existingProduct.name} - Imagem ${index + 1}`,
        isPrimary: index === 0 && existingProduct.images.length === 0,
        order: existingProduct.images.length + index + 1,
      }));
      images = [...existingProduct.images, ...newImages];
    }

    const updateData = {
      ...(code && { code }),
      ...(name && { name }),
      ...(description && { description }),
      ...(dimensions !== undefined && { dimensions }),
      ...(color && { color }),
      ...(collection && { collection }),
      ...(material && { material }),
      ...(isHighlight !== undefined && { isHighlight: isHighlight === 'true' }),
      ...(isActive !== undefined && { isActive: isActive === 'true' }),
      images,
      updatedBy: req.user!.id,
    };

    const product = await productService.update(req.params.id, updateData);
    res.json({ 
      message: 'Produto atualizado com sucesso.',
      product 
    });

  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

// Produtos - deletar
router.delete('/products/:id', requireEditor, async (req: AuthenticatedRequest, res) => {
  try {
    const success = await productService.delete(req.params.id);
    if (!success) {
      return res.status(404).json({ error: 'Produto não encontrado.' });
    }

    res.json({ message: 'Produto deletado com sucesso.' });
  } catch (error) {
    console.error('Erro ao deletar produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

// Metadados - coleções, cores, materiais
router.get('/metadata', requireEditor, async (req: AuthenticatedRequest, res) => {
  try {
    const [collections, colors, materials] = await Promise.all([
      productService.getCollections(),
      productService.getColors(),
      productService.getMaterials(),
    ]);

    res.json({
      collections,
      colors,
      materials,
    });
  } catch (error) {
    console.error('Erro ao buscar metadados:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

// Usuários - apenas admins
router.get('/users', requireAdmin, async (req: AuthenticatedRequest, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json({ users });
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

// Usuários - criar novo (apenas admins)
router.post('/users', requireAdmin, async (req: AuthenticatedRequest, res) => {
  try {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password || !role) {
      return res.status(400).json({
        error: 'Todos os campos são obrigatórios.'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        error: 'A senha deve ter pelo menos 6 caracteres.'
      });
    }

    // Verificar se username ou email já existem
    const existingUser = await userService.findByUsername(username) || await userService.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({
        error: 'Username ou email já estão em uso.'
      });
    }

    const user = await userService.create({ username, email, password, role });
    const { password: _, ...userWithoutPassword } = user;

    res.status(201).json({
      message: 'Usuário criado com sucesso.',
      user: userWithoutPassword
    });

  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

export default router;

