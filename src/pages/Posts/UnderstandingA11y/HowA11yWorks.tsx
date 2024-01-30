import React from "react"
import { Link } from "react-router-dom"
import useDocTitle from "../../../hooks/useDocTitle"
import useScrollToSection from "../../../hooks/useScrollToSection"
import TableOfContents from "../../../components/TableOfContents/TableOfContents"
import BackLinks from "../../../components/BackLinks/BackLinks"
import styles from "./HowA11yWorks.module.css"
import "../../../global.css"

const contents = [
    {
        href: "#",
        text: "In a Nutshell",
        ariaLabel: "In a Nutshell: How Accessibility works",
    },
    {
        href: "#the-accessibility-tree",
        text: "The Accessibility Tree",
    },
    {
        href: "#DOM-tree-vs-accessibility-tree",
        text: "DOM Tree vs. Accessibility Tree",
        ariaLabel: "DOM Tree versus Accessibility Tree",
        className: "padding-left-30",
    },
    {
        href: "#implicit-vs-explicit-accessibility-roles",
        text: "Implicit vs. Explicit Roles",
        ariaLabel: "Implicit versus Explicit Accessibility Roles",
        className: "padding-left-30",
    },
    {
        href: "#the-accessible-name",
        text: "The Accessible Name",
    },
    {
        href: "#conclusion",
        text: "Conclusion",
    },
]

