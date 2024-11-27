// Import statements should be at the top of the file
import React, { useState, useEffect } from 'react';

// Other imports (e.g., styles, components, etc.)
// import SomeComponent from './SomeComponent';
// import './styles.css';

// Then your component code follows
export function AppliedFilters({ appliedFilters, handleRemoveFilter, setFilter }) {
    return (
        <div className='applied-filters'>
            {appliedFilters.map((filter, index) => (
                <button
                    key={index}
                    onClick={() => handleRemoveFilter(filter, setFilter)}
                >
                    {filter || "Not Classified"} x
                </button>

            ))}
        </div>
    );
}

export function FilterButtons({ handleTypeChange }) {
    return (
        <div className='filter-buttons'>
            <div className='filter-buttons-space'>
                <button onClick={() => handleTypeChange('All')}>All</button>
                <button onClick={() => handleTypeChange('Simple')}>Simple</button>
                <button onClick={() => handleTypeChange('Extended')}>Extended</button>
                <button onClick={() => handleTypeChange('Other')}>Other</button>
            </div>
            <div className='filter-buttons-space'>
                <button onClick={() => handleTypeChange('Too_Noisy')}>Too Noisy</button>
                <button onClick={() => handleTypeChange(null)}>Not Classified</button>
            </div>
        </div>
    );
}

export function ConfidenceSlider({ conf, handleConfidenceLevel }) {
    return (
        <div className="confidence-level">
            <input
                className="slide"
                type="range"
                value={conf}
                min="0"
                max="100"
                onChange={(e) => handleConfidenceLevel(e.target.value)}
            />
            {conf}%
        </div>
    );
}
