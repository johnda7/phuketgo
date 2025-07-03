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
  };

  const handleBackToMain = () => {
    setCurrentPage('main');
    setSelectedCategory(null);
  };

  return (
    <div className="App">
      <MainHeader currentPage={currentPage} onBackToMain={handleBackToMain} />
      
      {currentPage === 'main' && (
        <>
          <HeroSection />
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
        />
      )}
      
      <Footer />
    </div>
  );
}

// Category Page Component
const CategoryPage = ({ category, onBackToMain }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={onBackToMain}
          className="mb-6 flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
        >
          ← Вернуться к экскурсиям
        </button>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-8">{category.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.tours.map((tour, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={tour.image} 
                alt={tour.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{tour.title}</h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-emerald-600">{tour.price}</span>
                  <span className="text-sm text-gray-500">{tour.duration}</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Включено:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tour.includes.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
                  Забронировать
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