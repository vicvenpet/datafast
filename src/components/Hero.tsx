import React from 'react';
import { FeatureList } from './FeatureList';

export function Hero() {
  return (
    <div className="container mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
        Grow your startup with data
        <span className="text-2xl ml-4 text-gray-400">not guesses 😉</span>
      </h1>
      <p className="text-xl text-gray-300 mb-12">
        Actionable analytics tool for founders:
      </p>
      <FeatureList />
      <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-lg font-medium text-lg hover:from-orange-500 hover:to-orange-600 transition-all transform hover:scale-105">
        Make revenue-driven decisions
      </button>
      
      <div className="mt-12 text-gray-400">
        Join 2,468 startup founders
      </div>
    </div>
  );
}