
import React from "react"
import useDocTitle from "../../hooks/useDocTitle"
import useScrollToTop from "../../hooks/useScrollToTop"
import { Link } from "react-router-dom"
import styles from './NotFound.module.css'
import "../../global.css"

export default function NotFound() {
    useDocTitle("Page Not Found | Web for Everyone");

    return (
        <div className={`styles['not-found-container'] article-container`}>
            <h1>Oops! The page you were looking for is playing hard to get.</h1>
            <p>
                But, while we&apos;re here ... <span aria-hidden="true">😊</span>
            </p>
            <div className={styles['poet-question']}>
                <p>
                    Which 19th-century poet would have written these lines, had they been a web developer in the 21st century?
                </p>
                <div className={styles.quote}> 
                    <p>To be a Developer, is profound</p>
                    <p>Responsability.</p>
                </div>
            </div>
            
            <Link to="/" 
                className={styles['return-home-link']}
                onClick={() => { useScrollToTop(); }}
            >
                Return to Home
                <svg aria-hidden="true" id="arrow" width="28" height="28" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="17" cy="17" r="17" fill="currentColor"></circle>
                    <path d="M25.6563 18.2071C26.0469 17.8166 26.0469 17.1834 25.6563 16.7929L19.2924 10.4289C18.9018 10.0384 18.2687 10.0384 17.8782 10.4289C17.4876 10.8195 17.4876 11.4526 17.8782 11.8431L23.535 17.5L17.8782 23.1569C17.4876 23.5474 17.4876 24.1805 17.8782 24.5711C18.2687 24.9616 18.9018 24.9616 19.2924 24.5711L25.6563 18.2071ZM9.94922 18.5L24.9492 18.5L24.9492 16.5L9.94922 16.5L9.94922 18.5Z" fill="currentColor" transform="translate(-0.5,0)"></path>
                </svg>
                <svg aria-hidden="true" id="home" width="28" height="28" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" ><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                
            </Link>
        </div>
    )
}
