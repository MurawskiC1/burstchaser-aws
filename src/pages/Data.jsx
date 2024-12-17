import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FilterButtons, AppliedFilters, ConfidenceSlider } from '../components/FilterComponents';

import { BurstTable } from '../components/BurstTable';
import { PaginationControls } from '../components/PaginationControls';
import { jsonToCsv, downloadCsv, getBursts } from '../functions/datamanager';
import SlidingContainer from '../components/SlidingContainer';


export default function Data() {
    const location = useLocation();
    const [filters, setFilters] = useState([]); // Active filters
    const [sorting, setSorting] = useState({ key: "", ascending: true }); // Sorting key and order
    const [searchQuery, setSearchQuery] = useState(new URLSearchParams(location.search).get('search') || '');
    const [render, setRender] = useState(50);
    const [start, setStart] = useState(0);
    const [conf, setConf] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    /*const comments = useComments();*/

    // Derived data: dynamically calculate based on filters, search, and sorting
    const data = getBursts(filters, searchQuery, sorting);

    // Handlers
    const handleFilter = (filter) => {
        setFilters((prevFilters) => {
            // Toggle the filter: add if not present, remove if already exists
            if (prevFilters.includes(filter)) {
                return prevFilters.filter((f) => f !== filter); // Remove filter
            } else {
                return [...prevFilters, filter]; // Add filter
            }
        });
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value); // Update search query
    };

    const handleSort = (key) => {
        setSorting((prevSorting) => ({
            key,
            ascending: key === prevSorting.key ? !prevSorting.ascending : true, // Toggle if same key, else default to ascending
        }));
    };

    const handleDownload = (jsonData, filename) => {
        const csvData = jsonToCsv(jsonData);
        downloadCsv(csvData, filename);
    };

    const handleLimit = (limit) => {
        setRender(parseInt(limit, 10));
        setStart(0);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleChangePage = (direction) => {
        const change = render;
        if (direction === "next" && start + change < data.length) {
            setStart((prev) => prev + change);
        } else if (direction === "previous" && start - change >= 0) {
            setStart((prev) => prev - change);
        }
    };

    console.log(start)
    const end = start + render;

    const clickOff = () => {
        if (isOpen === true) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        // Fetch data or perform operations based on searchQuery change
    }, [searchQuery]);

    return (
        <div className='data-page'>
            <div className='navbarspace' />
            <SlidingContainer isOpen={isOpen}>
                <h1>Classification:</h1>
                <FilterButtons handleTypeChange={handleFilter} />
                <div className='applied-filter-container'>
                    <AppliedFilters appliedFilters={filters} handleRemoveFilter={handleFilter} setFilter={setFilters} />
                </div>
                <h1>Confidence:</h1>
                <div className='confidence-container'>
                    {/*<ConfidenceSlider conf={conf} handleConfidenceLevel={handleConfidenceLevel} />*/}
                </div>
            </SlidingContainer>
            <div className="main-page" onClick={() => clickOff()}>
                <div className="filter-container">
                    <button className="toggle" onClick={() => setIsOpen(!isOpen)}>+ Filters</button>
                    <div className='search-container'>
                        <input
                            className="SearchBar"
                            type="text"
                            value={searchQuery}
                            onChange={handleSearch}
                            placeholder="Search..."
                        />
                    </div>
                </div>
                <div className='data-container'>
                    <BurstTable bursts={data} start={start} end={end} handleSort={(sorting) => handleSort(sorting, setSorting)} />
                </div>
                <div className='page-control-container'>
                    <PaginationControls
                        start={start}
                        render={render}
                        total={data.length}
                        handleChangePage={handleChangePage}
                        handleLimit={handleLimit}
                    />
                </div>
            </div>
        </div>
    );
}
