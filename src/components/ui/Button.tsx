import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  ariaLabel
}: ButtonProps) => {
  const baseClasses = 'rounded-full font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-pink disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-brand-pink to-brand-purple text-white hover:shadow-lg hover:shadow-brand-pink/20 focus:ring-brand-pink',
    outline: 'border border-brand-purple/50 text-white hover:bg-brand-purple/10 focus:ring-brand-purple',
    secondary: 'bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white focus:ring-white/20'
  };

  const sizeClasses = {
    sm: 'text-sm px-4 py-1.5 md:px-5 md:py-2',
    md: 'text-base px-6 py-2.5 md:px-7 md:py-3',
    lg: 'text-lg px-8 py-3 md:px-10 md:py-4'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`
        ${baseClasses} 
        ${variantClasses[variant]} 
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
};