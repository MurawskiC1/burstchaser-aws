import React, { useState } from "react";
import DownloadPreview from "./DownloadPreview";
import { jsonToCsv, downloadCsv, getBursts } from "../functions/datamanager";

export default function Download(props) {
    const [filters, setFilters] = useState([]);
    const bursts = getBursts(filters, "", "");
    const [isNotPreview, setPreview] = useState(true);

    const [checkedItems, setCheckedItems] = useState({
        Simple: false,
        Extended: false,
        Other: false,
        Too_Noisy: false,
        All: false,
    });

    // Handle individual and "All" checkbox changes
    const handleCheckboxChange = (type) => {
        setCheckedItems((prevCheckedItems) => {
            const isAllToggle = type === "All";
            const newCheckedItems = { ...prevCheckedItems, [type]: !prevCheckedItems[type] };

            if (isAllToggle) {
                const allChecked = !prevCheckedItems.All;
                const updatedCheckedItems = Object.keys(newCheckedItems).reduce((acc, key) => {
                    acc[key] = allChecked;
                    return acc;
                }, {});

                setFilters(allChecked ? ["Simple", "Extended", "Other", "Too_Noisy"] : []);
                return updatedCheckedItems;
            } else {
                if (newCheckedItems[type]) {
                    setFilters((prevFilters) => [...prevFilters, type]);
                } else {
                    setFilters((prevFilters) => prevFilters.filter((filter) => filter !== type));
                }
            }

            return newCheckedItems;
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
        <div className="dp">
            <div className="download-filter-container">
                {isNotPreview ? (
                    <div className="download-filter">
                        {Object.keys(checkedItems).map((type) => (
                            <div key={type}>
                                <input
                                    type="checkbox"
                                    checked={checkedItems[type]}
                                    onChange={() => handleCheckboxChange(type)}
                                />
                                {type.replace("_", " ")}
                            </div>
                        ))}
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
