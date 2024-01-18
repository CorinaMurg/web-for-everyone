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
                    <h2>In a Nutshell</h2>
                    <p className="fake-list-item"> 
                        As part of the rendering process, the browser builds the accessibility tree, a simplified 
                        version of the DOM tree. The accessibility tree focuses only on elements that need to be exposed 
                        to assistive technologies like screen readers or speech recognition software. 
                    </p>
                    <p className="fake-list-item">
                        Assistive technologies use the browser's accessibility APIs to retrieve information 
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

                    <h3>An example of an accessibility tree</h3>
                    <p> 
                        Let's look at a simplified version of the accessibility tree for the home page of this site.
                    </p>

                    <div className="code a11ytree-code">
                        <code className="pink-text">banner</code>
                        <code className="padding-left-30">link "Skip to Content"</code>
                        <code className="padding-left-30">focusable: true</code>
                        <br></br>
                        <code className="padding-left-30">    link "WE | Web for Everyone"</code>
                        <code className="padding-left-30">    focusable: true</code>
                        <br></br>
                        <code className="pink-text">navigation</code>
                        <code className="padding-left-30">list ""</code>
                        <code className="padding-left-60">listitem ""</code>
                        <code className="padding-left-90">link "Home"</code>
                        <code className="padding-left-90">focusable: true</code>
                        <code className="padding-left-90">focused: true</code>
                        <code className="padding-left-60">listitem ""</code>
                        <code className="padding-left-60">listitem ""</code>
                        <code className="padding-left-60">listitem ""</code>

                        <br></br>
                        <code className="pink-text">main</code>
                        <code className="padding-left-30">region "Let's Make It Accessible!"</code>
                        <code className="padding-left-60">heading "Let's Make It Accessible!"</code>
                        <code className="padding-left-60">list ""</code>
                        <br></br>
                        <code className="padding-left-30">region "How can WE help"</code>
                        <code className="padding-left-60">heading "How can WE help"</code>
                        <code className="padding-left-60">list ""</code>
                        <br></br>
                        <code className="padding-left-30">    region "Understanding Acccessibility"</code>
                        <code className="padding-left-60">heading "Understanding Acccessibility"</code>
                        <code className="padding-left-60">list ""</code>
                        <br></br>
                        <code className="pink-text">contentinfo ""</code>
                    </div>

                    <div>
                        <p>
                            While the DOM tree is structured by HTML tags/elements, the accessibility tree is 
                            structured by roles.
                            For each item in the accessibility tree, its role matches the function of its HTML tag.
                        </p>
                             
                        <p>
                            For example:
                        </p>
                        <p className="fake-list-item white-bg">
                            the <code>banner</code> role goes with the <code>&lt;header&gt;</code>
                        </p>
                        {/* <p className="fake-list-item">
                            the <code>&lt;nav&gt;</code> element has the role of "navigation"
                        </p> */}
                        {/* <p className="fake-list-item">
                            the <code>&lt;main&gt;</code> element has the role of "main"
                        </p> */}
                        {/* <p className="fake-list-item">
                            the <code>&lt;a&gt;</code> element has the role of "link"
                        </p> */}
                      
                        <p className="fake-list-item white-bg">
                            the <code>heading</code> role goes with the <code>&lt;h1&gt;</code> 
                        </p>
                        <p className="fake-list-item white-bg">
                            the <code>contentinfo</code> role goes with the <code>&lt;footer&gt;</code> 
                        </p>
                    </div>
                    
                    <p>
                        Each role in the example above is implicit. It is derived from the HTML tag, 
                        and it is automatically assigned by the browser when the accessibility tree is built.
                        This is one of the reasons why using semantic HTML is so important.
                    </p>

                    {/* <p>
                        We can also explicitly assign a role to an element using ARIA (Accessible Rich Internet Applications) attributes.
                    </p> */}
                        
                    

                    <h3>Zooming in on an accessible object</h3>
                    
                    {/* <div className="bug-code">
                        <code>&lt;<span className="pink-text">button</span> type="submit"&gt;</code>
                        <code>Submit</code>
                        <code>&lt;span class="visually-hidden"&gt; form&lt;/span&gt;</code>
                        <code>&lt;/<span className="pink-text">button</span>&gt;</code>
                    </div> */}
                    <p>
                        Let's take a closer look at the first list item within the navigation list:
                    </p>

                    <div className="code a11ytree-code">
                        <code className="pink-text">navigation</code>
                        <code className="padding-left-30">list ""</code>
                        <code className="padding-left-60">listitem ""</code>
                        <code className="padding-left-90">link "<span className="blue-text">Home</span>"</code>
                        <code className="padding-left-90"><span className="blue-text">focusable</span>: true</code>
                        <code className="padding-left-90"><span className="blue-text">focused</span>: true</code>
                        <code className="padding-left-120">StaticText "Home"</code>
                    </div>


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
                    

                    <p className="white-bg">
                        We have an actionable element, a link, with the name "Home". For a keyboard user, 
                        this means that they can navigate to it by pressing the <code>Tab</code> key, and activate it by 
                        pressing <code>Enter</code>. 
                    </p>
                    <p>
                        At the time of this snapshot, the link is focused, which means that it is
                        highlighted and ready to be activated. 
                    </p>
                    <p>
                        Each assitive technology will use the information from the accessibility tree to present the 
                        link to the user in the most appropriate way.
                    </p>
                    <p>
                        A screen reader will announce it as "Home link".
                        A speech recognition software will recognize it as "Home" and allow the user to activate it 
                        with the comman "click Home".
                    </p>
                    <p>
                        In each case, the object is recognized or referred to by its name. 
                        The name is computed at rendering time, and it's also called the accessible name.
                    </p>
                    <p>
                        To create the accessible name, the browser uses an accessible name and description 
                        computation algorithm that takes into account several attributes.  
                        In this example, the name was computed from the text content of the link. 
                    </p>

                    <h3>The accessible name</h3>
                    
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


