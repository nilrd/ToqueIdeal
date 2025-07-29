import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { 
  Users, 
  FileText, 
  Package, 
  BarChart3, 
  Settings, 
  Search, 
  Filter,
  Eye,
  Edit,
  Trash2,
  Plus,
  Download,
  Mail,
  Phone
} from 'lucide-react'

// Dados de exemplo para o CRM
const mockQuotes = [
  {
    id: 1,
    customerName: "João Silva",
    email: "joao@empresa.com",
    phone: "(11) 99999-1111",
    company: "Arquitetura Silva",
    product: "Sofá Elegante Premium",
    message: "Preciso de orçamento para projeto residencial de alto padrão",
    status: "Pendente",
    date: "2024-01-15",
    value: null
  },
  {
    id: 2,
    customerName: "Maria Santos",
    email: "maria@design.com",
    phone: "(11) 99999-2222",
    company: "Design Interiores",
    product: "Mesa de Centro Moderna",
    message: "Projeto comercial, preciso de 5 unidades",
    status: "Em Análise",
    date: "2024-01-14",
    value: "R$ 4.500,00"
  },
  {
    id: 3,
    customerName: "Carlos Oliveira",
    email: "carlos@construtora.com",
    phone: "(11) 99999-3333",
    company: "Construtora Premium",
    product: "Poltrona de Design",
    message: "Apartamento decorado, preciso de 3 poltronas",
    status: "Orçado",
    date: "2024-01-13",
    value: "R$ 3.900,00"
  }
]

