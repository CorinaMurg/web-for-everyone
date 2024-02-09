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
        href: "#aria-label-aria-labelledby",
        text: "aria-label vs. aria-labelledby",
        ariaLabel: "Compare aria-label and aria-labelledby",
    },
    {
        href: "#title-heading",
        text: "title vs heading",
        ariaLabel: "Compare title and heading",
    },
    {
        href: "#focus-focus-visible",
        text: "focus vs focus-visible",
        ariaLabel: "Compare focus and focus-visible",
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
            
            <div className={`article-content ${styles.similarButDifferent}`}>
                 {/* *************0. INTRO********************** */}
                <div className="section intro" id="intro">
                    <p>
                        In this article, we will compare similar terms from HTML and ARIA to see how they differ.
                    </p>
                </div>

                {/* *** ARIA-LABEL VS ARIA-LABELLEDBY */}
                <div className="section scroll-target" id="aria-label-aria-labelledby">
                    <h2 aria-label="Compare aria-label and aria-labelledby">
                        aria-label <span className={styles['versus-icon']}>⚔️</span> aria-labelledby
                    </h2>       
                    <p>
                        The attributes serve similar purposes. They both provide accessible names 
                        for elements, but in different ways.
                    </p>
                    <p>
                        <span className="pink-bg-white-text"><code>aria-label</code></span> takes a string value that becomes the name of 
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
                    
                    <p>
                        <span className="pink-bg-white-text"><code>aria-labelledby</code></span> references the ID of another element. The text of that 
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

                {/* **********TITLE VS HEADING************* */}
                <div className="section scroll-target" id="title-heading">
                    <h2 aria-label="Compare title and heading">
                        title <span className={styles['versus-icon']}>⚔️</span> heading
                    </h2>       
                    <div className="code">
                        <code><span className="code-blue-color">&lt;head&gt;</span></code>
                        <code className="padding-left-30">
                            <span className="code-yellow-color">&lt;title&gt;</span>
                            Similar but Different | Web for Everyone
                            <span className="code-yellow-color">&lt;/title&gt;</span>
                        </code>
                        <code><span className="code-blue-color">&lt;head&gt;</span></code>
                    </div>
                    <p>
                        They are both used to define the title of a webpage, but in different ways.
                    </p>
                    <p>
                        The <span className="pink-bg-white-text"><code>&lt;title&gt;</code></span> tag is used 
                        within the <span className="white-bg"><code>&lt;head&gt;</code></span> section of an HTML document. 
                        It defines the title of the document or webpage, but it's not visible in the main content 
                        area of the webpage. Instead, it's displayed in the browser's title bar or tab.
                    </p>
                    <p>
                        The title is important for accessibility as it is the first element that a screen reader will
                        announce about a page. It is also used by search engines to identify the page.
                    </p>
                    <p>
                        Headings are used within the <span className="white-bg"><code>&lt;body&gt;</code></span> of the HTML document and are represented by 
                        the <span className="pink-bg-white-text"><code>&lt;h1&gt;</code></span> through 
                        <span> </span><span className="pink-bg-white-text"><code>&lt;h6&gt;</code></span> tags. 
                        Headings are visible to the users and help them 
                        navigate through the content. They define the titles or subtitles we see on a page.
                    </p>
                    <p>
                        Screen reader users can use the <span className="pink-bg-white-text"><code>H</code></span> key to navigate through the headings to understand the structure and content of a 
                        webpage.
                    </p>
                </div>

                {/* **********FOCUS VS FOCUS-VISIBLE************* */}
                <div className="section scroll-target" id="focus-focus-visible">
                    <h2 aria-label="Compare focus and focus-visible">
                        focus <span className={styles['versus-icon']}>⚔️</span> focus-visible
                    </h2>     
                    <div className="code">
                        <code><span className="code-blue-color">button</span>:<span className="code-pink-color">focus-visible</span> &#123;</code>
                        <code className="padding-left-30"><span className="code-yellow-color">outline</span>: 3px dashed black;</code>
                        <code className="padding-left-30"><span className="code-yellow-color">outline-offset</span>: 2px;</code>
                        <code>&#125;</code>   
                    </div>
                    <p>
                        Both are pseudo-classes used to style elements that are focused, but one is smarter than the other.
                    </p>
                    <p className="white-bg">
                        Let's talk first about the browser's <strong>default focus styles</strong>!
                    </p>
                    <p>
                        Browsers apply default focus styles in two scenarios:
                    </p>
                    <p className="bullet-point-line">
                        when elements are focused via keyboard navigation, regardless of the type of 
                        element (button, link, input, etc.)
                    </p>
                    <p className="bullet-point-line">
                        when it is beneficial to the user, regardless of navigation method. For example,
                        for a mouse user it's helpful to see the focus when clicking on an input field, 
                        but there is no added value from it when clicking on a link.
                    </p>
                    <p>
                        This behavior is designed to aid accessibility for keyboard 
                        users and improve user experience for all visitors, without cluttering the interface 
                        for mouse users.
                    </p>

                    <p>
                        When you override the default focus styles using 
                        the <code className="pink-bg-white-text">:focus</code> pseudo-class, your custom styles will apply to all 
                        focus events, regardless of how they were triggered (mouse click or keyboard 
                        navigation). 
                    </p>

                    <p>
                        <code className="pink-bg-white-text">:focus-visible</code> mimics the default browser behavior 
                        when it comes to applying focus styles. It applies to elements reached via keyboard
                        and to certain elements reached via mouse click. So smart!
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




