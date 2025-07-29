import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  color: string;
  category: string;
  image: string;
  description: string;
  availableColors?: string[];
  availableSizes?: string[];
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const message = `Olá! Gostaria de solicitar um orçamento para o produto: ${product.name}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <Image
          src={product.image}
          alt={product.name}
          width={320}
          height={250}
          style={{ objectFit: 'cover' }}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        
        {/* Badge de categoria */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          background: 'var(--accent-gold)',
          color: 'white',
          padding: '0.25rem 0.75rem',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: '600'
        }}>
          {product.category}
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-color">
          <span style={{ fontWeight: '600' }}>Cor:</span> {product.color}
        </p>
        
        {/* Cores disponíveis */}
        {product.availableColors && product.availableColors.length > 0 && (
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ 
              fontSize: '0.9rem', 
              color: 'var(--neutral-medium)',
              fontWeight: '500'
            }}>
              Cores disponíveis:
            </span>
            <div style={{ 
              display: 'flex', 
              gap: '0.5rem', 
              marginTop: '0.5rem',
              flexWrap: 'wrap'
            }}>
              {product.availableColors.map((color, index) => (
                <span 
                  key={index}
                  style={{
                    padding: '0.25rem 0.5rem',
                    background: 'var(--neutral-light)',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    color: 'var(--neutral-dark)'
                  }}
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="product-actions">
          <button 
            onClick={handleWhatsAppClick}
            className="btn-whatsapp"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            <span>📱</span>
            Solicitar Orçamento
          </button>
          
          {onAddToCart && (
            <button 
              onClick={handleAddToCart}
              className="btn-add-cart"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <span>🛒</span>
              Adicionar ao Carrinho
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

