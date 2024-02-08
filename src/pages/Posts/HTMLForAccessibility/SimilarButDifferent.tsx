import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import scrollToTop from "../../../utils/scrollToTop"
import useDocTitle from "../../../hooks/useDocTitle"
import useScrollToSection from "../../../hooks/useScrollToSection"
import scrollToSection from "../../../utils/scrollToSection"
import styles from "./SimilarButDifferent.module.css"
import "../../../global.css"
import TableOfContents from "../../../components/TableOfContents/TableOfContents"
import BackLinks from "../../../components/BackLinks/BackLinks"

const contents = [
    {
        href: "#aria-label",
        text: "aria-label vs. aria-labelledby",
        ariaLabel: "Compare aria-label and aria-labelledby",
    },
    {
        href: "#the-practical-reasons-for-accessibility",
        text: "The Practical Reasons for Accessibility"
    },
    {
        href: "#web-access-is-everyone's-right",
        text: "Web Access is Everyone's Right"
    },
    {
        href: "#next-steps",
        text: "Next Steps"
    },
]

export default function SimilarButDifferent() {
    useDocTitle("Similar but Different | Web for Everyone");    
    useScrollToSection();

    
    return (
        <div className={`article-container ${styles['commonbugs-container']}`}>
            <BackLinks 
                secondLink="HTML for Accessibility"
                href="/resources#html-for-accessibility" 
            />
            
            <h1 className="article-heading">
                <span>Similar, but Different:</span>
                <span className="yellow-bg">HTML and ARIA Terms</span>
            </h1>
            <p className="subtitle">Matching terms agaist each other to see how they differ</p>

            <TableOfContents contents={contents} />
            
            <div className="article-content commonbugs">
                 {/* *************0. INTRO********************** */}
                <div className="section intro" id="intro">
                    <p>
                        In this article, we will compare similar terms from HTML and ARIA to see how they differ.

                    </p>
                </div>

                {/* *** ARIA-LABEL VS ARIA-LABELLEDBY */}
                <div className="section scroll-target" id="aria-label">
                    <h2 aria-label="Compare aria-label and aria-labelledby">
                        aria-label <span className={styles['versus-icon']}>⚔️</span> aria-labelledby
                    </h2>       
                    <p>
                        The attributes serve similar purposes. They both provide accessible names 
                        for elements, but in different ways.
                    </p>
                    <p className="white-bg">
                        <code>aria-label</code> takes a string value that becomes the name of 
                        the element. It is added to the opening tag of the element.
                    </p>
                    <div className="code">
                        <code>
                            <span className="code-blue-color">&lt;button</span> <span className="code-yellow-color"> aria-label</span>="closeModal"
                            <span className="code-blue-color">&gt;</span>
                        </code>
                        <code className="padding-left-30">
                            <span className="code-blue-color">&lt;img </span> 
                            src="x-mark.svg"
                            <span className="code-blue-color">/&gt;</span>
                        </code>
                        <code><span className="code-blue-color">&lt;/button&gt;</span></code>
                    </div>
                    
                    <p className="white-bg">
                        <code>aria-labelledby</code> references the ID of another element. The text of that 
                        element now becomes the name of the current element. 
                    </p>
                    <p>
                        It can be used to reference multiple IDs, providing a way to concatenate 
                        names from different elements.
                    </p>
                    
                    <div className="code">
                        <code>
                            <span className="code-blue-color">&lt;h2</span> 
                            <span className="code-yellow-color"> id</span>="table-contents"&gt;Table of Contents
                            <span className="code-blue-color">&lt;h2&gt;</span>
                        </code>
                        <br/>
                        <code>
                            <span className="code-blue-color">&lt;nav</span> 
                            <span className="code-yellow-color"> aria-labelledby</span>="table-of-contents"
                            <span className="code-blue-color">&gt;</span>
                        </code>
                        <code className="padding-left-30">
                            // table of contents links 
                        </code>
                        <code>
                            <span className="code-blue-color">&lt;/nav&gt;</span>
                        </code>
                    </div>
                    <p>
                        A screen reader user can navigate
                        through the landmarks (i.e. the main sections of a page) by pressing 
                        the <span className="pink-bg-white-text">D</span> key.
                        The code above creates a navigation landmark with a table of contents.
                        
                    </p>
                    <p className="white-bg">
                        Your <strong>navbar</strong> and <strong>header</strong> are examples 
                        of built-in landmarks. 
                        Screen readers will announce them as "navigation" and "banner" respectively. 
                        They don't require a name since they are unique landmarks and users 
                        recognize them by their roles. 
                    </p>
                    <p className=" white-bg">     
                        But, if you need a second navigation landmark, like in our example, 
                        then you must assign to each a unique name, either 
                        with <strong>aria-labelledby</strong> or <strong>aria-label</strong>. 
                        For a custom landmark, use the <code>&lt;section&gt;</code> tag.
                    </p>
                    
                    <h3>Key Differences</h3>      
                    <p>
                        <strong className="yellow-bg-dark-text">Direct vs. Indirect Labeling</strong>  
                    </p>
                    <p className="bullet-point-line">
                        <strong>aria-label</strong> provides a direct label to an element using a 
                        string value.
                    </p>
                    <p className="bullet-point-line">
                        <strong>aria-labelledby</strong> provides an indirect label by referencing content
                        available on the page.
                    </p>
                    <p >
                        <strong className="yellow-bg-dark-text">Visibility</strong>
                    </p>
                    <p className="bullet-point-line white-bg">
                        <strong>aria-label</strong> is not visually displayed; 
                        it's only announced by screen readers. 
                    </p>
                    <p className="bullet-point-line white-bg">
                        <strong>aria-labelledby</strong> references elements that are usually visible on 
                        the page. It is also announced by screen readers. 
                    </p>
                    <p>
                        <strong className="yellow-bg-dark-text">Concatenation</strong>
                    </p>
                    <p className="bullet-point-line">
                        While <strong>aria-label</strong> takes a single string, 
                        <strong> aria-labelledby</strong> can reference multiple IDs, allowing for 
                        the concatenation of text from various elements.
                    </p>
                </div>               

                

                {/* CONCLUSION */}
                <div className="section conclusion scroll-target" id="conclusion">
                    <h2>Conclusion</h2>
                    <p>
                        We just looked at the most common accessibility bugs as reported by the WebAIM Million Study.
                        Fortunately, these are also the easiest to fix!
                    </p>
                    <p>
                        Next, let's look at how to avoid or fix these bugs when building your portfolio site.
                    </p>
                    
                    <div className="next-article">
                        <span className="read-next">Read next:</span>
                        <Link to="/resources/make-it-accessible-part1" 
                                onClick={() => { scrollToTop() }}
                        >
                            Let's Make It Accessible! Part One: Finding the 6 Most Common Bugs
                        </Link>
                    </div>                 
                </div>
            </div>          
        </div>
    )
}


