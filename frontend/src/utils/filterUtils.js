// Utility functions for filtering and sorting tours

export const filterTours = (tours, filters, searchTerm, selectedTags) => {
  return tours.filter(tour => {
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
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (max) {
        if (tour.priceNum < min || tour.priceNum > max) return false;
      } else {
        if (tour.priceNum < min) return false;
      }
    }

    // Duration filter
    if (filters.duration !== 'all') {
      const [min, max] = filters.duration.split('-').map(Number);
      if (max) {
        if (tour.durationNum < min || tour.durationNum > max) return false;
      } else {
        if (tour.durationNum < min) return false;
      }
    }

    // Activity filter
    if (filters.activity !== 'all') {
      if (tour.activity !== filters.activity) return false;
    }

    // Group size filter
    if (filters.groupSize !== 'all') {
      const [min, max] = filters.groupSize.split('-').map(Number);
      if (max) {
        if (tour.groupSizeNum < min || tour.groupSizeNum > max) return false;
      } else {
        if (tour.groupSizeNum < min) return false;
      }
    }

    // Rating filter
    if (filters.rating !== 'all') {
      const minRating = Number(filters.rating);
      if (tour.rating < minRating) return false;
    }

    return true;
  });
};

export const sortTours = (tours, sortBy) => {
  return [...tours].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.priceNum - b.priceNum;
      case 'price-high': return b.priceNum - a.priceNum;
      case 'duration': return a.durationNum - b.durationNum;
      case 'rating': return b.rating - a.rating;
      case 'popular':
      default: return b.rating - a.rating;
    }
  });
};

export const groupToursByCategory = (tours, categories) => {
  return categories.map(category => ({
    ...category,
    tours: tours.filter(tour => tour.categoryId === category.id)
  })).filter(category => category.tours.length > 0);
};

export const getInitialFilters = () => ({
  priceRange: 'all',
  duration: 'all',
  activity: 'all',
  groupSize: 'all',
  rating: 'all'
});