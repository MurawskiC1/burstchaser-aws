import React from "react"
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SpecialPage from "./pages/SpecialPage";
import Data from "./pages/Data";
export default function AppRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/alexis' element={<SpecialPage />} />
                <Route path="/data" element={<Data />} />
            </Routes>
        </div>
    )
};

