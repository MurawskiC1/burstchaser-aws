import React from "react"
import { useEffect, useState } from 'react';

export default function Footer(props) {
    const [footerVisible, setFooterVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const hoverAreaHeight = 10; // The height of the area at the bottom where hover triggers the footer
            if (window.innerHeight - event.clientY <= hoverAreaHeight) {
                setFooterVisible(true);
            } else {
                setFooterVisible(false);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div>
            <footer className={`footer ${footerVisible ? 'visible' : ''}`}>
                <p>This is the footer content.</p>
            </footer>
        </div>
    )
};

