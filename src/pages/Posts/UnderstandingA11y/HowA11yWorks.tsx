import React from "react"
import { Link } from "react-router-dom"
import { useDocTitle } from "../../../hooks/useDocTitle"
import "./HowA11yWorks.css"
import "../../../global.css"


export default function MostCommonBugs() {
    useDocTitle("How Accessibility Works | Web for Everyone");    
    
    return (
        <div className="article-container commonbugs-container">
            <div className="back-links">
                <Link to="/resources" className="back-link hover-pink">Resources</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <Link to="/resources/#how-accessibility-works" className="back-link hover-pink">Understanding Accessibility</Link>
            </div>
            
            <h1>How <span className="yellow-bg">Accessibility</span> works</h1>
            <p className="subtitle">The Role of the Accessibility Tree</p>

            <section className="table-contents">
                <h2 className="table-contents--heading">Table of Contents</h2>
                <ul className="table-contents--list">
                    <li className="table-contents--list--item">
                        <a href="#" className="hover-pink">The accessibility tree</a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#low-contrast" className="hover-pink">The accessible name</a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#alt-text" className="hover-pink">Assistive teachnologies</a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#empty-links" className="hover-pink">Accessibility APIs</a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#conclusion" className="hover-pink">Conclusion</a>
                    </li> 
                </ul>
            </section>
            
            <article className="article-content whatisa11y">
                {/* *************0. INTRO********************** */}
                <section className="bug intro" id="intro">
                    <h2 aria-label="In a Nutshell: How Accessibility works">In a Nutshell</h2>
                    <p className="fake-list-item"> 
                        As part of the rendering process, the browser builds the accessibility tree, a simplified 
                        version of the DOM tree. The <strong>accessibility tree focuses only on elements that 
                        need to be exposed to assistive technologies </strong> 
                        like screen readers and speech recognition software. 
                    </p>
                    <p className="fake-list-item">
                        When triggered, assistive technologies use the browser's accessibility APIs to retrieve information 
                        from the accessibility tree and present it to users. 
                    </p>
                </section>


                {/* *************2. A11Y TREE********************** */}
                <section className="bug a11ytree" id="a11ytree">
                    <h2>The Acccessibility Tree</h2>
                    {/* <p>
                        While the DOM tree represents the complete structure and content of the webpage, 
                        the accessibility tree focuses on what's necessary
                        for understanding and navigating the content through assistive technologies.
                    </p>
                     */}
                    <div className="flex-column">
                        <p>
                            Each node in the tree is an accessible object. It represents either 
                        </p>
                        <p className="fake-list-item white-bg">
                            an actionable element, like a <code>link</code> or <code>button</code>, or
                        </p>
                        <p className="fake-list-item white-bg">
                            an element that  provides information about the page content and structure, 
                            like a <code>navbar</code> or a <code>heading</code>.
                        </p>
                    </div>
                    
                    <p className="white-bg">
                        The rest of the elements are ignored. 
                        For example, a <code>&lt;span&gt;</code> or a <code>&lt;div&gt;</code> with purely decorative 
                        role will not appear in the accessibility tree.
                    </p>

                    <h3>DOM tree vs. Accessibility tree</h3>
                    <p> 
                        Let's take the navbar component of this site and compare its representation in the DOM 
                        and the accessibility trees.
                        
                    </p>

                    <strong>DOM tree</strong>
                    <div className="code a11ytree-code">
                        <code className="pink-text">&lt;nav&gt;</code>
                        <code className="padding-left-30">&lt;ul&gt;</code>
                        <code className="padding-left-60">&lt;li&gt;&lt;a&gt;<span className="blue-text">Home</span>&lt;/a&gt;&lt;/li&gt;</code>
                        <code className="padding-left-60">&lt;li&gt;&lt;a&gt;<span className="blue-text">Your Users</span>&lt;/a&gt;&lt;/li&gt;</code>
                        <code className="padding-left-60">&lt;li&gt;&lt;a&gt;<span className="blue-text">Resources</span>&lt;/a&gt;&lt;/li&gt;</code>
                        <code className="padding-left-60">&lt;li&gt;&lt;a&gt;<span className="blue-text">About</span>&lt;/a&gt;&lt;/li&gt;</code>
                        <code className="padding-left-30">&lt;/ul&gt;</code>
                        <code className="pink-text">&lt;/nav&gt;</code>

                    </div>

                    <strong>Accessibility tree</strong>
                    <div className="code a11ytree-code">
                        <code className="pink-text">navigation</code>
                        <code className="padding-left-30">list</code>
                        <code className="padding-left-60">listitem</code>
                        <code className="padding-left-90">link "<span className="blue-text">Home</span>" 
                            <span> </span>
                            <span className="blue-text">focusable</span>: true <span className="blue-text">focused</span>: true
                        </code>
                        <code className="padding-left-120">StaticText "Home"</code>

                        <code className="padding-left-60">listitem</code>
                        <code className="padding-left-90">link "<span className="blue-text">Your Users</span>"
                            <span> </span>
                            <span className="blue-text">focusable</span>: true
                        </code>
                        <code className="padding-left-120">StaticText "Your Users"</code>

                        <code className="padding-left-60">listitem</code>
                        <code className="padding-left-90">link "<span className="blue-text">Resources</span>"
                            <span> </span>
                            <span className="blue-text">focusable</span>: true
                        </code>
                        <code className="padding-left-120">StaticText "Resources"</code>
                        <code className="padding-left-60">listitem</code>
                        <code className="padding-left-90">link "<span className="blue-text">About</span>"
                            <span> </span>
                            <span className="blue-text">focusable</span>: true
                        </code>
                        <code className="padding-left-120">StaticText "About"</code>
                    </div>
                    <div>
                        <p>
                            While the DOM tree is structured by HTML tags/elements, <strong>the accessibility tree is 
                            structured by roles</strong>.
                            For each item in the accessibility tree, its role matches the function of its HTML tag.
                        </p>
                             
                        <p>
                            For example:
                        </p>
                        <p className="fake-list-item white-bg">
                            the <code>navigation</code> role goes with <code>&lt;nav&gt;</code>
                        </p>
                      
                        <p className="fake-list-item white-bg">
                            the <code>list</code> role goes with <code>&lt;ul&gt;</code> 
                        </p>
                        <p className="fake-list-item white-bg">
                            the <code>link</code> role goes with <code>&lt;a&gt;</code> 
                        </p>
                    </div>
                    
                    <strong>How does the browser know what role to assign to a given tag?</strong>
                    <p>
                        Each role in the example above is implicit. It's built in the definition of the
                        semantic HTML tag, 
                        and it is automatically assigned by the browser when the accessibility tree is built.
                        This is one of the reasons why using semantic HTML is so important.
                    </p>

                    {/* <p>
                        We can also explicitly assign a role to an element using ARIA (Accessible Rich Internet Applications) attributes.
                    </p> */}
                        
                    

                    <h3>Zooming in on an accessible object</h3>
                    <p>
                        Let's take a closer look at the first list item within the navigation list:
                    </p>

                    


                    <div>
                        <p>
                            The accessibility tree contains information about the item's name, role, properties, and states:
                        </p>
                        <ul>
                            <li>
                                name: Home
                            </li>
                            <li>
                                role: link
                            </li>
                            
                            <li>
                                property: focusable
                            </li>
                            <li>
                                state: focused
                            </li>
                        </ul>
                    </div>
                    
                    <strong>How is this information useful?</strong>
                    
                    <p className="white-bg">
                        We have an actionable element, a link, with the name "Home". For a keyboard user, 
                        this means that they can navigate to it by pressing the <code>Tab</code> key, and activate it by 
                        pressing <code>Enter</code>. 
                    </p>
                    <p>
                        At the time of this snapshot, the link was in focus, which means that it was
                        highlighted and ready to be activated. 
                    </p>
                    <p>
                        Each assitive technology will use the information from the accessibility tree to present the 
                        object to the user in the most appropriate way.
                    </p>
                    
                    <p>
                        A screen reader will announce it as "Home link".
                        A speech recognition software will recognize it as "Home" and allow the user to activate it 
                        with the command "click Home".
                    </p>

                    <h3>The accessible name</h3>
                    <p>
                        Notice how each object in the accessibility tree above has a name. 
                        Every object withing the accessibility tree is recognized or referred to by its name, 
                        also called the accessible name.
                    </p>
                    <p>
                        To create the accessible name, the browser uses an accessible name and description 
                        computation algorithm that takes into account several attributes.  
                        In this example, the name was computed from the text content of the link. 
                    </p>
                    During the construction of the accessibility tree, the browser evaluates the elements in the DOM 
                    to create their accessible names. If the content of a web page changes dynamically, the browser 
                    updates the accessibility tree accordingly, and the accessible names are recomputed as necessary.

                    To create the accessible name, the browser uses an accessible name and description computation 
                    algorithm that follows a set of (quite headache-inducing) rules. These rules take into account 
                    the following attributes:
                    <ul>
                        <li>
                            <code>aria-labelledby</code>
                        </li>
                        <li>
                            <code>aria-label</code>
                        </li>
                        <li>
                            <code>title</code>
                        </li>
                        <li>
                            <code>alt</code>
                        </li>
                        <li>
                            <code>label</code>
                        </li>
                    </ul>
                     
                    
                    The content of these attributes is 
                    given priority when creating the accessible name. The idea being that these were likely added 
                    to offer a more descriptive or tailored name for the element. For example, if a button has the 
                    visible text "Submit" and an aria-label of "Submit form," the accessible name would 
                    be « Submit form » and that is the name a screen reader would read to describe the button.
                    Note : The browser can also calculate the accessible description of an element which provides 
                    information that complements the accessible name. I am still deciphering the documentation 
                    on this topic, but my current understanding is the the accessiblr description relies on 
                    aria-labelledby and again the headache-inducing algorithm.

                    If none of the priority attributes are available, then the algorithm relies on the text within 
                    the element. This is what the browser relied on for the “RECENT PTOJECTS” heading. 
                    I did not assign an aria-label attribute nor any of the other priority attributes, 
                    so it used the content of the heading to create the accessible name.
                    
                    
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


