import React from 'react';
import { Book, MessageSquare, HelpCircle } from 'lucide-react';
import { NavLink } from './NavLink';

export function Navbar() {
  return (
    <nav className="sticky top-0 w-full bg-gray-900/95 backdrop-blur-sm px-6 py-4 flex items-center justify-between border-b border-gray-800">
      <div className="text-xl font-bold text-white">MR. MR</div>
      <div className="flex items-center space-x-8">
        <NavLink href="#" icon={Book} label="DOCS" />
        <NavLink href="#" icon={MessageSquare} label="DISCORD" />
        <NavLink href="#" icon={HelpCircle} label="SUPPORT" />
      </div>
    </nav>
  );
}