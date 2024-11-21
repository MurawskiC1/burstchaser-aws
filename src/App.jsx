import { useState } from 'react';
import './App.css';
// import { Amplify } from 'aws-amplify';
// import outputs from '../amplify_outputs.json';
import initialData from './data/pulse_shape.json';
import { jsonToCsv, downloadCsv, getBursts, sortLowHigh, sortHighLow } from './functions/datamanager';

// Amplify.configure(outputs);

function App() {
  const [data, setData] = useState(initialData);

  const handleFilter = (filter) => {
    const filteredData = getBursts(filter); // Assuming getBursts filters data
    setData(filteredData);
  };

  const handleSort = (key) => {
    const sortedData = sortHighLow(data, key); // Assuming sort returns a new array
    setData(sortedData); // Update state with sorted data
  };

  const handleDownload = (jsonData, filename) => {
    const csvData = jsonToCsv(jsonData);
    downloadCsv(csvData, filename);
  };

  return (
    <div className="prepage-container">
      <div className="prepage-header">
        <div>
          <h1>BURST CHASER</h1>
        </div>
      </div>
      <div className="prepage-buttons">
        <button onClick={() => handleDownload(data, 'BC_PulseShapes.csv')}>Download</button>
        <button onClick={() => handleFilter("Simple")}>Filter</button>
        <button onClick={() => handleSort("Simple")}>Sort</button>
      </div>

      <div>
        {data.map((burst, index) => (
          <div key={index}>
            <h2>Burst {index + 1}</h2>
            <pre>{JSON.stringify(burst, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
