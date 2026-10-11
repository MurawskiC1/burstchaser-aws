import React from "react"
import styles from './Home.module.css';
import { Link } from "react-router-dom";
export default function Home(props) {
    const scrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,       // Scroll 500px down
            left: 0,        // No horizontal scroll
            behavior: "smooth"   // Smooth scroll animation
        });
    };
    return (
        <div >
            <div className={styles.slide}>

                <div className={styles.welcome}>

                    <h2>Welcome to Burst Chaser</h2>
                    <div className={styles.welcomeButton}>
                        <Link  > <button className={styles.welcomeButtonbutton} onClick={scrollDown}>About</button></Link>
                        <Link to="data"> <button className={styles.welcomeButtonbutton}>Explore</button></Link>
                        <Link to="download"><button className={styles.welcomeButtonbutton}>Download</button></Link>
                    </div>

                </div>

            </div>
            <div className={styles.infoSlide}>

                <div className={styles.what}>
                    <div >
                        <img className={styles.visual} src="/Nebula.jpg" />
                    </div>

                    <div className={styles.writing}>
                        Burst Chaser is a citizen science project hosted on <a className={styles.homelink} href="https://www.zooniverse.org/projects/amylien/burst-chaser">Zooniverse</a> that invites volunteers to help astronomers classify pulse structures of gamma-ray bursts (GRBs).
                        GRBs are one of the most energetic explosions in the universe.
                        These extraordinary events likely originate from either the death of massive stars, or the merging of neutron stars and black holes.
                        Classifying pulse structures help astronomers explore the mysterious origin of these events.

                    </div>

                </div>

            </div>
            <div className={styles.infoSlide}>

                <div className={styles.what}>
                    <div className={styles.writing}>
                        Thanks to the help from 6,270 volunteers, we now have over 400,000 classifications!
                        They can be found on the Explore page and Downloaded on the Download page.

                    </div>
                    <div>
                        <img className={styles.visual} src="/BurstPhotos/GRB041223_100585.png" />
                    </div>

                </div>

            </div>
            <div className={styles.infoSlide}>

                <div className={styles.what}>


                    <div className={styles.writing}>
                        The Burst Chaser program is carried out by students and faculty at the University of Tampa,
                        many dedicated NASA volunteers, and collaborators from NASA Goddard Space Flight Center,
                        University of Nevada, Las Vegas, University of Rome, The University of Alabama in Huntsville,
                        Louisiana State University, and George Washington University. See our team members on
                        <a className={styles.homelink} href="https://www.zooniverse.org/projects/amylien/burst-chaser/about/team"> Zooniverse</a>.


                    </div>
                    <div>
                        <img className={styles.visual} src="/StarySky.jpeg" />
                    </div>

                </div>

            </div>


        </div >
    )
};

