import React, { useState } from 'react';
import { Link } from 'react-router-dom';


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
        <nav className='navbar'>


            <Link className="nav_title" to='/' onClick={handleLinkClick}>
                <img className="nav_img" src="../public/burst_chaser.png" />
                <h1 className="company">Burst Chaser</h1>
            </Link>
            {/* Hamburger menu icon */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className={`bar ${showMenu ? 'active' : ''}`}></div>
                <div className={`bar ${showMenu ? 'active' : ''}`}></div>
                <div className={`bar ${showMenu ? 'active' : ''}`}></div>
            </div>
            <ul className={`menu ${showMenu ? 'active' : ''}`}>
                <li>
                    <Link to="/" onClick={handleLinkClick}>
                        <h2 className="navbar-buttons">Home</h2>
                    </Link>
                </li>
                <li>
                    <Link to="data" onClick={handleLinkClick}>
                        <h2 className="navbar-buttons">Explore</h2>
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
                        <h2 className="navbar-buttons">Download</h2>
                    </Link>
                </li>


            </ul>
        </nav>
    );
}


