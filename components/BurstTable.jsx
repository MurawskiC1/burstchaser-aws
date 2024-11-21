import React from 'react';
import { Link } from 'react-router-dom';

export function BurstTable({ bursts, start, end, handleSort }) {
    return (
        <table className="view-boxes">
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Image</th>
                    <th onClick={() => handleSort("Burst_Name")}>Burst Name</th>
                    <th onClick={() => handleSort("BurstID")}>Burst ID</th>
                    <th onClick={() => handleSort("Simple")}>Simple</th>
                    <th onClick={() => handleSort("Extended")}>Extended</th>
                    <th onClick={() => handleSort("Other")}>Other</th>
                    <th onClick={() => handleSort("Too_Noisy")}>Too Noisy</th>
                    <th onClick={() => handleSort("verify")}>Verified</th>
                    <th onClick={() => handleSort("Final_Confidence")}>Confidence</th>
                </tr>
            </thead>
            <tbody>
                {bursts.slice(start, end).map((burst, index) => (
                    <tr key={burst.BurstID}>
                        <td>{start + index + 1}</td>
                        <td><img src={`/BurstPhotos/${burst.Burst_PNG}`} alt={burst.Burst_Name} /></td>
                        <td>{/*<Link to={`${burst.Burst_Name}`}>{burst.Burst_Name}</Link>*/}</td>
                        <td>{burst.BurstID}</td>

                        <td>{burst.Simple}</td>
                        <td>{burst.Extended}</td>
                        <td>{burst.Other}</td>
                        <td>{burst.Too_Noisy}</td>
                        <td>{burst.Verify}</td>
                        <td>{burst.Final_Confidence.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

