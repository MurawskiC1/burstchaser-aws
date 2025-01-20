import React, { useState } from "react";
import DownloadPreview from "./DownloadPreview";
import { jsonToCsv, downloadCsv, getBursts } from "../functions/datamanager";
import { FilterButtons, AppliedFilters } from "../components/FilterComponents";
export default function Download(props) {
    const [filters, setFilters] = useState([]);
    const bursts = getBursts(filters, "", "");
    const [isNotPreview, setPreview] = useState(true);

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

    // Handle file download
    const handleDownload = (jsonData, filters) => {
        let filename = "BurstChaser";

        // Append filters to filename
        if (filters.length > 0) {
            filters.forEach((filter) => {
                filename += `_${filter}`;
            });
        }

        const csvData = jsonToCsv(jsonData);
        downloadCsv(csvData, filename);
    };

    return (
        <div className="data-page">
            <div className="navbarspace" />
            <div className="download-filter-container">
                {isNotPreview ? (
                    <div>
                        <h1>Classification:</h1>
                        <h2>Proportions</h2>
                        <FilterButtons handleTypeChange={handleFilter} verify={"Prop_Verify"} />
                        <h2>95% Frequency</h2>
                        <FilterButtons handleTypeChange={handleFilter} verify={"95%_Verify"} />
                        <h2>99% Frequency</h2>
                        <FilterButtons handleTypeChange={handleFilter} verify={"99%_Verify"} />
                        <h2>Machine Learning:</h2>
                        <FilterButtons handleTypeChange={handleFilter} verify={"ML_Verify"} />
                        <div className='applied-filter-container'>
                            <AppliedFilters appliedFilters={filters} handleRemoveFilter={handleFilter} setFilter={setFilters} />
                        </div>
                    </div>
                ) : (
                    <DownloadPreview bursts={bursts} />
                )}
            </div>
            <div className="download-preview-container">
                <div className="download-preview-buttons">
                    <button onClick={() => setPreview(!isNotPreview)}>
                        {isNotPreview ? "Show Preview" : "Show Filters"}
                    </button>
                    <button onClick={() => handleDownload(bursts, filters)}>
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
}
