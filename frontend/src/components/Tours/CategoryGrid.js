import React from 'react';

const CategoryGrid = ({ 
  groupedTours, 
  viewMode, 
  onCategorySelect, 
  handleTagClick 
}) => {
  return (
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
  );
};

export default CategoryGrid;