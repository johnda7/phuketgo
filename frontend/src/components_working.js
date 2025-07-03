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

// ИСПРАВЛЕННЫЙ ExcursionCategories с работающими фильтрами
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
          description: 'Знаменитый остров из фильма о Джеймсе Бонде.',
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
        }
      ]
    }
  ];

  // Utility functions
  const allTags = [...new Set(categories.flatMap(category => 
    category.tours.flatMap(tour => tour.tags)
  ))];

  const allTours = categories.flatMap(category => 
    category.tours.map(tour => ({
      ...tour,
      categoryId: category.id,
      categoryTitle: category.title
    }))
  );

  const handleTagClick = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

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

  // Filter logic
  const filteredTours = allTours.filter(tour => {
    // Search
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const matchTitle = tour.title.toLowerCase().includes(searchLower);
      const matchDescription = tour.description.toLowerCase().includes(searchLower);
      const matchTags = tour.tags.some(tag => tag.toLowerCase().includes(searchLower));
      if (!matchTitle && !matchDescription && !matchTags) return false;
    }

    // Tags
    if (selectedTags.length > 0) {
      const hasMatchingTag = selectedTags.some(selectedTag => 
        tour.tags.some(tag => tag.toLowerCase().includes(selectedTag.toLowerCase()))
      );
      if (!hasMatchingTag) return false;
    }

    // Filters
    if (activeFilters.priceRange !== 'all') {
      const [min, max] = activeFilters.priceRange.split('-').map(Number);
      if (max && (tour.priceNum < min || tour.priceNum > max)) return false;
      if (!max && tour.priceNum < min) return false;
    }

    if (activeFilters.duration !== 'all') {
      const [min, max] = activeFilters.duration.split('-').map(Number);
      if (max && (tour.durationNum < min || tour.durationNum > max)) return false;
      if (!max && tour.durationNum < min) return false;
    }

    if (activeFilters.activity !== 'all' && tour.activity !== activeFilters.activity) return false;

    if (activeFilters.groupSize !== 'all') {
      const [min, max] = activeFilters.groupSize.split('-').map(Number);
      if (max && (tour.groupSizeNum < min || tour.groupSizeNum > max)) return false;
      if (!max && tour.groupSizeNum < min) return false;
    }

    if (activeFilters.rating !== 'all') {
      const minRating = Number(activeFilters.rating);
      if (tour.rating < minRating) return false;
    }

    return true;
  });

  // Sort
  const sortedTours = [...filteredTours].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.priceNum - b.priceNum;
      case 'price-high': return b.priceNum - a.priceNum;
      case 'duration': return a.durationNum - b.durationNum;
      case 'rating': return b.rating - a.rating;
      default: return b.rating - a.rating;
    }
  });

  // Group
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
            Работающая система фильтров и поиска экскурсий
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Поиск экскурсий..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 pl-12 border border-gray-300 rounded-xl focus:border-cyan-500 focus:outline-none"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</div>
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-4 border border-gray-300 rounded-xl focus:border-cyan-500 focus:outline-none"
            >
              <option value="popular">По популярности</option>
              <option value="price-low">Сначала дешевые</option>
              <option value="price-high">Сначала дорогие</option>
              <option value="rating">По рейтингу</option>
            </select>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-6 py-4 rounded-xl font-medium transition-all ${
                showFilters ? 'bg-cyan-600 text-white' : 'bg-white border border-gray-300 text-gray-700'
              }`}
            >
              Фильтры
            </button>
            
            <button
              onClick={clearAllFilters}
              className="px-6 py-4 bg-red-100 text-red-700 rounded-xl hover:bg-red-200 transition-colors"
            >
              Сбросить
            </button>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Теги:</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    selectedTags.includes(tag)
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-cyan-100'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4 bg-gray-50 rounded-xl">
              <div>
                <label className="block text-sm font-medium mb-2">Цена</label>
                <select
                  value={activeFilters.priceRange}
                  onChange={(e) => setActiveFilters({...activeFilters, priceRange: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="all">Любая</option>
                  <option value="0-2000">До 2,000฿</option>
                  <option value="2000-3000">2,000-3,000฿</option>
                  <option value="3000">От 3,000฿</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Продолжительность</label>
                <select
                  value={activeFilters.duration}
                  onChange={(e) => setActiveFilters({...activeFilters, duration: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="all">Любая</option>
                  <option value="0-6">До 6 часов</option>
                  <option value="6-10">6-10 часов</option>
                  <option value="10">Более 10 часов</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Активность</label>
                <select
                  value={activeFilters.activity}
                  onChange={(e) => setActiveFilters({...activeFilters, activity: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="all">Любая</option>
                  <option value="water">Водные</option>
                  <option value="cultural">Культурные</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Размер группы</label>
                <select
                  value={activeFilters.groupSize}
                  onChange={(e) => setActiveFilters({...activeFilters, groupSize: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="all">Любой</option>
                  <option value="0-10">До 10 человек</option>
                  <option value="10-20">10-20 человек</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Рейтинг</label>
                <select
                  value={activeFilters.rating}
                  onChange={(e) => setActiveFilters({...activeFilters, rating: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="all">Любой</option>
                  <option value="4.5">4.5+ ⭐</option>
                  <option value="4.8">4.8+ ⭐</option>
                </select>
              </div>
            </div>
          )}

          <div className="mt-4 text-center text-gray-600">
            Найдено {sortedTours.length} экскурсий из {allTours.length}
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groupedTours.map((category) => (
            <div 
              key={category.id}
              className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 bg-white"
              onClick={() => onCategorySelect(category)}
            >
              <div 
                className="h-80 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full flex items-center">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-semibold text-gray-800 ml-1">{category.rating}</span>
                </div>
                
                <div className="absolute top-4 right-4 flex flex-wrap gap-1">
                  {category.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="bg-cyan-500/80 text-white px-2 py-1 rounded-full text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="bg-cyan-500/80 px-3 py-1 rounded-full text-sm">
                        {category.tours.length} экскурсий
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {groupedTours.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Экскурсии не найдены</h3>
            <p className="text-gray-600 mb-6">Попробуйте изменить фильтры</p>
            <button
              onClick={clearAllFilters}
              className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>
    </section>
  );
};