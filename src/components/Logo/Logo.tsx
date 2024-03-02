import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

interface LogoTypes {
    color: string,
    fontWeight: number,
}

export default function Logo( { color, fontWeight }: LogoTypes ) {

    const logoColor = {
        color: color,
        fontWeight: fontWeight,
    }

    return (
        <Link className={styles['logo-link']} to="/">
            <div className={styles['logo-container']}>
                <img src="/assets/faviconDull.png" alt="" />
            </div>
            <span style={logoColor}>Web for Everyone</span>
        </Link>
    )
}