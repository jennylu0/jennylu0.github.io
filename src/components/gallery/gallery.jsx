/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from 'react';
import Masonry from 'masonry-layout';
import './gallery.scss';
import GalleryItem from '../galleryItem/galleryItem';
import Data from '../../assets/data/gallery.js';

function Gallery(props) {

    const galleryRef = useRef(null);
    const [masonry, setMasonry] = useState(null);

    const { activeFilters } = props;

    const galleryItems = Data.map((item, i) => {
        return (
            <GalleryItem key={`gallery-item-${i}`} props={item} activeFilters={activeFilters} masonry={masonry} />
        )
    })
    
    
    const iniMasonry = () => {
        // eslint-disable-next-line no-unused-vars
        const masonry = new Masonry(galleryRef.current, {
            itemSelector: '.gallery-item',
            percentPosition: true,
            columnWidth: '.gallery__sizer',
            gutter: 30
        });

        setMasonry(masonry);

        // masonry.layout();
    }

    const waitForImages = () => {
        const images = [...galleryRef.current.querySelectorAll('.gallery-item .gallery-item__img')];
        const promises = images.map(img => {
            return new Promise((resolve) => {
                if (img.complete) {
                    resolve(); 
                } else {
                    img.onload = () => resolve();
                }
            })})

        Promise.all(promises).then(
            data => { 
                iniMasonry();
                return data; 
            },
        )
    }

    useEffect(() => {
        waitForImages();
    }, [])
    
    return (
        <div className="gallery" ref={galleryRef}>
            <div className="gallery__sizer"></div>
            {galleryItems}
        </div>
    )
}


export default Gallery; 