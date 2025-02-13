import React, { useState } from 'react';
import { BarChart3, Menu } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative container mx-auto px-6 py-4">
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center">
          <BarChart3 className="h-8 w-8 text-orange-400" />
          <span className="ml-2 text-xl font-bold text-white">DataFast</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
          <a href="#" className="text-gray-300 hover:text-white">FAQ</a>
          <a href="#" className="text-gray-300 hover:text-white">Reviews</a>
          <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Log in
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-8 w-8 text-white" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 p-4 flex flex-col items-center space-y-4 z-0">
          <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
          <a href="#" className="text-gray-300 hover:text-white">FAQ</a>
          <a href="#" className="text-gray-300 hover:text-white">Reviews</a>
          <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Log in
          </button>
        </div>
      )}
    </nav>
  );
}