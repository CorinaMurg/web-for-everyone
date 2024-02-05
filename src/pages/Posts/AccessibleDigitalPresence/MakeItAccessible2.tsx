import React from "react"
import { Link } from "react-router-dom"
import scrollToTop from "../../../utils/scrollToTop"
import useDocTitle from "../../../hooks/useDocTitle"
import useScrollToSection from "../../../hooks/useScrollToSection"
import "../../../global.css"
import styles from "./MakeItAccessible2.module.css"
import TableOfContents from "../../../components/TableOfContents/TableOfContents"
import BackLinks from "../../../components/BackLinks/BackLinks"

const contents = [
    {
        href: "#",
        text: "Introduction",
    },
    {
        href: "#title-element",
        text: "The Title Element",
    },
    {
        href: "#skip-link",
        text: "Skip Link",
    },
    {
        href: "#visible-focus",
        text: "Visible Focus",
    },
    {
        href: "#headings-in-logical-order",
        text: "Headings in Logical Order",
    },
    {
        href: "#conclusion",
        text: "Conclusion",
    },
]

export default function MakeItAccessible() {
    useDocTitle("Let's Make It Accessible Part 2 | Web for Everyone");
    useScrollToSection();
    
    return (
        <div className={`article-container ${styles['makeItTwo-container']}`}>
            
            {/* **************Back Links********************** */}
            <BackLinks 
                secondLink="Your Digital Presence: Make It Accessible" 
                href="/resources#accessible-digital-presence" 
            />
            
            <h1>
                <span>Your Portfolio Site:</span>
                <span className="yellow-bg">Let's Make It Accessible!</span>
            </h1>
            <p className="subtitle">Part 2: On the Hunt for 6 More Bugs</p>

            {/* **************Table of Contents********************** */}
            <TableOfContents contents={contents} />

            {/* **************Article Content********************** */}
            <div className="article-content makeItTwo">
                <div className="section intro">
                    <p>
                        Guaranteeing 100% accessibility is a complex task, and it becomes ever more 
                        challenging as the functionality of a website increases. However, in a few 
                        simple steps you can ensure that your site is free of the most common,
                        easy-to-fix accessibility issues. 
                    </p>
                    <p>
                        The 2023 WebAIM Million Study of 1,000,000 home pages found 7 bugs 
                        that are present on more than 97% of the sites.
                        Let's make sure your portfolio site is not one of them!
                    </p>
                   <p>
                        In this article, we will look at each bug in detail and learn how to fix it. 
                        The article is designed to be a quick reference guide, but sufficient 
                        information is provided to help you understand the underlying concepts.
                        Links to additional resources are also provided.
                   </p>
                    
                </div>

                {/* ****************TITLE ELEMENT************************* */}
                <div className={`section ${styles['title']} scroll-target`} id="title-element">
                    <div className="section-heading">
                        <span className="section-number">07</span>
                        <h2>Title Element</h2>
                    </div>

                    <div className={`code ${styles['code--title']}`}>
                        <code><span className="code-blue-color">&lt;head&gt;</span></code>
                        <code className="padding-left-30">
                            <span className="code-yellow-color">&lt;title&gt;</span>
                            Web for Everyone | Home
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
                    </p>
                    <p className="bullet-point-line">
                        It helps screen reader users understand which page they are on. As they navigate from page 
                        to page, the title is the first element announced by the screen reader. 
                    </p>
                    <h4>
                        Do make sure each page has a unique title!
                    </h4>
                    
                    <p className="white-bg">
                        It gets more complex with a Single Page Application (SPA), but each framework has specific 
                        features or libraries that allow for updating the <code>title</code> with each page.
                        Research, choose one, and implement it.
                    </p>

                    <p className="white-bg">
                        <span className="bold">Note: </span>
                        This site was built in React, and relies on a custom hook to update 
                        the <code>title</code> for each page.
                    </p>
                </div>

                {/* ****************SKIP LINK************************* */}
                <div className="section skip scroll-target" id="skip-link">
                    <div className="section-heading">
                        <span className="section-number">08</span>
                        <h2>Skip Link</h2>
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
                        This can make a big difference for users with limited mobility. Instead of tabbing through a lot of 
                        links they could bypass navigation and jump directly to the main content. 
                    </p>
                   
                    <p>
                        It's true, your portfolio site is not likely to have an extensive navigation, but it's still
                        a good practice to include the link.
                        You will most likely have to consider it for future complex projects.
                    </p>

                    <div className="highlight">
                        <p className="fake-heading-p">Example: A Skip Link in Action</p>
                        <p>
                            Check out how the <span> </span>
                            <a href="https://www.nytimes.com/" target="_blank" rel="noreferrer"> 
                                <span className="bold">New York Times</span>
                            </a> <span> </span>
                            has implemented the skip link. 
                        </p>
                        <p>
                            <strong>How to activate the link</strong>: open the page, 
                            press the <span className="pink-bg-white-text">Tab</span> key.
                            The skip link is the first element to receive focus.
                        </p>
                        <p>
                            If not for the link, notice how many elements
                            a visitor would have to tab through before reaching the main content!
                        </p>
                        <br></br>
                        <p>Now for an opposite experience, check out the <span> </span>
                            <a href="https://www.bbc.com/" target="_blank" rel="noreferrer"> 
                                <span className="bold">BBC</span>
                            </a> <span> </span>
                            site.
                        </p>
                       
                        <p>
                            As of the time of this writing (January 5th, 2024), the skip link is not present. 
                            Tab through the navigation until you reach the main content. 
                            Choose an article and click on it. Now tab through the navigation (again!) to reach the main content.
                        </p>
                    </div>
                    
                    <div className="highlight">
                        <details>
                            <summary>
                                <span className="details-title">
                                    Example: Code for a Skip Link
                                </span>
                            </summary>
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
                        </details>
                    </div>
                    

                                        
                                        
                    
                </div>

                {/* ****************KEYBOARD NAVIGATION******************* */}
                <div className="section focus scroll-target" id="visible-focus">
                    <div className="section-heading">
                        <span className="section-number">09</span>
                        <h2>Keyboard Navigation</h2>
                    </div>

                    <div className="code code--focus">
                        <code><span className="code-blue-color">button</span>:focus-visible &#123;</code>
                        <code className="padding-left-30"><span className="code-yellow-color">outline</span>: 3px solid blue;</code>
                        <code className="padding-left-30"><span className="code-yellow-color">outline-offset</span>: 2px;</code>
                        <code>&#125;</code>   
                    </div>
        
                    <h3>Allow keyboard-only users to navigate a page</h3>
                    <p>
                        Not everyone can use a mouse. People who are blind or have low vision, as well as those
                        with mobility issues, rely on a keyboard to navigate the web. 
                    </p>
                    <p>
                        Make sure all interactive elements on your site are reachable and usable with a keyboard.
                    </p>
                    <p><strong>How to test:</strong></p>
                    <p className="bullet-point-line white-bg">
                        Press the <span className="yellow-bg-dark-text">Tab</span> key to move forward 
                        (<span className="yellow-bg-dark-text">Shift + Tab</span> to move backward)
                        through the interactive elements on the page. Each element should receive focus 
                        (you should see a an outline around it. More about how to style the outline in the next section).
                    </p>
                    <p className="padding-left-20 white-bg">
                        If you used semantic HTML tags like <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code> or <code>&lt;input&gt;</code>,
                        this will happen automatically. 
                    </p>
                    <p className="padding-left-20 white-bg">
                        If you used <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>,
                        and forgot the <code>tabindex</code> attribute, the element will be skipped.

                    </p>
                    <p className="bullet-point-line white-bg margin-top-20">
                        Press the <span className="yellow-bg-dark-text">Enter</span> key to activate a link,  or <span className="yellow-bg-dark-text">Enter</span>
                        or <span className="yellow-bg-dark-text">Space</span> to activate a button. The expected action should happen.
                        Again, if you used semantic HTML tags, this will happen automatically.
                        With <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>, these event listeners have to be added.
                    </p>

                </div>

                {/* ****************VISIBLE FOCUS************************* */}
                <div className="section focus scroll-target" id="visible-focus">
                    <div className="section-heading">
                        <span className="section-number">10</span>
                        <h2>Visible Focus</h2>
                    </div>

                    <div className="code">
                        <code><span className="code-pink-color">// do not remove the outline unless you create a custom style</span></code>
                        <code className="margin-top-10"><span className="code-blue-color">button</span>:focus &#123;</code>
                        <code className="padding-left-30"><span className="code-yellow-color">outline</span>: none;</code>
                        <code>&#125;</code>   
                    </div>
        
                    <h3>Let sighted keyboard users know where they are on the page</h3>
                    <p>
                        It is important that the element that receives focus changes its appearance. 
                        This way the user knows exactly where the focus is.  
                    </p>
                    <p>
                        Most browsers have a default focus style, the <strong>focus ring</strong>, but depending on the design of your site,
                        it might not always be visible.
                        For example, the default focus style in Chrome is a black outline.
                        If you have a button with a black or very dark background color, the outline will not be visible.
                    </p>
                    <p>
                        Here are a couple of ways to provide visual clues to sighted keyboard users:
                    </p>
                    <div className="padding-left-20">
                        <p className="bullet-point-line">
                            Create a custom outline. 
                        </p>
                        <p className="bullet-point-line margin-top-20">
                            Change the brightness of the background color.
                        </p>
                    </div>

                    <div className="highlight">
                        <p className="fake-heading-p">Example: Creating a custom outline</p>
                        <div className="code code--focus">
                            <code><span className="code-blue-color">button</span>:focus-visible &#123;</code>
                            <code className="padding-left-30"><span className="code-yellow-color">outline</span>: 3px dashed black;</code>
                            <code className="padding-left-30"><span className="code-yellow-color">outline-offset</span>: 2px;</code>
                            <code>&#125;</code>   
                        </div>
                        <p className="bold bullet-point-line white-bg">
                            Define an <code>outline</code> that is 3 pixels thick, dashed, and black. 
                        </p>
                        <p className="padding-left-20">
                            Change the color and the style to match your design, but make sure you have a contrast ratio of at 
                            least <span className="pink-bg-white-text">3.0:1</span> between the outline and the 
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
                        
                        <div className="margin-top-30 margin-bottom-20" aria-hidden="true">
                            <p>
                                <strong>For you: </strong>
                                Use the <span className="yellow-bg-dark-text">Tab</span> key to navigate to the 
                                button below and see the custom focus outline in action.
                            </p>
                            <button aria-label="Example of button with custom outline for focus. No functionality."
                                    className={styles['custom-outline--button']}
                            >
                                Custom outline
                            </button>
                        </div>
                    </div>
                    
                    <div className="highlight margin-top-30">
                        <details>
                            <summary className="white-bg">
                                <span className="details-title">
                                    Why <code>:focus-visible</code> and 
                                    not <code>:focus</code>? 
                                </span>
                            </summary>
                            <p className="white-bg" style={{ marginTop: '40px' }}>
                                <strong>Browser Default Focus Style: </strong>
                                Browsers apply default focus styles in two scenarios:
                            </p>
                            <p className="bullet-point-line">
                                when elements are focused via keyboard navigation, regardless of the type of 
                                element (button, link, input, etc.)
                            </p>
                            <p className="bullet-point-line">
                                when it is beneficial to the user, regardless of navigation method. For example,
                                a mouse user will see the focus when clicking on an input field, but not when
                                clicking on a link.
                            </p>
                            <p>
                                This behavior is designed to aid accessibility for keyboard 
                                users without cluttering the interface for mouse users.
                            </p>

                            <p style={{ marginTop: '40px' }}>
                                <strong>Custom Focus Styles: </strong>
                                When you override the default focus styles using 
                                the <code className="pink-bg-white-text">:focus</code> pseudo-class, your custom style will apply to all 
                                focus events, regardless of how they were triggered (mouse click or keyboard 
                                navigation). 
                            </p>

                            <p style={{ marginTop: '40px' }}>
                                <span className="bold">The Better Choice for Custom Styles: </span>
                                <code className="pink-bg-white-text">:focus-visible</code> mimics the default browser behavior 
                                when it comes to applying focus styles. 
                            </p>    
                        </details>
                    </div>

                    <div className="highlight margin-top-30">
                        <p className="fake-heading-p">Example: Change in brightness to indicate focus</p>
                        <p>
                            One of the most important accessibility guidelines is to ensure that color alone is not 
                            used to convey information. This applies to the focus state as well.
                        </p>
                        <p>
                            For example, changing the background color of 
                            a button from blue to green when it receives focus (assuming the outline was removed) 
                            is not recommended. Users who are color blind would not be able to tell the difference.
                        </p>
                        <p>
                            <strong>Instead, rely on a change in brightness to indicate focus.</strong>
                        </p>
                        <p>
                            It could be with that same color, like a change from a light blue to a darker blue. 
                            Or, it could be with a different color, like a change from light blue to dark gray.
                        </p>
                        <div className={`margin-top-30 ${styles['brightness--container']}`} aria-hidden="true">
                            <p>
                                <strong>For you: </strong>
                                Use the <span className="yellow-bg-dark-text">Tab</span> key to navigate to the 
                                links below and notice the change in the background's shade. Try not to click on them, so you
                                don't scroll away from this section.
                            </p>                     
                            <ul className={`${styles['brightness--links']}`}>
                                <li><a href="" >Link 1</a></li>
                                <li><a href="" >Link 2</a></li>
                                <li><a href="" >Link 3</a></li>           
                            </ul>   
                            <br></br>           
                        </div>                
                    </div>
                    
                </div>
                
                {/* ****************HEADINGS************************* */}
                <div className="section headings scroll-target" id="headings-in-logical-order">
                    <div className="section-heading">
                        <span className="section-number">11</span>
                        <h2>Headings in Logical Order</h2>
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
                    <p className="fake-heading-p">A few rules to follow with headings:</p>
                    <div>
                        <p className="bullet-point-line white-bg">
                            Choose meaningful headings that describe the content of a section.
                        </p>
                        <p className="bullet-point-line white-bg margin-top-20">
                            Use <code>&lt;h1&gt;</code> at the start of your content.
                        </p>
                        <p className="bullet-point-line white-bg margin-top-20">
                            Don't skip heading levels. Use <code>&lt;h1&gt;</code> to 
                            <code>&lt;h6&gt;</code> in descending order.
                        </p>
                        <p className="bullet-point-line white-bg margin-top-20">
                            Don't use headings for decorative purposes. 
                            If you need a word or a phrase to look bigger or bolder on page, use
                            CSS. Do not use heading tags if a heading is not needed.
                        </p>
                        
                    </div>
                    
                    <div className="highlight">
                        <p className="fake-heading-p">Did you know? <span aria-hidden="true"> 💡</span></p>
                        <p> 
                            Automated tools like Google's Lighthouse or axe DevTools can help with headings too!
                        </p>
                        <p>
                            For the first rule, you will need to rely on your own judgement, but the tools can 
                            easily catch if any of the other rules are broken. 
                        </p>
                    </div>
                </div>


                    
                {/* ****************CONCLUSION************************* */}
                <div className="section conclusion scroll-target" id="conclusion">
                    <h2>Conclusion</h2>
                    <p>
                        Congratulations! You are now familiar with 12 accessibility issues and 
                        how to fix them.
                    </p>
                    <p>
                        Ready to learn more about accessibility?
                    </p>
                    
                    <div className="next-article">
                        <span className="read-next">Read next:</span>
                        <Link to="/resources" 
                                onClick={() => { scrollToTop() }}
                        >
                            Resources
                        </Link>
                    </div>
                </div>

            </div>
        </div>    
    )
}