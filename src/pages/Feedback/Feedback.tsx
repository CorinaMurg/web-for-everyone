

import React from "react";
import { Link } from "react-router-dom";
import useDocTitle from "../../hooks/useDocTitle";
import useScrollToSection from "../../hooks/useScrollToSection"
import useScrollToTop from "../../hooks/useScrollToTop";
import styles from "./Feedback.module.css";
import "../../global.css";
import ExternalLink from "../../components/ExternalLink/ExternalLink";

export default function Feedback() {
    useDocTitle("Feedback | Web for Everyone");
    useScrollToTop();
    useScrollToSection();
    return (
        <div className={styles.feedback}>
            <div className={styles['feedback--svg']}>         
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512" >
                    <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm161.5-86.1c-12.2-5.2-26.3 .4-31.5 12.6s.4 26.3 12.6 31.5l11.9 5.1c17.3 7.4 35.2 12.9 53.6 16.3v50.1c0 4.3-.7 8.6-2.1 12.6l-28.7 86.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l24.4-73.2c1.3-3.8 4.8-6.4 8.8-6.4s7.6 2.6 8.8 6.4l24.4 73.2c4.2 12.6 17.8 19.4 30.4 15.2s19.4-17.8 15.2-30.4l-28.7-86.1c-1.4-4.1-2.1-8.3-2.1-12.6V235.5c18.4-3.5 36.3-8.9 53.6-16.3l11.9-5.1c12.2-5.2 17.8-19.3 12.6-31.5s-19.3-17.8-31.5-12.6L338.7 175c-26.1 11.2-54.2 17-82.7 17s-56.5-5.8-82.7-17l-11.9-5.1zM256 160a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                </svg>             
            </div>
            <h1 className="article-heading-desktop">
                <span>Web for Everyone's</span>
                <span className="yellow-bg">Commitment to Accessibility</span>
            </h1>
            <h1 className="article-heading-mobile">
                <span>Web for Everyone's</span>
                <span>Commitment to </span>
                <span className="yellow-bg">Accessibility</span>
            </h1>
            <p>
                We value accessibility. We are building this website with everyone in mind,
                and follow the <span> </span>
                <ExternalLink
                    href="https://www.w3.org/WAI/standards-guidelines/wcag/"
                    visibleText="Web Content Accessibility Guidelines (WCAG) 2.1"
                /> <span> </span>
                to make sure every visitor feels welcome.

            </p>
            <h2>
                Reporting Accessibility Issues
            </h2>
            <p>
                If you experience accessibility barriers or notice any bugs while using our website, 
                please let us know. Your feedback is valuable in helping us improve our site's accessibility. 
            </p>
            <p>
                Please include a description of the issue, the page URL, or any relevant details. 
            </p>
            <p className={styles.contact}>
                <strong>Contact</strong>:
                <span className={styles['contact--email']}> info@webforeveryone.us</span>
            </p>
            <p>
                ❤️ Thank you for helping us make the web accessible for everyone.
            </p>
        </div>
    )
}