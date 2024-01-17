import React from "react"
import { Link } from "react-router-dom"
import { useDocTitle } from "../../../hooks/useDocTitle"
import "./HowA11yWorks.css"

export default function MostCommonBugs() {
    useDocTitle("How Accessibility Works | Web for Everyone");    
    
    return (
        <div className="article-container commonbugs-container">
            <div className="back-links">
                <Link to="/resources" className="back-link hover-pink">Resources</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <Link to="/resources/#how-accessibility-works" className="back-link hover-pink">Understanding Accessibility</Link>
            </div>
            
            <h1>How Does <span className="yellow-bg">Accessibility</span> Work?</h1>
            <p className="subtitle">Assistive Tech <span className="plus-sign">+</span> Accessibility APIs <span className="plus-sign">+</span> Accessibility Tree</p>

            <section className="table-contents">
                <h2 className="heading blue-heading">Table of Contents</h2>
                <ul className="table-contents--list">
                    <li className="table-contents--list--item">
                        <a href="#" className="hover-pink">WebAIM Million Study</a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#low-contrast" className="hover-pink">Low Contrast Text</a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#alt-text" className="hover-pink">Missing Alternative Text for Images</a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#empty-links" className="hover-pink">Empty Links</a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#empty-buttons" className="hover-pink">Empty Buttons</a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#conclusion" className="hover-pink">Conclusion</a>
                    </li> 
                </ul>
            </section>
            
            <article className="article-content whatisa11y">
                 {/* *************0. INTRO********************** */}
                <section className="bug intro" id="intro">
                    <h2>In a Nutshell</h2>
                    <p>
                    The web browser parses the HTML, applies CSS, executes JavaScript, and creates the DOM tree. 
                    As part of the rendering process, the browser also builds the accessibility tree. It's a node
                    structure and a simplified version of the DOM tree focusing only on elements that need to be exposed 
                    to assistive technologies (AT) like screen readers or speech recognition software.
                    </p>
                    <p>
                    The accessible objects within the accessibility tree expose various states 
                    (like checked/unchecked for a checkbox or focused for a button), as well as their name. 
                    Assistive technologies use the browser's accessibility APIs to retrieve this information 
                    and present it to users. 
                    </p>
                </section>

                {/* *************1. ASSITIVE TECH********************** */}
                <section className="bug assistivetech" id="assistivetech">
                    <h2>Assistive Technologies</h2>
                    <p>
                    The goal of the accessibility tree is to represent the structure of a webpage in a way that is 
                    meaningful for users of assistive tech. This means that while the DOM tree represents the 
                    complete structure and content of the webpage, the accessibility tree focuses on what's necessary
                    for understanding and navigating the content through assistive technologies.
                    </p>
                    
                    
                </section>

                {/* *************2. A11Y TREE********************** */}
                <section className="bug a11ytree" id="a11ytree">
                    <h2>The Acccessibility Tree</h2>
                    <p>
                    The goal of the accessibility tree is to represent the structure of a webpage in a way that is 
                    meaningful for users of assistive tech. This means that while the DOM tree represents the 
                    complete structure and content of the webpage, the accessibility tree focuses on what's necessary
                    for understanding and navigating the content through assistive technologies.
                    </p>
                    
                    <p>
                    Each node in the tree is an accessible object. This is an object that needs to be exposed to 
                    assistive technologies. It represents either an actionable element, like a link or button, 
                    or an element that  provides information about the page content and structure, like a navbar 
                    or a heading.
                    </p>
                    <p className="white-bg">
                    The rest of the elements are marked as  "Ignored" and "generic" and … well, ignored. 
                    So a <code>&lt;span&gt;</code> or a <code>&lt;div&gt;</code> with purely decorative roles will not appear in the accessibility tree.
                    </p>
                </section>

                    
                

                {/* CONCLUSION */}
                <section className="bug conclusion">
                    <h2>Conclusion</h2>
                    <p>
                        We just looked at the most common accessibility bugs as reported by the WebAIM Million Study.
                        
                        Fortunately, these are also the easiest to fix!
                    </p>
                    <p>
                        Next, let's look at how to avoid or fix these bugs when building your portfolio site.
                        
                    </p>
                    
                    <div className="next-article">
                        <span className="fake-heading-p">Read next:</span>
                        <Link to="/resources/make-it-accessible" className="fake-heading-p pink-text">
                            Your Portfolio Site: Let's Make It Accessible!
                        </Link>
                    </div>
                    
                </section>

            </article>
            
        </div>
    )
}


