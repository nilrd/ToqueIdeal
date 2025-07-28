'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function NewProduct() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    color: '',
    image: '',
    available_colors: [''],
    available_sizes: [''],
    price: '',
    active: true
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const router = useRouter();

  const categories = [
    'Centros de Mesa',
    'Cubas Decorativas',
    'Acessórios para Banheiro',
    'Vasos',
    'Bowls',
    'Outros'
  ];

  const colors = [
    'Âmbar', 'Turquesa', 'Verde', 'Azul', 'Dourado', 'Bronze',
    'Transparente', 'Fumê', 'Preto', 'Branco', 'Vermelho', 'Rosa'
  ];

  const sizes = [
    'Pequeno', 'Médio', 'Grande', 'Extra Grande',
    '10cm', '15cm', '20cm', '25cm', '30cm', '35cm', '40cm'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleColorChange = (index: number, value: string) => {
    const newColors = [...formData.available_colors];
    newColors[index] = value;
    setFormData(prev => ({ ...prev, available_colors: newColors }));
  };

  const addColor = () => {
    setFormData(prev => ({
      ...prev,
      available_colors: [...prev.available_colors, '']
    }));
  };

  const removeColor = (index: number) => {
    if (formData.available_colors.length > 1) {
      const newColors = formData.available_colors.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, available_colors: newColors }));
    }
  };

  const handleSizeChange = (index: number, value: string) => {
    const newSizes = [...formData.available_sizes];
    newSizes[index] = value;
    setFormData(prev => ({ ...prev, available_sizes: newSizes }));
  };

  const addSize = () => {
    setFormData(prev => ({
      ...prev,
      available_sizes: [...prev.available_sizes, '']
    }));
  };

  const removeSize = (index: number) => {
    if (formData.available_sizes.length > 1) {
      const newSizes = formData.available_sizes.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, available_sizes: newSizes }));
    }
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setFormData(prev => ({ ...prev, image: url }));
    setImagePreview(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Filtrar cores e tamanhos vazios
      const cleanedData = {
        ...formData,
        available_colors: formData.available_colors.filter(color => color.trim() !== ''),
        available_sizes: formData.available_sizes.filter(size => size.trim() !== ''),
        price: formData.price ? parseFloat(formData.price) : null
      };

      const response = await fetch('/api/admin/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanedData),
      });

      if (response.ok) {
        router.push('/admin/products');
      } else {
        const data = await response.json();
        setError(data.error || 'Erro ao criar produto');
      }
    } catch (error) {
      setError('Erro de conexão. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <h2>Toque Ideal</h2>
          <span>Painel Administrativo</span>
        </div>
        
        <nav className="admin-nav">
          <a href="/admin" className="nav-item">
            📊 Dashboard
          </a>
          <a href="/admin/products" className="nav-item active">
            🛍️ Produtos
          </a>
          <a href="/admin/quotes" className="nav-item">
            💬 Orçamentos
          </a>
          <a href="/admin/events" className="nav-item">
            📅 Eventos
          </a>
          <a href="/admin/representatives" className="nav-item">
            👥 Representantes
          </a>
          <a href="/admin/jobs" className="nav-item">
            💼 Vagas
          </a>
          <a href="/admin/settings" className="nav-item">
            ⚙️ Configurações
          </a>
        </nav>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <div className="header-content">
            <h1>Adicionar Produto</h1>
            <p>Cadastre um novo produto no catálogo</p>
          </div>
          <a href="/admin/products" className="btn-secondary">
            ← Voltar
          </a>
        </header>

        <div className="admin-form-container">
          <form onSubmit={handleSubmit} className="admin-form">
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <div className="form-grid">
              <div className="form-section">
                <h3>Informações Básicas</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Nome do Produto *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Ex: Centro de Mesa Âmbar"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Descrição *</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    className="form-textarea"
                    rows={4}
                    placeholder="Descreva o produto, suas características e uso..."
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="category">Categoria *</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="form-select"
                    >
                      <option value="">Selecione uma categoria</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="color">Cor Principal *</label>
                    <select
                      id="color"
                      name="color"
                      value={formData.color}
                      onChange={handleInputChange}
                      required
                      className="form-select"
                    >
                      <option value="">Selecione uma cor</option>
                      {colors.map(color => (
                        <option key={color} value={color}>{color}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="price">Preço (opcional)</label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                    />
                  </div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="active"
                        checked={formData.active}
                        onChange={handleInputChange}
                      />
                      Produto ativo
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3>Imagem do Produto</h3>
                
                <div className="form-group">
                  <label htmlFor="image">URL da Imagem *</label>
                  <input
                    type="url"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleImageUrlChange}
                    required
                    className="form-input"
                    placeholder="https://exemplo.com/imagem.jpg"
                  />
                </div>

                {imagePreview && (
                  <div className="image-preview">
                    <h4>Pré-visualização:</h4>
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      width={200}
                      height={150}
                      style={{ objectFit: 'cover' }}
                      className="preview-image"
                      onError={() => setImagePreview('')}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="form-section">
              <h3>Variações do Produto</h3>
              
              <div className="variations-grid">
                <div className="variation-group">
                  <h4>Cores Disponíveis</h4>
                  {formData.available_colors.map((color, index) => (
                    <div key={index} className="variation-item">
                      <select
                        value={color}
                        onChange={(e) => handleColorChange(index, e.target.value)}
                        className="form-select"
                      >
                        <option value="">Selecione uma cor</option>
                        {colors.map(colorOption => (
                          <option key={colorOption} value={colorOption}>{colorOption}</option>
                        ))}
                      </select>
                      {formData.available_colors.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeColor(index)}
                          className="btn-remove"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addColor}
                    className="btn-add"
                  >
                    + Adicionar Cor
                  </button>
                </div>

                <div className="variation-group">
                  <h4>Tamanhos Disponíveis (opcional)</h4>
                  {formData.available_sizes.map((size, index) => (
                    <div key={index} className="variation-item">
                      <select
                        value={size}
                        onChange={(e) => handleSizeChange(index, e.target.value)}
                        className="form-select"
                      >
                        <option value="">Selecione um tamanho</option>
                        {sizes.map(sizeOption => (
                          <option key={sizeOption} value={sizeOption}>{sizeOption}</option>
                        ))}
                      </select>
                      {formData.available_sizes.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSize(index)}
                          className="btn-remove"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addSize}
                    className="btn-add"
                  >
                    + Adicionar Tamanho
                  </button>
                </div>
              </div>
            </div>

            <div className="form-actions">
              <a href="/admin/products" className="btn-secondary">
                Cancelar
              </a>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
              >
                {loading ? 'Salvando...' : 'Salvar Produto'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

