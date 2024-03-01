import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BackLinks.module.css';

export interface BackLinksTypes {
    secondLink: string;
    href: string;
    current: string;
}

export default function BackLinks ({secondLink, href, current}: BackLinksTypes) {
    return (
        <nav aria-label="Breadcrumb" className={`${styles['back-links']}`} id="back-links">
            <ol>
                <li>
                    <Link to="/resources" className={`${styles['back-link']} hover-pink`}>
                        Resources
                    </Link>
                </li>
                <li>
                    <Link to={href} className={`${styles['back-link']} hover-pink`}>
                        {secondLink}
                    </Link>
                </li>
                <li>
                    <a aria-current="page" tabIndex={0}>
                        {current}
                    </a>
                </li>
            </ol>        
        </nav>
    );
};
