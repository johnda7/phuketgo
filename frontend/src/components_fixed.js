import React, { useState } from 'react';

// Import new modular components
import MainHeader from './Layout/MainHeader';
import ExcursionCategories from './Tours/ExcursionCategories';

// Re-export for backward compatibility
export { default as MainHeader } from './Layout/MainHeader';
export { default as ExcursionCategories } from './Tours/ExcursionCategories';

// Hero Section Component
export const HeroSection = ({ onCategorySelect }) => {
  const scrollToExcursions = () => {
    const element = document.getElementById('excursions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              ПХУКЕТ GO
            </span>
          </h1>
          <p className="text-xl md:text-3xl mb-8 text-gray-100 font-light leading-relaxed">
            Откройте для себя райские уголки Таиланда<br />
            <span className="text-cyan-300">вместе с нами</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToExcursions}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-2xl"
            >
              ВЫБРАТЬ ЭКСКУРСИЮ
            </button>
            <div className="text-cyan-200 text-sm">
              🌟 Более 10,000 довольных туристов
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-teal-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