export default function MostCommonBugs() {
    useDocTitle("How Accessibility Works | Web for Everyone");  
    useScrollToSection();  
    
    return (
        <div className="article-container howA11yWorks-container">
            
            <BackLinks 
                secondLink="Understanding Accessibility" 
                href="/resources#understanding-accessibility" 
            />
            
            <h1>How <span className="yellow-bg">Accessibility</span> works</h1>
            <p className="subtitle">DOM's Powerful Sibling: the Accessibility Tree</p>

            <TableOfContents contents={contents} />
            
            <div className="article-content howA11yWorks">
                {/* *************1. INTRO********************** */}
                <div className="section intro intro-howA11yWorks" id="intro">
                    <h2 aria-label="In a Nutshell: How Accessibility works">In a Nutshell</h2>
                    <p className="fake-list-item"> 
                        As part of the rendering process, the browser builds the accessibility tree, a simplified 
                        version of the DOM tree. The <strong>accessibility tree contains only elements that 
                        need to be exposed to assistive technologies</strong>, 
                        like a button or a heading. 
                    </p>
                    <p className="fake-list-item">
                        When triggered, assistive technologies use the browser's accessibility APIs to retrieve 
                        information from the accessibility tree and present it to users. 
                    </p>
                </div>


                {/* *************2. A11Y TREE********************** */}
                <div className="section a11yTree scroll-target" id="the-accessibility-tree">
                    <h2>The Acccessibility Tree</h2>
                    
                    <div>
                        <p>
                            Each node in the tree is an <strong>accessible object</strong>. 
                            It represents either 
                        </p>
                        <p className="bullet-point-line margin-top-20 white-bg">
                            an actionable element, like a <code>link</code> or <code>button</code>, or
                        </p>
                        <p className="bullet-point-line margin-top-20 white-bg">
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
                                    How to view the accessibility tree with Dev Tools
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
                    <h3 className="section scroll-target" id="DOM-tree-vs-accessibility-tree">
                        DOM Tree vs. Accessibility Tree
                    </h3>
                    <p> 
                        Let's take the navbar component of this site and compare its representation in the DOM 
                        and the accessibility trees.
                    </p>

                    <h4 className="margin-top-20">DOM tree example</h4>
                    <div className="code a11ytree-code">
                        <code><span className="code-blue-color">&lt;nav&gt;</span></code>
                        <code><span className="code-yellow-color padding-left-30">&lt;ul&gt;</span></code>
                        <code className="padding-left-60">
                            &lt;li&gt;
                        </code>
                        <code className="padding-left-90">
                            <span className="code-pink-color">&lt;a&gt;</span>Home<span className="code-pink-color">&lt;/a&gt;</span>
                        </code>
                        <code className="padding-left-60">
                            &lt;/li&gt;
                        </code>
                        <code className="padding-left-60 margin-top-10">
                            &lt;li&gt;
                        </code>
                        <code className="padding-left-90">
                            <span className="code-pink-color">&lt;a&gt;</span>Your Users<span className="code-pink-color">&lt;/a&gt;</span>
                        </code>
                        <code className="padding-left-60">
                            &lt;/li&gt;
                        </code>
                        <code className="padding-left-60">. . .</code>
                        <code><span className="code-yellow-color padding-left-30">&lt;/ul&gt;</span></code>
                        <code><span className="code-blue-color">&lt;/nav&gt;</span></code>
                    </div>

                    <h4 className="margin-top-40">Accessibility tree example</h4>
                    <div className="code a11ytree-code">
                        <code><span className="code-blue-color">navigation</span></code>
                        <code className="padding-left-30"><span className="code-yellow-color">list</span></code>
                        <code className="padding-left-60">listitem</code>
                        <code className="padding-left-90">
                            <span className="code-pink-color">link</span> "<span className="code-purple-color">Home</span>" 
                            <span> </span>
                            <span className="code-purple-color">focusable</span>: true <span className="code-purple-color">focused</span>: true
                        </code>
                        <code className="padding-left-120">StaticText "Home"</code>

                        <code className="padding-left-60">listitem</code>
                        <code className="padding-left-90">
                            <span className="code-pink-color">link</span> "<span className="code-purple-color">Your Users</span>"
                            <span> </span>
                            <span className="code-purple-color">focusable</span>: true
                        </code>
                        <code className="padding-left-120">StaticText "Your Users"</code>

                        <code className="padding-left-60">. . .</code>
                    </div>
                    
                    <p className="margin-top-20">
                        While the DOM tree is structured by HTML tags/elements, <strong>the accessibility tree is 
                        structured by roles</strong>.
                        For each object in the accessibility tree, its role matches the function of its 
                        corresponding HTML element.
                    </p>
                            
                    <p>
                        For example:
                    </p>
                    <div>
                        <p className="bullet-point-line white-bg margin-bottom-20">
                            the <code>navigation</code> role goes with the <code>&lt;nav&gt;</code> tag
                        </p>
                      
                        <p className="bullet-point-line white-bg margin-bottom-20">
                            the <code>list</code> role goes with the <code>&lt;ul&gt;</code> tag
                        </p>
                        <p className="bullet-point-line white-bg margin-bottom-20">
                            the <code>link</code> role goes with the <code>&lt;a&gt;</code> tag
                        </p>
                        <p className="margin-top-40">
                            <strong>But how does the browser know what role to assign to a given element?</strong>
                        </p>
                    </div>
                    
                    {/* *************2.2 Implicit vs. Explicit Accessibility Roles********************** */}
                    <h3 className="section scroll-target"
                        id="implicit-vs-explicit-accessibility-roles"
                        aria-label="Implicit versus Explicit Accessibility Roles"
                    >
                        Implicit vs. Explicit Accessibility Roles
                    </h3>
                    <p>
                        Some roles are assigned by default, based on the HTML tag used to create the element.
                        These are called <strong>implicit roles</strong>. Developers can also assign a role to an element
                        using ARIA attributes. These are called <strong>explicit roles</strong>.
                    </p>
                    
                    <h4 className="margin-top-20">Implicit Roles</h4>
                    <p>
                        Each role in the example above is <strong>implicit</strong>. It's built in the definition of the
                        semantic HTML tag used to create the element. When the browser builds the accessibility tree, 
                        it assigns the role, and all related properties and states, to the corresponding 
                        accessible object.
                    </p>
                    <p>
                        <strong>This is one of the reasons why using semantic HTML is so important!</strong>
                    </p>
                    <p> 
                        Let's zoom in on the first link object to understand why.
                    </p>
                    
                    <p className="bullet-point-line">Name: Home</p>
                    <p className="bullet-point-line">Role: link</p>
                    <p className="bullet-point-line">Property: focusable</p>
                    <p className="bullet-point-line">State: focused</p>
                    
                    <p className="white-bg">
                        We have a <strong>link</strong> with the <strong>name</strong> "Home".
                        It's a <strong>focusable</strong> (i.e. actionable) element.
                        For a keyboard user, this means that they can navigate to it by pressing 
                        the <code>Tab</code> key, and activate it by pressing <code>Enter</code>. 
                    </p>
                    <p>
                        At the time of this snapshot, the link was <strong>in focus</strong>, or selected and
                        ready to be activated. 
                    </p>
                    <p>
                        Each assistive technology will use the information from the accessibility tree to present the 
                        object to the user in the most appropriate way:
                    </p>
                    
                    <p className="bullet-point-line">
                        A screen reader will announce it as <strong>"Home link"</strong>.
                    </p>
                    <p className="bullet-point-line">
                        A speech recognition software will recognize it as "Home" and allow the user to activate it 
                        with the command <strong>"click Home"</strong>.
                    </p>
                    
                    <p className="white-bg">By using the semantic <code>&lt;a&gt;</code> tag we get a lot of 
                        the functionality expected from a link for free, using only HTML!
                    </p>

                    <h4 className="margin-top-40">Explicit Roles</h4>
                    <p>
                        As a developer, you can also explicitly assign a role to an HTML element using <strong>ARIA</strong>
                        (<a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA" target="_blank" rel="noopener noreferrer" className="hover-pink">
                            <strong>Accessible Rich Internet Applications</strong>
                        </a>
                        ) attributes. These are a set of attributes that
                        can be added to HTML tags in order to modify or improve the default behavior of an element and 
                        make it accessible.
                    </p>
                    <strong className="white-bg">Example: create a button from a <code>&lt;div&gt;</code></strong>
                    <div className="code">
                        <code>
                            <span className="code-blue-color">&lt;div</span> 
                            <span className="code-yellow-color"> role</span>="button" 
                            <span className="code-purple-color"> tabindex</span>="0"
                            
                            <span className="code-blue-color">&gt;</span>
                        </code>
                        <code className="padding-left-30">Close</code>
                        <code><span className="code-blue-color">&lt;/div&gt;</span></code>
                    </div>
                    <p className="white-bg">
                        Here, we have a <code>div</code>, a non-semantic element, with an assigned role 
                        of <code>button</code>. 
                        This means that the element will be treated as a button by assistive technologies.
                    </p>
                    <p className="white-bg">
                        While the <code>tabindex</code> attribute makes it focusable, the button will not be
                        fully functional until we add other attributes and events:
                    </p>
                    
                    <p className="bullet-point-line white-bg">
                        event handlers to allow the button to be activated with the <code>Enter</code><span> </span>
                        and <code>Space</code> keys (available by default with the <span> </span>
                        <code>&lt;button&gt;</code> element; important for screen reader users!)</p>
                    <p className="bullet-point-line white-bg">depending on the desired functionality,
                        <code>aria-pressed</code> or <code>aria-expended</code> to indicate the button's state
                    </p>
                </div>

                {/* **************Accessible Name***************** */}
                <div className="section scroll-target a11yName" id="the-accessible-name">
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
                <div className="section scroll-target conclusion-howA11yWorks" id="conclusion">
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


