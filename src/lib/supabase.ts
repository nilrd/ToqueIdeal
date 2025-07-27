import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para o banco de dados
export interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  image_url: string
  created_at: string
  updated_at: string
}

export interface Category {
  id: number
  name: string
  description: string
  created_at: string
}

export interface User {
  id: string
  email: string
  role: 'admin' | 'user'
  created_at: string
}

