// Import statements should be at the top of the file
import React, { useState, useEffect } from 'react';

// Other imports (e.g., styles, components, etc.)
// import SomeComponent from './SomeComponent';
// import './styles.css';

// Then your component code follows
export function AppliedFilters({ appliedFilters, handleRemoveFilter, setFilter }) {
    return (
        <div className="applied-filters">
            {appliedFilters.map((filter, index) => {
                const [f, verify] = filter.split("/"); // Destructure filter
                const [hmm, bleh] = verify.split("_");
                return (
                    <button
                        key={index}
                        onClick={() => handleRemoveFilter(filter, setFilter)}
                    >
                        {hmm}: {f || "Not Classified"} x
                    </button>
                );
            })}
        </div>


    )
}


export function FilterButtons({ handleTypeChange, verify }) {
    return (
        <div className='filter-buttons'>
            <div className='filter-buttons-space'>

                <button onClick={() => handleTypeChange(`Simple/${verify}`)}>Simple</button>
                <button onClick={() => handleTypeChange(`Extended/${verify}`)}>Extended</button>
                <button onClick={() => handleTypeChange(`Other/${verify}`)}>Other</button>

                <button onClick={() => handleTypeChange(`Too_Noisy/${verify}`)}>Too Noisy</button>
                <button onClick={() => handleTypeChange(`None/${verify}`)}>Not Classified</button>
            </div>
        </div >
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
