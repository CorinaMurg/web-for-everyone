import React from 'react';
import './WELogo.css';

export default function WELogo({ size = '1rem' }) {
    const style = { fontSize: size };

    return (
        <div className="logo-we">
            <span className="logo-w" style={style}>W</span>
            <span className="logo-e" style={style}>E</span>
        </div>
    );
}

