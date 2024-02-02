import React from "react"
import { Link } from "react-router-dom"
import useDocTitle from "../../../hooks/useDocTitle"
import useScrollToSection from "../../../hooks/useScrollToSection"
import TableOfContents from "../../../components/TableOfContents/TableOfContents"
import BackLinks from "../../../components/BackLinks/BackLinks"
import WarningTriangle from "../../../components/WarningTriangle"
import scrollToTop from "../../../utils/scrollToTop"
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
    },
    {
        href: "#implicit-roles",
        text: "Implicit Roles",
        ariaLabel: "Implicit Accessibility Roles",  
        className: "padding-left-30", 
    },
    {
        href: "#explicit-roles",
        text: "Explicit Roles",
        ariaLabel: "Explicit Accessibility Roles", 
        className: "padding-left-30",  
    },
    {
        href: "#the-accessible-name",
        text: "The Accessible Name",
    },
    {
        href: "#the-accessible-name-computation-algorithm",
        text: "The Accessible Name Algorithm",
        className: "padding-left-30",
    },
    {
        href: "#example-button-no-visible-text",
        text: "Example: Button with no Visible Text",
        className: "padding-left-30",
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
                <div id="intro" className="section intro" >
                    <h2 aria-label="In a Nutshell: How Accessibility works">
                        In a Nutshell
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
                            <br></br>
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
                                to Google's Lighthouse. The part about the accessibility tree starts at 
                                minute 6:00.
                            </p>
                        </details>
                    </div>

                    {/* *************2.1. DOM tree vs A11y Tree********************** */}
                    <div className="section scroll-target" id="DOM-tree-vs-accessibility-tree">
                        <h3>
                            DOM Tree vs. Accessibility Tree
                        </h3>
                        <p> 
                            Let's take the navbar component of this website and compare its representation in the DOM 
                            and the accessibility trees.
                        </p>

                        <h4 className="margin-top-20">Navbar: DOM tree representation</h4>
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

                        <h4 className="margin-top-40">Navbar: Accessibility tree representation</h4>
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

                    </div>
                </div>
                    
                {/* *************2.2 Implicit vs. Explicit Accessibility Roles********** */}
                <div className="section scroll-target" id="implicit-vs-explicit-accessibility-roles">   
                    <h2 aria-label="Implicit versus Explicit Accessibility Roles">
                        Implicit vs. Explicit Roles
                    </h2>
                    <p>
                        Some roles are implicit and assigned by default, based on the HTML tag used to create the element.
                         
                        Developers can also explicitly assign a role to an element
                        using a set of special roles and attributes called <span> </span>
                        <a href="https://www.w3.org/WAI/standards-guidelines/aria/" target="_blank" rel="noopener noreferrer" className="hover-pink">
                            <strong>Accessible Rich Internet Applications</strong>
                        </a>
                        , often referred to
                        by the acronym <strong>ARIA</strong>. 
                    </p>
                    
                    {/* ************Implicit roles***************** */}
                    <div className="section scroll-target" id="implicit-roles">
                        <h3 className="margin-top-20">
                            Implicit Roles
                        </h3>
                        <p>
                            Each role in the example above is <strong>implicit</strong>. It's built in the definition of the
                            semantic HTML tag used to create the element. When the browser builds the accessibility tree, 
                            it assigns the role, and all related properties and states, to the corresponding 
                            accessible object.
                        </p>
                        <p>
                            <strong>This is one of the reasons why using semantic HTML is so important!</strong>
                        </p>
                    </div>
                        
                    {/* ************Zooming in on an accessible object***************** */}
                    <div className="highlight">
                        <h4>Zooming in on an accessible object</h4>
                        <p> 
                            Let's look at the first link object to understand why using semantic HTML helps accessibility.
                        </p>
                    
                        <p className="bullet-point-line">Name: Home</p>
                        <p className="bullet-point-line">Role: link</p>
                        <p className="bullet-point-line">Property: focusable</p>
                        <p className="bullet-point-line">State: focused</p>
                        <br/>
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
                        <br/>
                        <p className="white-bg">
                            By using the semantic <code>&lt;a&gt;</code> tag we get a lot of 
                            the functionality expected from a link for free, using only HTML!
                        </p>
                    </div>

                    {/* ************Explicit roles***************** */}
                    <div className="section scroll-target" id="explicit-roles">
                        <h3>
                            Explicit Roles
                        </h3>
                        <p>
                            As a developer, you can also explicitly assign a role to an HTML element using
                            <span> </span>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA" target="_blank" rel="noopener noreferrer" className="hover-pink">
                                <strong>ARIA</strong>
                            </a>
                            <span> </span>
                            roles and attributes. These are added to HTML tags in order to modify or improve the default behavior 
                            of an element and make it accessible.
                        </p>
                    </div>
                    

                    {/* ************Example: create a button from a div****************** */}
                    <div className="highlight">
                        <h4 className="white-bg"
                            id="create-button-from-div"
                        >
                            Example: create a button from a <code>&lt;div&gt;</code>
                        </h4>
                        <div className="code margin-top-30">
                            <code>
                                <span className="code-blue-color">&lt;div</span> 
                                <span className="code-yellow-color"> role</span>="button" 
                                <span className="code-yellow-color"> aria-label</span>="Close modal" 
                                <span className="code-purple-color"> tabindex</span>="0"              
                                <span className="code-blue-color">&gt;</span>
                            </code>
                            <code><span className="code-blue-color">&lt;/div&gt;</span></code>
                        </div>
                        <p className="white-bg">
                            Here, we have a <code>div</code>, a non-semantic element, with an assigned role 
                            of <code>button</code>. 
                        </p>
                        <p className="white-bg">
                            The element will be treated as a button by assistive technologies.
                            The <code>role</code> and <code>aria-label</code> are <strong>ARIA</strong> tools
                            that allow us to modify the default behavior of the <code>div</code>.
                        </p>
                        
                        <p className="gray-bg">
                            Is this button accessible yet? Absolutely not!
                        </p>
                        
                        <p className="white-bg">
                            While the <code>tabindex</code> attribute makes it focusable, the button will not be
                            fully functional until we add other attributes and events:
                        </p>
                        
                        <p className="bullet-point-line white-bg">
                            event handlers to allow the button to be activated with the <code>Enter</code><span> </span>
                            and <code>Space</code> keys (available by default with the <span> </span>
                            <code>&lt;button&gt;</code> tag; important for screen reader users!)</p>
                        <p className="bullet-point-line white-bg">
                            depending on the desired functionality, <code>aria-pressed</code> or <code>aria-expended</code> to indicate the button's state
                        </p>
                    </div>
                    <div className="warning">
                        <WarningTriangle/>
                        <p>
                            Given a certain functionality you want to implement,
                            if the HTML tag for it exists, use it! Don't jump to ARIA right away.
                        </p>
                        <p>
                            The first rule of ARIA is: <strong>don't use ARIA</strong>!
                        </p>
                        <p>
                            More precisely, from the <a href="https://www.w3.org/TR/using-aria/" target="_blank" rel="noopener noreferrer" className="hover-pink">
                                <strong>W3C's Using ARIA documentation</strong>
                            </a>:
                        </p>

                        <blockquote>
                            <p className="margin-top-20">
                                "<strong>If you can use a native HTML element or attribute</strong> with the semantics and behavior you 
                                require already built in, instead of re-purposing an element and adding an ARIA role, 
                                state or property to make it accessible, <strong>then do so</strong>."
                            </p>
                        </blockquote>
                    </div>
                </div>

                {/* **************Accessible Name***************** */}
                <div className="section scroll-target a11yName" id="the-accessible-name">
                    <h2>The Accessible Name</h2>
                    <div className="code">
                        
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
                    
                    <div className="section scroll-target" id="the-accessible-name-computation-algorithm">
                        <h3>
                            Accessible Name Computation Algorithm
                        </h3>
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
                            the visible text content or label of the element, but several other attributes are considered
                            as well:
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
                    </div>
                                     
                    {/* Example: <code>button</code> with no visible text */}
                    <div id="example-button-no-visible-text" className="scroll-target">
                        <div className="highlight">  
                            <h3 className="gray-bg">
                                    Example: <code>button</code> with no visible text
                            </h3>
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
                        </div>
                    </div>           
                        
                    <div className="warning">
                        <WarningTriangle/>
                        <p>Here's a list of elements that must have a <span className="bold">
                            descriptive accessible name</span>:
                        </p>
                        <ul>
                            <li>
                                <p className="bullet-point-line margin-top-20">
                                    <span className="bold">links</span> and 
                                    <span className="bold"> buttons</span>
                                </p>
                            </li>
                            <li>
                                <p className="bullet-point-line margin-top-20">
                                    <span className="bold">all form elements</span>, like inputs or radio buttons
                                </p>
                            </li>
                            <li>
                                <p className="bullet-point-line margin-top-20 gray-bg">
                                    <span className="bold">images</span>: unless they have a decorative purpose, images must have an <code>alt</code> attribute
                                    that describes their content

                                </p>
                            </li>
                            <li>
                                <p className="bullet-point-line margin-top-20">
                                    <span className="bold">headings</span>: the majority of screen reader users 
                                    rely on headings to learn about the structure and content of a page

                                </p>
                            </li>
                        </ul>

                        <p className="margin-top-30">
                            The name is important because it's the main way for assistive technologies to convey
                            the purpose or the content of these elements to the user. 
                        </p>   
                        <p className="margin-top-30">
                            When using speech recognition software,
                            the name must also be part of the command that will activate the element.
                        </p>
                    </div>           
                </div>

                {/* CONCLUSION */}
                <div className="section scroll-target conclusion-howA11yWorks" id="conclusion">
                    <h2>Conclusion</h2>
                    <p>
                        We just reviewed the role the accessibility tree plays in making the web accessible.
                        A few key takeaways:
                    </p>
                    <p className="bullet-point-line">
                        The goal of the accessibility tree is to represent the structure of a webpage in a way 
                        that is meaningful for users of assistive technologies.
                    </p>
                    <p className="bullet-point-line">
                        Certain objects in the accessibility tree must have a name, and it has to be descriptive
                        in order to convey the element's purpose or content.
                    </p>
                    <p className="bullet-point-line">
                        Semantic HTML tags should always be your first choice when building a website. They provide
                        the best accessibility out of the box.
                    </p>
                    <p className="margin-top-30">
                        Next, let's look at the most common accessibility issues.   
                    </p>
                    
                    <div className="next-article">
                        <span className="fake-heading-p">Read next:</span>
                        <Link 
                            to="/resources/most-common-bugs" 
                            className="fake-heading-p pink-text"
                            onClick={scrollToTop}
                        >
                            Most Common Acessibility Bugs
                        </Link>
                    </div>
                    
                </div>
            </div>         
        </div>
    )
}


