import React from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';
import styles from './Logo.module.css';

interface LogoTypes {
    color: string,
    fontWeight: number,
    closeModal?: () => void,
}

export default function Logo( { color, fontWeight, closeModal }: LogoTypes ) {

    const logoColor = {
        color: color,
        fontWeight: fontWeight,
    }

    return (
        <Link className={styles['logo-link']} 
            to="/"
            onClick={() => { useScrollToTop(); if (closeModal) {closeModal();}}}
        
        >
            <div className={styles['logo-container']}>
                <img src="/assets/faviconDull.png" alt="" />
            </div>
            <span style={logoColor}>Web for Everyone</span>
        </Link>
    )
}