import React from 'react';
import { Bot, MessageSquare } from 'lucide-react';
import { Button } from '../Button/Button';

export function Hero() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-20">
      <div className="flex items-center mb-12">
        <Bot className="w-20 h-20 text-blue-500 mr-4" />
        <h1 className="text-7xl font-bold text-white">MR. MR</h1>
      </div>

      <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl">
        Your ultimate Discord companion for managing and enhancing your server experience
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <Button variant="secondary">COMING SOON...</Button>
        <Button variant="primary" href="https://discord.gg/your-invite-link" icon={MessageSquare}>
          JOIN OUR DISCORD
        </Button>
      </div>
    </main>
  );
}