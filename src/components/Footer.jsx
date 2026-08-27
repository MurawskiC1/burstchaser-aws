import React from "react"
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer(props) {

    return (
        <div>
            <footer>
                <div className={styles.footer}>
                    <div className={styles.footerimage}>

                        <img src="/burst_chaser.png" />


                    </div>
                    <div className={styles.footer_text}>
                        <div className={styles.options_head}>
                            <h1>Burst Chaser</h1>
                            <p>A citizen science project aiming to
                                unveil the mysteries about the most
                                energetic explosions in the universe,
                                Gamma Ray Bursts.
                            </p>
                        </div >
                        <div className={styles.footer_options}>

                            <div className={styles.options_options}>
                                <Link to="/"><p>About</p></Link>
                                <Link to="data"><p>Explore</p></Link>
                                <Link to="download"><p>Download</p></Link>
                            </div>
                            <div className={styles.options_options}>

                                <a href="https://www.zooniverse.org/projects/amylien/burst-chaser/classify"><p>Classify Bursts</p></a >
                                <a href="https://www.zooniverse.org/projects/amylien/burst-chaser"><p>Zooniverse</p></a >
                                <p>Join Burst Chaser</p>

                            </div>
                            <div className={styles.options_options}>
                                <a href="mailto:murawskiC1C4@gmail.com"><p>Contact:</p></a>
                                <p>murawskiC1C4@gmail.com</p>

                            </div>



                        </div>
                        <div className={styles.partners}>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.trademark}>
                    <div>This website was designed and devloped by Carter Murawski</div>
                </div>

            </footer>
        </div>
    )
};

