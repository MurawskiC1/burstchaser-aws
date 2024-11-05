import React from 'react';

import './App.css';
import data from './pulse_shape.json';


function App() {

  console.log(data)
  return (
    <>
      <div>
        <h1>GRB Burst Data</h1>
        <ul>
          {data.map((burst) => (
            <li key={burst.BurstID}>
              <h2>{burst.Burst_Name}</h2>
              <p><strong>Burst ID:</strong> {burst.BurstID}</p>
              <p><strong>Simple:</strong> {burst.Simple}</p>
              <p><strong>Extended:</strong> {burst.Extended}</p>
              <p><strong>Final Confidence:</strong> {burst.Final_Confidence}</p>
              <img src={burst.Burst_PNG} alt={`${burst.Burst_Name} image`} />
            </li>
          ))}
        </ul>
      </div >
    </>
  );
}

export default App;
