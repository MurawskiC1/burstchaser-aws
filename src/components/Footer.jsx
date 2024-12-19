import React from "react"
import { useEffect, useState } from 'react';

export default function Footer(props) {

    return (
        <div>
            <footer className="footer">
                <div className="footerimage">
                    <img src="burst_chaser.png" />


                </div>
                <div className="footer-text">
                    <div className="options-head">
                        <h1>Burst Chaser</h1>
                        <p>This will be for the mission statement for
                            burst chaser. So that on every page you can learn
                            a little about it.
                        </p>
                    </div >
                    <div className="footer-options">

                        <div className="options-options">
                            <p>About</p>
                            <p>Explore</p>
                            <p>Download</p>
                        </div>
                        <div className="options-options">
                            <p>Classify Bursts</p>
                            <p>Zooniverse</p>
                            <p>Join Burst Chaser</p>

                        </div>
                        <div className="options-options">
                            <p>Contact</p>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
};

