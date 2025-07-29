export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'editor';
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
}

export interface CreateUserData {
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'editor';
}

export interface UpdateUserData {
  username?: string;
  email?: string;
  role?: 'admin' | 'editor';
  isActive?: boolean;
}

// Usuários padrão do sistema (em produção, usar banco de dados)
export const defaultUsers: User[] = [
  {
    id: 'admin-001',
    username: 'admin',
    email: 'admin@toqueideal.com.br',
    password: '$2b$10$rQZ8kZKjKjKjKjKjKjKjKOQZ8kZKjKjKjKjKjKjKjKjKjKjKjKjKj', // senha: admin123
    role: 'admin',
    isActive: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: 'editor-001',
    username: 'editor',
    email: 'editor@toqueideal.com.br',
    password: '$2b$10$rQZ8kZKjKjKjKjKjKjKjKOQZ8kZKjKjKjKjKjKjKjKjKjKjKjKjKj', // senha: editor123
    role: 'editor',
    isActive: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  }
];

export class UserService {
  private users: User[] = [...defaultUsers];

  async findById(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  async create(userData: CreateUserData): Promise<User> {
    const bcrypt = require('bcryptjs');
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    
    const newUser: User = {
      id: `user-${Date.now()}`,
      ...userData,
      password: hashedPassword,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(newUser);
    return newUser;
  }

  async update(id: string, userData: UpdateUserData): Promise<User | undefined> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) return undefined;

    this.users[userIndex] = {
      ...this.users[userIndex],
      ...userData,
      updatedAt: new Date(),
    };

    return this.users[userIndex];
  }

  async delete(id: string): Promise<boolean> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) return false;

    this.users.splice(userIndex, 1);
    return true;
  }

  async validatePassword(user: User, password: string): Promise<boolean> {
    const bcrypt = require('bcryptjs');
    return await bcrypt.compare(password, user.password);
  }

  async updateLastLogin(id: string): Promise<void> {
    const user = await this.findById(id);
    if (user) {
      user.lastLogin = new Date();
      user.updatedAt = new Date();
    }
  }

  async getAllUsers(): Promise<Omit<User, 'password'>[]> {
    return this.users.map(({ password, ...user }) => user);
  }
}

