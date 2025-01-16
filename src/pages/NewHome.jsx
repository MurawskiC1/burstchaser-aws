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
                        Burst Chaser is a citizen science project hosted on <a className="homelink" href="https://www.zooniverse.org/projects/amylien/burst-chaser">Zooniverse</a> that invites volunteers to help astronomers classify pulse structures of gamma-ray bursts (GRBs).
                        GRBs are one of the most energetic explosions in the universe.
                        These extraordinary events likely originate from either the death of massive stars, or the merging of neutron stars and black holes.
                        Classifying pulse structures help astronomers explore the mysterious origin of these events.

                    </div>

                </div>

            </div>
            <div className="info-slide">

                <div className="what">
                    <div className="writing">
                        Thanks to the help from 3,350 volunteers, we now have 56,000 classifications.
                        They can be found on the Explore page and Downloaded on the Download page.

                    </div>
                    <div>
                        <img className="visual" src="/BurstPhotos/GRB041223_100585.png" />
                    </div>

                </div>

            </div>
            <div className="info-slide">

                <div className="what">


                    <div className="writing">
                        The Burst Chaser program is carried out by students and faculty at the University of Tampa,
                        many dedicated NASA volunteers, and collaborators from NASA Goddard Space Flight Center,
                        University of Nevada, Las Vegas, University of Rome, The University of Alabama in Huntsville,
                        Louisiana State University, and George Washington University. See our team member on
                        <a className="homelink" href="https://www.zooniverse.org/projects/amylien/burst-chaser/about/team"> Zooniverse</a>.


                    </div>
                    <div>
                        <img className="visual" src="/StarySky.jpeg" />
                    </div>

                </div>

            </div>


        </div >
    )
};

