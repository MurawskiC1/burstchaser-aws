
import './App.css';
import AppRoutes from './AppRoutes';
import Prepage from './pages/Prepage';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <div>
                    <AppRoutes />
                </div>
                <Footer />
            </Router>
        </>
    )

}

export default App;