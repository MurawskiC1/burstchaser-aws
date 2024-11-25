import React from "react"
import { Routes, Route } from 'react-router-dom';
import Prepage from "./pages/Prepage";
import SpecialPage from "./pages/SpecialPage";
export default function AppRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Prepage />} />
                <Route path='/alexis' element={<SpecialPage />} />
            </Routes>
        </div>
    )
};

