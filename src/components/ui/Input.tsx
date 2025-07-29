import React from 'react'
import { InputType } from '@/types'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  inputType?: InputType
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  inputType = 'text',
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
  
  const baseClasses = 'w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 outline-none'
  const normalClasses = 'border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200'
  const errorClasses = 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200'
  const iconPadding = leftIcon ? 'pl-12' : rightIcon ? 'pr-12' : ''
  
  const inputClasses = `${baseClasses} ${error ? errorClasses : normalClasses} ${iconPadding} ${className}`
  
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-accent-950 mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-secondary-500">{leftIcon}</span>
          </div>
        )}
        
        <input
          id={inputId}
          type={inputType}
          className={inputClasses}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-secondary-500">{rightIcon}</span>
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-red-600 animate-slide-down">
          {error}
        </p>
      )}
      
      {helperText && !error && (
        <p className="mt-2 text-sm text-secondary-600">
          {helperText}
        </p>
      )}
    </div>
  )
}

export default Input

