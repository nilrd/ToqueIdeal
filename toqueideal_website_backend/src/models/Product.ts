export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
  order: number;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  dimensions: string;
  color: string;
  collection: string;
  material: string;
  images: ProductImage[];
  isHighlight: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}

export interface CreateProductData {
  code: string;
  name: string;
  description: string;
  dimensions: string;
  color: string;
  collection: string;
  material: string;
  images: Omit<ProductImage, 'id'>[];
  isHighlight?: boolean;
  createdBy: string;
}

export interface UpdateProductData {
  code?: string;
  name?: string;
  description?: string;
  dimensions?: string;
  color?: string;
  collection?: string;
  material?: string;
  images?: ProductImage[];
  isHighlight?: boolean;
  isActive?: boolean;
  updatedBy: string;
}

export interface ProductFilters {
  collection?: string;
  color?: string;
  material?: string;
  isHighlight?: boolean;
  isActive?: boolean;
  search?: string;
}

export class ProductService {
  private products: Product[] = [];

  constructor() {
    // Inicializar com produtos de exemplo
    this.initializeProducts();
  }

  private initializeProducts() {
    // Produtos de exemplo baseados no catálogo
    const sampleProducts: CreateProductData[] = [
      {
        code: 'TI-DOU-001',
        name: 'Conjunto Banheiro Dourado Luxo',
        description: 'Conjunto completo para banheiro com acabamento dourado premium, incluindo porta sabonete, porta escova e dispenser',
        dimensions: '30x20x15cm',
        color: 'Dourado',
        collection: 'Dourada',
        material: 'Metal com banho dourado 24k',
        images: [
          {
            url: '/images/products/dourado-conjunto-luxo-1.jpg',
            alt: 'Conjunto Banheiro Dourado Luxo - Vista frontal',
            isPrimary: true,
            order: 1
          }
        ],
        isHighlight: true,
        createdBy: 'admin-001'
      },
      {
        code: 'TI-PRA-001',
        name: 'Conjunto Banheiro Prata Premium',
        description: 'Conjunto completo em prata com design moderno e funcional',
        dimensions: '28x18x14cm',
        color: 'Prata',
        collection: 'Prata',
        material: 'Metal cromado premium',
        images: [
          {
            url: '/images/products/prata-conjunto-premium-1.jpg',
            alt: 'Conjunto Banheiro Prata Premium',
            isPrimary: true,
            order: 1
          }
        ],
        isHighlight: true,
        createdBy: 'admin-001'
      }
    ];

    sampleProducts.forEach(productData => {
      this.create(productData);
    });
  }

  async findById(id: string): Promise<Product | undefined> {
    return this.products.find(product => product.id === id);
  }

  async findByCode(code: string): Promise<Product | undefined> {
    return this.products.find(product => product.code === code);
  }

  async findAll(filters?: ProductFilters): Promise<Product[]> {
    let filteredProducts = [...this.products];

    if (filters) {
      if (filters.collection) {
        filteredProducts = filteredProducts.filter(p => 
          p.collection.toLowerCase().includes(filters.collection!.toLowerCase())
        );
      }

      if (filters.color) {
        filteredProducts = filteredProducts.filter(p => 
          p.color.toLowerCase().includes(filters.color!.toLowerCase())
        );
      }

      if (filters.material) {
        filteredProducts = filteredProducts.filter(p => 
          p.material.toLowerCase().includes(filters.material!.toLowerCase())
        );
      }

      if (filters.isHighlight !== undefined) {
        filteredProducts = filteredProducts.filter(p => p.isHighlight === filters.isHighlight);
      }

      if (filters.isActive !== undefined) {
        filteredProducts = filteredProducts.filter(p => p.isActive === filters.isActive);
      }

      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        filteredProducts = filteredProducts.filter(p => 
          p.name.toLowerCase().includes(searchTerm) ||
          p.description.toLowerCase().includes(searchTerm) ||
          p.code.toLowerCase().includes(searchTerm)
        );
      }
    }

    return filteredProducts.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
  }

  async create(productData: CreateProductData): Promise<Product> {
    const newProduct: Product = {
      id: `product-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      ...productData,
      images: productData.images.map((img, index) => ({
        ...img,
        id: `img-${Date.now()}-${index}`
      })),
      isHighlight: productData.isHighlight || false,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      updatedBy: productData.createdBy,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  async update(id: string, productData: UpdateProductData): Promise<Product | undefined> {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex === -1) return undefined;

    const updatedProduct: Product = {
      ...this.products[productIndex],
      ...productData,
      updatedAt: new Date(),
    };

    // Se imagens foram fornecidas, atualizar com IDs
    if (productData.images) {
      updatedProduct.images = productData.images.map((img, index) => ({
        ...img,
        id: img.id || `img-${Date.now()}-${index}`
      }));
    }

    this.products[productIndex] = updatedProduct;
    return updatedProduct;
  }

  async delete(id: string): Promise<boolean> {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex === -1) return false;

    this.products.splice(productIndex, 1);
    return true;
  }

  async getCollections(): Promise<string[]> {
    const collections = new Set(this.products.map(p => p.collection));
    return Array.from(collections).sort();
  }

  async getColors(): Promise<string[]> {
    const colors = new Set(this.products.map(p => p.color));
    return Array.from(colors).sort();
  }

  async getMaterials(): Promise<string[]> {
    const materials = new Set(this.products.map(p => p.material));
    return Array.from(materials).sort();
  }

  async getStats(): Promise<{
    total: number;
    active: number;
    inactive: number;
    highlights: number;
    collections: number;
  }> {
    const active = this.products.filter(p => p.isActive).length;
    const highlights = this.products.filter(p => p.isHighlight).length;
    const collections = new Set(this.products.map(p => p.collection)).size;

    return {
      total: this.products.length,
      active,
      inactive: this.products.length - active,
      highlights,
      collections,
    };
  }
}

