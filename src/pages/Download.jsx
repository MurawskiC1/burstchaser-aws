import React, { useState, useEffect } from "react";
import DownloadPreview from "./DownloadPreview";
import { jsonToCsv, downloadCsv, getBursts } from '../functions/datamanager';

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



    const handleCheckboxChange = (type) => {
        setCheckedItems((prevCheckedItems) => {
            const newCheckedItems = { ...prevCheckedItems, [type]: !prevCheckedItems[type] };

            if (type === 'All') {
                const allChecked = !prevCheckedItems.All;
                const updatedCheckedItems = Object.keys(newCheckedItems).reduce((acc, key) => {
                    acc[key] = allChecked;
                    return acc;
                }, {});

                setCheckedItems(updatedCheckedItems);
                setArrFilters(allChecked ? ['Simple', 'Extended', 'Other', 'Too_Noisy'] : []);
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


    const handleDownload = (jsonData, filename) => {
        const csvData = jsonToCsv(jsonData);
        downloadCsv(csvData, filename);
    };

    return (
        <div>
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
                                {type.replace('_', ' ')}
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
                        {isNotPreview ? "Preview" : "Filters"}
                    </button>
                    <button onClick={() => handleDownload(bursts)}>Download</button>
                </div>
            </div>
        </div>
    );
}
