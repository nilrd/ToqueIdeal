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
          width={300}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-color">Cor: {product.color}</p>
        
        <div className="product-actions">
          <button 
            onClick={handleWhatsAppClick}
            className="btn-whatsapp"
          >
            Solicitar Orçamento
          </button>
          
          {onAddToCart && (
            <button 
              onClick={handleAddToCart}
              className="btn-add-cart"
            >
              Adicionar ao Carrinho
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

