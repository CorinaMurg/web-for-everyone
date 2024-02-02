import React from 'react';
import './WELogo.css';

export default function WELogo({ size = '1rem', weight = "600" }) {
    const style = { fontSize: size, fontWeight: weight};

    return (
        <div className="logo-we">
            <span className="logo-w" style={style}>W</span>
            <span className="logo-e" style={style}>E</span>
        </div>
    );
}

