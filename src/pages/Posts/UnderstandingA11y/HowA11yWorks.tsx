import React from "react"
import { Link } from "react-router-dom"
import useScrollToTop from "../../../hooks/useScrollToTop"
import useDocTitle from "../../../hooks/useDocTitle"
import useScrollToSection from "../../../hooks/useScrollToSection"
import useHighlightTOC from "../../../hooks/useHighlightTOC"
import TableOfContents from "../../../components/TableOfContents/TableOfContents"
import BackLinks from "../../../components/BackLinks/BackLinks"
import WarningTriangle from "../../../components/WarningTriangle"

import ExternalLink from "../../../components/ExternalLink/ExternalLink"
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
    // {
    //     href: "#DOM-tree-vs-accessibility-tree",
    //     text: "DOM Tree vs. Accessibility Tree",
    //     ariaLabel: "DOM Tree versus Accessibility Tree",
    //     className1: "padding-left-20",
    //     className2: "margin-top--10",
    // },
    {
        href: "#implicit-vs-explicit-accessibility-roles",
        text: "Implicit vs. Explicit Roles",
        ariaLabel: "Implicit versus Explicit Accessibility Roles",   
    },
    // {
    //     href: "#implicit-roles",
    //     text: "Implicit Roles",
    //     ariaLabel: "Implicit Accessibility Roles",  
    //     className1: "padding-left-20", 
    //     className2: "margin-top--10",
    // },
    // {
    //     href: "#explicit-roles",
    //     text: "Explicit Roles",
    //     ariaLabel: "Explicit Accessibility Roles", 
    //     className1: "padding-left-20",  
    //     className2: "margin-top--10",
    // },
    {
        href: "#the-accessible-name",
        text: "The Accessible Name",
    },
    // {
    //     href: "#the-accessible-name-computation-algorithm",
    //     text: "The Accessible Name Algorithm",
    //     className1: "padding-left-20",
    //     className2: "margin-top--10",
    // },
    // {
    //     href: "#visually-hidden-text",
    //     text: "Example: Using visually hidden text",
    //     className1: "padding-left-20",
    //     className2: "margin-top--10",
    // },
    {
        href: "#conclusion",
        text: "Conclusion",
    },
]

