/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from 'react';
import Masonry from 'masonry-layout';
import './gallery.scss';
import GalleryItem from '../galleryItem/galleryItem';
import Data from '../../assets/data/gallery.js';
import imagesLoaded from 'imagesloaded';


function Gallery(props) {

    const galleryRef = useRef(null);
    const [masonry, setMasonry] = useState(null);

    const { activeFilters } = props;

    const items = [
        {
            img: 'https://placehold.co/600x900/png',
            filters: ["filter"],
            props: ["pattern"]
        },
        {
            img: 'https://placehold.co/600x400/png',
            filters: ["filter", "filter2"],
            props: [""]
        },
        {
            img: 'https://placehold.co/600x850/png',
            filters: ["filter"],
            props: [""]
        },
        {
            img: 'https://placehold.co/800x400/png',
            filters: [],
            props: ["pattern"]
        },
        {
            img: 'https://placehold.co/600x600/png',
            filters: ["filter", "filter2"],
            props: [""]
        }
    ];

    const galleryItems = Data.map((item, i) => {
        return (
            <GalleryItem key={`gallery-item-${i}`} props={item} activeFilters={activeFilters} masonry={masonry} />
        )
    })

    // console.log(galleryRef);
    
    
    const iniMasonry = () => {
        // eslint-disable-next-line no-unused-vars
        const masonry = new Masonry(galleryRef.current, {
            itemSelector: '.gallery-item',
            percentPosition: true,
            columnWidth: '.gallery__sizer',
            gutter: 30
        });

        setMasonry(masonry);

        imagesLoaded(galleryRef, () => {
            console.log('img loaded');
            masonry.layout();
        });
    }

    useEffect(() => {
        iniMasonry();
    }, [])

    useEffect(() => {
        // console.log('filters changed', activeFilters);
        // if (masonry) {
        //     setTimeout(() => {
        //         masonry.reloadItems();
        //         masonry.layout();
        //     }, 1000)
        // }
    }, [activeFilters, masonry])
    
    return (
        <div className="gallery" ref={galleryRef}>
            <div className="gallery__sizer"></div>
            {galleryItems}
        </div>
    )
}


export default Gallery; 