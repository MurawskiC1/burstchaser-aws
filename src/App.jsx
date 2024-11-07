
import './App.css'
/*import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';*/
import data from './data/pulse_shape.json';

/*Amplify.configure(outputs);*/

function App() {

  const jsonToCsv = (json) => {
    const csvRows = [];
    const headers = Object.keys(json[0]);
    csvRows.push(headers.join(','));

    for (const row of json) {
      const values = headers.map(header => {
        const escaped = ('' + row[header]).replace(/"/g, '\\"');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
  };

  const downloadCsv = (csvData, filename = 'BC_PulseShapes.csv') => {
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  const handleDownload = (jsonData) => {
    const csvData = jsonToCsv(jsonData);
    downloadCsv(csvData);
  };



  return (
    <div className="prepage-container">
      <div className="prepage-header">
        <div>
          <h1>BURST CHASER</h1>
        </div>
      </div>
      <div className='prepage-buttons'>
        <button onClick={() => handleDownload(data)}>Download</button>
      </div>
    </div>
  )
}

export default App
