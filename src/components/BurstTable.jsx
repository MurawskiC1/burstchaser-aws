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

                    <th onClick={() => handleSort("Simple")}>Simple</th>
                    <th onClick={() => handleSort("Extended")}>Extended</th>
                    <th onClick={() => handleSort("Other")}>Other</th>
                    <th onClick={() => handleSort("Too_Noisy")}>Too Noisy</th>
                    <th onClick={() => handleSort("Simple_Proportion")}>SimpleP</th>
                    <th onClick={() => handleSort("Extended_Proportion")}>ExtendedP</th>
                    <th onClick={() => handleSort("Other_Proportion")}>OtherP</th>
                    <th onClick={() => handleSort("Too_Noisy_Proportion")}>Too NoisyP</th>

                    <th onClick={() => handleSort("Count")}>Count</th>
                    <th onClick={() => handleSort("Prop_Verify")}>Prop Verified</th>
                    <th onClick={() => handleSort("95%_Verify")}>95% Verified</th>
                    <th onClick={() => handleSort("99%_Verify")}>99% Verified</th>
                    <th onClick={() => handleSort("ML_Verify")}>ML Verified</th>
                </tr>
            </thead>
            <tbody>
                {bursts.slice(start, end).map((burst, index) => (
                    <tr key={burst.BurstID}>
                        <td>{start + index + 1}</td>
                        <td><img src={`/BurstPhotos/${burst.Burst_PNG}`} alt={burst.Burst_Name} /></td>
                        <td><Link to={`${burst.Burst_Name}`}>{burst.Burst_Name}</Link></td>


                        <td>{burst.Simple}</td>
                        <td>{burst.Extended}</td>
                        <td>{burst.Other}</td>
                        <td>{burst.Too_Noisy}</td>
                        <td>{burst.Simple_Proportion}</td>
                        <td>{burst.Extended_Proportion}</td>
                        <td>{burst.Other_Proportion}</td>
                        <td>{burst.Too_Noisy_Proportion}</td>

                        <td>{burst.Count}</td>
                        <td>{burst.Prop_Verify}</td>
                        <td>{burst["95%_Verify"]}</td>
                        <td>{burst["99%_Verify"]}</td>
                        <td>{burst["ML_Verify"]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

