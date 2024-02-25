import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BackLinks.module.css';

export default function BackLinks ({secondLink, href, current}: {secondLink: string; href: string; current: string;}) {
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
