
import './App.css';
import AppRoutes from './AppRoutes';
import Prepage from './pages/Prepage';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <div>
                    <AppRoutes />
                </div>
            </Router>
        </>
    )

}

export default App;