import React, { useState } from 'react';
import './App.css';
import { 
  MainHeader, 
  HeroSection, 
  ExcursionCategories, 
  FAQ, 
  WhyChooseUs, 
  ContactForm, 
  Footer,
  AboutPage,
  PricesPage,
  ReviewsPage,
  ThreeStepsSection
} from './components';

function App() {
  const [currentPage, setCurrentPage] = useState('main');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTour, setSelectedTour] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedTour(null);
    setCurrentPage('category');
    window.scrollTo(0, 0);
  };

  const handleTourSelect = (tour) => {
    setSelectedTour(tour);
    setCurrentPage('tour');
    window.scrollTo(0, 0);
  };

  const handlePageSelect = (pageType) => {
    setCurrentPage(pageType);
    setSelectedCategory(null);
    setSelectedTour(null);
    window.scrollTo(0, 0);
  };

  const handleBackToMain = () => {
    setCurrentPage('main');
    setSelectedCategory(null);
    setSelectedTour(null);
    window.scrollTo(0, 0);
  };

  const handleBackToCategory = () => {
    setCurrentPage('category');
    setSelectedTour(null);
    window.scrollTo(0, 0);
  };

  const handleBookTour = (tour) => {
    alert(`Заявка на экскурсию "${tour.title}" принята! Мы свяжемся с вами в ближайшее время.`);
  };

  return (
    <div className="App bg-gray-50">
      <MainHeader 
        currentPage={currentPage} 
        onBackToMain={handleBackToMain}
        onCategorySelect={handleCategorySelect}
        onPageSelect={handlePageSelect}
        selectedTour={selectedTour}
        selectedCategory={selectedCategory}
      />
      
      {currentPage === 'main' && (
        <>
          <HeroSection onCategorySelect={handleCategorySelect} />
          <ExcursionCategories onCategorySelect={handleCategorySelect} />
          <ThreeStepsSection />
          <FAQ />
          <WhyChooseUs />
          <ContactForm />
        </>
      )}
      
      {currentPage === 'about' && (
        <AboutPage onBackToMain={handleBackToMain} />
      )}
      
      {currentPage === 'prices' && (
        <PricesPage onBackToMain={handleBackToMain} />
      )}
      
      {currentPage === 'reviews' && (
        <ReviewsPage onBackToMain={handleBackToMain} />
      )}
      
      {currentPage === 'category' && selectedCategory && (
        <CategoryPage 
          category={selectedCategory} 
          onBackToMain={handleBackToMain}
          onTourSelect={handleTourSelect}
        />
      )}
      
      {currentPage === 'tour' && selectedTour && (
        <TourPage 
          tour={selectedTour}
          category={selectedCategory}
          onBackToMain={handleBackToMain}
          onBackToCategory={handleBackToCategory}
          onBookTour={handleBookTour}
        />
      )}
      
      <Footer />
    </div>
  );
}

