import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BackLinks.module.css';

export default function BackLinks ({secondLink, href, current}: {secondLink: string; href: string; current: string;}) {
    return (
        <nav aria-label="Breadcrumb" className={`${styles['back-links']} scroll-target`} id="back-links">
            <ol>
                <li>
                    <Link to="/resources" className={`${styles['back-link']} hover-pink`}>
                        <code>Resources</code>
                    </Link>
                </li>
                <li>
                    <Link to={href} className={`${styles['back-link']} hover-pink`}>
                        <code>{secondLink}</code>
                    </Link>
                </li>
                <li>
                    <a href="" aria-current="page">
                        <code>{current}</code>
                    </a>
                </li>
            </ol>        
        </nav>
    );
};

{/* <svg
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
             */}