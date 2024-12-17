import React from "react"

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
                        <button onClick={scrollDown}>About</button>
                        <button>Explore</button>
                        <button>Download</button>
                    </div>

                </div>

            </div>
            <div className="slide">

                <div className="what">
                    <div className="visual">

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


        </div>
    )
};

