
import './App.css';
import AppRoutes from './AppRoutes';
import Prepage from './pages/Prepage';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <div>
                    <AppRoutes />
                </div>
            </Router>
        </>
    )

}

export default App;