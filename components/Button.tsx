import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled,
  className = '',
}: ButtonProps) {
  const baseStyles =
    'font-semibold rounded-lg transition inline-flex items-center justify-center gap-2 cursor-pointer';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    primary: 'bg-[#FF8400] hover:bg-[#E67C00] text-white disabled:opacity-40 disabled:cursor-not-allowed',
    secondary:
      'bg-[#F9F9F9] dark:bg-[#1A1A1A] border border-[#EEEEEE] dark:border-[#333333] text-[#1A1A1A] dark:text-white hover:bg-[#F0F0F0] dark:hover:bg-[#262626]',
    tertiary:
      'bg-transparent border border-[#FF8400] text-[#FF8400] hover:bg-[#FFF5EB] dark:hover:bg-[#2A1600]',
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
