import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'ink' | 'red';
}

export function InkButton({ children, className = '', variant = 'ink', ...props }: ButtonProps) {
  if (variant === 'red') {
    return (
      <button
        className={`bg-blood text-white font-display uppercase px-6 py-3 shadow-hard hover-lift ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`bg-ink text-paper font-display uppercase tracking-widest px-6 py-3 shadow-hard-red hover-lift-red ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
