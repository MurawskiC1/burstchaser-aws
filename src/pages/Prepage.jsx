import React from "react"
import { useState } from 'react';


import { jsonToCsv, downloadCsv, getBursts } from './functions/datamanager';
import { BurstTable } from './components/BurstTable';

export default function Prepage(props) {

    const [filters, setFilters] = useState([]); // Active filters
    const [searchQuery, setSearchQuery] = useState(""); // Current search query
    const [sorting, setSorting] = useState({ key: "", ascending: true }); // Sorting key and order

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

    return (
        <div className="prepage-container">
            <div className="prepage-header">
                <h1>BURST CHASER</h1>
            </div>

            <div className="prepage-buttons">
                <button onClick={() => handleDownload(data, 'BC_PulseShapes.csv')}>Download</button>
                <button onClick={() => handleFilter("Simple")}>
                    Filter
                </button>
                <button onClick={() => handleSort("Simple")}>
                    Sort
                </button>
            </div>

            <div>
                {/* Search Bar */}
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search..."
                />
            </div>

            <div>
                {/* Render Filtered/Search Results */}
                <BurstTable bursts={data} start={0} end={50} handleSort={(sorting) => handleSort(sorting, setSorting)} />
            </div>
        </div>
    );


};

