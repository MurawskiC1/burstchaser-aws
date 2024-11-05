import React from 'react';
// Import the JSON file
import data from './pulse_shape.json';

const Function = () => {
    return (
        <div>
            <h1>{data.PulseShape}</h1>
            <p>{data.Simple}</p>
        </div>
    );
};

export default Function;
