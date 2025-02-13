import React from 'react';
import { Navbar } from './components/Navbar';
import { BetaBanner } from './components/BetaBanner';
import { Hero } from './components/Hero';
import { DashboardPreview } from './components/DashboardPreview';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="flex flex-col">
        <BetaBanner />
        <Navbar />
        <Hero />
        <DashboardPreview />
      </div>
    </div>
  );
}

export default App;