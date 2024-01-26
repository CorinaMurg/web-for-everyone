import React from "react"
import { Link } from "react-router-dom"
import { useDocTitle } from "../../../hooks/useDocTitle"
import scrollToSection from "../../../utils/scrollToSection"
import "./MakeItAccessible.css"
import "../../../global.css"
import TableOfContents from "../../../components/TableOfContents/TableOfContents"

const contents = [
    {
        href: "#",
        text: "Introduction",
    },
    {
        href: "#color-contrast",
        text: "Color Contrast",
    },
    {
        href: "#the-alt-attribute-for-images",
        text: "The 'alt' Attribute for Images",
    },
    {
        href: "#links-with-discernable-text",
        text: "Links with Discernable Text",
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
    useDocTitle("Let's Make It Accessible | Web for Everyone");
    
    return (
        <div className="article-container makeit-container">
            <div className="back-links scroll-target" id="back-links">
                <Link to="/resources" className="back-link hover-pink">
                    Resources
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <Link to="/resources#accessible-digital-presence" className="back-link hover-pink">
                    Accessibility and Your Digital Presence
                </Link>
            </div>

            <h1>
                <span>Your Portfolio Site:</span>
                <span className="yellow-bg">Let's Make It Accessible!</span>
            </h1>
            <p className="subtitle">Check your portfolio site for the 7 most common bugs</p>

            {/* **************Table of Contents********************** */}
            <TableOfContents contents={contents} />

            {/* **************Article Content********************** */}
            <div className="article-content makeit">
                <div className="section intro">
                    <p>
                        Guaranteeing 100% accessibility is a complex task and it becomes even more challenging as the 
                        functionality of a website increases. However, there are a few simple steps that
                        you can take to ensure that your site is accessible to most users. 
                    </p>
                    <p>
                        The 2023 WebAIM Million Study of 1,000,000 home pages found that 97% had 
                        detectable accessibility failures.  
                        Let's make sure your portfolio site is not one of them!
                    </p>
                    {/* <p>
                        In <a href="">The Most Common A11y Bugs</a> article we looked at the top 7 most common bugs 
                        and how they hinder users with disabilities. 
                       
                    </p> */}
                    <div className="highlight">
                        <details>
                            <summary>
                                <span className="details-title">
                                    Automated testing tools for accessibility
                                </span>
                            </summary>
                            <p>
                            Automated tools are imperfect. You will always need to do manual testing and user 
                            testing to ensure your site is accessible to everyone. 
                            </p>
                            <p>
                                However, these tools are a great first step. Moreover, as we are now looking at how to 
                                avoid the most common accessibility bugs, you will see that they are easy to spot with these tools.
                            </p>
                            <p>
                                Here are a few of the most popular accessibility browser extensions:
                            </p>
                            <p className="bullet-point-line">
                                <a href=" https://wave.webaim.org/extension/" 
                                    target="_blank" rel="noreferrer"   
                                >
                                    WebAIM's WAVE
                                </a>
                            </p>
                            <p className="bullet-point-line">
                                <a href="https://www.deque.com/axe/devtools/" 
                                    target="_blank" rel="noreferrer"
                                >
                                    Deque's axe DevTools
                                </a>
                            </p>
                            <p className="bullet-point-line">
                                <a href="https://developer.chrome.com/docs/devtools/accessibility/reference/" 
                                    target="_blank" rel="noreferrer"
                                >
                                    Google's Lighthouse
                                </a>
                            </p>
                        </details>
                    </div>
                </div>

                {/* ****************COLOR CONTRAST************************* */}
                <div className="section contrast scroll-target" id="color-contrast">
                    <div className="section-heading">
                        <span className="section-number">01</span>
                        <h2>Color Contrast</h2>
                    </div>

                    <div className="bug-code bug-code--contrast">
                        <code>I'm normal text (16px).</code>
                        <code>I need a contrast ratio of at least <span className="pink-bg-white-text">4.5:1</span>.</code>
                        <code>I'm not-too-large (19px or larger), but bold text.</code>
                        <code>I need a contrast ratio of at least <span className="pink-bg-white-text">3:1</span>.</code>
                        <code>I'm large text (24px or larger).</code>
                        <code>I need a contrast ratio of at least <span className="pink-bg-white-text">3:1</span>.</code>
                    </div>

                    <div className="bug-body bug-body--contrast">
                        <h3>Mind the color contrast ratio to help users with low vision</h3>
                        <p>
                            Users with low vision can struggle with perceiving contrast. 
                            They can't spot outlines, edges, and other details. 
                            Reading can also be challenging when the text color doesn't stand out much from the 
                            background.</p>
                        
                        <p>
                            As mentioned above, when you run a test with Lighthouse or axe DevTools, 
                            if any elements failed the contrast ratio guidelines, you will know right away.
                        </p> 
                        <p>
                            If you'd like to me more proactive, you can 
                            use <a href="https://webaim.org/resources/contrastchecker/">WebAIM's contrast checker</a> to
                            test your colors as you're building. 
                        </p>
                        
                        <p>
                            Checking is easy: enter the foreground and background colors for a given element, and the 
                            tool will tell you if the contrast ratio is sufficient.
                        </p>
                    </div>

                    <div className="highlight">
                        <details>
                            <summary>
                                <span className="details-title">
                                    Example: Using WebAIM's contrast checker
                                </span>
                            </summary>
                            <br></br>
                            <p className="margin-top-30">Enter the foreground and background colors:</p>
                            <div className="section-image">
                                <img src="/assets/images/colorContrast.jpg" 
                                    alt="A screenshot of WebAIM's color contrast checker. The foreground color entered is a dark grey 
                                    (#212121) and the background color is a dark green (#078005). The contrast ratio displayed is 3.14:1."/>
                            </div>
                            <br></br>
                            <p className="margin-top-30">View the results:</p>
                            <div className="section-image">
                                <img src="/assets/images/colorContrastAnswer.jpg" 
                                    alt="A screenshot of WebAIM's color contrast checker results. Normal Text fails both 
                                    standards WCAG A and AA, Large Text passes WCAG AA but fails WCAG AAA, and Graphical Objects 
                                    and User Interface Components passes WCAG AA."/>
                            </div>
                        </details>
                    </div>
                </div>

                {/* ****************ALT************************* */}
                <div className="section alt scroll-target" id="the-alt-attribute-for-images">
                    <div className="section-heading">
                        <span className="section-number">02</span>
                        <h2>The "alt" Attribute for Images</h2>
                    </div>

                    <div className="bug-code bug-code--alt">
                        <code>&lt;img</code>
                        <code>   src="..."</code>
                        <code>   <span className="pink-text">alt</span>="Fill me in or leave me empty, but do include me!"</code>
                        <code>/&gt;</code>
                    </div>

                    <div className="bug-body bug-body--alt">
                        <h3>Help screen readers decide whether to read an image or not</h3>
                        <p className="white bg">Is your image purely decorative? Or, is the information presented in the image also conveyed by the 
                            adjacent text? Then it's best to leave the <code>alt</code> attribute empty.</p>
                        
                        <p className="white-bg">Does your image contain information that is not available in the text? 
                            Then add a short description in the <code>alt</code> attribute.
                        </p> 
                        <p className="white-bg">
                            Either way, it's important to add the <code>alt</code> attribute to all images. If empty, 
                            it tells the screen reader to skip the image. This way it doesn't waste time reading it. 
                            If it's missing though, the screen reader will read the name of the image's source file, 
                            which is not helpful to the user.
                        </p>
                    </div>
                    <div className="highlight">
                        <p className="fake-heading-p">Rememeber the difference:</p>
                        <p className="gray-bg">
                            A missing <code>alt</code> attribute is NOT the same 
                            as an empty <code>alt</code>!
                        </p>
                        <p>
                            <span className="pink-text bold">Missing <code>alt</code>:</span> screen readers might read the source file name.
                        </p>
                        <p>
                            <span className="pink-text bold">Empty <code>alt</code>:</span> screen readers ignore the image.
                        </p>
                    
                    </div>
                </div>

                {/* ****************LINKS************************* */}
                <div className="section links scroll-target" id="links-with-discernable-text">
                    <div className="section-heading">
                        <span className="section-number">03</span>
                        <h2>Links with Discernable Text</h2>
                    </div>

                    <div className="bug-code bug-code--links">
                        <code>&lt;a href="https://www.linkedin.com/in/corinamurg/"&gt;</code>
                        <code>   &lt;i className="fa-brands fa-linkedin" aria-hidden="true"&gt;&lt;/i&gt;</code>
                        <code>&lt;/a&gt;</code>
                    </div>

                    <div className="bug-body bug-body--links">
                        <h3>Help screen readers properly announce a link</h3>
                        
                        <p>
                            In the example above, the link to the LinkedIn profile
                            contains an icon and no visible text. A screen reader will announce part of the url 
                            (usually starting with the path segment)
                            and provide no information about the destination of the link. 
                        </p>
                            
                        <p>
                            Users relying on speech commands might not be able to activate the link. They would use
                            "LinkedIn" to open the link, but "LinkedIn is not recognized by the speech recognition software.
                            The browser can not compute an accessible name for the link since none of the attributes that 
                            could provide one is present.
                        </p>

                        <div className="highlight">
                            <details>
                                <summary>
                                    <span className="details-title">
                                        Accessible Name Review
                                    </span>
                                </summary>
                                <p>
                                    Assitive technologies recognize an element by its accessible name. 
                                    One of the following must be present in order for the browser to compute it:
                                </p>
                                <p><span className="pink-text bold">1. </span>visible text</p>
                                <p><span className="pink-text bold">2. </span>alt text</p>
                                <p><span className="pink-text bold">3. </span>aria-label</p>
                                <p><span className="pink-text bold">4. </span>aria-labelledby</p>
                                <p><span className="pink-text bold">5. </span>title</p>
                                <p>
                                    <Link to="/resources/how-accessibility-works#the-accessible-name" 
                                        className="pink-text"
                                    >
                                        Learn more about the accessible name
                                    </Link>
                                </p>
                            </details>
                        </div>
                        
                        <h3 className="pink-text">Ways to fix it</h3>
                        <p className="white-bg">
                            <span className="pink-num" aria-hidden="true">1. </span> 
                            Add <code>aria-label</code> to the link element (e.g., <code>aria-label="LinkedIn Profile"</code>).
                            
                        </p>
                        <p>
                            <span className="pink-num" aria-hidden="true">2. </span> 
                            Replace the image with text (e.g., LinkedIn). 
                        </p>
                        <p className="white-bg">
                            <span className="pink-num" aria-hidden="true">3. </span> 
                            Keep the icon, but add text with a <code>visually-hidden</code> class
                            (so the text is not visible on the screen). Screen readers 
                            will announce the text, while sighted users will rely on the icon to figure out the 
                            purpose of the link.
                        </p>
                        
                        <p><span className="bold">
                            Note:</span> This is not an exhaustive list of techniques you could use to make your social media
                            links accessible. The ones shared above are the most commonly used and you can employ them
                            anytime you use an icon instead of visible text. Plus, they also work with buttons.
                        </p>
                        <p className="white-bg">
                            <span className="bold">What about the <code>alt</code> attribute?</span> An icon displayed with an
                            <span> </span><code>&lt;i&gt;</code> tag does not accept the <code>alt</code> attribute 
                            like an <code>&lt;img&gt;</code> would. 
                        </p>
                        <p className="white-bg">
                            In the next section on buttons we will look at an example with an image and 
                            the <code>alt</code> attribute.
                        </p>
                    </div>
                </div>
                
                {/* ****************BUTTONS************************* */}
                <div className="section buttons scroll-target" id="buttons-with-discernable-text">
                    <div className="section-heading">
                        <span className="section-number">04</span>
                        <h2>Buttons with Discernable Text</h2>
                    </div>

                    <div className="bug-code bug-code--buttons">
                        <code>&lt;<span className="pink-text">button</span> id="closeModal"&gt;</code>
                        <code>&lt;<span className="pink-text">img</span> alt="Close modal" src="x-mark.svg"/&gt;</code>
                        <code>&lt;/<span className="pink-text">button</span>&gt;</code>
                    </div>

                    <div className="bug-body bug-body--buttons">
                        <h3>Help screen readers properly announce a button</h3>

                        <p className="white-bg">The techniques we covered in the previous section apply to buttons as well. 
                            With an image, we have another option: we
                            can use the <code>alt</code> attribute to provide a description. 
                        </p>
                        
                        <p className="white-bg">In the example above, the button
                            has no visible text, but contains an image with an <code>alt</code> attribute. 
                            A screen reader will announce it as "Close modal graphic button."
                            Notice the "graphic" part? That's because the accessible name is computed from 
                            the <code>alt</code> text of an image.
                        </p>
                    </div>  
                </div>

                {/* ****************LABELS************************* */}
                <div className="section labels scroll-target" id="labels-for-inputs">
                    <div className="section-heading">
                        <span className="section-number">05</span>
                        <h2>Labels for Inputs</h2>
                    </div>

                    <div className="bug-code bug-code--labels">
                        <code>&lt;<span className="pink-text">label</span>&gt;</code> 
                        <code>Name: </code>
                        <code>&lt;<span className="pink-text">input</span> type="text" id="name" name="name"&gt;</code>
                        <code>&lt;/<span className="pink-text">label</span>&gt;</code>
                    </div>

                    <div className="bug-body bug-body--labels">
                        <h3>Help assistive tech users understand the purpose of an input</h3>

                        <p>You have two options:</p>
                        <p><span className="pink-text bold">Implicit Labeling:</span> This involves wrapping the input element 
                        inside the label element, just as in the example above. 
                        </p>
                        
                        <p className="white-bg"> <span className="pink-text bold">Explicit Labeling:</span> This method involves using the 
                            <span> </span>
                            <span className="pink-bg-white-text">for</span>
                            <span> </span>
                            attribute in the <code>&lt;label&gt;</code> tag and the 
                            <span> </span>
                            <span className="pink-bg-white-text">id</span>
                            <span> </span>
                            attribute in the <code>&lt;input&gt;</code> tag. 
                        </p>
                        <p className="white-bg">    
                            The value of the 
                            <span> </span>
                            <code>for</code>
                            <span> </span>
                            attribute must be the same as the value of the <span> </span>
                            <code>for</code>
                            <span> </span>
                            attribute of the input to which it is linked.
                        </p>
                    </div>
                    <div className="bug-code bug-code--labels">
                        <code>
                            &lt;<span className="pink-text">label</span> for="name"&gt;Name:&lt;/
                            <span className="pink-text">label</span>&gt;
                        </code>
                        <code>
                            &lt;<span className="pink-text">input</span> type="text" id="name" name="name"&gt;
                        </code>
                    </div>
                </div>

                {/* ****************LANG************************* */}
                <div className="section lang scroll-target" id="the-language-attribute">
                    <div className="section-heading">
                        <span className="section-number">06</span>
                        <h2>The Language Attribute</h2>
                    </div>

                    <div className="bug-code bug-code--lang">
                        <p><code>&lt;html <span className="pink-text">lang</span>="en"&gt;</code></p>
                    </div>

                    <div className="bug-body bug-body--lang">
                        <h3>Use a valid language in the "lang" attribute</h3>
                        <p>It enables screen readers to correctly identify the language of the webpage content.</p>
                        
                        <p className="white-bg">Is it common that a project would lack this attribute? Not at all! That's because 
                            when we initiate a new code base we are likely to use editors that generate an HTML 
                            file pre-configured with all the essential elements, including the <code>lang</code> attribute.
                        </p> 
                        <p className="white-bg">
                            The only sites I came across that lacked the <code>lang</code> attribute were bbc.com 
                            (last checked on December 27, 2023) and portfolio sites that had started as templates and 
                            had not been updated to include it. Rememeber to check in case you are using a template!
                        </p>
                    </div>
                    <div className="highlight">
                        <p className="fake-heading-p pink-text">Did you know?</p>
                        <p>You can specify the language of a certain word or section of the page!</p>
                        <p className="margin-block-0">
                            <code>&lt;p&gt;</code>
                        </p>
                        <p className="margin-block-0 padding-left-30"><code>Hello in English, </code></p>
                        <p className="margin-block-0 padding-left-30">
                            <code>
                                &lt;span <span className="pink-text">lang</span>="fr"&gt;Bonjour&lt;/span&gt; 
                                in French.
                            </code>
                        </p>
                        <p margin-block-0>.
                            <code>&lt;/p&gt;</code>
                        </p>
                        <p className="margin-top-30">You can choose a specific dialect!</p>
                        <p><code>&lt;html <span className="pink-text">lang</span>="en-US"&gt;</code></p>
                    </div>
                </div>

                {/* ****************HEADINGS************************* */}
                <div className="section headings scroll-target" id="headings-in-logical-order">
                    <div className="section-heading">
                        <span className="section-number">07</span>
                        <h2>Headings in Logical Order</h2>
                    </div>

                    <div className="bug-code bug-code--headings">
                        <p><code>&lt;html <span className="pink-text">lang</span>="en"&gt;</code></p>
                    </div>

                    <div className="bug-body bug-body--headings">
                        <h3>Help screen reader users understand the structure of a page</h3>
                        <p>When trying to find information on a page, most screen reader users rely on headings.
                            Pressing the <span className="pink-bg-white-text">H</span> key allows them to visit 
                            each heading to get an idea about the structure and the content of the page.  
                        </p>
                        <p className="fake-heading-p pink-text">A few rules to follow:</p>
                        <div>
                            <p className="bullet-point-line white-bg">
                                Use <code>&lt;h1&gt;</code> only once per page.
                            </p>
                            <p className="bullet-point-line white-bg">
                                Use <code>&lt;h2&gt;</code> to 
                                <code>&lt;h6&gt;</code> in logical order.
                            </p>
                            <p className="bullet-point-line white-bg">
                                Don't skip heading levels.
                            </p>
                            <p className="bullet-point-line white-bg">
                                Don't use headings for decorative purposes. 
                                If you need a word or a phrase to look bigger or bolder on page, use
                                CSS. Do not use heading tags if a heading is not needed.
                            </p>
                        </div>
                    </div>

                    <div className="highlight">
                        <p className="fake-heading-p pink-text">Did you know?</p>
                        <p> Automated tools like Google's Lighthouse or axe DevTools can easily catch if any of 
                            the above rules are broken.
                        </p>
                    </div>
                </div>
            </div>
        </div>    
    )
}