import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function NavLink({ href, icon: Icon, label }: NavLinkProps) {
  return (
    <a href={href} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </a>
  );
}