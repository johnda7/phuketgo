import React, { useState } from 'react';

const MainHeader = ({ currentPage, onBackToMain, onCategorySelect, selectedTour, selectedCategory, onPageSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    if (currentPage !== 'main') {
      onBackToMain();
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePageSelect = (pageType) => {
    if (onPageSelect) {
      onPageSelect(pageType);
    }
  };

  const getPageTitle = () => {
    if (currentPage === 'tour' && selectedTour) {
      return selectedTour.title;
    } else if (currentPage === 'category' && selectedCategory) {
      return selectedCategory.title;
    } else if (currentPage === 'about') {
      return 'О компании';
    } else if (currentPage === 'prices') {
      return 'Цены';
    } else if (currentPage === 'reviews') {
      return 'Отзывы';
    }
    return 'Экскурсии по Пхукету';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-cyan-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={onBackToMain}>
            <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg">
              <img 
                src="/logo.svg" 
                alt="Пхукет GO"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">
                ПХУКЕТ GO
              </h1>
              <p className="text-xs text-gray-500">{getPageTitle()}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-gray-800">+66 94 975 24 66</p>
              <p className="text-xs text-cyan-600">24/7 поддержка</p>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('excursions')}
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              >
                Экскурсии
              </button>
              <button 
                onClick={() => handlePageSelect('prices')}
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              >
                Цены
              </button>
              <button 
                onClick={() => handlePageSelect('reviews')}
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              >
                Отзывы
              </button>
              <button 
                onClick={() => handlePageSelect('about')}
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              >
                О компании
              </button>
            </nav>
            
            <a 
              href="https://t.me/+qkhh55Ozg6gxY2Y1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-2 rounded-full hover:from-cyan-600 hover:to-teal-600 transition-all transform hover:scale-105 font-semibold shadow-lg flex items-center space-x-2"
            >
              <span>💬</span>
              <span>TELEGRAM</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;