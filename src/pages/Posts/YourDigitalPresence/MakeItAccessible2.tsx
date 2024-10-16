import React from "react"
import { Link } from "react-router-dom"
import { useThemeClass } from "../../../hooks/useThemeClass"
import useScrollToTop from "../../../hooks/useScrollToTop"
import useDocTitle from "../../../hooks/useDocTitle"
import useScrollToSection from "../../../hooks/useScrollToSection"
import useHighlightTOC from "../../../hooks/useHighlightTOC"
import TableOfContents from "../../../components/TableOfContents/TableOfContents"
import BackLinks from "../../../components/BackLinks/BackLinks"
import ScrollToTopButton from "../../../components/ScrollToTopButton/ScrollToTopButton"
import "../../../global.css"
import styles from "./MakeItAccessible2.module.css"

const contents = [
    {
        href: "#intro",
        text: "Introduction",
    },
    {
        href: "#zooming-scaling",
        text: "Zooming and scaling",
    },
    {
        href: "#title-element",
        text: "The title element",
    },
    {
        href: "#skip-link",
        text: "Skip link",
    },
    {
        href: "#keyboard-navigation",
        text: "Keyboard navigation",
    },
    {
        href: "#visible-focus",
        text: "Visible focus",
    },
    {
        href: "#headings-in-logical-order",
        text: "Headings in logical order",
    },
    {
        href: "#conclusion",
        text: "Conclusion",
    },
]

