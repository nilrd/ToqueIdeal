import React from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, icon, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-secondary-charcoal mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <div className="text-neutral-gray-400">
                {icon}
              </div>
            </div>
          )}
          <input
            type={type}
            className={cn(
              'w-full px-4 py-3 text-base border border-neutral-gray-300 rounded-lg',
              'focus:ring-2 focus:ring-primary-gold focus:border-primary-gold',
              'transition-all duration-200 ease-in-out',
              'placeholder-neutral-gray-400',
              'disabled:bg-neutral-gray-100 disabled:cursor-not-allowed',
              error && 'border-error focus:ring-error focus:border-error',
              icon && 'pl-10',
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-2 text-sm text-error">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input

