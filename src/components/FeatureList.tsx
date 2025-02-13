import React from 'react';
import { BarChart2, Target, Zap } from 'lucide-react';

const features = [
  { icon: BarChart2, text: "Analyze your traffic" },
  { icon: Target, text: "Find your best marketing channels" },
  { icon: Zap, text: "Decide which product to focus on" }
];

export function FeatureList() {
  return (
    <div className="max-w-2xl mx-auto space-y-4 mb-12">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center text-gray-300 space-x-3">
          <feature.icon className="h-5 w-5 text-orange-400" />
          <span>{feature.text}</span>
        </div>
      ))}
    </div>
  );
}