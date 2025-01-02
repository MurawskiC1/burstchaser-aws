import React from "react"
import { Link } from "react-router-dom";
export default function NewHome(props) {
    const scrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,       // Scroll 500px down
            left: 0,        // No horizontal scroll
            behavior: "smooth"   // Smooth scroll animation
        });
    };
    return (
        <div >
            <div className="slide">

                <div className="welcome">

                    <h2>Welcome to Burst Chaser</h2>
                    <div className="welcomeButton">
                        <Link  > <button className="welcomeButtonbutton" onClick={scrollDown}>About</button></Link>
                        <Link to="data"> <button className="welcomeButtonbutton">Explore</button></Link>
                        <Link to="download"><button className="welcomeButtonbutton">Download</button></Link>
                    </div>

                </div>

            </div>
            <div className="info-slide">

                <div className="what">
                    <div >
                        <img className="visual" src="/Nebula.jpg" />
                    </div>

                    <div className="writing">
                        Burst Chaser is a citizen science project that aims to aid
                        scientist in the classification of Gamma Ray Bursts(GRBS).
                        By using those without bias of exploring scientist we will be
                        able to find new ways to look at already exsistant
                        light curves.

                    </div>

                </div>

            </div>
            <div className="info-slide">

                <div className="what">


                    <div className="writing">
                        This could be a slide about how we classify the burst and show
                        an example of a light curve so people know
                        what they are looking at.

                    </div>
                    <div>
                        <img className="visual" src="/BurstPhotos/GRB041223_100585.png" />
                    </div>

                </div>

            </div>
            <div className="info-slide">

                <div className="what">


                    <div className="writing">
                        Definity need a slide explaining how cool the team is.


                    </div>
                    <div>
                        <img className="visual" src="/StarySky.jpeg" />
                    </div>

                </div>

            </div>


        </div >
    )
};

