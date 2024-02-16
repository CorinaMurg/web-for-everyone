import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import useDocTitle from "../../../hooks/useDocTitle"
import useScrollToSection from "../../../hooks/useScrollToSection"
import useHighlightTOC from "../../../hooks/useHighlightTOC"
import TableOfContents from "../../../components/TableOfContents/TableOfContents"
import BackLinks from "../../../components/BackLinks/BackLinks"
import WarningTriangle from "../../../components/WarningTriangle"
import scrollToTop from "../../../utils/scrollToTop"
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
        listClassName: "padding-left-20",
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
        listClassName: "padding-left-20", 
    },
    {
        href: "#explicit-roles",
        text: "Explicit Roles",
        ariaLabel: "Explicit Accessibility Roles", 
        listClassName: "padding-left-20",  
    },
    {
        href: "#the-accessible-name",
        text: "The Accessible Name",
    },
    {
        href: "#the-accessible-name-computation-algorithm",
        text: "The Accessible Name Algorithm",
        listClassName: "padding-left-20",
    },
    {
        href: "#example-button-no-visible-text",
        text: "Example: Button with no Visible Text",
        listClassName: "padding-left-20",
    },
    {
        href: "#conclusion",
        text: "Conclusion",
    },
]

export default function MostCommonBugs() {
    useDocTitle("How Accessibility Works | Web for Everyone");  
    useScrollToSection();  
    const { activeId } = useHighlightTOC();
    
    return (
        <div className="article-container howA11yWorks-container">
            
            <BackLinks 
                secondLink="Understanding Accessibility" 
                href="/resources#understanding-accessibility" 
                current="How Accessibility Works"
            />
            
            <h1 className="article-heading-desktop">
                <span>How <span className="yellow-bg">Accessibility</span> works</span> 
            </h1>
            <h1 className="article-heading-mobile">
                <span>How</span>
                <span><span className="yellow-bg">Accessibility</span> works</span>
            </h1>
            <p className="subtitle">DOM's Powerful Sibling: the Accessibility Tree</p>

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
                    <div className="section scroll-target" id="DOM-tree-vs-accessibility-tree">
                        <h3>
                            DOM Tree vs. Accessibility Tree
                        </h3>
                        <p> 
                            Let's take the navbar component of this website and compare its representation in the DOM 
                            and the accessibility trees.
                        </p>

                        <div className="highlight">
                            <h4 className="margin-top-10">Navbar: DOM tree representation</h4>
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
                                <code className="padding-left-60">// other list items</code>
                                <code><span className="code-yellow-color padding-left-30">&lt;/ul&gt;</span></code>
                                <code><span className="code-blue-color">&lt;/nav&gt;</span></code>
                            </div>
                        </div>

                        <div className="highlight">
                            <h4 className="margin-top-10">Navbar: Accessibility tree representation</h4>
                        
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
                                <code className="padding-left-60">// other list items</code>
                            </div>
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
                        <h4 className="margin-top-10">
                            Zooming in on an accessible object <span aria-hidden="true">🔍</span>
                        </h4>
                        <p> 
                            Let's look at the first link object to understand why using semantic HTML helps 
                            accessibility. 
                        </p>
                        <p><strong>Details available</strong></p>
                        <ul className="checkmark-list padding-left-20">
                            <li><span className="pink-text bold">&#x2714; </span><span>Name: Home</span></li>
                            <li><span className="pink-text bold">&#x2714; </span>Role: link</li>
                            <li><span className="pink-text bold">&#x2714; </span>Property: focusable</li>
                            <li><span className="pink-text bold">&#x2714; </span>State: focused</li>
                        </ul>
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
                        <p><strong>Assitive tech reaction</strong></p>
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
                    <div className="section scroll-target" id="explicit-roles">
                        <h3>
                            Explicit Roles
                        </h3>
                        <p>
                            Developers can also explicitly assign a role to an HTML element using <b>ARIA</b> roles                          
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
                            that allow us to modify the default behavior of the div.
                        </p>
                        
                        <p>
                            <strong>Is this button accessible yet? Absolutely not!</strong>
                        </p>
                        
                        <p className="white-bg">
                            While the <code>tabindex</code> attribute makes it focusable, the button will not be
                            fully functional until we add other attributes and events:
                        </p>
                        
                        <p className="bullet-point-line white-bg">
                            event handlers to allow the button to be activated with 
                            the <span className="yellow-bg-dark-text">Enter</span> <span> </span>
                            or <span className="yellow-bg-dark-text">Space</span> keys (available by default with the <span> </span>
                            <code>&lt;button&gt;</code> tag; important for screen reader users!)
                        </p>
                        <p className="bullet-point-line white-bg">
                            depending on the desired functionality, <code>aria-pressed</code> or <code>aria-expended</code> to indicate the button's state
                        </p>
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
                        accessibility tree example has a name? 
                        It is the name that assistive technologies will use to announce the link to the user
                        (or, for speech recognition software, the name that will be used to activate 
                        the link). 
                    </p>
                    <p>
                        <strong>Certain elements must have a name</strong> (or a label), and it has to be descriptive enough to convey the
                        element's purpose. In our example, the name associated with each link happens to be the 
                        visible text of the link, but other attributes can be used to compute the name.
                    </p>
                    
                    {/* *****Accessible Name Computation Algorithm***** */}
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
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                accessible name and description computation algorithm
                                <span className="sr-only"> opens in a new tab</span>
                                <span className="external-linksvg-wrap">
                                    &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512"><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"/></svg>    
                                </span>
                            </a>
                            <span> </span> 
                            that follows a set of (quite headache-inducing) rules. This algorithm takes into account
                            the visible text or label of the element, but several other attributes are considered
                            as well:
                        </p>
                       
                        <div className="padding-left-20">
                            <p className="bullet-point-line">
                                    <strong>aria-labelledby</strong>
                            </p>
                            <p className="padding-left-20">
                                It has the highest priority among all the other attributes.
                            </p>
                            <p className="margin-top-20 padding-left-20">
                                It references the ID of another element that has visual text. The text of that 
                                element then becomes the name of the current element. 
                            </p>

                            <p className="bullet-point-line margin-top-20">
                                <strong>aria-label</strong>
                            </p>
                            <p className="padding-left-20">
                                It takes a string value that becomes the name of the element. It is added to the
                                opening tag of the element.
                            </p>
                            <p className="padding-left-20 margin-top-20">
                                Read more about <span> </span>
                                <Link to="/resources/similar-but-different#aria-label-aria-labelledby">
                                    the difference between <strong>aria-label</strong> and <strong>aria-labelledby</strong>
                                </Link>
                            </p>
                            
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
                                <strong>alt</strong>
                            </p>  
                            <p className="padding-left-20 white-bg">
                                Use it for interactive images. For example, given a link that contains an image and no 
                                visible text or ARIA attributes, the browser will use the <code>alt</code> attribute 
                                to compute the accessible name.
                            </p>    
                        </div>
                                                    
                        <p>
                            In fact, the content of these attributes is 
                            given priority when creating the accessible name. The idea being that these were likely added 
                            to offer a more descriptive or tailored name for the element. They could also be included
                            to provide a name when the element has no visible text. 
                        </p>

                        <p>
                            If none of the priority attributes are available, the algorithm relies on <strong>visible text</strong>.</p>
                        <p>
                            <b>Recommended reading: </b>
                            A post by Adrian Roselli, an accessibility expert, on why the <span> </span>
                            <a href="https://adrianroselli.com/2020/01/my-priority-of-methods-for-labeling-a-control.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                visible text is the best choice for the accessible name
                            </a>.
                            
                        </p>
                    </div>
                                     
                    {/* Example: <code>button</code> with no visible text */}
                    <div id="example-button-no-visible-text" className="scroll-target">
                        <div className="highlight">  
                            <h3 className="white-bg">
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
                            <p className="margin-top-50 white-bg">
                                The button contains an image and no visible text. 
                                The browser will use the <code>aria-label</code> attribute to compute 
                                the accessible name "Close modal".
                            </p>
                            <p className="white-bg">
                                For the sighted user, it will be obvious that the purpose of the button is to close 
                                the modal. But for a screen reader user, it would be a mystery
                                without the <code>aria-label</code> attribute. 
                            </p>                      
                        </div>
                    </div>           
                        
                    <div className="warning">
                        <WarningTriangle/>
                        <p>These elements must have a <span className="bold">
                            descriptive accessible name</span>:
                        </p>              
                        <p className="bullet-point-line">
                            <span className="bold">links</span> and <span className="bold"> buttons</span>
                        </p>   
                        <p className="bullet-point-line">
                            <span className="bold">all form elements</span>, like inputs or radio buttons
                        </p>
                        {/* <p className="padding-left-20">
                            For an interactive element, assistive technologies need its name to convey
                            its purpose or the content to the user. 
                        </p>  
                        <p className="padding-left-20">
                            When using speech recognition software,
                            the name must also be part of the command that will activate the element (like in the case
                            of links and buttons) or bring it into focus (in case of form fields, for example).
                        </p> */}
                    
                        {/* <p className="bullet-point-line gray-bg">
                            <span className="bold">images</span>, if they are interactive

                        </p> */}
                    
                        <p className="bullet-point-line">
                            <span className="bold">headings</span>
                            {/* : the majority of screen reader users 
                            rely on headings to learn about the structure and content of a page */}
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
                    
                    <p className="margin-top-30">
                        <b>Read next: </b>
                        <Link 
                            to="/resources/most-common-bugs" 
                            onClick={scrollToTop}
                        >
                            Most Common Acessibility Bugs
                        </Link>
                    </p>
                    
                </div>
            </div>         
        </div>
    )
}