export default function MakeItAccessible() {  
    useDocTitle("Let's uncover six more bugs | Web for Everyone");
    useScrollToTop();
    useScrollToSection();
    const { activeId } = useHighlightTOC();

    const themeClass = useThemeClass();

    return (
        <div className={`article-container ${themeClass}`}>
          
            {/* **************Back Links********************** */}
            <BackLinks 
                secondLink="Your portfolio site" 
                href="/blog#your-portfolio-site" 
                current="The next six bugs"
            />
            
            <h1 aria-describedby="subtitle" className="article-heading-desktop">
                <span>Level up: the next </span>
                <span>6 bugs to watch for</span>
                
            </h1>
            {/* <h1 className="article-heading-mobile">
                <span>Level up: the next </span>
                <span>6 bugs to watch for</span>
            </h1> */}
            <p id="subtitle" className="subtitle">Accessibility with HTML, CSS, and a touch of JavaScript </p>

            {/* **************Table of Contents********************** */}
            <TableOfContents contents={contents} activeId={activeId}/>

            {/* **************Article Content********************** */}
            <div className={`article-content makeItTwo ${themeClass}`}>
                <div className="section intro scroll-target" id="intro">
                    <h2 className="sr-only">Introduction</h2>
                    <p>
                        We continue our hunt for accessibility issues that can affect your 
                        portfolio site. We started with <span> </span>
                        <Link to="/blog/fixing-the-six-most-common-bugs" 
                        >
                            Fixing the 6 most common bugs
                        </Link>.
                        We noticed that they can be kept in check with just semantic 
                        HTML, and at times a bit of CSS or ARIA attributes.
                    </p>
                    <p>
                        Are the next 6 bugs as easy to avoid? Yes, with one exception that might 
                        require a bit of JavaScript.
                    </p>
                    
                </div>

                {/* ****************PINCH AND ZOOM************************* */}
                <div className={`section ${styles['pinch']} scroll-target`} id="zooming-scaling">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">07</span>
                        <h2>Zooming and scaling</h2>
                    </div>

                    <div className={`code ${styles['code--title']}`}>
                        <code><span className="code-blue-color">&lt;head&gt;</span></code>
                        <code className="padding-left-30">
                            <span className="code-yellow-color">&lt;meta&gt;</span>
                        </code>
                        <code className="padding-left-60">
                            name=&quot;viewport&quot;
                        </code>
                        <code className="padding-left-60"><span className="code-pink-color">{'// remove these attributes!'}</span></code>
                        <code className="padding-left-60">
                            content=&quot;user-scalable=<span className="code-pink-color">no</span>, 
                            maximum-scale=<span className="code-pink-color">1.0</span>&quot;
                        </code>
                        <code className="padding-left-30">
                            <span className="code-yellow-color">/&gt;</span>
                        </code>
                        <code><span className="code-blue-color">&lt;head&gt;</span></code>
                    </div>
       
                    <h3>Allow zooming of at least 200%</h3>

                    <p className="white-bg">
                        Either one of <code>user-scalable=no</code> or <code>maximum-scale=1.0</code> can
                        prevent users from zooming in on a page. Those with low vision need the ability to zoom
                        in to read the content. In fact, any user would benefit from the "pinch and zoom" feature 
                        on a mobile device!
                    </p>
                    <div>
                        <p>Remember to:</p>
                        <ul role="list" className="bullet-point-list">
                            <li>
                                <p className="white-bg">
                                    not include <code>user-scalable=no</code> in the <code>viewport</code> meta tag.
                                </p>
                            </li>
                            <li>
                                <p className="white-bg">
                                    set the <code>maximum-scale</code> to at least 2.0, in line with accessibility guidelines 
                                    that require a minimum zoom level of 200%.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ****************TITLE ELEMENT************************* */}
                <div className={`section ${styles['title']} scroll-target`} id="title-element">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">08</span>
                        <h2>The title element</h2>
                    </div>

                    <div className="code">
                        <code><span className="code-blue-color">&lt;head&gt;</span></code>
                        <code className="padding-left-30">
                            <span className="code-yellow-color">&lt;title&gt;</span>
                            Web for Everyone
                            <span className="code-yellow-color">&lt;/title&gt;</span>
                        </code>
                        <code><span className="code-blue-color">&lt;head&gt;</span></code>
                    </div>
       
                    <h3>Let users know what page they are on</h3>
                    <p className="white-bg">
                        The content of the <code>&lt;title&gt;</code> element gets displayed in the browser's 
                        title bar or tab. It's important because:
                    </p>
                    <p className="bullet-point-line">
                        It helps sighted users identify a certain page when they have multiple tabs open.
                        (It's true, the favicon can play the same role and better since it's placed before the title.)
                    </p>
                    <p className="bullet-point-line">
                        It helps screen reader users understand which page they are on. As they navigate from page 
                        to page, the title is the first element announced by the screen reader. 
                    </p>
                    <div>
                        <h4>
                            Do make sure each page has a unique title!
                        </h4>
                        
                        <p>
                            If you're building with vanilla JavaScript, add a title to each HTML file.
                        </p>
                        <p className="white-bg">
                            It gets more complicated with a Single Page Application (SPA), but each framework has specific 
                            features or libraries that allow for updating the <code>title</code> for each page.
                            Research, choose a method, and implement it. (This is the one case where you might need to use JavaScript!)
                        </p>
                    </div>
                    
                    <div className="highlight highlight-one-line">
                        <details>
                            <summary>
                                <span className="summary-title">
                                    Example: React custom hook to update the title
                                </span>
                            </summary>
                            <div className="details-content">
                                <div className="code margin-top-50">
                                    <code>
                                        import &#123; <span className="code-yellow-color">useEffect</span> &#125; from 'react';
                                    </code>
                                    <br/>
                                    <code>
                                        function <span className="code-blue-color">useDocTitle</span>
                                        (<span className="code-pink-color">title</span>) &#123;
                                    </code>
                                    <code className="padding-left-30"><span className="code-yellow-color">useEffect</span>(() =&gt; &#123;</code>
                                    <code className="padding-left-60">document.title = title;</code>
                                    <code className="padding-left-30">&#125;, [<span className="code-pink-color">title</span>]);</code>
                                    <code>&#125;;</code>
                                </div>
                                <br/>
                                <p>Then import the hook and use it in your component:</p>
                                <div className="code">
                                    <code>
                                        import <span className="code-blue-color">useDocTitle</span> from '../hooks/useDocTitle';
                                    </code>
                                    <br/>
                                    <code>
                                        function <span className="code-yellow-color">About</span>() &#123;
                                    </code>
                                    <code className="padding-left-30">
                                        <span className="code-blue-color">useDocTitle</span>("About | Web for Everyone");
                                    </code>
                                    <code className="padding-left-30">// rest of the component</code>
                                    <code>&#125;</code>
                                </div>
                            </div>
                        </details>       
                    </div>
                </div>

                {/* ****************SKIP LINK************************* */}
                <div className="section skip scroll-target" id="skip-link">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">09</span>
                        <h2>The skip link</h2>
                    </div>

                    <div className="code code--skip">
                        <code><span className="code-blue-color">&lt;nav&gt;</span></code>
                        <code className="padding-left-30">
                            <span className="code-yellow-color">&lt;a</span> class="skip-to-content" href="#main"
                            <span className="code-yellow-color">&gt;</span>
                        </code>
                        <code className="padding-left-60"><span className="code-pink-color">Skip to main content</span></code>
                        <code className="padding-left-30"><span className="code-yellow-color">&lt;/a&gt;</span></code>
                        <code className="padding-left-30">// other navigation elements</code>
                        <code><span className="code-blue-color">&lt;/nav&gt;</span></code>
                    </div>
           
                    <h3>Allow keyboard users to jump straight to the main content</h3>
                    <p>
                        Practicing accessibility is not always about avoiding or fixing bugs. 
                        Sometimes it's about making the experience better for your users. Skip links are
                        a great example of this. 
                    </p>
                
                    <p className="white-bg">
                        You can improve the experience of your keyboard-only visitors by including
                        a <span className="pink-bg-white-text">Skip to main content</span> link at the beginning 
                        of the page. 
                        This can make a big difference for users with limited mobility. Instead of tabbing through 
                        a long list of 
                        links they could bypass navigation and jump directly to the main content. 
                    </p>
                   
                    <p>
                        It's true, your portfolio site is not likely to have an extensive navigation, but it's still
                        a good practice to include the link.
                        You will most likely have to consider it for future complex projects.
                    </p>

                    <div className="highlight">
                        <h4>Example: A skip link in action</h4>
                        <p>
                            Check out how the <span> </span>
                            <a href="https://www.nytimes.com/" target="_blank" rel="noreferrer"> 
                                New York Times
                                <span className="sr-only"> opens in a new tab</span>
                                <span className="external-linksvg-wrap">
                                    &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512"><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"/></svg>    
                                </span>
                            </a>
                            <span> </span>
                            has implemented the skip link. 
                        </p>
                        <p>
                            <span className="bold">How to activate the link</span>: open the page, 
                            press the <span className="yellow-bg">Tab</span> key.
                            The skip link is the first element to receive focus. Pressing enter will take you 
                            to their main content.

                        </p>
                        <p>
                            If not for the link, notice how many elements
                            a visitor would have to first tab through before reaching the main content!
                        </p>
                        <br></br>
                        {/* <p>
                            Now for an opposite experience, visit the <span> </span>
                            <a href="https://www.bbc.com/" target="_blank" rel="noreferrer"> 
                                BBC
                                <span className="sr-only"> opens in a new tab</span>
                                <span className="external-linksvg-wrap">
                                    &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512"><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"/></svg>    
                                </span>
                            </a>
                            <span> </span>
                            site.
                        </p>
                       
                        <p>
                            As of the time of this writing (January 5th, 2024), the skip link is not present. 
                            Tab through the navigation until you reach the main content. 
                            Choose an article and click on it. To reach the body of the article
                            you have to tab through the navigation (again!). 
                        </p> */}
                    </div>
                    
                    <div className="highlight highlight-one-line">
                        <details>
                            <summary>
                                <span className="summary-title">
                                    Example: code for a skip link
                                </span>
                            </summary>
                            <div className="details-content">
                            <div className="code margin-top-30">
                                <code><span className="code-blue-color">.skip-to-content</span> &#123;</code>
                                <code className="padding-left-30">background-color: orange;</code>
                                <code className="padding-left-30">color: black;</code>
                                <code className="padding-left-30">font-size: 1rem;</code>
                                <code className="padding-left-30">left: 20px;</code>
                                <code className="padding-left-30">margin-inline: auto;</code>
                                <code className="padding-left-30">padding: 5px 10px;</code>
                                <code className="padding-left-30">position: absolute;</code>
                                <code className="padding-left-30">
                                <span className="code-pink-color">transform</span>: translateY(-300%);</code>
                                <code className="padding-left-30">
                                    <span className="code-pink-color">transition</span>: transform 250ms ease-in;</code>
                                <code className="padding-left-30">z-index: 100;</code>
                                <code>&#125;</code>

                                <code className="margin-top-30">
                                    <span className="code-blue-color">.skip-to-content</span>:
                                    <span className="code-yellow-color">focus</span> &#123;
                                </code>
                                <code className="padding-left-30">
                                    <span className="code-pink-color">transform</span>: translateY(0%);
                                </code>
                                <code>&#125;</code>
                            </div>
                            </div>
                        </details>
                    </div>                      
                </div>

                {/* ****************KEYBOARD NAVIGATION******************* */}
                <div className="section keyboard scroll-target" id="keyboard-navigation">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">10</span>
                        <h2>Keyboard navigation</h2>
                    </div>

                    <div className={`${styles['code-keyboard']} code-keyboard`}>
                        <div className={styles['code-keyboard--div']}>
                            <code>Home</code>
                        </div>
                        <div className={`${styles['code-keyboard--div']} ${styles['focus-ring']}`}>
                            <code>Resources</code>
                        </div>
                        <div className={styles['code-keyboard--div']}>
                            <code>About</code>
                        </div>
                           
                    </div>
        
                    <h3>Allow keyboard-only users to navigate a page</h3>
                    <p>
                        <span className="bold">Not everyone can use a mouse!</span> People who are blind or have low vision, 
                        as well as those without fine motor skills, rely on a keyboard to navigate the web. 
                    </p>
                    <p>
                        Make sure all interactive elements on your site are reachable and usable with a keyboard.
                    </p>
                    <div>
                        <h4>How to test:</h4>
                        <p className="bullet-point-line white-bg">
                            Press the <span className="yellow-bg">Tab</span> key to move forward 
                            (<span className="yellow-bg">Shift + Tab</span> to move backward)
                            through the interactive elements on the page. Each element should receive focus 
                            and you should see an outline around it. (More about how to style the outline in the next section.)
                        </p>
                        <p className="margin-top-20 padding-left-20 white-bg">
                            If you used semanic HTML tags like <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code> or <code>&lt;input&gt;</code>,
                            this will happen automatically. 
                        </p>
                        <p className="margin-top-20 padding-left-20 white-bg">
                            If you used <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>,
                            and forgot the <code>tabindex</code> attribute, the element will be skipped.

                        </p>
                        <p className="bullet-point-line white-bg margin-top-30">
                            Press <span className="yellow-bg">Enter</span> to activate the element 
                            (for a button the <span className="yellow-bg">Space</span> bar will also work).
                            It should trigger the expected action.
                        </p>
                        <p className="margin-top-20 padding-left-20 white-bg">
                            Again, if you used semantic HTML tags, this will happen automatically.
                            With <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>, these event listeners have to be 
                            added explicitly.
                        </p>
                    </div>       
                </div>

                {/* ****************VISIBLE FOCUS************************* */}
                <div className="section focus scroll-target" id="visible-focus">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">11</span>
                        <h2>Visible focus</h2>
                    </div>

                    <div className="code">
                        <code><span className="code-gray-color">// do not remove the outline unless you add another visual clue</span></code>
                        <code className="margin-top-10"><span className="code-blue-color">button</span>:focus &#123;</code>
                        <code className="padding-left-30"><span className="code-yellow-color">outline</span>: none;</code>
                        <code>&#125;</code>   
                    </div>
        
                    <h3>Let sighted keyboard users know where they are on the page</h3>
                    <p>
                        It is important that the element that receives focus changes its appearance. 
                        This way the user knows exactly where the focus is and which element will be activated
                        if they press the <span className="yellow-bg">Enter</span> or <span className="yellow-bg">Space</span> key.
                    </p>
                    <p>
                        Most browsers have a default focus style, the <span className="bold">focus ring</span>. 
                        For example, the default focus style in Chrome is a double, black and white outline.
                        You can choose to override it and create one that matches your design, 
                        but it's important to keep it visible.    
                    </p>
                    <div>
                        <p>
                            Here are a couple of options you have:
                        </p>
                        <ul role="list" className="bullet-point-list">
                            <li>
                                <p> Create a custom focus outline</p>
                            </li>
                            <li>
                                <p>Change the brightness (shade) of the element's background color</p>
                            </li>
                        </ul>
                    </div>
                    
                    
                    {/* ***Example: Creating a custom focus outline*** */}
                    <div className="highlight">
                        <h4>Example <span className="pink-text"> one</span>: Create a custom focus outline</h4>
                        <div className="code">
                            <code><span className="code-blue-color">button</span>:<span className="code-pink-color">focus-visible</span> &#123;</code>
                            <code className="padding-left-30"><span className="code-yellow-color">outline</span>: 2px solid color;</code>
                            <code className="padding-left-30"><span className="code-yellow-color">outline-offset</span>: 2px;</code>
                            <code>&#125;</code>   
                        </div>
                        <p className="bold bullet-point-line white-bg">
                            Define an <code>outline</code> that is 2 pixels thick, solid, and of the color of your choice. 
                        </p>
                        <p className="padding-left-20">
                            The color and the style can match your design, but make sure you have a contrast ratio of at 
                            least <span className="pink-bg-white-text"><code>3.0:1</code></span> between the outline and the 
                            background color of the element, as well as between the outline and the background of
                            the page.
                        </p>
                        <p className="bold bullet-point-line white-bg">
                            Use <code>outline-offset</code> to 
                            set the space between the outline and the edge of the element.
                        </p>
                        <p className="padding-left-20">
                            It's not required, but it does improve accessibility and focus visibility.
                            Plus, when used, you only have to worry about the contrast ratio between the outline and the
                            background of the page.
                        </p>
                        
                        <div className="margin-top-30 margin-bottom-20">
                            <p>
                                <span className="bold">For you to test: </span>
                                Use the <span className="yellow-bg">Tab</span> key to navigate to the 
                                button below and see the custom focus outline in action. 
                                The button is coded such that pressing it on a touch screen, or hovering 
                                over it with a mouse, will also trigger the focus outline.
                            </p>
                            <button 
                                aria-label="Used for teaching purposes, it triggers no action" 
                                className={styles['custom-outline--button']}
                                id='custom-outline--button'
                            >
                                Custom outline
                            </button>
                        </div>
                        <div className="border-top">
                            <p>
                                <span className="bold">Question</span>: why <span className="pink-bg-white-text"><code>:focus-visible</code></span> and 
                                not <span className="pink-bg-white-text"><code>:focus</code></span>?
                            </p>
                            <p> 
                                <span className="bold">:focus-visible</span> is smarter. It applies the style to all keyboard interractions, 
                                and only to specific mouse interractions (when beneficial to the user!)</p>
                            <p>
                                Follow this link to read more about <span> </span>
                                <Link to="/resources/similar-but-different#focus-focus-visible">
                                    how <span className="bold">:focus-visible</span> and <span className="bold">:focus</span> match against each other.
                                </Link>
                            </p>
                        </div>
                    </div>
                    
                    {/* ***Example: Changing the brightness of the background color*** */}
                    <div className="highlight margin-top-30">
                        <h4>Example <span className="pink-text"> two</span>: Change the brightness to show focus</h4>
                        <p>
                            One of the most important accessibility guidelines is to ensure that <span> </span>
                            <span className="bold">color alone is not used to convey information</span>. 
                            This applies to the focus state as well.
                        </p>
                        <p>
                            For example, changing the background color of 
                            a button from blue to green when it receives focus (assuming the outline was removed) 
                            is not recommended. Users who are color blind would not be able to tell the difference.
                        </p>
                        <p className="bold">
                            Instead, rely on a change in brightness to indicate focus.
                        </p>
                        <p>
                            It could be with that same color, like a change from a light blue to a darker blue. 
                            Or, it could be with a different color, like a change from light blue to dark gray.
                            These are great 
                            options when you have a family of interactive elements nested together.
                        </p>
                        <div className={styles['brightness--container']}>
                            <p>
                                <span className="bold">For you to test: </span>
                                Use the <span className="yellow-bg">Tab</span> key to navigate through the 
                                buttons below and notice the change in the background's shade. The buttons are coded 
                                such that pressing them on a touch screen, or hovering over them with a mouse, 
                                will also trigger a change in brightness.
                            </p>   
                            <div className={styles['brightness--buttons-wrapper']}>
                            <div className={styles['brightness--buttons']}>
                                <button aria-label="Used for teaching purposes, it triggers no action">Do</button>
                                <button aria-label="Used for teaching purposes, it triggers no action">Re</button>
                                <button aria-label="Used for teaching purposes, it triggers no action">Mi</button>           
                            </div>  
                            
                            
                            </div>                  
                            
                            <div className="margin-top-20">
                                <p className="bold">Two things to rememeber:</p>
                                <div className="checkmark-list">
                                    <p>
                                        <span className="pink-text bold">&#x2714; </span>
                                        &nbsp;
                                        When comparing the default state and the focused state, the contrast ratio
                                        between the background colors should be at least <span> </span> 
                                        <code><span className="pink-bg-white-text">3.0:1</span></code>.
                                    </p>
                                    <p>
                                        <span className="pink-text bold">&#x2714; </span>
                                        &nbsp;
                                        In each state, the contrast ratio between the background color and the text
                                        should be at least <code><span className="pink-bg-white-text">4.5:1</span></code>.
                                    </p>
                                </div>
                            </div>
                        </div>  
                        <div className={`${styles['brightness--did-you-know']} border-top`}>
                            <h4>
                                <span>Did you know? <span aria-hidden="true"> 💡</span></span>
                                <span>You can emulate vision deficiencies in DevTools! </span>
                            </h4>
                            <ul>
                                <li>
                                    <p className="bullet-point-line">Open <span className="bold"> Dev tools </span> and click on the <span className="bold">three dots</span> in the top right corner</p>
                                </li>
                                <li>
                                    <p className="bullet-point-line">Go to <span className="bold">More tools</span> and then <span className="bold">Rendering</span></p>
                                </li>
                                <li>
                                    <p className="bullet-point-line">Scroll to the bottom and select <span className="bold">Emulate vision deficiencies</span></p>
                                </li>
                                <li>
                                    <p className="bullet-point-line">
                                        Choose the deficiency you want to emulate (like the type of 
                                        color blindness) and see how your site looks to users with that deficiency.
                                    </p>
                                </li>

                            </ul>
                        </div>          
                    </div>
                                      
                </div>
                
                {/* ****************HEADINGS************************* */}
                <div className="section headings scroll-target" id="headings-in-logical-order">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">12</span>
                        <h2>Headings in logical order</h2>
                    </div>

                    <div className="code code--headings">
                        <code>
                            <span className="code-pink-color">&lt;h1&gt;</span>
                            The most important heading
                            <span className="code-pink-color">&lt;/h1&gt;</span>
                        </code>
                        <code className="padding-left-30">. . .</code>
                        <code className="padding-left-30">
                            <span className="code-yellow-color">&lt;h2&gt;</span>
                            The second heading in line
                            <span className="code-yellow-color">&lt;/h2&gt;</span>
                        </code>
                        <code className="padding-left-60">. . .</code>
                        <code className="padding-left-60">
                            <span className="code-blue-color">&lt;h3&gt;</span>
                            The third heading in line
                            <span className="code-blue-color">&lt;/h3&gt;</span>
                        </code>
                        <code className="padding-left-30">
                            <span className="code-yellow-color">&lt;h2&gt;</span>
                            The second heading in line
                            <span className="code-yellow-color">&lt;/h2&gt;</span>
                        </code>
                        <code className="padding-left-60">. . .</code>
                        <code className="padding-left-60">
                            <span className="code-blue-color">&lt;h3&gt;</span>
                            The third heading in line
                            <span className="code-blue-color">&lt;/h3&gt;</span>
                        </code>
                        <code className="padding-left-60">. . .</code>             
                    </div>
                    
                    <h3>Help screen reader users understand the structure of a page</h3>
                    <p>
                        When trying to find information on a page, most screen reader users rely on headings.
                        Pressing the <span className="pink-bg-white-text">H</span> key allows them to visit 
                        each heading and get an idea about the structure and the content of the page.  
                    </p>         
                    <div>
                        <h4> A few rules to follow with headings:</h4>
                        <ul className="bullet-point-list">
                            <li>
                                <p className="white-bg">
                                    Choose meaningful headings that describe the content of a section.
                                </p>
                            </li>
                            <li>
                                <p className="white-bg">
                                    Use <code>&lt;h1&gt;</code> at the start of your content.
                                </p>
                            </li>
                            <li>
                                <p className="white-bg">
                                    Don't skip heading levels. Use <code>&lt;h1&gt;</code> to <span> </span>
                                    <code>&lt;h6&gt;</code> in descending order.
                                </p>
                            </li>
                            <li>
                                <p className="white-bg">
                                    Don't use headings for decorative purposes. 
                                    If you need a word or a phrase to look bigger or bolder on page, use
                                    CSS. Do not use heading tags if a heading is not needed.
                                </p>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="highlight">
                        <h4 aria-label="Did you know automated tools can help with headings?">
                            Did you know? <span aria-hidden="true"> 💡</span>
                        </h4>
                        <p> 
                            Automated tools like Google's Lighthouse or axe DevTools can help with headings too!
                        </p>
                        <p>
                            For the first rule, you will need to rely on your own judgement, but the tools can 
                            easily catch if you missed any of the other rules. 
                        </p>
                    </div>
                </div>
            
                {/* ****************CONCLUSION************************* */}
                <div className="section conclusion scroll-target" id="conclusion">
                    <h2>Conclusion</h2>
                    <p>
                        You did it! You now know how to avoid 12 accessibility issues. 
                        {/* Congratulations!   */}
                        <span aria-hidden="true"> 🎉 😎</span>
                    </p>
                    <p>
                        Continue to practice and make accessibility a habit. As your coding skills expand,
                        so will the complexity of the sites you build. That means that the accessibility 
                        issues you encounter will become more complex too. But you don't have to be alone
                        in this journey. 
                    </p>
                    <p>
                        There are many resources available to help you, and the accessibility 
                        community is always ready to answer your questions. Plus, in a larger company, you might
                        have a dedicated accessibility team to support you, or a designer who has already
                        considered accessibility in the design phase.
                    </p>
                    <p>
                        Equally important, 
                        spread the word and share your knowledge with others. Because together we can build 
                        a <span className="yellow-bg">web for everyone</span>.

                    </p>
                    <br/>
                    <p>
                        Ready to learn more about accessibility?
                        Explore  <span> </span>
                        <Link to="/blog" onClick={() => { useScrollToTop() }}>
                            Web for Everyone's Blog
                        </Link>.
                    </p>
                </div>

            </div>
            <ScrollToTopButton />
        </div>    
    )
}