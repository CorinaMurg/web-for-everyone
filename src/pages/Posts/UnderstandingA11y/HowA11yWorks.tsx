import React from "react"
import { Link } from "react-router-dom"
import { useDocTitle } from "../../../hooks/useDocTitle"
import "./HowA11yWorks.css"
import "../../../global.css"



export default function MostCommonBugs() {
    useDocTitle("How Accessibility Works | Web for Everyone");    
    
    return (
        <div className="article-container howA11yWorks-container">
            <div className="back-links">
                <Link to="/resources" className="back-link hover-pink">Resources</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <Link to="/resources/#how-accessibility-works" className="back-link hover-pink">Understanding Accessibility</Link>
            </div>
            
            <h1>How <span className="yellow-bg">Accessibility</span> works</h1>
            <p className="subtitle">DOM's Powerful Sibling: the Accessibility Tree</p>

            <div className="table-contents">
                <h2 className="table-contents--heading">
                    <code>Table of Contents</code>
                </h2>
                <ul className="table-contents--list">
                    <li className="table-contents--list--item">
                        <a href="#" className="hover-pink">
                            <code>In a Nutshell</code>
                        </a>
                    </li>

                    <li className="table-contents--list--item">
                        <a href="#The Accessibility Tree" className="hover-pink">
                            <code>The Accessibility Tree</code>
                        </a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#DOM Tree vs. Accessibility Tree" className="hover-pink">
                            <code className="padding-left-30">DOM Tree vs. Accessibility Tree</code>
                        </a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#Implicit vs. Explicit Accessibility Roles" className="hover-pink">
                            <code className="padding-left-30">Implicit vs. Explicit Accessibility Roles</code>
                        </a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#The Accessible Name" className="hover-pink">
                            <code>The Accessible Name</code>
                        </a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#Conclusion" className="hover-pink">
                            <code>Conclusion</code>
                        </a>
                    </li> 
                </ul>
            </div>
            
            <div className="article-content howA11yWorks">
                {/* *************1. INTRO********************** */}
                <div className="bug intro intro-howA11yWorks" id="intro">
                    <h2 aria-label="In a Nutshell: How Accessibility works">In a Nutshell</h2>
                    <p className="fake-list-item"> 
                        As part of the rendering process, the browser builds the accessibility tree, a simplified 
                        version of the DOM tree. The <strong>accessibility tree focuses only on elements that 
                        need to be exposed to assistive technologies </strong> 
                        like screen readers or speech recognition software. 
                    </p>
                    <p className="fake-list-item">
                        When triggered, assistive technologies use the browser's accessibility APIs to retrieve information 
                        from the accessibility tree and present it to users. 
                    </p>
                </div>


                {/* *************2. A11Y TREE********************** */}
                <div className="bug a11yTree scroll-target" id="The Accessibility Tree">
                    <h2>The Acccessibility Tree</h2>
                    
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

                    <div className="highlight">
                        <details>
                            <summary>
                                <span className="details-title">
                                    How to view the accessibility tree in Chrome
                                </span>
                            </summary>
                            <p>
                                To view the accessibility tree, open the Developer Tools and select the 
                                acccessibility tab. 
                            </p>

                            <p>
                                Here a short video of how to access and use the accessbility tree
                                and all related information in Chrome:

                            </p>
                        </details>
                    </div>
                    {/* *************2.1. DOM tree vs A11y Tree********************** */}
                    <h3 className="scroll-target" id="DOM Tree vs. Accessibility Tree">DOM Tree vs. Accessibility Tree</h3>
                    <p> 
                        Let's take the navbar component of this site and compare its representation in the DOM 
                        and the accessibility trees.
                    </p>

                    <h4>DOM tree example</h4>
                    <div className="code a11ytree-code">
                        <code className="pink-text">&lt;nav&gt;</code>
                        <code className="padding-left-30">&lt;ul&gt;</code>
                        <code className="padding-left-60">
                            &lt;li&gt;
                        </code>
                        <code className="padding-left-90">
                            &lt;a&gt;<span className="blue-text">Home</span>&lt;/a&gt;
                        </code>
                        <code className="padding-left-60">
                            &lt;/li&gt;
                        </code>
                        <code className="padding-left-60 margin-top-10">
                            &lt;li&gt;
                        </code>
                        <code className="padding-left-90">
                            &lt;a&gt;<span className="blue-text">Your Users</span>&lt;/a&gt;
                        </code>
                        <code className="padding-left-60">
                            &lt;/li&gt;
                        </code>
                        <code className="padding-left-60 margin-top-10">
                            &lt;li&gt;
                        </code>
                        <code className="padding-left-90">
                            &lt;a&gt;<span className="blue-text">Resources</span>&lt;/a&gt;
                        </code>
                        <code className="padding-left-60">
                            &lt;/li&gt;
                        </code>
                        <code className="padding-left-60 margin-top-10">
                            &lt;li&gt;
                        </code>
                        <code className="padding-left-90">
                            &lt;a&gt;<span className="blue-text">About</span>&lt;/a&gt;
                        </code>
                        <code className="padding-left-60">
                            &lt;/li&gt;
                        </code>
                        <code className="padding-left-30">
                            &lt;/ul&gt;
                        </code>
                        <code className="pink-text">&lt;/nav&gt;</code>
                    </div>

                    <h4>Accessibility tree example</h4>
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
                    
                    <p>
                        While the DOM tree is structured by HTML tags/elements, <strong>the accessibility tree is 
                        structured by roles</strong>.
                        For each object in the accessibility tree, its role matches the function of its 
                        corresponding HTML element.
                    </p>
                            
                    <p>
                        For example:
                    </p>
                    <div>
                        <p className="fake-list-item white-bg margin-bottom-20">
                            the <code>navigation</code> role goes with <code>&lt;nav&gt;</code>
                        </p>
                      
                        <p className="fake-list-item white-bg margin-bottom-20">
                            the <code>list</code> role goes with <code>&lt;ul&gt;</code> 
                        </p>
                        <p className="fake-list-item white-bg margin-bottom-20">
                            the <code>link</code> role goes with <code>&lt;a&gt;</code> 
                        </p>
                        <p>But how does the browser know what role to assign to a given element?</p>
                    </div>
                    
                    {/* *************2.2 Implicit vs. Explicit Accessibility Roles********************** */}
                    <h3 className="scroll-target"
                        id="Implicit vs. Explicit Accessibility Roles"
                    >
                        Implicit vs. Explicit Accessibility Roles
                    </h3>
                    
                    <h4>Implicit Roles</h4>
                    <p>
                        Each role in the example above is <strong>implicit</strong>. It's built in the definition of the
                        semantic HTML tag used to create an element. When the browser builds the accessibility tree, 
                        it assigns the role, and all the related properties and states, to the corresponding 
                        accessible object.
                    </p>
                    <p>
                        This is one of the reasons why using semantic HTML is so important. 
                        Let's zoom in on the first link object to understand why.
                    </p>
                    
                    <p className="fake-list-item">Name: Home</p>
                    <p className="fake-list-item">Role: link</p>
                    <p className="fake-list-item">Property: focusable</p>
                    <p className="fake-list-item">State: focused</p>
                    
                    <p className="white-bg">
                        We have a focusable (i.e. actionable) element, a link, with the name "Home". 
                        For a keyboard user, 
                        this means that they can navigate to it by pressing the <code>Tab</code> key, 
                        and activate it by pressing <code>Enter</code>. 
                    </p>
                    <p>
                        At the time of this snapshot, the link was in focus, which means that it was
                        highlighted and ready to be activated. 
                    </p>
                    <p>
                        Each assistive technology will use the information from the accessibility tree to present the 
                        object to the user in the most appropriate way.
                    </p>
                    
                    <p>
                        A screen reader will announce it as "Home link".
                        A speech recognition software will recognize it as "Home" and allow the user to activate it 
                        with the command "click Home".
                    </p>
                    
                    <p className="white-bg">By using the semantic <code>&lt;a&gt;</code> tag we get a lot of 
                        the functionality expected from a link for free, using only HTML!
                    </p>

                    <h4>Explicit Roles</h4>
                    <p>
                        We can also explicitly assign a role to an HTML element using ARIA 
                        (Accessible Rich Internet Applications) attributes. These are a set of attributes that
                        can be added in order to modify or improve the default behavior of an element and 
                        make it accessible.
                    </p>
                    <strong className="white-bg">Example: create a button from a <code>&lt;div&gt;</code></strong>
                    <div className="bug-code bug-code--buttons">
                        <code>&lt;<span className="pink-text">div</span> role="button" tabindex="0"&gt;</code>
                        <code>Close</code>
                        <code>&lt;/<span className="pink-text">div</span>&gt;</code>
                    </div>
                    <p className="white-bg">
                        Here, we have a <code>div</code>, a non-semantic element, with an assigned role 
                        of <code>button</code>. 
                        This means that the element will be treated as a button by assistive technologies.
                        While the <code>tabindex</code> attribute makes it focusable, the button will not be
                        fully functional until we add other attributes and events:
                    </p>
                    
                    <p className="fake-list-item white-bg">
                        event handlers to allow the button to be activated with the <code>Enter</code><span> </span>
                        and <code>Space</code> keys (available by default with the <span> </span>
                        <code>&lt;button&gt;</code> element; important for screen reader users)</p>
                    <p className="fake-list-item white-bg">depending on the desired functionality,
                        <code>aria-pressed</code> or <code>aria-expended</code> to indicate the button's state
                    </p>
                </div>

                {/* **************Accessible Name***************** */}
                <div className="bug a11yName" id="The Accessible Name">
                    <h2>The Accessible Name</h2>
                    <p>
                        Notice how each actionable object in the accessibility tree above has a name? 
                        It is the name that assistive technologies will use to describe the object to the user
                        (or, in case of speech recognition software, the name that the user will use to activate 
                        the object). It's called the <strong>accessible name</strong>.
                    </p>
                        
                    <div className="highlight">
                        <details>
                            <summary>
                                <span className="details-title">
                                    Does every object have an accessible name?
                                </span>
                            </summary>
                            <p>
                                No. Actionable objects must have an accessible name.
                                For example, a button without a name is useless.
                                But notice how the <code>list</code> and <code>listitem</code> objects in the
                                accessibility tree above do not have a name.
                                This is because they are not actionable objects.
                                They are there to provide information about the page structure and content.
                                Same with the <code>navigation</code> object.
                            </p>

                        </details>
                    </div>

                    <p>
                        During the construction of the accessibility tree, the browser evaluates the elements 
                        in the DOM 
                        to create their accessible names. If the content of a web page changes dynamically, the browser 
                        updates the accessibility tree accordingly, and the accessible names are recomputed as necessary.
                    </p>
                    <p className="white-bg">
                        To create the accessible name, the browser uses the 
                        <span> </span>
                        <a href="https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_te"
                            className="hover-pink"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            accessible name and description computation algorithm
                        </a>
                        <span> </span> 
                        that follows a set of (quite headache-inducing) rules. 
                        These rules take into account several attributes: <span> </span>
                        <code>aria-labelledby</code>, <code>aria-label</code>, <code>title</code>, <code>alt</code>,
                        and <code>label</code>.
                    </p>
                    
                    <p>
                        The content of these attributes is 
                        given priority when creating the accessible name. The idea being that these were likely added 
                        to offer a more descriptive or tailored name for the element. They could also be included
                        to provide a name when the element has no visible text. 
                    </p>
                   
                    <strong className="white-bg">Example: <code>button</code> with no visible text</strong>
                    <div className="bug-code bug-code--buttons">
                        <code>&lt;<span className="pink-text">button</span> aria-label="Close modal" id="closeModal"&gt;</code>
                        <code>&lt;<span className="pink-text">img</span> src="x-mark.svg"/&gt;</code>
                        <code>&lt;/<span className="pink-text">button</span>&gt;</code>
                    </div>
                    <p className="white-bg">
                        The button contains an image and no visible text. For the sighted user, it will be obvious 
                        that its purpose is to close the modal. But for a screen reader user, it would be a mystery
                        without the <code>aria-label</code> attribute. The browser will use the attribute to compute 
                        the accessible name "Close modal".
                    </p>
                  
                    <p>
                        If none of the priority attributes are available, the algorithm relies on the text within 
                        the element. This is what the browser relied on for the “RECENT PTOJECTS” heading. 
                        I did not assign an aria-label attribute nor any of the other priority attributes, 
                        so it used the content of the heading to create the accessible name.
                    </p>
                </div>

                    

                {/* CONCLUSION */}
                <div className="bug section conclusion-howA11yWorks" id="Conclusion">
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
                    
                </div>

            </div>
            
        </div>
    )
}


