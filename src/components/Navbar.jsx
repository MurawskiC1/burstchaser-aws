import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';


export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false); // State to manage menu visibility

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    // Function to handle link click and hide menu
    const handleLinkClick = () => {
        setShowMenu(false);
    };

    return (
        //create the navbar
        <nav className={styles.navbar}>


            <Link className={styles.nav_title} to='/' onClick={handleLinkClick}>
                <img className={styles.nav_img} src="/burst_chaser.png" />
                <h1 className={styles.company}>Burst Chaser</h1>
            </Link>
            {/* Hamburger menu icon */}
            <div className={styles.hamburger_menu} onClick={toggleMenu}>
                <div className={`${styles.bar} ${showMenu ? styles.active : ''}`}></div>
                <div className={`${styles.bar} ${showMenu ? styles.active : ''}`}></div>
                <div className={`${styles.bar} ${showMenu ? styles.active : ''}`}></div>
            </div>
            <ul className={`${styles.menu} ${showMenu ? styles.active : ''}`}>
                <li>
                    <Link to="/" onClick={handleLinkClick}>
                        <h2 className={styles.navbar_buttons}>Home</h2>
                    </Link>
                </li>
                <li>
                    <Link to="data" onClick={handleLinkClick}>
                        <h2 className={styles.navbar_buttons}>Explore</h2>
                    </Link>
                </li>
                {/*
                <li>
                    <Link to="classify" onClick={handleLinkClick}>
                        <h2 className="navbar-buttons">Classify</h2>
                    </Link>
                </li>
                */}
                <li>
                    <Link to="download" onClick={handleLinkClick}>
                        <h2 className={styles.navbar_buttons}>Download</h2>
                    </Link>
                </li>


            </ul>
        </nav>
    );
}


