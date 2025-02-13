import React from 'react';

export function DashboardPreview() {
  return (
    <div className="container mx-auto px-6 pb-20">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
          alt="Analytics Dashboard"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}