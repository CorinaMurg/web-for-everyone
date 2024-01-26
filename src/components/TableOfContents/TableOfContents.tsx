
import React from 'react';
import PropTypes from 'prop-types';
import styles from './TableOfContents.module.css';
import "../../global.css"

export default function TableOfContents ({ contents }) {
    return (
        <div className={styles['table-contents']}>
            <h2 className={styles['table-contents--heading']}>
                <code>Table of Contents</code>
            </h2>
            <ul className={styles['table-contents--list']}>
                {contents.map((item, index) => (
                <li key={index} className={styles['table-contents--list--item']}>
                    <a  href={item.href} 
                        className={`hover-pink ${item.className ? item.className : ''}`}
                        {...(item.ariaLabel ? { 'aria-label': item.ariaLabel } : {})}
                    >
                        <code>{item.text}</code>
                    </a>
                </li>
                ))}
            </ul>
        </div>
    );
};

TableOfContents.propTypes = {
    contents: PropTypes.arrayOf(
        PropTypes.shape({
        href: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        ariaLabel: PropTypes.string,
        className: PropTypes.string,
        })
    ).isRequired,
};


