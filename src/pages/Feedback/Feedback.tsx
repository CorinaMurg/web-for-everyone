

import React from "react";
import { Link } from "react-router-dom";
import useDocTitle from "../../hooks/useDocTitle";
import useScrollToSection from "../../hooks/useScrollToSection"
import useScrollToTop from "../../hooks/useScrollToTop";
import A11yBanner from "../../components/A11yBanner/A11yBanner";
import styles from "./Feedback.module.css";
import "../../global.css";
import ExternalLink from "../../components/ExternalLink/ExternalLink";

export default function Feedback() {
    useDocTitle("Feedback | Web for Everyone");
    useScrollToTop();
    useScrollToSection();
    return (
        <div className={`${styles.feedback} feedback`}>
           
            <h1 className="article-heading-desktop">
                <span>Web for Everyone's</span>
                <span className="yellow-bg">Commitment to Accessibility</span>
            </h1>
            <h1 className="article-heading-mobile">
                <span>Web for Everyone's</span>
                <span>Commitment to </span>
                <span className="yellow-bg">Accessibility</span>
            </h1>
            <br />
            <A11yBanner />
            <br/>
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
                <span><strong>Contact</strong>:</span>
                <span className={styles['contact--email']}> corina.murg@gmail.com</span>
            </p>
            <p>
                ❤️ Thank you for helping us make the web accessible for everyone.
            </p>
        </div>
    )
}