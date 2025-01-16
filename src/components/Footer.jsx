import React from "react"
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
                        <p>A citizen science project aiming to
                            unveil the mysteries about the most
                            energetic explosions in the universe,
                            Gamme Ray Bursts.
                        </p>
                    </div >
                    <div className="footer-options">

                        <div className="options-options">
                            <Link to="/"><p>About</p></Link>
                            <Link to="data"><p>Explore</p></Link>
                            <Link to="download"><p>Download</p></Link>
                        </div>
                        <div className="options-options">

                            <a href="https://www.zooniverse.org/projects/amylien/burst-chaser/classify"><p>Classify Bursts</p></a >
                            <a href="https://www.zooniverse.org/projects/amylien/burst-chaser"><p>Zooniverse</p></a >
                            <p>Join Burst Chaser</p>

                        </div>
                        <div className="options-options">
                            <a href="mailto:murawskiC1C4@gmail.com"><p>Contact</p></a>

                        </div>



                    </div>
                </div>
                <div className="trademark">
                    <div>This website was designed and devloped by Carter Murawski</div>
                </div>

            </footer>
        </div>
    )
};

