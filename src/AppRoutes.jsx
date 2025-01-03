import React from "react"
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SpecialPage from "./pages/SpecialPage";
import Data from "./pages/Data";
import { getBursts } from "./functions/datamanager";
import Preview from "./pages/Preview"
import Download from "./pages/Download";
import Classify from "./pages/Classify";
import NewHome from "./pages/NewHome";
export default function AppRoutes(props) {

    const bursts = getBursts([], "", "");
    return (

        <div>
            <Routes>
                <Route path='/' element={<NewHome />} />
                <Route path='/alexis' element={<SpecialPage />} />
                <Route path="/data" element={<Data />} />
                <Route path="/classify" element={<Classify />} />
                <Route path='/download' element={<Download />} />
                {bursts.map((burst, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Route key={index} path={`data/${burst.Burst_Name}`} element={<Preview burst={burst} />} />
                        </React.Fragment>
                    )
                })}
            </Routes>
        </div >
    )
};

