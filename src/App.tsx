import React from 'react';
import { Navbar } from './components/Navigation/Navbar';
import { Hero } from './components/Hero/Hero';
import { Background } from './components/Layout/Background';

function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 flex flex-col">
      <Background />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;