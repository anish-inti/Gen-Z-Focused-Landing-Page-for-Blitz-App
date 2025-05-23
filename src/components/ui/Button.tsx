import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
}
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  className = ''
}: ButtonProps) => {
  const baseClasses = 'rounded-full font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center';
  const variantClasses = {
    primary: 'bg-gradient-to-r from-brand-pink to-brand-purple text-white hover:shadow-lg hover:shadow-brand-pink/20',
    outline: 'border border-brand-purple/50 text-white hover:bg-brand-purple/10',
    secondary: 'bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white'
  };
  const sizeClasses = {
    sm: 'text-sm px-4 py-1.5',
    md: 'text-base px-6 py-2.5',
    lg: 'text-lg px-8 py-3'
  };
  return <button onClick={onClick} className={`
        ${baseClasses} 
        ${variantClasses[variant]} 
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}>
      {children}
    </button>;
};