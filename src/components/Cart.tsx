
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CartItem {
  id: string;
  name: string;
  color: string;
  size?: string;
  quantity: number;
  image: string;
  category: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('toqueIdealCart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, [isOpen]);

  const updateQuantity = (id: string, color: string, size: string | undefined, newQuantity: number) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id && item.color === color && item.size === size) {
        return { ...item, quantity: Math.max(0, newQuantity) };
      }
      return item;
    }).filter(item => item.quantity > 0);

    setCartItems(updatedItems);
    localStorage.setItem('toqueIdealCart', JSON.stringify(updatedItems));
  };

  const removeItem = (id: string, color: string, size: string | undefined) => {
    const updatedItems = cartItems.filter(item => 
      !(item.id === id && item.color === color && item.size === size)
    );
    setCartItems(updatedItems);
    localStorage.setItem('toqueIdealCart', JSON.stringify(updatedItems));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('toqueIdealCart');
  };

  const generateWhatsAppMessage = () => {
    if (cartItems.length === 0) return '';

    let message = 'Olá! Gostaria de solicitar um orçamento para os seguintes produtos:\n\n';
    
    cartItems.forEach((item) => {
      message += `- ${item.name}\n`;
      message += `   Cor: ${item.color}\n`;
      if (item.size) {
        message += `   Tamanho: ${item.size}\n`;
      }
      message += `   Quantidade: ${item.quantity}\n\n`;
    });

    message += 'Aguardo retorno com os valores. Obrigado!';
    return encodeURIComponent(message);
  };

  const handleWhatsAppClick = () => {
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
    clearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
          <h2>Carrinho de Orçamento</h2>
          <button className="cart-close" onClick={onClose}>×</button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Seu carrinho está vazio</p>
              <p>Adicione produtos do catálogo para solicitar um orçamento</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.color}-${item.size || 'default'}`} className="cart-item">
                    <div className="cart-item-image">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={60}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p>Cor: {item.color}</p>
                      {item.size && <p>Tamanho: {item.size}</p>}
                    </div>
                    <div className="cart-item-quantity">
                      <button 
                        onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity - 1)}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity + 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id, item.color, item.size)}
                      className="remove-item"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-summary">
                  <p>Total de itens: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
                </div>
                <div className="cart-actions">
                  <button onClick={clearCart} className="btn-secondary">
                    Limpar Carrinho
                  </button>
                  <button onClick={handleWhatsAppClick} className="btn-primary">
                    Solicitar Orçamento via WhatsApp
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}


