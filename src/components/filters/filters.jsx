/* eslint-disable react/prop-types */
// import { useState, useEffect } from 'react';
import './filters.scss';

function Filters (props) {
    const { toggleFilter, activeFilters } = props;

    const filters = [
        {
            label: "illustration",
            color: 'red',
            id: 'illustration'
        },
        {
            label: "pattern",
            color: 'gold',
            id: 'pattern'
        },
        {
            label: "merch",
            color: 'teal',
            id: 'merch'
        },
        {
            label: "original",
            color: 'purple',
            id: 'original'
        }
    ]
    
    const isActive = (id) => {
        return activeFilters.includes(id);
    }

    const filtersList = filters.map((filter, i) => {
        return (
            <li key={`filter-${i}`} className={`filters__list-item ${filter.color}`}><button onClick={() => {toggleFilter(filter)}} className={`filter__item filter__item--${filter.color} ${isActive(filter.id) ? 'filter__item--active' : ''}`}><span>{filter.label}</span></button></li>
        )
    });
    
    return (
        <div className="filters">
            <ul className="filters__list">
                {filtersList}
            </ul>
        </div>
    )
}


export default Filters; 