import React from 'react';

const FilterSection = ({ 
  activeFilters, 
  setActiveFilters, 
  searchTerm, 
  setSearchTerm, 
  sortBy, 
  setSortBy, 
  viewMode, 
  setViewMode, 
  showFilters, 
  setShowFilters,
  selectedTags,
  setSelectedTags,
  allTags,
  handleTagClick,
  clearAllFilters,
  resultsCount,
  totalCount
}) => {
  return (
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
        Найдено {resultsCount} экскурсий из {totalCount}
        {searchTerm && <span> по запросу "{searchTerm}"</span>}
      </div>
    </div>
  );
};

export default FilterSection;