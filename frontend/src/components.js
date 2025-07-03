import React, { useState } from 'react';

// Main Header Component
export const MainHeader = ({ currentPage, onBackToMain, onCategorySelect, selectedTour, selectedCategory, onPageSelect }) => {
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

// Improved ExcursionCategories Component with working filters
export const ExcursionCategories = ({ onCategorySelect }) => {
  const [activeFilters, setActiveFilters] = useState({
    priceRange: 'all',
    duration: 'all',
    activity: 'all',
    groupSize: 'all',
    rating: 'all'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    {
      id: 'sea',
      title: 'МОРСКИЕ ЭКСКУРСИИ',
      image: 'https://images.unsplash.com/photo-1643264942781-3be860ed7cfc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxzZWElMjBleGN1cnNpb24lMjBBbmRhbWFufGVufDB8fHx8MTc1MTU0NDQ1NHww&ixlib=rb-4.1.0&q=85',
      tags: ['море', 'острова', 'снорклинг', 'фото'],
      rating: 4.9,
      tours: [
        {
          title: 'Симиланские острова',
          description: 'Одни из самых красивых островов в мире для снорклинга и дайвинга.',
          price: '3,200฿',
          priceNum: 3200,
          duration: '12 часов',
          durationNum: 12,
          groupSize: 'До 20 человек',
          groupSizeNum: 20,
          rating: 4.9,
          tags: ['снорклинг', 'национальный парк', 'острова', 'черепахи'],
          activity: 'water',
          image: 'https://images.pexels.com/photos/18277777/pexels-photo-18277777.jpeg'
        },
        {
          title: 'Острова Краби на спидботе',
          description: 'Захватывающая экскурсия к четырем островам провинции Краби.',
          price: '2,800฿',
          priceNum: 2800,
          duration: '8 часов',
          durationNum: 8,
          groupSize: 'До 15 человек',
          groupSizeNum: 15,
          rating: 4.8,
          tags: ['спидбот', 'пляжи', 'каякинг', 'фото'],
          activity: 'water',
          image: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHhQaGklMjBQaGklMjBJc2xhbmRzJTIwTWF5YSUyMEJheXxlbnwwfHx8fDE3NTE1NDQ0MDR8MA&ixlib=rb-4.1.0&q=85'
        },
        {
          title: 'Дайвинг для начинающих',
          description: 'Первое погружение с аквалангом в кристально чистых водах.',
          price: '3,500฿',
          priceNum: 3500,
          duration: '8 часов',
          durationNum: 8,
          groupSize: 'До 4 человек',
          groupSizeNum: 4,
          rating: 4.9,
          tags: ['дайвинг', 'сертификат', 'инструктор', 'подводный мир'],
          activity: 'water',
          image: 'https://images.pexels.com/photos/3046582/pexels-photo-3046582.jpeg'
        }
      ]
    },
    {
      id: 'phi-phi',
      title: 'ОСТРОВА ПХИ-ПХИ',
      image: 'https://images.pexels.com/photos/1647110/pexels-photo-1647110.jpeg',
      tags: ['пхи-пхи', 'майя бэй', 'фильм', 'популярно'],
      rating: 4.8,
      tours: [
        {
          title: 'Острова Пхи-Пхи на спидботе',
          description: 'Посетите знаменитые острова Пхи-Пхи, включая культовый залив Майя Бэй.',
          price: '2,500฿',
          priceNum: 2500,
          duration: '8 часов',
          durationNum: 8,
          groupSize: 'До 15 человек',
          groupSizeNum: 15,
          rating: 4.8,
          tags: ['майя бэй', 'фильм', 'спидбот', 'популярно'],
          activity: 'water',
          image: 'https://images.pexels.com/photos/1647110/pexels-photo-1647110.jpeg'
        },
        {
          title: 'Пхи-Пхи на рассвете (без толп)',
          description: 'Эксклюзивная экскурсия на острова Пхи-Пхи с ранним выездом.',
          price: '3,200฿',
          priceNum: 3200,
          duration: '10 часов',
          durationNum: 10,
          groupSize: 'До 12 человек',
          groupSizeNum: 12,
          rating: 4.9,
          tags: ['рассвет', 'эксклюзив', 'без толп', 'VIP'],
          activity: 'water',
          image: 'https://images.pexels.com/photos/1647110/pexels-photo-1647110.jpeg'
        }
      ]
    },
    {
      id: 'james-bond',
      title: 'ДЖЕЙМС БОНД',
      image: 'https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg',
      tags: ['джеймс бонд', 'каякинг', 'пещеры', 'фильм'],
      rating: 4.7,
      tours: [
        {
          title: 'Остров Джеймса Бонда',
          description: 'Знаменитый остров из фильма о Джеймсе Бонде "Человек с золотым пистолетом".',
          price: '2,200฿',
          priceNum: 2200,
          duration: '7 часов',
          durationNum: 7,
          groupSize: 'До 16 человек',
          groupSizeNum: 16,
          rating: 4.7,
          tags: ['джеймс бонд', 'фильм', 'скалы', 'классика'],
          activity: 'cultural',
          image: 'https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg'
        },
        {
          title: 'Джеймс Бонд + каякинг',
          description: 'Комбинированная экскурсия к острову Джеймса Бонда с каякингом.',
          price: '2,600฿',
          priceNum: 2600,
          duration: '8 часов',
          durationNum: 8,
          groupSize: 'До 14 человек',
          groupSizeNum: 14,
          rating: 4.8,
          tags: ['каякинг', 'пещеры', 'мангровы', 'активно'],
          activity: 'adventure',
          image: 'https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg'
        }
      ]
    }
  ];

  // Get all unique tags
  const allTags = [...new Set(categories.flatMap(category => 
    category.tours.flatMap(tour => tour.tags)
  ))];

  // Get all tours
  const allTours = categories.flatMap(category => 
    category.tours.map(tour => ({
      ...tour,
      categoryId: category.id,
      categoryTitle: category.title
    }))
  );

  // Handle tag filtering
  const handleTagClick = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
    setActiveFilters({
      priceRange: 'all',
      duration: 'all',
      activity: 'all',
      groupSize: 'all',
      rating: 'all'
    });
  };

  // Filter tours
  const filteredTours = allTours.filter(tour => {
    // Search filter
    if (searchTerm && !tour.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !tour.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !tour.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) {
      return false;
    }

    // Tags filter
    if (selectedTags.length > 0) {
      const hasMatchingTag = selectedTags.some(selectedTag => 
        tour.tags.some(tag => tag.toLowerCase().includes(selectedTag.toLowerCase()))
      );
      if (!hasMatchingTag) return false;
    }

    // Price filter
    if (activeFilters.priceRange !== 'all') {
      const [min, max] = activeFilters.priceRange.split('-').map(Number);
      if (max) {
        if (tour.priceNum < min || tour.priceNum > max) return false;
      } else {
        if (tour.priceNum < min) return false;
      }
    }

    // Duration filter
    if (activeFilters.duration !== 'all') {
      const [min, max] = activeFilters.duration.split('-').map(Number);
      if (max) {
        if (tour.durationNum < min || tour.durationNum > max) return false;
      } else {
        if (tour.durationNum < min) return false;
      }
    }

    // Activity filter
    if (activeFilters.activity !== 'all') {
      if (tour.activity !== activeFilters.activity) return false;
    }

    // Group size filter
    if (activeFilters.groupSize !== 'all') {
      const [min, max] = activeFilters.groupSize.split('-').map(Number);
      if (max) {
        if (tour.groupSizeNum < min || tour.groupSizeNum > max) return false;
      } else {
        if (tour.groupSizeNum < min) return false;
      }
    }

    // Rating filter
    if (activeFilters.rating !== 'all') {
      const minRating = Number(activeFilters.rating);
      if (tour.rating < minRating) return false;
    }

    return true;
  });

  // Sort tours
  const sortedTours = [...filteredTours].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.priceNum - b.priceNum;
      case 'price-high': return b.priceNum - a.priceNum;
      case 'duration': return a.durationNum - b.durationNum;
      case 'rating': return b.rating - a.rating;
      case 'popular':
      default: return b.rating - a.rating;
    }
  });

  // Group tours back into categories
  const groupedTours = categories.map(category => ({
    ...category,
    tours: sortedTours.filter(tour => tour.categoryId === category.id)
  })).filter(category => category.tours.length > 0);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="excursions">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">
              ЭКСКУРСИИ ПО ПХУКЕТУ
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Откройте для себя самые захватывающие приключения на острове Пхукет. 
            От кристально чистых вод Андаманского моря до величественных известняковых скал.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 bg-white rounded-2xl shadow-lg p-6">
          {/* Search and Sort */}
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center mb-8">
            <div className="flex-1 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Поиск экскурсий..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-4 pl-12 border border-gray-300 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                )}
              </div>
              
              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="p-4 border border-gray-300 rounded-xl focus:border-cyan-500 focus:outline-none min-w-[150px]"
                >
                  <option value="popular">По популярности</option>
                  <option value="price-low">Сначала дешевые</option>
                  <option value="price-high">Сначала дорогие</option>
                  <option value="duration">По продолжительности</option>
                  <option value="rating">По рейтингу</option>
                </select>
                
                <button
                  onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                  className="p-4 border border-gray-300 rounded-xl hover:border-cyan-500 transition-colors"
                  title={viewMode === 'grid' ? 'Список' : 'Сетка'}
                >
                  {viewMode === 'grid' ? '☰' : '⊞'}
                </button>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-6 py-4 rounded-xl font-medium transition-all ${
                  showFilters 
                    ? 'bg-cyan-600 text-white' 
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-cyan-500'
                }`}
              >
                🔧 Фильтры {Object.values(activeFilters).filter(v => v !== 'all').length > 0 && 
                  `(${Object.values(activeFilters).filter(v => v !== 'all').length})`}
              </button>
              
              {(Object.values(activeFilters).some(v => v !== 'all') || selectedTags.length > 0 || searchTerm) && (
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-4 bg-red-100 text-red-700 rounded-xl hover:bg-red-200 transition-colors font-medium"
                >
                  Сбросить
                </button>
              )}
            </div>
          </div>

          {/* Popular Tags */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Популярные теги:</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 10).map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedTags.includes(tag)
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-cyan-100 hover:text-cyan-700'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
            {selectedTags.length > 0 && (
              <div className="mt-3">
                <span className="text-sm text-gray-600">Выбранные теги: </span>
                {selectedTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-sm mx-1"
                  >
                    #{tag}
                    <button
                      onClick={() => handleTagClick(tag)}
                      className="ml-2 text-cyan-600 hover:text-cyan-800"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4 bg-gray-50 rounded-xl">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Цена</label>
                <select
                  value={activeFilters.priceRange}
                  onChange={(e) => setActiveFilters({...activeFilters, priceRange: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:border-cyan-500"
                >
                  <option value="all">Любая</option>
                  <option value="0-2000">До 2,000฿</option>
                  <option value="2000-3000">2,000-3,000฿</option>
                  <option value="3000-4000">3,000-4,000฿</option>
                  <option value="4000">От 4,000฿</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Продолжительность</label>
                <select
                  value={activeFilters.duration}
                  onChange={(e) => setActiveFilters({...activeFilters, duration: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:border-cyan-500"
                >
                  <option value="all">Любая</option>
                  <option value="0-6">До 6 часов</option>
                  <option value="6-8">6-8 часов</option>
                  <option value="8-12">8-12 часов</option>
                  <option value="12">Более 12 часов</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Тип активности</label>
                <select
                  value={activeFilters.activity}
                  onChange={(e) => setActiveFilters({...activeFilters, activity: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:border-cyan-500"
                >
                  <option value="all">Любой</option>
                  <option value="water">Водные</option>
                  <option value="adventure">Приключения</option>
                  <option value="cultural">Культурные</option>
                  <option value="cruise">Круизы</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Размер группы</label>
                <select
                  value={activeFilters.groupSize}
                  onChange={(e) => setActiveFilters({...activeFilters, groupSize: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:border-cyan-500"
                >
                  <option value="all">Любой</option>
                  <option value="0-8">До 8 человек</option>
                  <option value="8-15">8-15 человек</option>
                  <option value="15">15+ человек</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Рейтинг</label>
                <select
                  value={activeFilters.rating}
                  onChange={(e) => setActiveFilters({...activeFilters, rating: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:border-cyan-500"
                >
                  <option value="all">Любой</option>
                  <option value="4.5">4.5+ ⭐</option>
                  <option value="4.7">4.7+ ⭐</option>
                  <option value="4.8">4.8+ ⭐</option>
                  <option value="4.9">4.9+ ⭐</option>
                </select>
              </div>
            </div>
          )}

          {/* Results summary */}
          <div className="mt-4 text-center text-gray-600">
            Найдено {sortedTours.length} экскурсий из {allTours.length}
            {searchTerm && <span> по запросу "{searchTerm}"</span>}
          </div>
        </div>
        
        {/* Categories Grid */}
        <div className={`${viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
          : 'space-y-6'
        }`}>
          {groupedTours.map((category) => (
            <div 
              key={category.id}
              className={`group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 bg-white ${
                viewMode === 'list' ? 'flex items-center h-48' : ''
              }`}
              onClick={() => onCategorySelect(category)}
            >
              <div 
                className={`bg-cover bg-center relative overflow-hidden ${
                  viewMode === 'list' ? 'w-64 h-full flex-shrink-0' : 'h-80'
                }`}
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                
                {/* Rating badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-semibold text-gray-800">{category.rating}</span>
                </div>

                {/* Tags */}
                <div className="absolute top-4 right-4 flex flex-wrap gap-1">
                  {category.tags.slice(0, 2).map((tag, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTagClick(tag);
                      }}
                      className="bg-cyan-500/80 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-cyan-600/90 transition-colors"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
                
                {viewMode === 'grid' && (
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                        {category.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="bg-cyan-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                          {category.tours.length} экскурсий
                        </span>
                        <span className="text-cyan-300">
                          от {Math.min(...category.tours.map(t => t.priceNum))}฿
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-cyan-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-4">🌊</div>
                    <p className="text-lg font-semibold">Смотреть все экскурсии</p>
                    <div className="mt-2 text-cyan-200">→</div>
                  </div>
                </div>
              </div>
              
              {viewMode === 'list' && (
                <div className="flex-1 p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors">
                    {category.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <span className="mr-1">📍</span>
                      {category.tours.length} экскурсий
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">💰</span>
                      от {Math.min(...category.tours.map(t => t.priceNum))}฿
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">⭐</span>
                      {category.rating}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {category.tags.slice(0, 4).map((tag, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTagClick(tag);
                        }}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs hover:bg-cyan-100 hover:text-cyan-700 transition-colors"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Откройте для себя {category.tours.length} уникальных экскурсий в этой категории
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No results message */}
        {groupedTours.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Экскурсии не найдены</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm ? `По запросу "${searchTerm}" ничего не найдено.` : 'Ни одна экскурсия не соответствует выбранным фильтрам.'}
              <br />Попробуйте изменить критерии поиска или фильтры.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={clearAllFilters}
                className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Сбросить все фильтры
              </button>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Очистить поиск
                </button>
              )}
            </div>
          </div>
        )}

        {/* Quick stats */}
        {groupedTours.length > 0 && (
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-2xl p-6 inline-block">
              <div className="flex items-center justify-center gap-8">
                <div>
                  <div className="text-2xl font-bold">{sortedTours.length}</div>
                  <div className="text-cyan-100 text-sm">Экскурсий найдено</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{groupedTours.length}</div>
                  <div className="text-cyan-100 text-sm">Категорий</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {Math.min(...sortedTours.map(t => t.priceNum))}฿
                  </div>
                  <div className="text-cyan-100 text-sm">Мин. цена</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

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

// Excursion Categories Component with filters and tags
export const ExcursionCategories = ({ onCategorySelect }) => {
  const [activeFilters, setActiveFilters] = useState({
    priceRange: 'all',
    duration: 'all',
    activity: 'all',
    groupSize: 'all',
    rating: 'all'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  const categories = [
    {
      id: 'sea',
      title: 'МОРСКИЕ ЭКСКУРСИИ',
      image: 'https://images.unsplash.com/photo-1643264942781-3be860ed7cfc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxzZWElMjBleGN1cnNpb24lMjBBbmRhbWFufGVufDB8fHx8MTc1MTU0NDQ1NHww&ixlib=rb-4.1.0&q=85',
      tags: ['море', 'острова', 'снорклинг', 'фото'],
      rating: 4.9,
      tours: [
        {
          title: 'Симиланские острова',
          description: 'Одни из самых красивых островов в мире для снорклинга и дайвинга. Национальный парк Симилан известен своими коралловыми рифами, белоснежными пляжами и невероятно прозрачной водой.',
          price: '3,200฿',
          priceNum: 3200,
          duration: '12 часов',
          durationNum: 12,
          groupSize: 'До 20 человек',
          groupSizeNum: 20,
          rating: 4.9,
          tags: ['снорклинг', 'национальный парк', 'острова', 'черепахи'],
          activity: 'water',
          image: 'https://images.pexels.com/photos/18277777/pexels-photo-18277777.jpeg',
          includes: ['Трансфер из отеля', 'Завтрак и обед', 'Снорклинг', 'Билет в национальный парк', 'Гид', 'Маски и ласты'],
          highlights: ['9 необитаемых островов', 'Коралловые рифы', 'Тропические рыбы', 'Черепахи', 'Sailing Rock']
        },
        {
          title: 'Острова Краби на спидботе',
          description: 'Захватывающая экскурсия к четырем островам провинции Краби: Пода, Чикен, Тап и Прананг. Насладитесь снорклингом, пляжами и невероятными пейзажами.',
          price: '2,800฿',
          priceNum: 2800,
          duration: '8 часов',
          durationNum: 8,
          groupSize: 'До 15 человек',
          groupSizeNum: 15,
          rating: 4.8,
          tags: ['спидбот', 'пляжи', 'каякинг', 'фото'],
          activity: 'water',
          image: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxQaGklMjBQaGklMjBJc2xhbmRzJTIwTWF5YSUyMEJheXxlbnwwfHx8fDE3NTE1NDQ0MDR8MA&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Завтрак и обед', 'Снорклинг', 'Каякинг', 'Гид', 'Безлимитные напитки'],
          highlights: ['Остров Пода', 'Пляж Прананг', 'Остров Чикен', 'Коса Тап', 'Пещеры и лагуны']
        },
        {
          title: 'Дайвинг для начинающих',
          description: 'Первое погружение с аквалангом в кристально чистых водах Андаманского моря. Профессиональные инструкторы научат вас основам дайвинга и покажут подводный мир.',
          price: '3,500฿',
          priceNum: 3500,
          duration: '8 часов',
          durationNum: 8,
          groupSize: 'До 4 человек',
          groupSizeNum: 4,
          rating: 4.9,
          tags: ['дайвинг', 'сертификат', 'инструктор', 'подводный мир'],
          activity: 'water',
          image: 'https://images.pexels.com/photos/3046582/pexels-photo-3046582.jpeg',
          includes: ['Трансфер из отеля', 'Обед', 'Дайвинг оборудование', 'Инструктор PADI', 'Сертификат', '2 погружения'],
          highlights: ['Коралловые рифы', 'Тропические рыбы', 'Подводные скалы', 'Сертификат PADI', 'Профессиональное оборудование']
        },
        {
          title: 'Снорклинг тур к коралловым рифам',
          description: 'Исследуйте лучшие места для снорклинга вокруг Пхукета. Увидите разноцветные кораллы, тропических рыб и морских звезд в их естественной среде.',
          price: '1,800฿',
          priceNum: 1800,
          duration: '6 часов',
          durationNum: 6,
          groupSize: 'До 20 человек',
          groupSizeNum: 20,
          rating: 4.7,
          tags: ['снорклинг', 'кораллы', 'рыбы', 'доступно'],
          activity: 'water',
          image: 'https://images.pexels.com/photos/8093150/pexels-photo-8093150.jpeg',
          includes: ['Трансфер из отеля', 'Обед', 'Снорклинг оборудование', 'Гид', 'Фрукты', 'Питьевая вода'],
          highlights: ['Коралловые сады', 'Рыба-клоун', 'Морские черепахи', 'Рифовые акулы', 'Подводная фотосессия']
        },
        {
          title: 'Рыбалка в открытом море',
          description: 'Настоящая морская рыбалка в Андаманском море. Попробуйте поймать барракуду, тунца или красного снэппера под руководством опытных рыбаков.',
          price: '2,900฿',
          priceNum: 2900,
          duration: '8 часов',
          durationNum: 8,
          groupSize: 'До 10 человек',
          groupSizeNum: 10,
          rating: 4.6,
          tags: ['рыбалка', 'море', 'улов', 'приключение'],
          activity: 'water',
          image: 'https://images.pexels.com/photos/14784268/pexels-photo-14784268.jpeg',
          includes: ['Трансфер из отеля', 'Завтрак и обед', 'Рыболовные снасти', 'Наживка', 'Гид-рыбак', 'Приготовление улова'],
          highlights: ['Глубоководная рыбалка', 'Тропические виды рыб', 'Профессиональные снасти', 'Готовка улова', 'Сертификат рыбака']
        },
        {
          title: 'Романтический круиз на закате',
          description: 'Незабываемый романтический круиз на роскошной яхте во время заката. Насладитесь ужином, шампанским и невероятными видами Андаманского моря.',
          price: '4,200฿',
          priceNum: 4200,
          duration: '4 часа',
          durationNum: 4,
          groupSize: 'До 8 человек',
          groupSizeNum: 8,
          rating: 5.0,
          tags: ['романтика', 'закат', 'яхта', 'ужин'],
          activity: 'cruise',
          image: 'https://images.unsplash.com/photo-1672741186863-d3ad143cfaa5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBjcnVpc2UlMjBib2F0JTIwVGhhaWxhbmR8ZW58MHx8fHwxNzUxNTQ1NzE4fDA&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Ужин', 'Шампанское', 'Живая музыка', 'Фотограф', 'Романтическое оформление'],
          highlights: ['Роскошная яхта', 'Закат над морем', 'Ужин при свечах', 'Живая музыка', 'Фотосессия']
        }
      ]
    },
    {
      id: 'phi-phi',
      title: 'ОСТРОВА ПХИ-ПХИ',
      image: 'https://images.pexels.com/photos/1647110/pexels-photo-1647110.jpeg',
      tags: ['пхи-пхи', 'майя бэй', 'фильм', 'популярно'],
      rating: 4.8,
      tours: [
        {
          title: 'Острова Пхи-Пхи на спидботе',
          description: 'Посетите знаменитые острова Пхи-Пхи, включая культовый залив Майя Бэй из фильма "Пляж" с Леонардо Ди Каприо.',
          price: '2,500฿',
          priceNum: 2500,
          duration: '8 часов',
          durationNum: 8,
          groupSize: 'До 15 человек',
          groupSizeNum: 15,
          rating: 4.8,
          tags: ['майя бэй', 'фильм', 'спидбот', 'популярно'],
          activity: 'water',
          image: 'https://images.pexels.com/photos/1647110/pexels-photo-1647110.jpeg',
          includes: ['Трансфер из отеля', 'Завтрак и обед', 'Снаряжение для снорклинга', 'Профессиональный гид', 'Спасательные жилеты', 'Страховка'],
          highlights: ['Залив Майя Бэй', 'Пещера Викингов', 'Бухта Лох Самах', 'Остров Бамбу', 'Снорклинг с тропическими рыбками']
        },
        {
          title: 'Пхи-Пхи на рассвете (без толп)',
          description: 'Эксклюзивная экскурсия на острова Пхи-Пхи с ранним выездом, чтобы избежать толп туристов.',
          price: '3,200฿',
          priceNum: 3200,
          duration: '10 часов',
          durationNum: 10,
          groupSize: 'До 12 человек',
          groupSizeNum: 12,
          rating: 4.9,
          tags: ['рассвет', 'эксклюзив', 'без толп', 'VIP'],
          activity: 'water',
          image: 'https://images.pexels.com/photos/1647110/pexels-photo-1647110.jpeg',
          includes: ['Ранний трансфер', 'Завтрак и обед', 'Снорклинг', 'Фотосессия на рассвете', 'Гид', 'VIP-сервис'],
          highlights: ['Залив Майя Бэй без толп', 'Рассвет над островами', 'VIP-обслуживание', 'Эксклюзивные фото', 'Приоритетный доступ']
        },
        {
          title: 'Пхи-Пхи + снорклинг тур',
          description: 'Комбинированная экскурсия на острова Пхи-Пхи с акцентом на снорклинг.',
          price: '2,800฿',
          priceNum: 2800,
          duration: '9 часов',
          durationNum: 9,
          groupSize: 'До 18 человек',
          groupSizeNum: 18,
          rating: 4.7,
          tags: ['снорклинг', 'черепахи', 'рыбы', 'подводная съемка'],
          activity: 'water',
          image: 'https://images.pexels.com/photos/8093150/pexels-photo-8093150.jpeg',
          includes: ['Трансфер из отеля', 'Завтрак и обед', 'Профессиональное снорклинг оборудование', 'Инструктор', 'Подводная камера', 'Фрукты'],
          highlights: ['Лучшие споты для снорклинга', 'Коралловые рифы', 'Тропические рыбы', 'Подводная съемка', 'Морские черепахи']
        },
        {
          title: 'Пхи-Пхи на закате',
          description: 'Романтическая вечерняя экскурсия на острова Пхи-Пхи.',
          price: '2,900฿',
          priceNum: 2900,
          duration: '8 часов',
          durationNum: 8,
          groupSize: 'До 14 человек',
          groupSizeNum: 14,
          rating: 4.8,
          tags: ['закат', 'романтика', 'ужин', 'музыка'],
          activity: 'cruise',
          image: 'https://images.unsplash.com/photo-1672741186863-d3ad143cfaa5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBjcnVpc2UlMjBib2F0JTIwVGhhaWxhbmR8ZW58MHx8fHwxNzUxNTQ1NzE4fDA&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Обед и ужин', 'Напитки на закате', 'Романтическое оформление', 'Фотосессия', 'Живая музыка'],
          highlights: ['Закат на Пхи-Пхи', 'Романтическая атмосфера', 'Панорамные виды', 'Ужин на борту', 'Незабываемые моменты']
        }
      ]
    },
    {
      id: 'james-bond',
      title: 'ДЖЕЙМС БОНД',
      image: 'https://images.pexels.com/photos/6437646/pexels-photo-6437646.jpeg',
      tags: ['джеймс бонд', 'каякинг', 'пещеры', 'приключения'],
      rating: 4.7,
      tours: [
        {
          title: 'Остров Джеймса Бонда',
          description: 'Экскурсия к легендарному острову Ко Тапу из фильма о Джеймсе Бонде "Человек с золотым пистолетом".',
          price: '2,200฿',
          priceNum: 2200,
          duration: '7 часов',
          durationNum: 7,
          groupSize: 'До 12 человек',
          groupSizeNum: 12,
          rating: 4.7,
          tags: ['фильм', 'ко тапу', 'деревня на воде', 'каякинг'],
          activity: 'adventure',
          image: 'https://images.pexels.com/photos/6437646/pexels-photo-6437646.jpeg',
          includes: ['Трансфер из отеля', 'Обед', 'Каякинг', 'Посещение деревни на воде', 'Гид', 'Страховка'],
          highlights: ['Остров Ко Тапу', 'Каякинг в пещерах', 'Деревня Панйи', 'Мангровые леса', 'Известняковые скалы']
        },
        {
          title: 'Джеймс Бонд + каякинг в пещерах',
          description: 'Расширенная экскурсия к острову Джеймса Бонда с исследованием скрытых пещер и лагун на каяках.',
          price: '2,600฿',
          priceNum: 2600,
          duration: '8 часов',
          durationNum: 8,
          groupSize: 'До 10 человек',
          groupSizeNum: 10,
          rating: 4.8,
          tags: ['каякинг', 'пещеры', 'мангровы', 'эко-тур'],
          activity: 'adventure',
          image: 'https://images.unsplash.com/photo-1646440912030-d58d2394b1cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxtYW5ncm92ZSUyMGtheWFraW5nJTIwVGhhaWxhbmR8ZW58MHx8fHwxNzUxNTQ1Njk1fDA&ixlib=rb-4.1.0&q=85',
          includes: ['Трансфер из отеля', 'Обед', 'Каяки и снаряжение', 'Опытный гид-каякер', 'Водонепроницаемые сумки', 'Исследование пещер'],
          highlights: ['Каякинг в пещерах', 'Скрытые лагуны', 'Мангровые туннели', 'Сталактиты и сталагмиты', 'Дикая природа']
        },
        {
          title: 'Джеймс Бонд на лонгтейле',
          description: 'Аутентичная экскурсия к острову Джеймса Бонда на традиционной тайской лодке лонгтейл.',
          price: '1,800฿',
          priceNum: 1800,
          duration: '6 часов',
          durationNum: 6,
          groupSize: 'До 8 человек',
          groupSizeNum: 8,
          rating: 4.6,
          tags: ['лонгтейл', 'традиции', 'аутентично', 'рыбалка'],
          activity: 'cultural',
          image: 'https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg',
          includes: ['Трансфер из отеля', 'Обед', 'Лонгтейл лодка', 'Местный гид', 'Рыбалка', 'Традиционный опыт'],
          highlights: ['Традиционная лонгтейл лодка', 'Местная культура', 'Рыбалка с гидом', 'Аутентичный опыт', 'Фото в стиле бонда']
        }
      ]
    }
  ];

  // Get all unique tags from all tours
  const allTags = [...new Set(categories.flatMap(category => 
    category.tours.flatMap(tour => tour.tags)
  ))];

  // Handle tag filtering
  const handleTagClick = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
    setActiveFilters({
      priceRange: 'all',
      duration: 'all',
      activity: 'all',
      groupSize: 'all',
      rating: 'all'
    });
  };

  // Get all tours from all categories for filtering
  const allTours = categories.flatMap(category => 
    category.tours.map(tour => ({
      ...tour,
      categoryId: category.id,
      categoryTitle: category.title,
      categoryRating: category.rating
    }))
  );

  // Filter tours based on active filters and search
  const filteredTours = allTours.filter(tour => {
    // Search filter
    if (searchTerm && !tour.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !tour.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !tour.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))) {
      return false;
    }

    // Tags filter
    if (selectedTags.length > 0) {
      const hasMatchingTag = selectedTags.some(selectedTag => 
        tour.tags.some(tag => tag.toLowerCase().includes(selectedTag.toLowerCase()))
      );
      if (!hasMatchingTag) return false;
    }

    // Price filter
    if (activeFilters.priceRange !== 'all') {
      const [min, max] = activeFilters.priceRange.split('-').map(Number);
      if (max) {
        if (tour.priceNum < min || tour.priceNum > max) return false;
      } else {
        if (tour.priceNum < min) return false;
      }
    }

    // Duration filter
    if (activeFilters.duration !== 'all') {
      const [min, max] = activeFilters.duration.split('-').map(Number);
      if (max) {
        if (tour.durationNum < min || tour.durationNum > max) return false;
      } else {
        if (tour.durationNum < min) return false;
      }
    }

    // Activity filter
    if (activeFilters.activity !== 'all') {
      if (tour.activity !== activeFilters.activity) return false;
    }

    // Group size filter
    if (activeFilters.groupSize !== 'all') {
      const [min, max] = activeFilters.groupSize.split('-').map(Number);
      if (max) {
        if (tour.groupSizeNum < min || tour.groupSizeNum > max) return false;
      } else {
        if (tour.groupSizeNum < min) return false;
      }
    }

    // Rating filter
    if (activeFilters.rating !== 'all') {
      const minRating = Number(activeFilters.rating);
      if (tour.rating < minRating) return false;
    }

    return true;
  });

  // Sort tours
  const sortedTours = [...filteredTours].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.priceNum - b.priceNum;
      case 'price-high': return b.priceNum - a.priceNum;
      case 'duration': return a.durationNum - b.durationNum;
      case 'rating': return b.rating - a.rating;
      case 'popular':
      default: return b.rating - a.rating;
    }
  });

  const groupedTours = categories.map(category => ({
    ...category,
    tours: sortedTours.filter(tour => tour.categoryId === category.id)
  })).filter(category => category.tours.length > 0);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="excursions">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-cyan-600 to-teal-500 bg-clip-text text-transparent">
              ЭКСКУРСИИ НА ПХУКЕТЕ
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите идеальное приключение из нашей коллекции незабываемых экскурсий
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 bg-white rounded-2xl shadow-lg p-6">
          {/* Search and Sort */}
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center mb-8">
            {/* Search and Sort */}
            <div className="flex-1 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Поиск экскурсий..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-4 pl-12 border border-gray-300 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                )}
              </div>
              
              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="p-4 border border-gray-300 rounded-xl focus:border-cyan-500 focus:outline-none min-w-[150px]"
                >
                  <option value="popular">По популярности</option>
                  <option value="price-low">Сначала дешевые</option>
                  <option value="price-high">Сначала дорогие</option>
                  <option value="duration">По продолжительности</option>
                  <option value="rating">По рейтингу</option>
                </select>
                
                <button
                  onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                  className="p-4 border border-gray-300 rounded-xl hover:border-cyan-500 transition-colors"
                  title={viewMode === 'grid' ? 'Список' : 'Сетка'}
                >
                  {viewMode === 'grid' ? '☰' : '⊞'}
                </button>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-6 py-4 rounded-xl font-medium transition-all ${
                  showFilters 
                    ? 'bg-cyan-600 text-white' 
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-cyan-500'
                }`}
              >
                🔧 Фильтры {Object.values(activeFilters).filter(v => v !== 'all').length > 0 && 
                  `(${Object.values(activeFilters).filter(v => v !== 'all').length})`}
              </button>
              
              {(Object.values(activeFilters).some(v => v !== 'all') || selectedTags.length > 0 || searchTerm) && (
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-4 bg-red-100 text-red-700 rounded-xl hover:bg-red-200 transition-colors font-medium"
                >
                  Сбросить
                </button>
              )}
            </div>
          </div>

          {/* Popular Tags */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Популярные теги:</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 10).map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedTags.includes(tag)
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-cyan-100 hover:text-cyan-700'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
            {selectedTags.length > 0 && (
              <div className="mt-3">
                <span className="text-sm text-gray-600">Выбранные теги: </span>
                {selectedTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-sm mx-1"
                  >
                    #{tag}
                    <button
                      onClick={() => handleTagClick(tag)}
                      className="ml-2 text-cyan-600 hover:text-cyan-800"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4 bg-gray-50 rounded-xl">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Цена</label>
                <select
                  value={activeFilters.priceRange}
                  onChange={(e) => setActiveFilters({...activeFilters, priceRange: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:border-cyan-500"
                >
                  <option value="all">Любая цена</option>
                  <option value="1000-2000">1,000 - 2,000฿</option>
                  <option value="2000-3000">2,000 - 3,000฿</option>
                  <option value="3000-4000">3,000 - 4,000฿</option>
                  <option value="4000">4,000฿+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Продолжительность</label>
                <select
                  value={activeFilters.duration}
                  onChange={(e) => setActiveFilters({...activeFilters, duration: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:border-cyan-500"
                >
                  <option value="all">Любая</option>
                  <option value="0-4">До 4 часов</option>
                  <option value="4-8">4-8 часов</option>
                  <option value="8-12">8-12 часов</option>
                  <option value="12">12+ часов</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Тип активности</label>
                <select
                  value={activeFilters.activity}
                  onChange={(e) => setActiveFilters({...activeFilters, activity: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:border-cyan-500"
                >
                  <option value="all">Все виды</option>
                  <option value="water">Водные</option>
                  <option value="adventure">Приключения</option>
                  <option value="cultural">Культурные</option>
                  <option value="cruise">Круизы</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Размер группы</label>
                <select
                  value={activeFilters.groupSize}
                  onChange={(e) => setActiveFilters({...activeFilters, groupSize: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:border-cyan-500"
                >
                  <option value="all">Любой</option>
                  <option value="0-8">До 8 человек</option>
                  <option value="8-15">8-15 человек</option>
                  <option value="15">15+ человек</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Рейтинг</label>
                <select
                  value={activeFilters.rating}
                  onChange={(e) => setActiveFilters({...activeFilters, rating: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:border-cyan-500"
                >
                  <option value="all">Любой</option>
                  <option value="4.5">4.5+ ⭐</option>
                  <option value="4.7">4.7+ ⭐</option>
                  <option value="4.8">4.8+ ⭐</option>
                  <option value="4.9">4.9+ ⭐</option>
                </select>
              </div>
            </div>
          )}

          {/* Results summary */}
          <div className="mt-4 text-center text-gray-600">
            Найдено {sortedTours.length} экскурсий из {allTours.length}
            {searchTerm && <span> по запросу "{searchTerm}"</span>}
          </div>
        </div>
        
        {/* Categories Grid */}
        <div className={`${viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
          : 'space-y-6'
        }`}>
          {groupedTours.map((category) => (
            <div 
              key={category.id}
              className={`group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 bg-white ${
                viewMode === 'list' ? 'flex items-center h-48' : ''
              }`}
              onClick={() => onCategorySelect(category)}
            >
              <div 
                className={`bg-cover bg-center relative overflow-hidden ${
                  viewMode === 'list' ? 'w-64 h-full flex-shrink-0' : 'h-80'
                }`}
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                
                {/* Rating badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-semibold text-gray-800">{category.rating}</span>
                </div>

                {/* Tags */}
                <div className="absolute top-4 right-4 flex flex-wrap gap-1">
                  {category.tags.slice(0, 2).map((tag, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTagClick(tag);
                      }}
                      className="bg-cyan-500/80 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-cyan-600/90 transition-colors"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
                
                {viewMode === 'grid' && (
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                        {category.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className="bg-cyan-500/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                          {category.tours.length} экскурсий
                        </span>
                        <span className="text-cyan-300">
                          от {Math.min(...category.tours.map(t => t.priceNum))}฿
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-cyan-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-4">🌊</div>
                    <p className="text-lg font-semibold">Смотреть все экскурсии</p>
                    <div className="mt-2 text-cyan-200">→</div>
                  </div>
                </div>
              </div>
              
              {viewMode === 'list' && (
                <div className="flex-1 p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors">
                    {category.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <span className="mr-1">📍</span>
                      {category.tours.length} экскурсий
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">💰</span>
                      от {Math.min(...category.tours.map(t => t.priceNum))}฿
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">⭐</span>
                      {category.rating}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {category.tags.slice(0, 4).map((tag, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTagClick(tag);
                        }}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs hover:bg-cyan-100 hover:text-cyan-700 transition-colors"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Откройте для себя {category.tours.length} уникальных экскурсий в этой категории
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No results message */}
        {groupedTours.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Экскурсии не найдены</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm ? `По запросу "${searchTerm}" ничего не найдено.` : 'Ни одна экскурсия не соответствует выбранным фильтрам.'}
              <br />Попробуйте изменить критерии поиска или фильтры.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={clearAllFilters}
                className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Сбросить все фильтры
              </button>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Очистить поиск
                </button>
              )}
            </div>
          </div>
        )}

        {/* Quick stats */}
        {groupedTours.length > 0 && (
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-2xl p-6 inline-block">
              <div className="flex items-center justify-center gap-8">
                <div>
                  <div className="text-2xl font-bold">{sortedTours.length}</div>
                  <div className="text-cyan-100 text-sm">Экскурсий найдено</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{groupedTours.length}</div>
                  <div className="text-cyan-100 text-sm">Категорий</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {Math.min(...sortedTours.map(t => t.priceNum))}฿
                  </div>
                  <div className="text-cyan-100 text-sm">Мин. цена</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Three Steps Section Component
export const ThreeStepsSection = () => {
  const steps = [
    {
      number: "1",
      title: "Напишите нам",
      description: "Свяжитесь с нами удобным для вас способом – по телефону, Telegram или WhatsApp и сообщите, куда планируете отправиться.",
      icon: "📱"
    },
    {
      number: "2", 
      title: "Оплатите экскурсию",
      description: "Для вашего удобства мы предлагаем различные способы оплаты. Батская банковская карта, наличные, банковский платеж, рубли, криптовалюта",
      icon: "💳"
    },
    {
      number: "3",
      title: "Отправляйтесь в новое приключение", 
      description: "В назначенное время вас заберет наш трансфер и отвезет прямо на остров для отправления на экскурсию. Трансфер включен в стоимость",
      icon: "🚐"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            ТРИ ПРОСТЫХ ШАГА ПУТЕШЕСТВЕННИКА
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto text-2xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Page Component
export const AboutPage = ({ onBackToMain }) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={onBackToMain}
          className="mb-8 flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-lg transition-colors"
        >
          ← Главная
        </button>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">О КОМПАНИИ</h1>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Добро пожаловать в мир незабываемых впечатлений на острове Пхукет вместе с Пхукет Go. 
                Мы, как настоящие эксперты, поможем путешественникам открыть для себя удивительный остров 
                Пхукет во всей его красе и сделаем ваш отпуск незабываемым.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Наша миссия</h2>
              <p className="text-gray-700 mb-8">
                Наша команда превращает ваши поездки на острове в настоящее приключение. 
                Цель Пхукет Go — сделать ваше пребывание максимально незабываемым и комфортным, 
                будь то ваш первый визит или вы уже давно влюблены в этот тропический рай.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Что мы предлагаем</h2>
              <p className="text-gray-700 mb-6">
                Мы предлагаем экскурсии на Пхукете, где каждый гость найдет идеальный тур для себя.
              </p>
              
              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  Разнообразные экскурсии: от захватывающих морских прогулок, насыщенных туров на материк до вечерних шоу на Пхукете
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  Поддержка на русском языке: наша команда русскоязычных менеджеров всегда на связи
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  Комфорт и безопасность: мы гарантируем безопасность и надежность на каждом этапе тура
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  Гибкие варианты оплаты: мы предлагаем различные способы оплаты
                </li>
              </ul>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Почему выбирают Пхукет Go</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-emerald-800 mb-2">Многолетний опыт</h3>
                  <p className="text-gray-700 text-sm">Благодаря нашему опыту, мы предлагаем проверенные экскурсии</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-emerald-800 mb-2">Положительные отзывы</h3>
                  <p className="text-gray-700 text-sm">Туристы уже оценили высокий уровень сервиса</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-emerald-800 mb-2">Гибкость и внимание к деталям</h3>
                  <p className="text-gray-700 text-sm">Мы подбираем с учетом ваших предпочтений</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-emerald-800 mb-2">Официальная лицензия</h3>
                  <p className="text-gray-700 text-sm">Как лицензированная компания, мы гарантируем полную надежность</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Prices Page Component  
export const PricesPage = ({ onBackToMain }) => {
  const priceCategories = [
    {
      title: "Морские экскурсии",
      prices: [
        { name: "Симиланские острова", price: "3,200฿", duration: "12 часов" },
        { name: "Острова Краби", price: "2,800฿", duration: "8 часов" },
        { name: "Снорклинг тур", price: "1,800฿", duration: "6 часов" },
        { name: "Дайвинг для начинающих", price: "3,500฿", duration: "8 часов" },
        { name: "Морская рыбалка", price: "2,900฿", duration: "8 часов" },
        { name: "Романтический круиз", price: "4,200฿", duration: "4 часа" }
      ]
    },
    {
      title: "Острова Пхи-Пхи", 
      prices: [
        { name: "Пхи-Пхи на спидботе", price: "2,500฿", duration: "8 часов" },
        { name: "Пхи-Пхи на рассвете", price: "3,200฿", duration: "10 часов" },
        { name: "Пхи-Пхи + снорклинг", price: "2,800฿", duration: "9 часов" },
        { name: "Пхи-Пхи на закате", price: "2,900฿", duration: "8 часов" }
      ]
    },
    {
      title: "Джеймс Бонд",
      prices: [
        { name: "Остров Джеймса Бонда", price: "2,200฿", duration: "7 часов" },
        { name: "Джеймс Бонд + каякинг", price: "2,600฿", duration: "8 часов" },
        { name: "Джеймс Бонд на лонгтейле", price: "1,800฿", duration: "6 часов" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={onBackToMain}
          className="mb-8 flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-lg transition-colors"
        >
          ← Главная
        </button>
        
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">ЦЕНЫ НА ЭКСКУРСИИ</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {priceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-cyan-600 mb-6 text-center">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.prices.map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors">
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.duration}</p>
                      </div>
                      <div className="text-xl font-bold text-cyan-600">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Скидки при бронировании от 3х экскурсий</h2>
            <p className="text-xl mb-6">Получите скидку до 15% при заказе нескольких экскурсий</p>
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Узнать подробности
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reviews Page Component
export const ReviewsPage = ({ onBackToMain }) => {
  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      date: "15 февраля 2025",
      tour: "Острова Пхи-Пхи",
      text: "Невероятная экскурсия! Организация на высшем уровне, гид был очень внимательным и знающим. Виды просто потрясающие! Особенно понравился залив Майя Бэй - такой красоты я никогда не видела.",
      avatar: "👩‍🦰"
    },
    {
      name: "Михаил Сидоров",
      rating: 5, 
      date: "8 февраля 2025",
      tour: "Симиланские острова",
      text: "Отличное соотношение цены и качества. Все было организовано четко по времени, обед вкусный, снорклинг незабываемый! Видели черепах и множество тропических рыб. Команда профессиональная.",
      avatar: "👨‍💼"
    },
    {
      name: "Елена Коваленко",
      rating: 4,
      date: "28 января 2025",
      tour: "Джеймс Бонд + каякинг", 
      text: "Очень понравилось! Каякинг в пещерах - это что-то невероятное. Единственный минус - много людей на основных точках, но это не помешало насладиться красотой природы.",
      avatar: "👩‍🎓"
    },
    {
      name: "Дмитрий Волков",
      rating: 5,
      date: "20 января 2025", 
      tour: "Дайвинг для начинающих",
      text: "Первый раз пробовал дайвинг и остался в полном восторге! Инструктор очень терпеливый, все объяснил, чувствовал себя безопасно. Подводный мир Андаманского моря просто фантастический!",
      avatar: "👨‍🔬"
    },
    {
      name: "Ольга Смирнова",
      rating: 5,
      date: "12 января 2025",
      tour: "Романтический круиз",
      text: "Идеальная экскурсия для пары! Закат был волшебным, ужин изысканный, обслуживание на высоте. Фотограф сделал потрясающие снимки. Рекомендую всем влюбленным!",
      avatar: "👩‍❤️‍👨"
    },
    {
      name: "Александр Попов",
      rating: 5,
      date: "5 января 2025",
      tour: "Морская рыбалка", 
      text: "Отличная рыбалка! Поймал барракуду и красного снэппера. Капитан знает лучшие места, снасти профессиональные. А когда приготовили улов на обед - объедение! Мужчинам очень рекомендую.",
      avatar: "👨‍🎣"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        <button
          onClick={onBackToMain}
          className="mb-8 flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-lg transition-colors"
        >
          ← Главная
        </button>
        
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">ОТЗЫВЫ ТУРИСТОВ</h1>
          <p className="text-xl text-gray-600 text-center mb-12">Более 10,000 довольных путешественников уже выбрали нас</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{review.avatar}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{review.name}</h3>
                    <div className="flex items-center mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500">⭐</span>
                      ))}
                      <span className="text-gray-500 text-sm ml-2">{review.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                    {review.tour}
                  </span>
                </div>
                
                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 inline-block">
              <div className="text-4xl mb-4">⭐</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">4.9 из 5</h2>
              <p className="text-gray-600">Средняя оценка наших экскурсий</p>
              <p className="text-sm text-gray-500 mt-2">На основе 1,247 отзывов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FAQ Component with improved design
export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Почему стоит покупать экскурсии у нас?',
      answer: 'Мы работаем официально с лицензией 12/03586 и предоставляем только качественные услуги с профессиональными гидами. У нас лучшие цены на рынке и индивидуальный подход к каждому клиенту.'
    },
    {
      question: 'Как заказать экскурсию?',
      answer: 'Вы можете заказать экскурсию через форму на сайте, по телефону +66 94 975 24 66 или в мессенджерах WhatsApp и Telegram. Мы работаем 24/7 и отвечаем в течение 5 минут.'
    },
    {
      question: 'Какие способы оплаты экскурсий на Пхукете доступны?',
      answer: 'Мы принимаем оплату наличными (баты и рубли), банковскими картами Visa/MasterCard, а также через онлайн-переводы. Возможна оплата частями: 50% при бронировании, 50% перед экскурсией.'
    },
    {
      question: 'Какие документы необходимы для бронирования экскурсий?',
      answer: 'Для бронирования необходимо указать ФИО всех участников, контактный телефон, название отеля и желаемую дату. Для морских экскурсий нужен паспорт для посещения национальных парков.'
    },
    {
      question: 'Какие экскурсии обязательно посетить на Пхукете?',
      answer: 'Рекомендуем посетить острова Пхи-Пхи (культовый залив Майя Бэй), остров Джеймса Бонда, совершить сафари на слонах, посетить Большого Будду и обязательно сходить на одно из тайских шоу.'
    },
    {
      question: 'Где можно купить экскурсии на острова Пхукета?',
      answer: 'Вы можете купить экскурсии прямо на нашем сайте со скидкой 10%, связаться с нами через WhatsApp/Telegram или позвонить. Мы также встречаем клиентов в отелях для персональных консультаций.'
    },
    {
      question: 'Что делать если погода испортится?',
      answer: 'При плохой погоде мы переносим экскурсию на другой день бесплатно или возвращаем 100% стоимости. Безопасность наших клиентов - главный приоритет.'
    },
    {
      question: 'Включен ли трансфер в стоимость экскурсий?',
      answer: 'Да, трансфер из всех отелей Пхукета включен в стоимость всех экскурсий. Мы забираем и привозим обратно прямо к вашему отелю на комфортабельном транспорте с кондиционером.'
    }
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
          </h2>
          <p className="text-xl text-gray-600">Ответы на самые популярные вопросы наших туристов</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 bg-gradient-to-r from-cyan-50 to-teal-50 hover:from-cyan-100 hover:to-teal-100 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800 pr-4 text-lg">{faq.question}</h3>
                  <span className="text-cyan-600 text-2xl font-bold flex-shrink-0 transform transition-transform duration-300">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              
              {activeIndex === index && (
                <div className="mt-2 p-6 bg-gray-50 rounded-xl animate-fadeIn border-l-4 border-cyan-500">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Component with improved design
export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: '🏆',
      title: 'Работаем официально лицензия 12/03586',
      description: 'Полностью легальная туристическая компания с государственной лицензией'
    },
    {
      icon: '⭐',
      title: 'Только положительные отзывы',
      description: 'Более 10,000 довольных туристов и рейтинг 4.9 из 5 звезд'
    },
    {
      icon: '💳',
      title: 'Удобная система оплаты',
      description: 'Принимаем все виды оплат: карты, наличные, криптовалюта'
    },
    {
      icon: '🎯',
      title: 'Лучшее соотношение цены и качества',
      description: 'Конкурентные цены при высочайшем качестве обслуживания'
    },
    {
      icon: '🎫',
      title: 'Скидки при бронировании от 3х экскурсий',
      description: 'Выгодные предложения для постоянных клиентов до 15%'
    },
    {
      icon: '🛡️',
      title: 'Страховка включена',
      description: 'Полная страховая защита во время всех экскурсий'
    },
    {
      icon: '👥',
      title: 'Индивидуальный подход',
      description: 'Персональное внимание к каждому клиенту и его пожеланиям'
    },
    {
      icon: '🌏',
      title: 'Онлайн поддержка 24/7',
      description: 'Круглосуточная помощь на русском языке в любое время'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            ПОЧЕМУ МЫ?
          </h2>
          <p className="text-xl text-gray-600">8 причин выбрать Пхукет Go для ваших приключений</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{reason.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-3 text-lg leading-tight">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Form Component with improved design
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: '',
    contact: 'telegram'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', comment: '', contact: 'telegram' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-500 to-teal-500" id="contacts">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              ОСТАВИТЬ ЗАЯВКУ
            </h2>
            <p className="text-xl text-cyan-100">Свяжитесь с нами и мы подберем идеальную экскурсию для вас</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Номер телефона</label>
                  <input
                    type="tel"
                    placeholder="+66 xxx xxx xxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Комментарий</label>
                <textarea
                  placeholder="Расскажите о ваших пожеланиях или задайте вопрос..."
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  rows="4"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <p className="text-gray-700 font-semibold mb-3">Как с вами удобнее связаться?</p>
                <div className="flex space-x-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="telegram"
                      checked={formData.contact === 'telegram'}
                      onChange={(e) => setFormData({...formData, contact: e.target.value})}
                      className="mr-3 w-4 h-4 text-emerald-600"
                    />
                    <span className="text-gray-700">📱 Telegram</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="whatsapp"
                      checked={formData.contact === 'whatsapp'}
                      onChange={(e) => setFormData({...formData, contact: e.target.value})}
                      className="mr-3 w-4 h-4 text-emerald-600"
                    />
                    <span className="text-gray-700">💬 WhatsApp</span>
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component with improved design
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                <img src="/logo.svg" alt="Пхукет GO" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                ПХУКЕТ GO
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Официальный туроператор по Пхукету с лицензией 12/03586. 
              Создаем незабываемые путешествия с 2020 года.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center">
                <span className="mr-2">📞</span> +66 94 975 24 66
              </p>
              <p className="flex items-center">
                <span className="mr-2">📧</span> info@phuketgo.tours
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span> Пхукет, Таиланд
              </p>
              <a 
                href="https://t.me/+qkhh55Ozg6gxY2Y1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span className="mr-2">💬</span> Telegram канал
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Популярные экскурсии</h4>
            <div className="space-y-2 text-gray-400">
              <p className="hover:text-cyan-400 transition-colors cursor-pointer">Острова Пхи-Пхи</p>
              <p className="hover:text-cyan-400 transition-colors cursor-pointer">Остров Джеймса Бонда</p>
              <p className="hover:text-cyan-400 transition-colors cursor-pointer">Симиланские острова</p>
              <p className="hover:text-cyan-400 transition-colors cursor-pointer">Дайвинг и снорклинг</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg">Следите за нами</h4>
            <div className="flex space-x-4 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <span className="text-white">f</span>
              </div>
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                <span className="text-white">📷</span>
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                <span className="text-white">💬</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              <p>⭐ Рейтинг: 4.9/5</p>
              <p>👥 10,000+ клиентов</p>
              <p>🏆 Лицензия 12/03586</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Пхукет Go. Все права защищены. Лицензия туроператора 12/03586</p>
        </div>
      </div>
    </footer>
  );
};

// Floating Contact Widget Component
export const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="relative">
        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center justify-center text-white text-2xl animate-pulse"
        >
          💬
        </button>
        
        {/* Contact Options */}
        {isOpen && (
          <div className="absolute bottom-20 left-0 space-y-3 animate-fadeInUp">
            <a
              href="https://t.me/+qkhh55Ozg6gxY2Y1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-blue-500 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105"
            >
              <span>📱</span>
              <span className="font-medium">Telegram</span>
            </a>
            
            <a
              href="https://wa.me/66949752466"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-green-600 transition-all transform hover:scale-105"
            >
              <span>📱</span>
              <span className="font-medium">WhatsApp</span>
            </a>
            
            <a
              href="tel:+66949752466"
              className="flex items-center space-x-3 bg-orange-500 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105"
            >
              <span>📞</span>
              <span className="font-medium">Позвонить</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// Weather Widget Component
export const WeatherWidget = () => {
  const [weather, setWeather] = useState({
    temp: 32,
    condition: 'sunny',
    humidity: 75,
    wind: 12
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
        <span className="mr-2">🌤️</span>
        Погода в Пхукете
      </h3>
      
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-4xl mb-2">☀️</div>
          <div className="text-3xl font-bold text-cyan-600">{weather.temp}°C</div>
          <div className="text-gray-600">Солнечно</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center">
            <span className="mr-2">💧</span>
            <span>Влажность: {weather.humidity}%</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🌊</span>
            <span>Ветер: {weather.wind} км/ч</span>
          </div>
        </div>
        
        <div className="bg-cyan-50 rounded-lg p-3 text-center">
          <p className="text-cyan-800 text-sm font-medium">
            🌊 Отличная погода для экскурсий!
          </p>
        </div>
      </div>
    </div>
  );
};

// Currency Widget Component
export const CurrencyWidget = () => {
  const [rates, setRates] = useState({
    usd: 36.2,
    eur: 38.8,
    rub: 0.38
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
        <span className="mr-2">💱</span>
        Курс валют
      </h3>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">1 USD</span>
          <span className="font-semibold text-cyan-600">{rates.usd}฿</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">1 EUR</span>
          <span className="font-semibold text-cyan-600">{rates.eur}฿</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">1 RUB</span>
          <span className="font-semibold text-cyan-600">{rates.rub}฿</span>
        </div>
        
        <div className="border-t pt-3 text-xs text-gray-500 text-center">
          Обновлено: {new Date().toLocaleDateString('ru-RU')}
        </div>
      </div>
    </div>
  );
};