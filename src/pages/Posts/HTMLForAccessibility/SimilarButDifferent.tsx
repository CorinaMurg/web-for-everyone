import React from "react"
import { Link } from "react-router-dom"
import useDocTitle from "../../../hooks/useDocTitle"
import useScrollToTop from "../../../hooks/useScrollToTop"
import useScrollToSection from "../../../hooks/useScrollToSection"
import useHighlightTOC from "../../../hooks/useHighlightTOC"
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
        text: "title vs. heading",
        ariaLabel: "Compare title and heading",
    },
    {
        href: "#focus-focus-visible",
        text: "focus vs. focus-visible",
        ariaLabel: "Compare focus and focus-visible",
    },
]

export default function SimilarButDifferent() {
    useDocTitle("Similar but Different | Web for Everyone");  
    useScrollToTop();  
    useScrollToSection();
    const { activeId } = useHighlightTOC();
    
    return (
        <div className="article-container similar-different">
            <BackLinks 
                secondLink="HTML for Accessibility"
                href="/resources#html-for-accessibility" 
                current="Similar but Different: HTML and ARIA terms"
            />
            
            <h1 className="article-heading-desktop">
                <span>Similar but Different:</span>
                <span><span className="yellow-bg">HTML and ARIA</span> terms</span>
            </h1>
            <h1 className="article-heading-mobile">
                <span>Similar but</span>    
                <span>Different:</span>
                <span><span className="yellow-bg">HTML</span> and <span className="yellow-bg">ARIA</span> terms</span> 
            </h1>
            <p className="subtitle">Matching terms against each other</p>

            <TableOfContents contents={contents} activeId={activeId}/>
            
            <div className={`article-content ${styles['similar-but-different']}`}>

                {/* *** ARIA-LABEL VS ARIA-LABELLEDBY */}
                <div className="section scroll-target" id="aria-label-aria-labelledby">
                    <h2 aria-label="Compare aria-label and aria-labelledby">
                        <span>
                            aria-label<span className={styles['versus-icon']}>⚔️</span>
                        </span>
                        <span>aria-labelledby</span>
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
                            <span className="code-blue-color">&lt;button</span> <span className="code-yellow-color"> aria-label</span>="Close registration"
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
                        {/* For a custom landmark, use the <code>&lt;section&gt;</code> tag. */}
                    </p>
                    
                    <h3>Key Differences</h3>      
                    <p>
                        <strong className="yellow-bg-dark-text">Direct vs. Indirect Labeling</strong>  
                    </p>
                    <p className="bullet-point-line white-bg">
                        <strong>aria-label</strong> provides a direct label to an element using a 
                        string value. Unfortunately, It does not take a <code>lang</code> attribute (read 
                        <span> </span>
                        <Link to="/resources/make-it-accessible-part1#the-language-attribute">
                            how to use the lang attribute
                        </Link>),
                        nor it's guaranteed to be translated by all browsers. This unfortunately prevents 
                        your content from being accessible to a global audience (a process called "internationalization"). 
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
                        <strong>aria-labelledby</strong> references elements that are visible on 
                        the page. It is also announced by screen readers. 
                    </p>
                    <p>
                        <strong className="yellow-bg-dark-text">Concatenation</strong>
                    </p>
                    <p className="bullet-point-line">
                        While <strong>aria-label</strong> takes a single string, 
                        <strong> aria-labelledby</strong> can reference multiple IDs, and we can
                        concatenate the names of different elements.
                    </p>
                </div>               

                {/* **********TITLE VS HEADING************* */}
                <div className="section scroll-target" id="title-heading">
                    <h2 aria-label="Compare title and heading">
                        <span>
                            title<span className={styles['versus-icon']}>⚔️</span> 
                        </span>
                        <span>heading</span>
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
                <div className={`section scroll-target ${styles['focus-focus-visible']}`} id="focus-focus-visible">
                    <h2 aria-label="Compare focus and focus-visible">
                        <span>focus<span className={styles['versus-icon']}>⚔️</span></span> 
                        <span>focus-visible</span>
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
                        This behavior improves everyone's experience, without cluttering the interface 
                        for mouse users.
                    </p>

                    <p>
                        When you override the default focus styles using 
                        the <code className="pink-bg-white-text">:focus</code> pseudo-class, your custom styles 
                        will apply to all 
                        focus events, regardless of how they were triggered (mouse click or keyboard 
                        navigation). 
                    </p>
                    <p>
                        It's not the end of the world, of course, but we can do better!
                    </p>

                    <p>
                        <code className="pink-bg-white-text">:focus-visible</code> is the better choice. It mimics 
                        the default behavior of the browser: it applies to all elements reached via keyboard
                        and only to certain elements reached via mouse click. Quite smart, right?
                    </p>          
                </div>
                    
            </div>          
        </div>
    )
}




