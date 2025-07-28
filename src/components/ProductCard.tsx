'use client';
import { useState } from 'react';
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
  onAddToCart: (product: Product, selectedColor: string, selectedSize?: string, quantity: number) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.color);
  const [selectedSize, setSelectedSize] = useState(product.availableSizes?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [showOptions, setShowOptions] = useState(false);

  const availableColors = product.availableColors || [product.color];
  const availableSizes = product.availableSizes || [];

  const handleAddToCart = () => {
    onAddToCart(product, selectedColor, selectedSize || undefined, quantity);
    setShowOptions(false);
    setQuantity(1);
  };

  const handleQuickAdd = () => {
    onAddToCart(product, product.color, undefined, 1);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <Image
          src={product.image}
          alt={product.name}
          width={280}
          height={200}
          className="product-image"
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div className="product-info">
        <span className="product-color-badge">{product.color}</span>
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        {showOptions && (
          <div className="product-options">
            {availableColors.length > 1 && (
              <div className="option-group">
                <label>Cor:</label>
                <select 
                  value={selectedColor} 
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="option-select"
                >
                  {availableColors.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>
            )}

            {availableSizes.length > 0 && (
              <div className="option-group">
                <label>Tamanho:</label>
                <select 
                  value={selectedSize} 
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="option-select"
                >
                  {availableSizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="option-group">
              <label>Quantidade:</label>
              <div className="quantity-selector">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="quantity-btn"
                >
                  -
                </button>
                <span className="quantity-display">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="product-actions">
          {!showOptions ? (
            <>
              <button 
                className="product-btn-secondary"
                onClick={() => setShowOptions(true)}
              >
                Personalizar
              </button>
              <button 
                className="product-btn"
                onClick={handleQuickAdd}
              >
                Adicionar ao Orçamento
              </button>
            </>
          ) : (
            <>
              <button 
                className="product-btn-secondary"
                onClick={() => setShowOptions(false)}
              >
                Cancelar
              </button>
              <button 
                className="product-btn"
                onClick={handleAddToCart}
              >
                Adicionar ({quantity})
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

