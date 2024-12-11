import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  href?: string;
  icon?: LucideIcon;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', href, icon: Icon, children }: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-500",
    secondary: "bg-gray-700 text-white hover:bg-gray-600"
  };

  const className = `${baseStyles} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {Icon && <Icon className="w-5 h-5" />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={className}>
      {Icon && <Icon className="w-5 h-5" />}
      <span>{children}</span>
    </button>
  );
}