// Category Page Component
const CategoryPage = ({ category, onBackToMain, onTourSelect }) => {
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
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                 onClick={() => onTourSelect(tour)}>
              <div className="relative">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {tour.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-emerald-600 transition-colors">{tour.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{tour.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">
                    <i className="fas fa-clock mr-1"></i>{tour.duration}
                  </span>
                  <span className="text-sm text-gray-500">
                    <i className="fas fa-users mr-1"></i>{tour.groupSize || 'До 15 человек'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-600 font-semibold">Подробнее →</span>
                  <span className="text-gray-400 text-sm">Нажмите для просмотра</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Individual Tour Page Component
const TourPage = ({ tour, category, onBackToMain, onBackToCategory, onBookTour }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  // Generate multiple images for gallery
  const tourGallery = [
    tour.image,
    tour.image, // In a real app, these would be different images
    tour.image,
    tour.image
  ];

  const tourProgram = [
    { time: "07:00-08:00", activity: "Трансфер из отеля", description: "Комфортабельный автобус заберет вас из отеля" },
    { time: "09:00-10:30", activity: "Отправление", description: "Начало морского путешествия на спидботе" },
    { time: "11:00-12:30", activity: "Первая остановка", description: "Посещение основных достопримечательностей" },
    { time: "12:30-13:30", activity: "Обед", description: "Традиционный тайский обед с видом на море" },
    { time: "14:00-16:00", activity: "Активности", description: "Снорклинг, плавание и исследование" },
    { time: "16:30-17:30", activity: "Возвращение", description: "Обратная дорога с остановками для фото" },
    { time: "18:00-19:00", activity: "Трансфер в отель", description: "Доставка обратно в ваш отель" }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      date: "15 февраля 2025",
      text: "Невероятная экскурсия! Организация на высшем уровне, гид был очень внимательным и знающим. Виды просто потрясающие!"
    },
    {
      name: "Михаил Сидоров", 
      rating: 5,
      date: "8 февраля 2025",
      text: "Отличное соотношение цены и качества. Все было организовано четко по времени, обед вкусный, снорклинг незабываемый!"
    },
    {
      name: "Елена Коваленко",
      rating: 4,
      date: "28 января 2025", 
      text: "Очень понравилось! Единственный минус - много людей, но это не помешало насладиться красотой природы."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <button onClick={onBackToMain} className="text-emerald-600 hover:text-emerald-700">
              Главная
            </button>
            <span className="text-gray-400">→</span>
            <button onClick={onBackToCategory} className="text-emerald-600 hover:text-emerald-700">
              {category.title}
            </button>
            <span className="text-gray-400">→</span>
            <span className="text-gray-700">{tour.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image Gallery */}
            <div className="mb-8">
              <div className="relative mb-4">
                <img 
                  src={tourGallery[selectedImageIndex]} 
                  alt={tour.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-4 py-2 rounded-lg">
                  <span className="text-2xl font-bold">{tour.price}</span>
                  <span className="text-sm block">за человека</span>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {tourGallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${tour.title} ${index + 1}`}
                    className={`h-20 object-cover rounded cursor-pointer border-2 transition-all ${
                      selectedImageIndex === index ? 'border-emerald-500' : 'border-gray-200 hover:border-emerald-300'
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Title and Basic Info */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{tour.title}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <i className="fas fa-clock mr-2 text-emerald-600"></i>
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-users mr-2 text-emerald-600"></i>
                  <span>{tour.groupSize}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-star mr-2 text-yellow-500"></i>
                  <span>4.8 (127 отзывов)</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex space-x-8">
                {[
                  { id: 'description', label: 'Описание' },
                  { id: 'program', label: 'Программа' },
                  { id: 'includes', label: 'Включено' },
                  { id: 'reviews', label: 'Отзывы' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-emerald-500 text-emerald-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === 'description' && (
                <div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{tour.description}</p>
                  
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Особенности экскурсии:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tour.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'program' && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Программа дня:</h3>
                  <div className="space-y-4">
                    {tourProgram.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="bg-emerald-600 text-white px-3 py-1 rounded text-sm font-semibold min-w-max">
                          {item.time}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">{item.activity}</h4>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'includes' && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">В стоимость включено:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tour.includes.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-check text-white text-xs"></i>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Отзывы туристов:</h3>
                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <div key={index} className="p-6 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="font-semibold text-gray-800">{review.name}</h4>
                            <div className="flex items-center mt-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <i key={i} className="fas fa-star text-yellow-500 text-sm"></i>
                              ))}
                              <span className="text-gray-500 text-sm ml-2">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700">{review.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{tour.price}</div>
                  <div className="text-gray-600">за человека</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Продолжительность:</span>
                    <span className="font-semibold">{tour.duration}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Группа:</span>
                    <span className="font-semibold">{tour.groupSize}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Трансфер:</span>
                    <span className="font-semibold text-emerald-600">Включен</span>
                  </div>
                </div>

                <button 
                  onClick={() => onBookTour(tour)}
                  className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors mb-4"
                >
                  Забронировать экскурсию
                </button>

                <button className="w-full border border-emerald-600 text-emerald-600 py-3 px-6 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
                  Задать вопрос
                </button>

                <div className="mt-6 text-center">
                  <div className="text-sm text-gray-600 mb-2">Или свяжитесь с нами:</div>
                  <div className="font-semibold text-gray-800">+66 94 975 24 66</div>
                  <div className="text-sm text-gray-600">WhatsApp • Telegram</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;