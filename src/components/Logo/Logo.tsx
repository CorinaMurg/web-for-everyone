import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import useScrollToTop from '../../hooks/useScrollToTop';
import styles from './Logo.module.css';

interface LogoTypes {
    theme?: string,
    color?: string,
    fontWeight?: any,
    closeModal?: () => void,
}

export default function Logo( { theme, color, fontWeight, closeModal }: LogoTypes ) {

    const logoColor = {
        color: color || theme === 'dark' ? 'var(--cream-color)' : 'var(--text-nav-color)',
        fontWeight: fontWeight || theme === 'dark' ? 400 : 600
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