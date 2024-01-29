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
        text: "Title Element",
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
        href: "#buttons-with-discernable-text",
        text: "Buttons with Discernable Text",
    },
    {
        href: "#labels-for-inputs",
        text: "Labels for Inputs",
    },
    {
        href: "#the-language-attribute",
        text: "The Language Attribute",
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
            <p className="subtitle">Part 2: On the Hunt for 7 More Bugs</p>

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
                        <span className="section-number">08</span>
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
                        <span className="section-number">09</span>
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
                        <code className="padding-left-30">... other navigation elements</code>
                        <code><span className="code-blue-color">&lt;/nav&gt;</span></code>
                    </div>
           
                    <h3>Allow users to jump straight to the main content</h3>
                    <p className="white-bg">
                        A user who navigates with a mouse can simply click on any desired element on the page. 
                    </p>
                    <p className="white-bg">
                        A person with limited mobility in their hands might use a keyboard to navigate the page.
                        Improve their experience and include 
                        a <span className="pink-bg-white-text">Skip to main content</span> link at the beginning 
                        of the page. 
                        This way they can bypass navigation and jump directly to the main content.
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
                            <span className="bold">How to activate the link</span>: open the page, 
                            press the <span className="pink-bg-white-text">Tab</span> key.
                            The skip link is the first element to receive focus.
                        </p>
                        <p>
                            If not for the link, notice how many elements
                            a visitor would have to tab through before reaching the main content!
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

                {/* ****************VISIBLE FOCUS************************* */}
                <div className="section focus scroll-target" id="visible-focus">
                    <div className="section-heading">
                        <span className="section-number">10</span>
                        <h2>Visible Focus</h2>
                    </div>

                    <div className="code code--focus">
                        <code><span className="code-blue-color">button</span>:focus-visible &#123;</code>
                        <code className="padding-left-30"><span className="code-yellow-color">outline</span>: 3px solid blue;</code>
                        <code className="padding-left-30"><span className="code-yellow-color">outline-offset</span>: 2px;</code>
                        <code>&#125;</code>   
                    </div>
        
                    <h3>Let keyboard users know where they are on the page</h3>
                    <p>
                        It is important that the element that receives the focus changes its appearance. 
                        This way the user knows exactly where the focus is.  
                    </p>
                    <p>
                        Most browsers have a default focus style, but depending on the design of your site,
                        it might not be always visible.
                        For example, the default focus style in Chrome is a black outline.
                        If you have a button with a black or very dark background color, the focus will not be visible.
                    </p>
                    <p>
                        The example above is just one way to add a focus style to a button. 
                    </p>
                    <p className="bold bullet-point-line white-bg">
                        It defines an <code>outline</code> that is 3 pixels wide, solid, and blue in color. 
                    </p>
                    <p className="padding-left-20">
                        Change the color and the width to match your design, but make sure you have a contrast ratio of at 
                        least <span className="pink-bg-white-text">3.0:1</span> between the outline and the 
                        background color of the element, as well as between the outline and the background of
                        the page.
                    </p>
                    <p className="bold bullet-point-line white-bg">
                        The <code>outline-offset</code> is used to 
                        set the space between the outline and the edge of the element.
                    </p>
                    <p className="padding-left-20">
                        It's not required, but it does improve accessibility and focus visibility.
                        Plus, when used, you only have to worry about the contrast ratio between the outline and the
                        background of the page.
                    </p>
                    <div className="highlight margin-top-30">
                        <details>
                            <summary className="gray-bg">
                                <span className="details-title">
                                    Why <code>:focus-visible</code> and 
                                    not <code>:focus</code>?
                                </span>
                            </summary>
                            <p className="white-bg" style={{ marginTop: '40px' }}>
                                <span className="bold">Browser Default Focus Style: </span>
                                Browsers apply default focus styles only when elements are focused via keyboard 
                                navigation. This behavior is designed to aid accessibility for keyboard 
                                users without cluttering the interface for mouse users.
                            </p>

                            <p style={{ marginTop: '40px' }}>
                                <span className="bold">Custom Focus Styles: </span>
                                When you override the default focus styles using 
                                the <code className="pink-bg-white-text">:focus</code> pseudo-class, your custom style will apply to all 
                                focus events, regardless of how they were triggered (mouse click or keyboard 
                                navigation). 
                            </p>

                            <p style={{ marginTop: '40px' }}>
                                <span className="bold">The Better Choice for Custom Styles: </span>
                                <code className="pink-bg-white-text">:focus-visible</code> only targets keyboard interactions. 
                            </p>    
                        </details>
                    </div>
                    <p className="margin-top-30 white-bg">
                        Given the importance of the focus style, the code below 
                        is a <span className="pink-bg-white-text">must-never-use</span> unless custom styles are
                        applied with <code>focus-visible</code>!
                    </p>
                    <div className="code">
                        <code><span className="code-blue-color">button</span>:focus &#123;</code>
                        <code className="padding-left-30"><span className="code-yellow-color">outline</span>: none;</code>
                        <code>&#125;</code>   
                    </div>
                </div>
                
                {/* ****************BUTTONS************************* */}
                <div className="section buttons scroll-target" id="buttons-with-discernable-text">
                    <div className="section-heading">
                        <span className="section-number">04</span>
                        <h2>Buttons with Discernable Text</h2>
                    </div>

                    <div className="code code--buttons">
                        <code>
                            <span className="code-blue-color">&lt;button</span> id="closeModal"
                            <span className="code-blue-color">&gt;</span>
                        </code>
                        <code className="padding-left-30">
                            <span className="code-pink-color">&lt;img</span> 
                            <span className="code-yellow-color"> alt</span>="Close modal" src="x-mark.svg"
                            <span className="code-pink-color">/&gt;</span>
                        </code>
                        <code><span className="code-blue-color">&lt;/button&gt;</span></code>
                    </div>
                   
                    <h3>Help screen readers properly announce a button</h3>

                    <p className="white-bg">
                        The techniques we covered in the previous section apply to buttons as well. 
                        With an image, you have a new option: use the <code>alt</code> attribute to 
                        describe the image, and it will become the accessible name of the button.
                    </p>
                    
                    <p className="white-bg">
                        In the example above, the button has no visible text, but contains an image with 
                        an <code>alt</code> attribute. A screen reader will announce it as "Close modal graphic button."
                    </p>
                    <p className="white-bg">
                        Notice the "graphic" part? That's because the accessible name is computed from 
                        the <code>alt</code> text of an image. This way the screen reader is announcing there is an image
                        present. It is up to you if this information is useful to the user or not. If not, 
                        use one of the techniques discussed in the previous section but rememeber to leave the <code>alt</code> attribute 
                        empty!
                    </p>
                    
                </div>

                {/* ****************LABELS************************* */}
                <div className="section labels scroll-target" id="labels-for-inputs">
                    <div className="section-heading">
                        <span className="section-number">05</span>
                        <h2>Labels for Inputs</h2>
                    </div>

                    <div className="code code--labels">
                        <code><span className="code-blue-color">&lt;label&gt;</span></code> 
                        <code className="padding-left-30">Enter your full name: </code>
                        <code className="padding-left-30">
                            <span className="code-yellow-color">&lt;input</span> id="name" type="text"  
                            <span className="code-yellow-color">&gt;</span>
                        </code>
                        <code><span className="code-blue-color">&lt;/label&gt;</span></code>
                    </div>

                    <h3>Help assistive tech users understand the purpose of an input</h3>

                    <p className="white-bg">
                        When it comes to your portfolio site, labels and inputs are likely to be part of your
                        contact form.
                        We will look at ways to make your contact form accessible in a separate article,
                        but for now let's focus on the <code>label</code> and <code>input</code> elements.
                    </p>

                    <p className="bold">You have two options:</p>
                    <p className="white-bg">
                        <span className="pink-text bold">Implicit Labeling:</span> It involves wrapping 
                        the <code>input</code> element inside a <code>label</code> element, 
                        just as in the example above. 
                    </p>
                    
                    <p className="white-bg"> 
                        <span className="pink-text bold">Explicit Labeling: </span> 
                        This method relies on using the <span className="pink-bg-white-text">for</span> attribute 
                        with the <code>&lt;label&gt;</code> tag, and the <span className="pink-bg-white-text">id</span>
                        <span> </span>
                        attribute with the <code>&lt;input&gt;</code> tag. 
                    </p>
                    <p className="white-bg">    
                        The value of the label's <code>for</code> attribute must be the same as the value of 
                        the input's <code>id</code> attribute.
                    </p>
                    
                    <div className="code code--labels">
                        <code>
                            <span className="code-blue-color">&lt;label</span> <span className="code-pink-color"></span>
                            <span className="code-pink-color">for</span>="name"
                            <span className="code-blue-color">&gt;</span>
                        </code>
                        <code className="padding-left-30">
                            Enter your full name:
                        </code>
                        <code>
                            <span className="code-blue-color">&lt;/label&gt;</span>
                        </code>
                        <code className="margin-top-20">
                            <span className="code-yellow-color">&lt;input</span> 
                            <span className="code-pink-color"> id</span>="name" type="text" 
                            <span className="code-yellow-color">&gt;</span>
                        </code>
                    </div>
                </div>

                {/* ****************LANG************************* */}
                <div className="section lang scroll-target" id="the-language-attribute">
                    <div className="section-heading">
                        <span className="section-number">06</span>
                        <h2>The Language Attribute</h2>
                    </div>

                    <div className="code code--lang">
                        <p><code>&lt;html <span className="code-pink-color">lang</span>="en"&gt;</code></p>
                    </div>
              
                    <h3>Use a valid language in the "lang" attribute</h3>
                    <p>It enables screen readers to correctly identify the language of the webpage content.</p>
                    
                    <p className="white-bg">
                        Is it common for a project to lack this attribute? Not at all! 
                        That's because when we initiate a new code base we are likely to use editors that generate 
                        an HTML file pre-configured with all the essential elements, 
                        including the <code>lang</code> attribute.
                    </p> 
                    <p className="white-bg">
                        Portfolio sites that started as templates though might be missing it.
                        These templates are designed to be customized, so remember to add 
                        the <code>lang</code> attribute with the value of the language you are using.
                    </p>
                    
                    <div className="highlight">
                        <p className="fake-heading-p">Did you know?</p>
                        <p className="margin-top-30">You can choose a specific dialect:</p>
                        <div className="code">
                            <code>&lt;html <span className="code-pink-color">lang</span>="en-US"&gt;</code>
                        </div>
                        <p style={{ marginTop: '50px' }}>
                            You can specify the language of a certain word or section of the page:
                        </p>
                        <div className="code"> 
                            <code> <span className="code-blue-color">&lt;p&gt;</span></code>
                            <code className="padding-left-30">Hello in English, </code>
                            <code className="padding-left-30">
                                <span className="code-yellow-color">
                                    &lt;span </span>
                                <span className="code-pink-color">lang</span>="fr"
                                <span className="code-yellow-color">&gt;</span>Bonjour
                                <span className="code-yellow-color">&lt;/span&gt;</span>
                                <span> </span>in French.
                            </code>
                            <code><span className="code-blue-color">&lt;/p&gt;</span></code>
                        </div>
                        <br></br>
                        <br></br>
                        
                        
                    </div>
                </div>

                {/* ****************HEADINGS************************* */}
                <div className="section headings scroll-target" id="headings-in-logical-order">
                    <div className="section-heading">
                        <span className="section-number">07</span>
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
                            The second heading in line
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
                            The second heading in line
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
                            Don't skip heading levels. Use <code>&lt;h2&gt;</code> to 
                            <code>&lt;h6&gt;</code> in descending order.
                        </p>
                        <p className="bullet-point-line white-bg margin-top-20">
                            Don't use headings for decorative purposes. 
                            If you need a word or a phrase to look bigger or bolder on page, use
                            CSS. Do not use heading tags if a heading is not needed.
                        </p>
                        
                    </div>
                    
                    <div className="highlight">
                        <p className="fake-heading-p">Did you know?</p>
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
                        Congratulations! You are now familiar with the 7 most common accessibility bugs 
                        and you know how to fix them.
                    </p>
                    <p>
                        Ready to continue your accessibility bug hunt?
                    </p>
                    <p>
                        Let's find the other 7 easy-to-fix bugs!
                    </p>
                    
                    <div className="next-article margin-top-30">
                        <span className="read-next">Read next:</span>
                        <Link to="/resources/make-it-accessible2" 
                                className="read-next pink-text"
                                onClick={() => { scrollToTop() }}
                        >
                            Let's Make It Accessible! Part 2: The Other 7 Bugs
                        </Link>
                    </div>
                </div>

            </div>
        </div>    
    )
}