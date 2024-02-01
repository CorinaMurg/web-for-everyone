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
        href: "#intro",
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
                <div className="section intro intro-howA11yWorks" >
                    <h2 aria-label="In a Nutshell: How Accessibility works">
                        In a Nutshell
                        <a id="intro"></a>
                    </h2>
                    <p className="fake-list-item"> 
                        As part of the rendering process, the browser builds the accessibility tree, a simplified 
                        version of the DOM tree. The <strong>accessibility tree contains only elements that 
                        need to be exposed to assistive technologies</strong>, 
                        like links or headings. 
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
                            It can represent one of the following:
                        </p>
                        <p className="bullet-point-line margin-top-20 white-bg">
                            an actionable element, like a <code>link</code> or <code>button</code>;
                        </p>
                        <p className="bullet-point-line margin-top-20 white-bg">
                            an element that  provides information about the page content and structure,
                            like a <code>navbar</code> or a <code>heading</code>.
                        </p>
                        <p className="bullet-point-line margin-top-20 white-bg">
                            an element that holds text content, usually wrapped 
                            in tags like <code>&lt;p&gt;</code> or <code>&lt;code&gt;</code>.
                        </p>
                    </div>
                    
                    <p className="white-bg">
                        Any <code>div</code> element with purely decorative or container role
                        will be labeled as "ignored" or "generic".
                    </p>

                    <div className="highlight">
                        <details>
                            <summary>
                                <span className="details-title">
                                    How to view the accessibility tree with Dev Tools
                                </span>
                            </summary>
                            <p className="margin-top-50">
                                <a href="https://www.youtube.com/watch?v=Th-nv-SCj4Q&t=9s" 
                                    target="_blank" rel="noopener noreferrer" 
                                    className="hover-pink"
                                >
                                    <strong>Video: Debugging accessibility with Chrome DevTools</strong>
                                </a>
                            </p>
                            <p>
                                This is a great video on using Chrome's Dev Tools to look up
                                the accessibility tree. The process is very similar in Edge.
                            </p>
                            <p>
                                Please note that the video starts with an introduction
                                to Google's Lighthouse, and the part about the accessibility tree starts at 
                                minute 6:00.
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
                    <div className="code">
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
                        These are called <strong>implicit roles</strong>. 
                        Developers can also assign a role to an element
                        with special attributes called <abbr title="Accessible Rich Internet Applications">ARIA</abbr>
                        (<strong aria-hidden="true">Accessible Rich Internet Applications</strong>). 
                        These are called <strong>explicit roles</strong>.
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
                        At the time of this snapshot, the link was <strong>in focus</strong>, i.e. selected and
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
                    <div className="code a11ytree-code">
                        
                        <code>listitem</code>
                        <code className="padding-left-30">
                            <span className="code-pink-color">link</span> "<span className="code-purple-color">Home</span>" 
                        </code>
                        <code className="padding-left-60">StaticText "Home"</code>

                        <code>listitem</code>
                        <code className="padding-left-30">
                            <span className="code-pink-color">link</span> "<span className="code-purple-color">Your Users</span>"
                        </code>
                        <code className="padding-left-60">StaticText "Your Users"</code>
                    </div>
                    <p className="white-bg">
                        Notice how each <code>link</code> in our 
                        accessibility tree example has a name? 
                        It is the name that assistive technologies will use to announce the link to the user
                        (or, in case of speech recognition software, the name that will be used to activate 
                        the link). 
                    </p>
                    <p>
                        Certain elements must have a name (or a label), and it has to be descriptive enough to convey the
                        element's purpose. In our example, the name associated with each link happens to be the 
                        visible text content of the link, but it doesn't always have to be.
                    </p>

                    {/* <p>Here's a list of the elements that must have a name:</p>
                    <ul>
                        <li className="bullet-point-line">links and buttons</li>
                        <li className="bullet-point-line">all form elements like inputs, buttons, and selects</li>
                        <li className="bullet-point-line">images (unless they have a decorative purpose)</li>
                        <li className="bullet-point-line">headings</li>

                    </ul> */}
         
                    <p>
                        During the construction of the accessibility tree, the browser evaluates each element
                        in the DOM to create its name, also called <strong>the accessible name</strong>. 
                        If the content of a web page changes dynamically, 
                        it updates the accessibility tree accordingly, and the accessible names are recomputed 
                        as necessary.
                    </p>
                    <p className="white-bg">
                        To create the accessible name, the browser uses the 
                        <span> </span>
                        <a href="https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_te"
                            className="hover-pink"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <strong>accessible name and description computation algorithm</strong>
                        </a>
                        <span> </span> 
                        that follows a set of (quite headache-inducing) rules. This algorithm takes into account
                        the visible text content or label of the element, but several other attributes as well:
                    </p>
                    <ul>
                        <li className="bullet-point-line white-bg">
                            <code>aria-labelledby</code>
                        </li>
                        <li className="bullet-point-line margin-top-20 white-bg">
                            <code>aria-label</code>
                        </li>
                        <li className="bullet-point-line margin-top-20 white-bg">
                            <code>title</code>
                        </li>
                        <li className="bullet-point-line margin-top-20 white-bg">
                            <code>alt</code>
                        </li>
                    </ul>
                        
                    <p>
                        In fact, the content of these attributes is 
                        given priority when creating the accessible name. The idea being that these were likely added 
                        to offer a more descriptive or tailored name for the element. They could also be included
                        to provide a name when the element has no visible text. 
                    </p>
                    <p>
                        If none of the priority attributes are available, the algorithm relies on the text within 
                        the element. 
                    </p>
                   
                    <div className="highlight">
                        <details>
                            <summary>
                                <span className="details-title gray-bg">
                                    Example: <code>button</code> with no visible text
                                </span>
                            </summary>
                            <div className="code margin-top-50 margin-bottom-30">
                                <code>
                                    <span className="code-blue-color">&lt;button</span> aria-label="Close modal" id="closeModal"
                                    <span className="code-blue-color">&gt;</span>
                                </code>
                                <code className="padding-left-30">
                                    <span className="code-yellow-color">&lt;img</span> src="x-mark.svg"
                                    <span className="code-yellow-color">/&gt;</span>
                                </code>
                                <code><span className="code-blue-color">&lt;/button&gt;</span></code>
                            </div>
                            <p className="margin-top-50 gray-bg">
                                The button contains an image and no visible text. 
                                The browser will use the <code>aria-label</code> attribute to compute 
                                the accessible name "Close modal".
                            </p>
                            <p className="gray-bg">
                                For the sighted user, it will be obvious that the purpose of the button is to close 
                                the modal. But for a screen reader user, it would be a mystery
                                without the <code>aria-label</code> attribute. 
                            </p>
                        </details>
                    </div>
                  
                    
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


