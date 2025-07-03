import React, { useState } from 'react';
import './App.css';
import { 
  MainHeader, 
  HeroSection, 
  ExcursionCategories, 
  FAQ, 
  WhyChooseUs, 
  ContactForm, 
  Footer 
} from './components';

function App() {
  const [currentPage, setCurrentPage] = useState('main');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage('category');
    // Scroll to top when entering category page
    window.scrollTo(0, 0);
  };

  const handleBackToMain = () => {
    setCurrentPage('main');
    setSelectedCategory(null);
    // Scroll to top when returning to main page
    window.scrollTo(0, 0);
  };

  const handleBookTour = (tour) => {
    alert(`Заявка на экскурсию "${tour.title}" принята! Мы свяжемся с вами в ближайшее время.`);
  };

  return (
    <div className="App">
      <MainHeader 
        currentPage={currentPage} 
        onBackToMain={handleBackToMain}
        onCategorySelect={handleCategorySelect}
      />
      
      {currentPage === 'main' && (
        <>
          <HeroSection onCategorySelect={handleCategorySelect} />
          <ExcursionCategories onCategorySelect={handleCategorySelect} />
          <FAQ />
          <WhyChooseUs />
          <ContactForm />
        </>
      )}
      
      {currentPage === 'category' && selectedCategory && (
        <CategoryPage 
          category={selectedCategory} 
          onBackToMain={handleBackToMain}
          onBookTour={handleBookTour}
        />
      )}
      
      <Footer />
    </div>
  );
}

// Category Page Component
const CategoryPage = ({ category, onBackToMain, onBookTour }) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={onBackToMain}
          className="mb-6 flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-lg transition-colors"
        >
          ← Вернуться к экскурсиям
        </button>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-8">{category.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.tours.map((tour, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {tour.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{tour.title}</h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">
                    <i className="fas fa-clock mr-1"></i>{tour.duration}
                  </span>
                  <span className="text-sm text-gray-500">
                    <i className="fas fa-users mr-1"></i>{tour.groupSize || 'До 15 человек'}
                  </span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Включено в стоимость:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tour.includes.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-emerald-600 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {tour.highlights && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Особенности:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {tour.highlights.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-yellow-500 mr-2">★</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <button 
                  onClick={() => onBookTour(tour)}
                  className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
                >
                  Забронировать экскурсию
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;