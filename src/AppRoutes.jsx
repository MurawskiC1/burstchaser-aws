import React from "react"
import { Routes, Route } from "react-router-dom"
import bursts from "./data/pulse_shape.json"
import Preview from "./pages/Preview"
import Home from "./pages/Home"
import Data from "./pages/Data"
import Classify from "./pages/Classify"
import Download from "./pages/Download"
import DownloadPreview from "./pages/DownloadPreview"

export default function AppRoutes(props) {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
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

        </div>
    )
};

