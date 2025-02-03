/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import './galleryItem.scss';

function GalleryItem ({props, activeFilters, masonry}) {
    const { img, filters } = props;
    const [isInactive, setInactive] = useState(false);
    const item = useRef();
    // console.log(activeFilters)

    const checkInactive = () => {
        if (activeFilters.length > 0) {
            const match = activeFilters.some((filter) => {
                // console.log(filter);
                return filters.includes(filter);
            });
            // setInactive(!match);
            return !match;
        } else {
            // setInactive(false);
            return false;
        }
    }

    const itemFilters = filters.map((filter, i) => {
        return (
            <li className={`gallery-item__filter-item ${filter}`} key={`filter-item-${i}`}></li>
        )
    });


    useEffect(() => {
        setInactive(checkInactive);
    }, [])

    useEffect(() => {
        setInactive(checkInactive);
    }, [activeFilters])

      useEffect(() => {
        if (isInactive) {
            setTimeout(() => {
                item.current.style.display = 'none';
                masonry && masonry.layout();
            }, 600)
        } else {
            item.current.style.display = '';
            masonry && masonry.layout();
        }
    }, [isInactive]);
    

    return (
        <div className={`gallery-item ${(filters).join(' ')} ${checkInactive() ? 'hidden' : ''}`} ref={item}>
            <a href={img} target="_blank">
                <ul className="gallery-item__filters">{itemFilters}</ul>
                <img src={img} className="gallery-item__img" />
            </a>
        </div>
    )
}


export default GalleryItem; 