export default function MostCommonBugs() {
    useDocTitle("How Accessibility Works | Web for Everyone");  
    useScrollToTop();
    useScrollToSection();  
    const { activeId } = useHighlightTOC();
    
    return (
        <div className="article-container howA11yWorks-container">
            
            <BackLinks 
                secondLink="Understanding Accessibility" 
                href="/resources#understanding-accessibility" 
                current="How Accessibility Works"
            />
            
            <h1 aria-describedby="subtitle" className="article-heading-desktop">
                <span>How <span className="yellow-bg">Accessibility</span> works</span> 
            </h1>
            <h1 className="article-heading-mobile">
                <span>How</span>
                <span><span className="yellow-bg">Accessibility</span> works</span>
            </h1>
            <p id="subtitle" className="subtitle">DOM's Powerful Sibling: the Accessibility Tree</p>

            <TableOfContents contents={contents} activeId={activeId}/>
            
            <div className="article-content howA11yWorks">
                {/* *************1. INTRO********************** */}
                <div id="intro" className="section intro scroll-target" >
                    <h2 aria-label="In a Nutshell: How Accessibility works">
                        In a Nutshell
                    </h2>
                    <p className="fake-list-item"> 
                        As part of the rendering process, the browser builds the accessibility tree, a simplified 
                        version of the DOM tree. The accessibility tree contains only <strong>elements that 
                        need to be exposed to assistive technologies</strong>, 
                        like links or headings. 
                    </p>
                    <p className="fake-list-item">
                        When triggered, assistive technologies use the browser's accessibility APIs to retrieve 
                        information from the accessibility tree and present it to users. 
                    </p>
                </div>


                {/* *************2. A11Y TREE********************** */}
                <div className={`section ${styles.a11yTree} scroll-target`} id="the-accessibility-tree">
                    <h2>The Acccessibility Tree <span aria-hidden="true"> 🌳</span></h2>           
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
                        {/* <p className="bullet-point-line margin-top-20 white-bg">
                            an element that holds text content, usually wrapped 
                            in tags like <code>&lt;p&gt;</code> or <code>&lt;code&gt;</code>.
                        </p> */}
                    </div>
                    
                    <p className="white-bg">
                        Any <code>div</code> element with purely decorative or container role
                        will be ignored. 
                    </p>

                    {/* How to view the accessibility tree with Dev Tools */}
                    <div className="highlight"> 
                        <h3>
                            Find the accessibility tree with Dev Tools <span aria-hidden="true">🔍</span>
                        </h3>
                        <p className="margin-top-50">
                            <a href="https://www.youtube.com/watch?v=Th-nv-SCj4Q&t=9s" 
                                target="_blank" rel="noopener noreferrer" 
                            >
                                Video: Debugging accessibility with Chrome DevTools
                                <span className="sr-only"> opens in a new tab</span>
                                <span className="external-linksvg-wrap">
                                    &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512"><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"/></svg>    
                                </span>
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
                    </div>

                    {/* *************2.1. DOM tree vs A11y Tree********************** */}
                    <div className={`section ${styles['dom-at-section']}`} id="DOM-tree-vs-accessibility-tree">
                        <h3>
                            DOM Tree vs. Accessibility Tree
                        </h3>
                        <p> 
                            Here we take the navbar component of this website and compare its representation in the DOM 
                            and the accessibility trees.
                        </p>

                        <div className={styles['dom-at']}>
                            <div className="code-no-overflow">
                                <code><span className="code-gray-color">// DOM tree</span></code>
                                <code><span className="code-blue-color">&lt;nav&gt;</span></code>
                                <code><span className="code-yellow-color padding-left-20">&lt;ul&gt;</span></code>
                                <code className="padding-left-40 margin-top-20">
                                    &lt;li&gt;
                                </code>
                                <code className="padding-left-60">
                                    <span className="code-pink-color">&lt;a&gt;
                                    </span>Home<span className="code-pink-color">&lt;/a&gt;</span>&
                                </code>
                                <code className="padding-left-40">
                                    &lt;/li&gt;
                                </code>
                                <code className="padding-left-40 margin-top-30">
                                    &lt;li&gt;
                                </code>
                                <code className="padding-left-60">
                                    <span className="code-pink-color">&lt;a&gt;</span>Your Users<span className="code-pink-color">&lt;/a&gt;</span>
                                </code>
                                <code className="padding-left-40">
                                    &lt;/li&gt;
                                </code>
                                <code className="padding-left-40 margin-top-30">// other list items</code>
                                <code className="margin-top-20"><span className="code-yellow-color padding-left-20 ">&lt;/ul&gt;</span></code>
                                <code><span className="code-blue-color">&lt;/nav&gt;</span></code>
                            </div>
                        
                            <div className="code-no-overflow">
                                <code><span className="code-gray-color">// Accessibility tree</span></code>
                                <code><span className="code-blue-color">navigation</span></code>
                                <code className="padding-left-20"><span className="code-yellow-color">list</span></code>
                                <code className="padding-left-40 margin-top-20">listitem</code>
                                <code className="padding-left-60">
                                    <span className="code-pink-color">link</span> "<span className="code-purple-color">Home</span>" 
                                    <span> </span>
                                    <span className="code-purple-color">focusable</span>: true <span className="code-purple-color">focused</span>: true
                                </code>
                                <code className="padding-left-80">StaticText "Home"</code>

                                <code className="padding-left-40 margin-top-30">listitem</code>
                                <code className="padding-left-60">
                                    <span className="code-pink-color">link</span> "<span className="code-purple-color">Your Users</span>"
                                    <span> </span>
                                    <span className="code-purple-color">focusable</span>: true
                                </code>
                                <code className="padding-left-80">StaticText "Your Users"</code>
                                <code className="padding-left-40 margin-top-30">// other list items</code>
                            </div>
                        </div>
                       
                        <p className="margin-top-20">
                            While the DOM tree is structured by HTML tags/elements, <strong>the accessibility tree is 
                            structured by roles</strong>.
                            For each object in the accessibility tree, its role matches the function of its 
                            corresponding HTML element.
                        </p>
                        <div>
                            <p>
                                For example:
                            </p>
                            <ul role="list" className="bullet-point-list">
                                <li>
                                    <p className="white-bg">the <code>navigation</code> role goes with the <code>&lt;nav&gt;</code> tag</p>
                                </li>
                                <li>
                                    <p className="white-bg">the <code>list</code> role goes with the <code>&lt;ul&gt;</code> tag</p>
                                </li>
                                <li>
                                    <p className="white-bg">the <code>link</code> role goes with the <code>&lt;a&gt;</code> tag</p>
                                </li>
                            </ul>
                        </div> 
                    </div>
                </div>
                    
                {/* *************2.2 Implicit vs. Explicit Accessibility Roles********** */}
                <div className="section scroll-target" id="implicit-vs-explicit-accessibility-roles">   
                    <h2 aria-label="Implicit versus Explicit Accessibility Roles">
                        Implicit vs. Explicit Roles
                    </h2>
                    <p>
                        Some roles are implicit and assigned by default, based on the HTML tag used to create 
                        the element.
                        As developers, we can also explicitly assign a role to an element
                        using a set of special roles and attributes called <span> </span>
                        <a href="https://www.w3.org/WAI/standards-guidelines/aria/" target="_blank" rel="noopener noreferrer">
                            Accessible Rich Internet Applications
                            <span className="sr-only"> opens in a new tab</span>
                            <span className="external-linksvg-wrap">
                                &nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512"><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"/></svg>    
                            </span>
                        </a>
                        , often referred to
                        by the acronym <strong>ARIA</strong>. 
                    </p>
                    
                    {/* ************Implicit roles***************** */}
                    <div className="section" id="implicit-roles">
                        <h3 className="margin-top-20">
                            Implicit Roles
                        </h3>
                        <p>
                            Each role in the example above is <strong>implicit</strong>. It's built in the definition of the
                            semantic HTML tag used to create the element. When the browser builds the accessibility tree, 
                            it assigns the role, and all related properties and states, to the corresponding 
                            accessible object.
                        </p>
                    </div>
                        
                    {/* ************Zooming in on an accessible object***************** */}
                    <div className="highlight">
                        <h4 className="margin-top-10">
                            Zooming in on an accessible object <span aria-hidden="true">🔍</span>
                        </h4>
                        <p> 
                            Let's look at the first link object to understand why using semantic HTML helps 
                            accessibility. 
                        </p>
                        <div>
                            <p><strong>Details available</strong></p>
                            <ul className="checkmark-list padding-left-20">
                                <li><span className="pink-text bold">&#x2714; </span><p>Name: Home</p></li>
                                <li><span className="pink-text bold">&#x2714; </span><p>Role: link</p></li>
                                <li><span className="pink-text bold">&#x2714; </span><p>Property: focusable</p></li>
                                <li><span className="pink-text bold">&#x2714; </span><p>State: focused</p></li>
                            </ul>
                        </div>
                        
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
                        <br/>
                        <p><strong>Assistive tech behavior</strong></p>
                        <p>
                            Each assistive technology will use the information from the accessibility tree to present the 
                            object to the user in the most appropriate way.
                        </p>
                    
                        <p className="bullet-point-line">
                            A screen reader will announce it as <strong>"Home link"</strong>.
                        </p>
                        <p className="bullet-point-line">
                            A speech recognition software will recognize it as "Home" and allow the user to activate it 
                            with the command <strong>"click Home"</strong>.
                        </p>
                        <br/>
                        <p><strong>Isn't semantic HTML cool?</strong><span aria-hidden="true"> 😎</span></p>
                        <p className="white-bg">
                            By relying on the semantic <code>&lt;a&gt;</code> tag we get all 
                            the functionality expected from a link for free. With only HTML!
                        </p>
                    </div>

                    {/* ************Explicit roles***************** */}
                    <div className="section" id="explicit-roles">
                        <h3>
                            Explicit Roles
                        </h3>
                        <p>
                            We can also explicitly assign a role to an HTML element using <b>ARIA</b> roles                          
                            and attributes. These are added to HTML tags in order to modify or improve the default behavior 
                            of an element and make it accessible.
                        </p>
                    </div>
                    

                    {/* ************Example: create a button from a div****************** */}
                    <div className="highlight">
                        <h4 className="white-bg margin-top-10" id="create-button-from-div">
                            Example: create a button from a <code>&lt;div&gt;</code>
                        </h4>
                        <div className="code margin-top-30">
                            <code>
                                <span className="code-blue-color">&lt;div</span> 
                                <span className="code-yellow-color"> role</span>="button" 
                                <span className="code-yellow-color"> aria-label</span>="Close modal" 
                                {/* <span className="code-purple-color"> tabindex</span>="0"               */}
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
                            It also has an accessible name assigned with <code>aria-label</code>. (Note that this is not the
                            best way to assign a name to an interactive element. More about
                            the accessible name in the next section).
                        </p>
                        
                        <p>
                            <strong>Is this button accessible yet? Absolutely not!</strong>
                        </p>
                        
                        <p className="white-bg">
                            The button will not be
                            fully functional until we add other attributes and events:
                        </p>
                        <p className="bullet-point-line white-bg">
                            the <code>tabindex</code> attribute to make it focusable, otherwise keyboard users 
                            won't be able to reach it: <code>tabindex="0"</code>
                        </p>
                        
                        <p className="bullet-point-line white-bg">
                            event handlers to allow the button to be activated with 
                            the <span className="yellow-bg-dark-text">Enter</span> <span> </span>
                            or <span className="yellow-bg-dark-text">Space</span> keys (available by default with the <span> </span>
                            <code>&lt;button&gt;</code> tag; important for screen reader users!)
                        </p>
                        {/* <p className="bullet-point-line white-bg">
                            depending on the desired functionality, <code>aria-pressed</code> or <code>aria-expended</code> to indicate the button's state
                        </p> */}
                    </div>
                    <div className="warning">
                        <WarningTriangle/>
                        <p>
                            Don't jump to ARIA right away! If you want to implement a certain functionality and
                            the HTML tag for it exists, use it! 
                        </p>
                        <p>
                            The first rule of ARIA is: <strong>don't use ARIA</strong>!
                        </p>
                        <p>
                            Throughout this website, we will discuss scenarios where ARIA attributes could be used
                            to improve accessibility, but also consider their drawbacks especially when HTML 
                            alternatives are available.
                        </p>
                        <p>
                            For right now, it's important to remember that assistive technologies have a better
                            relationship with semantic HTML than with ARIA, and using ARIA can sometimes lead to
                            unexpected behavior or bugs.

                        </p>
                        
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
                        Notice how each <span className="pink-bg-white-text">link</span> in our 
                        accessibility tree example has a name? It's called the <strong>accessible name</strong>, and 
                        assistive technologies use it to announce the link to the user
                        (or, for speech recognition software, the name that will be used to activate 
                        the link). 
                    </p>
                    <p>
                        <strong>Certain elements must have a name</strong> (or, for input fields, a <strong>label</strong>), and it has to be 
                        descriptive enough to convey the
                        element's purpose. In our example, the name associated with each link happens to be the 
                        visible text of the link, but other attributes can be used to compute the name.
                    </p>
                    <div className="warning">
                        <WarningTriangle/>
                        <p>
                            These elements must have a 
                            <strong> descriptive accessible name</strong>:
                        </p>     
                        <div>
                            <ul role="list" className="bullet-point-list">
                                <li>
                                    <p>links and buttons</p>
                                </li>  
                                <li>
                                    <p>all form elements, like input fields and checkboxes</p>
                                </li>
                                <li>
                                    <p>headings</p>
                                </li> 
                            </ul> 
                        </div>                 
                    </div>    
                    
                    {/* *****Accessible Name Computation Algorithm***** */}
                    <div className="section" id="the-accessible-name-computation-algorithm">
                        <h3>
                            Accessible Name Computation Algorithm
                        </h3>
                        <p>
                            During the construction of the accessibility tree, the browser evaluates each element
                            in the DOM to create its accessible name. 
                            If the content of a web page changes dynamically, 
                            it updates the accessibility tree accordingly, and the accessible names are recomputed 
                            as necessary.
                        </p>
                        <p className="white-bg">
                            To create the accessible name, the browser uses the 
                            <span> </span>
                            <ExternalLink
                                href="https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_te"
                                visibleText="accessible name and description computation algorithm"
                            />
                            <span> </span> 
                            that follows a set of (quite headache-inducing) rules. The algorithm takes into account
                            the <strong>visible text</strong> or <strong> label</strong> of the element, but several other attributes are considered
                            as well:
                        </p>
                       
                        <div style={{width: "100%"}}>
                            <p className="bullet-point-line">
                                <strong>text defined by a visually-hidden class</strong>  
                            </p>
                            <p className="padding-left-20">
                                This is a CSS class that hides text visually, but makes it available to screen readers.
                            </p>
                            <p className="padding-left-20 margin-top-20">
                                Be careful though! It won't work easily with speech commands unless the user can
                                tell what the name of the element is. So, use it with an icon linking to your
                                LinkedIn profile (and stick with just "LinkedIn" and no other text that a user will have to guess), 
                                but avoid it with an icon that is less recognizable.
                            </p>

                            <div className="highlight highlight-inline">
                                <details>
                                    <summary>
                                        Selecting an element using speech recognition software: an example
                                    </summary>
                                    <p>
                                        Dragon NaturallySpeaking is the most popular speech recognition software. 
                                        People with mobility issues can rely on it to navigate the web using voice commands.
                                    </p>
                                    <p>
                                        Ideally, a user can rely on visible text to learn the name of an 
                                        interactive element, and then activate it with "Click (name of element)".
                                        If the name is not visible or obvious, they can use the <strong>Mouse Grid</strong>
                                        feature.
                                    </p>
                                    <p>
                                        Here are the steps they would follow:
                                    </p>
                                    <p>
                                        <strong>1. Activate the Mouse Grid</strong>:
                                        The command "Mouse Grid" activates the feature. 
                                        This will overlay a grid with numbered areas across their entire screen.
                                    </p>
                                    <p>
                                        <strong>2. Use the Mouse Grid</strong>:
                                        Once the grid is visible, they can move the pointer to a specific area 
                                        by saying the number associated with that area. For example, if they want 
                                        to move the pointer to the area labeled '3', they just say "Three"
                                        and the grid will zoom into the selected area and 
                                        redraw a smaller, more detailed grid.
                                    </p>
                                    <p>
                                        <strong>3. Repeat</strong>:
                                        They continue to dictate numbers of smaller areas until the 
                                        element they wish to select is isolated in a single area.
                                    </p>
                                    <p>
                                        <strong>4. Click and Interact</strong>:
                                        They can say commands like “Click,” “Double Click,” “Right Click,” etc., to interact with 
                                        that element as they would with a mouse.
                                    </p>
                                    <p>
                                        <strong>5. Close Mouse Grid</strong>:
                                        If they wish to exit the Mouse Grid, they simply say "Cancel," and the Mouse Grid will close.
                                    </p>
                                </details>
                            </div>

                            <p className="padding-left-20 margin-top-20">
                                Also, if the CSS class is not implemented correctly, the spaces between words might be
                                ignored and screen readers could announce the text as a single continuous string.
                            </p>
                            {/* <p className="padding-left-20 margin-top-20">
                                Here's a <span> </span>
                                <ExternalLink
                                    href="https://codepen.io/Cor-Ina/pen/oNmoYeR"
                                    visibleText="CodePen with an example of a visually-hidden class."
                                />
                            </p> */}
                            
                            <p className="bullet-point-line margin-top-20">
                                <strong>alt</strong>
                            </p>  
                            <p className="padding-left-20 white-bg">
                                You can use it with interactive images. With buttons or links that contain an image and no 
                                visible text or ARIA attributes, the browser will take the <code>alt</code> attribute 
                                to compute the accessible name.
                            </p>  
                            <p className="padding-left-20 white-bg margin-top-20">
                                Note that this is slightly more verbose. So, a button wrapping an image of <strong>x</strong> can
                                have an <code>alt="Close modal"</code> and it will be announced as "Close modal 
                                graphic button". <span> </span>
                                (An image is announced either as <strong>graphic</strong> or <strong>image</strong> 
                                , depending on the screen reader.)
                            </p>  
                            <p className="padding-left-20 white-bg margin-top-20">
                                Again, a common concern with accessible names not computed from visible text: 
                                in order to activate the element, voice users should be able to tell its name.
                                Choose the <code>alt</code> text thoughtfully!
                                
                            </p>
                            <p className="padding-left-20 white-bg margin-top-20">
                                You could also use an empty <code>alt</code> attribute to hide the image from the screen reader,
                                and add a <code>visually-hidden</code> span with the accessible name.
                            </p>
                            <p className="bullet-point-line margin-top-20">
                                <strong>desc</strong>
                            </p>  
                            <p className="padding-left-20 white-bg">
                                Similar to <code>alt</code> but for a <code>svg</code>. 
                            </p> 
                            <div className="padding-left-20">
                                <div className="code margin-top-20">             
                                    <code><span className="code-blue-color">&lt;svg</span> width="34" height="34" viewBox="0 0 34 34"<span className="code-blue-color">&gt;</span></code>
                                    <code className="padding-left-30"><span className="code-pink-color">&lt;desc&gt;</span>Bug<span className="code-pink-color">&lt;/desc&gt;</span></code>
                                    <code className="padding-left-30"><span className="code-yellow-color">&lt;circle</span> cx="17" cy="17" r="17" fill="currentColor"<span className="code-yellow-color">&gt;</span><span className="code-yellow-color">&lt;/circle&gt;</span></code>
                                    <code><span className="code-blue-color">&lt;/svg&gt;</span></code>
                                </div>
                            </div>
                            <p className="bullet-point-line margin-top-20">
                                <strong>title</strong>
                            </p>
                            <p className="padding-left-20">
                                Avoid it! It's tricky to make it accessible to screen reader users.
                                You can still use it to provide a visual tooltip on mouseover, but don't rely on it for
                                the accessible name.
                            </p>
                            <p className="margin-top-20 padding-left-20 white-bg">
                                Please note this is an attribute that is added to the opening HTML tag of an element.
                                Do not confuse it with the <code>&lt;title&gt;</code> tag, which is used to provide 
                                a title for a web page.
                            </p>
                            <p className="bullet-point-line margin-top-20">
                                    <strong>aria-labelledby</strong>
                            </p>
                            <p className="padding-left-20">
                                It has the highest priority among all the other options, including the visible text.
                            </p>
                            <p className="margin-top-20 padding-left-20">
                                It references the ID of another element that has visual text. The text of that 
                                element then becomes the name of the current element. 
                            </p>
                            <p className="margin-top-20 padding-left-20 white-bg">
                                For example, when using a button with an icon and no text, but there is a heading
                                nearby that describes the purpose of the button, you could use <span> </span>
                                <code>aria-labelledby="id of the heading"</code> to provide the name for the button.
                            </p>

                            <p className="bullet-point-line margin-top-20">
                                <strong>aria-label</strong>
                            </p>
                            <p className="padding-left-20 white-bg">
                                It takes a string value 
                                that becomes the name of the element. For example, <span> </span>
                                <code>aria-label="Close survey"</code> could be used to provide the name
                                for a button.
                            </p>
                            <p className="padding-left-20 margin-top-20">
                                Its main difference with <strong>aria-labelledby</strong>? It's not visible, and it's only announced
                                to the screen reader user. Read more about <span> </span>
                                <Link to="/resources/similar-but-different#aria-label-aria-labelledby">
                                    the difference between aria-label and aria-labelledby
                                </Link>.
                            </p> 
                            <p className="padding-left-20 white-bg margin-top-20">
                                <strong>Use it if nothing else is available</strong>!
                                The biggest issue with <code>aria-label</code>?
                                It does not take a <code>lang</code> attribute (read 
                                    <span> </span>
                                <Link to="/resources/make-it-accessible-part1#the-language-attribute">
                                    how to use the lang attribute
                                </Link>),
                                nor it's guaranteed to be translated by all browsers. This unfortunately prevents 
                                your content from being accessible to a global audience (a process called "internationalization").
                            </p>
                            <p className="padding-left-20 margin-top-20 white-bg">
                                Plus, it creates a problem for speech users, just like the <code>visually-hidden</code> text does:
                                they will have to 
                                guess the name of the element since it's not visible, or go through a series of other commands
                                until they can select the element.
                            </p>
                            <p className="margin-top-20">
                                <b>More on this topic</b>: <span> </span>
                                A post by Adrian Roselli, an accessibility expert, <span> </span>
                                <ExternalLink 
                                    href="https://adrianroselli.com/2020/01/my-priority-of-methods-for-labeling-a-control.html"
                                    visibleText="ranking methods for labeling a control"
                                />.
                            </p> 
                        </div>
                        <div className="checkmark-line white-bg">
                            <p>
                                <strong>
                                    To summarize:
                                </strong>
                            </p>
                            <p  className="margin-top-10">
                                <span className="pink-text bold">&#x2714; </span> 
                                <span>
                                    If there's no visible text (or label), or at least text with 
                                    a <code>visually-hidden</code> class, 
                                    the algorithm relies on the content of certain 
                                    HTML (<code>alt</code>, <code>title</code>) and 
                                    ARIA (<code>aria-labelledby</code>, <code>aria-label</code>) attributes.
                                </span>
                            </p>
                            <p className="margin-top-20">
                                <span className="pink-text bold">&#x2714; </span>
                                <span>
                                    The ARIA attributes are given priority even when the element has visible text or a label.
                                    The idea being that they were added to offer a more descriptive or tailored name 
                                    for the element. So, if the element has descriptive visible text or label, do not add <span> </span>
                                    <code>aria-labelledby</code> or <code>aria-label</code>!
                                </span>
                            </p>
                        </div>        
                    </div>
                                     
                    {/* Example: <code>button</code> with no text */}
                    <div id="visually-hidden-text" style={{width: "100%"}}>
                        <div className="highlight">  
                            <h3 className="white-bg">
                                    Example: Using visually-hidden text
                            </h3>
                            <div className="code margin-top-30 margin-bottom-30">
                                <code>
                                    <span className="code-blue-color">&lt;button</span> id="close-menu"
                                    <span className="code-blue-color">&gt;</span>
                                </code>
                                <code className="padding-left-30">
                                    <span className="code-yellow-color">&lt;img</span> src="x-mark.svg"
                                    <span className="code-yellow-color">/&gt;</span> 
                                </code>
                                <code className="padding-left-30">
                                    <span className="code-yellow-color">&lt;span</span> class="<span className="code-pink-coor">visually-hidden</span>"
                                    <span className="code-yellow-color">&gt;</span>
                                    Close menu
                                    <span className="code-yellow-color">&lt;/span&gt;</span> 
                                </code>
                                
                                <code><span className="code-blue-color">&lt;/button&gt;</span></code>
                            </div>
                            <p className="margin-top-50 white-bg">
                                The button contains an image and no visible text. 
                                The browser will use the text from the <code>visually-hidden</code> span to compute 
                                the accessible name "Close menu".
                            </p>
                            <p className="white-bg">
                                For the sighted user, it will be obvious that the purpose of the button is to close 
                                the modal. But for a screen reader user, it would be a mystery
                                without the <code>visually-hidden</code> text.  
                            </p>    
                            <p>
                                See the Pen below for an example of how to hide text visually.
                            </p>                  
                        </div>
                    </div>       
                    <iframe 
                        height="330" style={{width: "100%", border: "0", margin: "20px 0"}}
                        title="code pen: example of visually hidden class"
                        src="https://codepen.io/Cor-Ina/embed/oNmoYeR?default-tab=html" 
                        frameBorder={0} loading="lazy" allowFullScreen={true}>
                        See the Pen <a href="https://codepen.io/Cor-Ina/pen/oNmoYeR">
                        Visually Hidden</a> by Corina (<a href="https://codepen.io/Cor-Ina">@Cor-Ina</a>)
                        on <a href="https://codepen.io">CodePen</a>.
                    </iframe>    
                               
                </div>

                {/* CONCLUSION */}
                <div className="section scroll-target conclusion-howA11yWorks" id="conclusion">
                    <h2>Conclusion</h2>
                    <p>
                        We just reviewed the role the accessibility tree plays in making the web accessible.
                        A few key takeaways:
                    </p>
                    <p className="bullet-point-line">
                        The accessibility tree represents the structure of a webpage in a way 
                        that is meaningful for users of assistive technologies.
                    </p>
                    <p className="bullet-point-line">
                        Certain objects in the accessibility tree must have a name, and it has to be descriptive
                        in order to convey their purpose.
                    </p>
                    <p className="bullet-point-line">
                        Semantic HTML tags should always be your first choice. They provide
                        the best accessibility out of the box.
                    </p>
                    <p className="margin-top-30">
                        Now, let's have a look at the most common accessibility issues!   
                    </p>
                    
                    <p className="margin-top-30">
                        <b>Read next: </b>
                        <Link 
                            to="/resources/most-common-bugs" 
                        >
                            The Most Common Acessibility Bugs
                        </Link>
                    </p>
                    
                </div>
            </div>         
        </div>
    )
}


