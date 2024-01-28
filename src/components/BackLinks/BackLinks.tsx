import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BackLinks.module.css';

export default function BackLinks ({secondLink, href}: {secondLink: string; href: string}) {
    return (
        <div className={`${styles['back-links']} scroll-target`} id="back-links">
            <Link to="/resources" className={`${styles['back-link']} hover-pink`}>
                <code>Resources</code>
            </Link>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            <Link to={href} className={`${styles['back-link']} hover-pink`}>
                <code>{secondLink}</code>
            </Link>
        </div>
    );
};

