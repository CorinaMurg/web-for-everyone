import React from "react"
import { Link } from "react-router-dom"
import scrollToTop from "../utils/scrollToTop"
import useDocTitle from "../hooks/useDocTitle"
import useScrollToSection from "../hooks/useScrollToSection"
import "../global.css"
import styles from "./YourUsers.module.css"
import TableOfContents from "../components/TableOfContents/TableOfContents"
import WarningTriangle from "../components/WarningTriangle"

const contents = [
    {
        href: "#",
        text: "Introduction",
    },
    {
        href: "#keyboard-only",
        text: "Keyboard-Only Navigation",
    },
    {
        href: "#the-alt-attribute-for-images",
        text: "The 'alt' Attribute for Images",
    },
    {
        href: "#links-with-discernable-text",
        text: "Links with Discernable Text",
    },
    {
        href: "#buttons-with-discernable-text",
        text: "Buttons with Discernable Text",
    },
    {
        href: "#labels-for-inputs",
        text: "Labels for Inputs",
    },
    {
        href: "#the-language-attribute",
        text: "The Language Attribute",
    },
    {
        href: "#conclusion",
        text: "Conclusion",
    },
]

export default function YourUsers() {
    useDocTitle("Your Users | Web for Everyone");
    useScrollToSection();
    
    return (
        <div className={`article-container ${styles['yourUsers-container']}`}>
            
            <h1><span className="yellow-bg">Understanding</span> your users</h1>
            <p className="subtitle">The Variety of Ways Visitors Interact with the Web</p>

            {/* **************Table of Contents********************** */}
            <TableOfContents contents={contents} />

            {/* **************Article Content********************** */}
            <div className="article-content yourUsers">
                <div className="section intro">
                    <p>
                        As a web developer, you are responsible for creating a digital space that is accessible to 
                        all users. 
                        To do that, you need to understand how different users interact with your site.
                    </p>

                    <p>
                        In this article, we will explore the ways visitors interact with your site, and how you can 
                        make it accessible to everyone.
                    </p>
                </div>

                {/* ****************KEYBOARD ONLY************************* */}
                <div className={`section ${styles['beyboard']} scroll-target`} id="keyboard-only">
                    <div className="section-heading" >
                        <span className="section-number">01</span>
                        <h2>
                            Keyboard-only Navigation
                        </h2>
                    </div>
                    <p>
                        Users with low vision can struggle with perceiving contrast, and
                        reading can be challenging when the text color doesn't stand out much from the 
                        background.
                    </p>
                    
                </div>

                {/* ****************SPEECH RECOGNITION************************* */}
                <div className="section speech scroll-target" id="speech-recognition">
                    <div className="section-heading">
                        <span className="section-number">02</span>
                        <h2>Speech Commands</h2>
                    </div>
                </div>

                {/* ****************POINTERS************************* */}
                <div className="section pointers scroll-target" id="links-with-discernable-text">
                    <div className="section-heading">
                        <span className="section-number">03</span>
                        <h2>Pointers</h2>
                    </div>
                    
                    <p>
                        You have to be careful with your social media links. 
                        If they are coded like the example above, they are not accessible.
                    </p>
                    
                </div>

                    
                {/* ****************CONCLUSION************************* */}
                <div className="section conclusion scroll-target" id="conclusion">
                    <h2>Conclusion</h2>
                    <p>
                        Congratulations! You are now familiar with the 6 most common 
                        accessibility issues, and techniques to avoid them in your portfolio site.
                    </p>
                    <p>
                        Ready to continue your accessibility bug hunt?
                    </p>
                    <p>
                        Let's find the other 6 easy-to-fix bugs!
                    </p>
                    
                    <div className="next-article margin-top-30">
                        <span className="read-next">Read next:</span>
                        <Link to="/resources/make-it-accessible-part2" 
                                onClick={() => { scrollToTop() }}
                        >
                            Let's Make It Accessible! Part 2: On the Hunt for 6 More Bugs
                        </Link>
                    </div>
                </div>

            </div>
        </div>    
    )
}