const mockCustomers = [
  {
    id: 1,
    name: "João Silva",
    email: "joao@empresa.com",
    phone: "(11) 99999-1111",
    company: "Arquitetura Silva",
    totalQuotes: 3,
    lastContact: "2024-01-15"
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria@design.com",
    phone: "(11) 99999-2222",
    company: "Design Interiores",
    totalQuotes: 5,
    lastContact: "2024-01-14"
  }
]

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [searchTerm, setSearchTerm] = useState('')

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pendente': return 'bg-yellow-100 text-yellow-800'
      case 'Em Análise': return 'bg-blue-100 text-blue-800'
      case 'Orçado': return 'bg-green-100 text-green-800'
      case 'Finalizado': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Orçamentos Pendentes</p>
              <p className="text-2xl font-bold text-navy-dark">12</p>
            </div>
            <FileText className="h-8 w-8 text-gold" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Clientes Ativos</p>
              <p className="text-2xl font-bold text-navy-dark">48</p>
            </div>
            <Users className="h-8 w-8 text-gold" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Produtos Cadastrados</p>
              <p className="text-2xl font-bold text-navy-dark">156</p>
            </div>
            <Package className="h-8 w-8 text-gold" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Faturamento Mensal</p>
              <p className="text-2xl font-bold text-navy-dark">R$ 85k</p>
            </div>
            <BarChart3 className="h-8 w-8 text-gold" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Orçamentos Recentes</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {mockQuotes.slice(0, 3).map((quote) => (
              <div key={quote.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-medium">{quote.customerName}</p>
                      <p className="text-sm text-muted-foreground">{quote.product}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(quote.status)}`}>
                      {quote.status}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{quote.date}</p>
                  {quote.value && <p className="font-medium text-gold">{quote.value}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderQuotes = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gerenciar Orçamentos</h2>
        <Button className="btn-primary">
          <Plus className="h-4 w-4 mr-2" />
          Novo Orçamento
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar orçamentos..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filtros
        </Button>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Exportar
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-light-gray">
              <tr>
                <th className="text-left p-4 font-medium">Cliente</th>
                <th className="text-left p-4 font-medium">Produto</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Data</th>
                <th className="text-left p-4 font-medium">Valor</th>
                <th className="text-left p-4 font-medium">Ações</th>
              </tr>
            </thead>
            <tbody>
              {mockQuotes.map((quote) => (
                <tr key={quote.id} className="border-t hover:bg-light-gray/50">
                  <td className="p-4">
                    <div>
                      <p className="font-medium">{quote.customerName}</p>
                      <p className="text-sm text-muted-foreground">{quote.company}</p>
                    </div>
                  </td>
                  <td className="p-4">{quote.product}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(quote.status)}`}>
                      {quote.status}
                    </span>
                  </td>
                  <td className="p-4">{quote.date}</td>
                  <td className="p-4">{quote.value || '-'}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderCustomers = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gerenciar Clientes</h2>
        <Button className="btn-primary">
          <Plus className="h-4 w-4 mr-2" />
          Novo Cliente
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-light-gray">
              <tr>
                <th className="text-left p-4 font-medium">Nome</th>
                <th className="text-left p-4 font-medium">Empresa</th>
                <th className="text-left p-4 font-medium">Contato</th>
                <th className="text-left p-4 font-medium">Orçamentos</th>
                <th className="text-left p-4 font-medium">Último Contato</th>
                <th className="text-left p-4 font-medium">Ações</th>
              </tr>
            </thead>
            <tbody>
              {mockCustomers.map((customer) => (
                <tr key={customer.id} className="border-t hover:bg-light-gray/50">
                  <td className="p-4">
                    <p className="font-medium">{customer.name}</p>
                  </td>
                  <td className="p-4">{customer.company}</td>
                  <td className="p-4">
                    <div className="space-y-1">
                      <p className="text-sm">{customer.email}</p>
                      <p className="text-sm text-muted-foreground">{customer.phone}</p>
                    </div>
                  </td>
                  <td className="p-4">{customer.totalQuotes}</td>
                  <td className="p-4">{customer.lastContact}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard()
      case 'quotes': return renderQuotes()
      case 'customers': return renderCustomers()
      case 'products': return <div className="text-center py-12 text-muted-foreground">Gerenciamento de Produtos em desenvolvimento</div>
      case 'analytics': return <div className="text-center py-12 text-muted-foreground">Analytics em desenvolvimento</div>
      case 'settings': return <div className="text-center py-12 text-muted-foreground">Configurações em desenvolvimento</div>
      default: return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-light-gray">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-navy-dark text-white min-h-screen">
          <div className="p-6">
            <h1 className="text-xl font-bold text-gold">Toque Ideal CRM</h1>
          </div>
          
          <nav className="mt-6">
            <div className="space-y-1">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-navy-medium transition-colors ${
                  activeTab === 'dashboard' ? 'bg-navy-medium border-r-2 border-gold' : ''
                }`}
              >
                <BarChart3 className="h-5 w-5 mr-3" />
                Dashboard
              </button>
              
              <button
                onClick={() => setActiveTab('quotes')}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-navy-medium transition-colors ${
                  activeTab === 'quotes' ? 'bg-navy-medium border-r-2 border-gold' : ''
                }`}
              >
                <FileText className="h-5 w-5 mr-3" />
                Orçamentos
              </button>
              
              <button
                onClick={() => setActiveTab('customers')}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-navy-medium transition-colors ${
                  activeTab === 'customers' ? 'bg-navy-medium border-r-2 border-gold' : ''
                }`}
              >
                <Users className="h-5 w-5 mr-3" />
                Clientes
              </button>
              
              <button
                onClick={() => setActiveTab('products')}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-navy-medium transition-colors ${
                  activeTab === 'products' ? 'bg-navy-medium border-r-2 border-gold' : ''
                }`}
              >
                <Package className="h-5 w-5 mr-3" />
                Produtos
              </button>
              
              <button
                onClick={() => setActiveTab('analytics')}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-navy-medium transition-colors ${
                  activeTab === 'analytics' ? 'bg-navy-medium border-r-2 border-gold' : ''
                }`}
              >
                <BarChart3 className="h-5 w-5 mr-3" />
                Analytics
              </button>
              
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-navy-medium transition-colors ${
                  activeTab === 'settings' ? 'bg-navy-medium border-r-2 border-gold' : ''
                }`}
              >
                <Settings className="h-5 w-5 mr-3" />
                Configurações
              </button>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <header className="bg-white border-b px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-navy-dark">
                {activeTab === 'dashboard' && 'Dashboard'}
                {activeTab === 'quotes' && 'Orçamentos'}
                {activeTab === 'customers' && 'Clientes'}
                {activeTab === 'products' && 'Produtos'}
                {activeTab === 'analytics' && 'Analytics'}
                {activeTab === 'settings' && 'Configurações'}
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Bem-vindo, Admin</span>
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-navy-dark">A</span>
                </div>
              </div>
            </div>
          </header>

          <main className="p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel

