import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { generateClient } from "aws-amplify/data";
import { Amplify } from 'aws-amplify';

import data from './data/pulse_shape.json';

Amplify.configure(outputs);

function App() {
  const [count, setCount] = useState(0)





  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
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
    </>
  )
}

export default App
