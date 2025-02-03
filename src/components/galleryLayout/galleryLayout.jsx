import { useState } from 'react';
import Filters from '../filters/filters';
import Gallery from '../gallery/gallery';

function GalleryLayout() {
    const [activeFilters, setActiveFilters] = useState([]);

    const toggleFilter = (filter) => {
        if (activeFilters.includes(filter.id)) {
            let i = activeFilters.indexOf(filter.id);
            const filters = activeFilters.toSpliced(i, 1);
            setActiveFilters(filters);
        } else {
            setActiveFilters([...activeFilters, filter.id])
        }
    }

  return (
      <div className="gallery-layout">
          <div className="gallery-layout__container">
            <Filters toggleFilter={toggleFilter} activeFilters={activeFilters} />
            <Gallery activeFilters={activeFilters} />
          </div>
      </div>
  )
}

export default GalleryLayout; 