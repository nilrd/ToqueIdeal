'use client'

import { useState } from 'react'
import { Button, Card, Input } from '@/components/ui'

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    representative: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Formulário enviado:', formData)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    
    // Resetar formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      representative: '',
      message: ''
    })
    
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      info: 'contato@toqueideal.com.br',
      action: 'mailto:contato@toqueideal.com.br'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      info: '(11) 99999-9999',
      action: 'https://wa.me/5511999999999'
    },
    {
      icon: '📞',
      title: 'Telefone',
      info: '(11) 3333-4444',
      action: 'tel:+551133334444'
    },
    {
      icon: '🌐',
      title: 'Website',
      info: 'www.toqueideal.com.br',
      action: 'https://www.toqueideal.com.br'
    }
  ]

  const businessHours = [
    { day: 'Segunda a Sexta', hours: '08:00 - 18:00' },
    { day: 'Sábado', hours: '08:00 - 12:00' },
    { day: 'Domingo', hours: 'Fechado' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-primary-50 to-secondary-100 flex items-center justify-center">
        <div className="container-luxury text-center">
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-accent-950 mb-6">
            <span className="text-gradient-gold">Contato</span>
          </h1>
          <p className="text-xl text-secondary-700 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar seus ambientes
          </p>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((contact) => (
              <Card key={contact.title} variant="luxury" className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-display font-semibold text-accent-950 mb-2">
                  {contact.title}
                </h3>
                <a
                  href={contact.action}
                  target={contact.action.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="text-primary-600 hover:text-primary-700 transition-colors duration-300 font-medium"
                >
                  {contact.info}
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="section-padding bg-secondary-50">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <h2 className="text-4xl font-display font-bold text-accent-950 mb-6">
                Envie sua <span className="text-gradient-gold">Mensagem</span>
              </h2>
              <p className="text-lg text-secondary-700 mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
              </p>

              <Card variant="luxury">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Nome Completo *"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Seu nome completo"
                    />
                    <Input
                      label="Email *"
                      name="email"
                      inputType="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Telefone/WhatsApp *"
                      name="phone"
                      inputType="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(11) 99999-9999"
                    />
                    <Input
                      label="Empresa"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nome da sua empresa"
                    />
                  </div>

                  <Input
                    label="Representante (opcional)"
                    name="representative"
                    value={formData.representative}
                    onChange={handleInputChange}
                    placeholder="Você chegou ao site através de um representante? Qual?"
                    helperText="Esta informação nos ajuda a melhorar nosso atendimento"
                  />

                  <div>
                    <label className="block text-sm font-medium text-accent-950 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-secondary-200 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 outline-none resize-vertical"
                      placeholder="Descreva seu projeto, necessidades ou dúvidas..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Informações Adicionais */}
            <div className="space-y-8">
              {/* Horário de Funcionamento */}
              <Card variant="luxury">
                <h3 className="text-2xl font-display font-semibold text-accent-950 mb-6">
                  Horário de Atendimento
                </h3>
                <div className="space-y-4">
                  {businessHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-secondary-100 last:border-b-0">
                      <span className="text-secondary-700 font-medium">{schedule.day}</span>
                      <span className="text-accent-950 font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Localização */}
              <Card variant="luxury">
                <h3 className="text-2xl font-display font-semibold text-accent-950 mb-6">
                  Nossa Localização
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-primary-500 text-xl mt-1">📍</span>
                    <div>
                      <p className="text-accent-950 font-medium">Endereço</p>
                      <p className="text-secondary-600">
                        Rua das Flores, 123<br />
                        Centro - São Paulo/SP<br />
                        CEP: 01234-567
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Redes Sociais */}
              <Card variant="luxury">
                <h3 className="text-2xl font-display font-semibold text-accent-950 mb-6">
                  Siga-nos nas Redes Sociais
                </h3>
                <div className="flex space-x-4">
                  {[
                    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/toqueideal' },
                    { name: 'Facebook', icon: '📘', url: 'https://facebook.com/toqueideal' },
                    { name: 'Pinterest', icon: '📌', url: 'https://pinterest.com/toqueideal' },
                    { name: 'YouTube', icon: '📺', url: 'https://youtube.com/toqueideal' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary-100 hover:bg-primary-500 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                      title={social.name}
                    >
                      <span className="text-xl">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-luxury text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Prefere Falar Diretamente Conosco?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato via WhatsApp para um atendimento mais rápido e personalizado
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary-500"
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          >
            <span className="mr-2">📱</span>
            Falar no WhatsApp
          </Button>
        </div>
      </section>
    </div>
  )
}

