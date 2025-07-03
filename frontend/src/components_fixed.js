import React, { useState } from 'react';

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