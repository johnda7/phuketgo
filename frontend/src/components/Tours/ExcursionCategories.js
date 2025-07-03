import React, { useState } from 'react';
import FilterSection from './FilterSection';
import CategoryGrid from './CategoryGrid';
import { categories, getAllTags, getAllTours } from '../../data/toursData';
import { filterTours, sortTours, groupToursByCategory, getInitialFilters } from '../../utils/filterUtils';

const ExcursionCategories = ({ onCategorySelect }) => {
  const [activeFilters, setActiveFilters] = useState(getInitialFilters());
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [viewMode, setViewMode] = useState('grid');

  // Get all unique tags and tours
  const allTags = getAllTags();
  const allTours = getAllTours();

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
    setActiveFilters(getInitialFilters());
  };

  // Filter and sort tours
  const filteredTours = filterTours(allTours, activeFilters, searchTerm, selectedTags);
  const sortedTours = sortTours(filteredTours, sortBy);
  const groupedTours = groupToursByCategory(sortedTours, categories);

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
        <FilterSection
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          setSortBy={setSortBy}
          viewMode={viewMode}
          setViewMode={setViewMode}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          allTags={allTags}
          handleTagClick={handleTagClick}
          clearAllFilters={clearAllFilters}
          resultsCount={sortedTours.length}
          totalCount={allTours.length}
        />
        
        {/* Categories Grid */}
        <CategoryGrid
          groupedTours={groupedTours}
          viewMode={viewMode}
          onCategorySelect={onCategorySelect}
          handleTagClick={handleTagClick}
        />

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

export default ExcursionCategories;