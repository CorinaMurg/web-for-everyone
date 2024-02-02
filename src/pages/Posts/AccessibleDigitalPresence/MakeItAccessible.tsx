import React from "react"
import { Link } from "react-router-dom"
import scrollToTop from "../../../utils/scrollToTop"
import useDocTitle from "../../../hooks/useDocTitle"
import useScrollToSection from "../../../hooks/useScrollToSection"
import "../../../global.css"
import styles from "./MakeItAccessible.module.css"
import TableOfContents from "../../../components/TableOfContents/TableOfContents"
import BackLinks from "../../../components/BackLinks/BackLinks"

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
        href: "#conclusion",
        text: "Conclusion",
    },
]

export default function MakeItAccessible() {
    useDocTitle("Let's Make It Accessible Part 1 | Web for Everyone");
    // useScrollToSection();
    
    return (
        <div className={`article-container ${styles['makeItOne-container']}`}>
            
            {/* **************Back Links********************** */}
            <BackLinks 
                secondLink="Your Digital Presence: Make It Accessible"
                href="/resources#accessible-digital-presence" 
            />
            
            <h1>
                <span>Your Portfolio Site:</span>
                <span className="yellow-bg">Let's Make It Accessible!</span>
            </h1>
            <p className="subtitle">Part One: Finding the 6 Most Common Bugs</p>

            {/* **************Table of Contents********************** */}
            <TableOfContents contents={contents} />

            {/* **************Article Content********************** */}
            <div className="article-content makeItOne">
                <div className="section intro">
                    <p>
                        Guaranteeing 100% accessibility is a complex task, and it becomes ever more 
                        challenging as the functionality of a website increases. However, in a few 
                        simple steps you can ensure that your site is free of the most common,
                        easy-to-fix accessibility issues. 
                    </p>
                    <p>
                        The 2023 WebAIM Million Study of 1,000,000 home pages found 6 bugs 
                        that are present on 97% of the sites.
                        Let's make sure your portfolio site is not one of them!
                    </p>
                    <p>
                            In this article, we will look at each bug in detail and learn how to fix it. 
                            The article is designed to be a quick reference guide, but sufficient 
                            information is provided to help you understand the underlying concepts.
                            Links to additional resources are also provided.
                    </p>
                    <div className="highlight">
                        <details>
                            <summary>
                                <span className="details-title">
                                    Automated testing tools: optional, but recommended!
                                </span>
                            </summary>
                            <br/>
                            <p>
                                Automated accessibility tools are browser extensions that can help
                                you evaluate the accessibility of your site. 
                                These tools are designed to scan web pages and identify potential accessibility 
                                issues based on established web accessibility standards, such as WCAG 
                                (Web Content Accessibility Guidelines).
                            </p>
                            <p>
                                While extremely useful for quickly 
                                spotting common problems, automated tools are imperfect.
                                It's important to note that they don't capture all 
                                aspects of accessibility. 
                            </p>
                            <p>
                                <strong>
                                    Manual testing and user testing remain crucial for 
                                    ensuring comprehensive accessibility.
                                </strong>
                            </p>
            
                            <p>
                                However, these tools are a great first step. Moreover, as we are now looking at how to 
                                avoid the most common accessibility bugs, you will see that they are easy to spot 
                                with these tools. 
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
                            <p>
                                Each tool has its own strengths and weaknesses. Best if you pick one and get 
                                familiar with it. When you run a test, it lists the accessibility issues it found, 
                                as well as links to documentation and hints on how to fix them.
                            </p>
                            <p>
                                Please note that these tools might detect accessibility issues that are not 
                                discussed in this article. You are welcome to contact Web for Everyone via LinkedIn
                                if you have any questions.
                            </p>
                        </details>
                    </div>
                </div>

                {/* ****************COLOR CONTRAST************************* */}
                <div className={`section ${styles['contrast']} scroll-target`} id="color-contrast">
                    <div className="section-heading" >
                        <span className="section-number">01</span>
                        <h2>
                            Color Contrast
                        </h2>
                    </div>

                    <div className={`code ${styles['code--contrast']}`}>
                        <code style={{ }}>
                            Normal text (16px): min. contrast 
                            ratio of <span className="pink-bg-white-text">4.5:1</span>
                        </code>
                        <code className="margin-top-30">
                            19px or larger, and bold: min contrast ratio of <span> </span>
                            <span className="pink-bg-white-text">3:1</span>
                        </code>
                        <code className="margin-top-30">
                            24px or larger: min contrast ratio of <span> </span>
                            <span className="pink-bg-white-text">3:1</span>
                        </code>
                    </div>
       
                    <h3>Mind the color contrast ratio to help users with low vision</h3>
                    <p>
                        Users with low vision can struggle with perceiving contrast. 
                        They can't spot outlines, edges, and other details. 
                        Reading can also be challenging when the text color doesn't stand out much from the 
                        background.
                    </p>
                    
                    <p>
                        When you run a test with automated tools like <span> </span>
                        <a href="https://developer.chrome.com/docs/devtools/accessibility/reference/" 
                            target="_blank" rel="noreferrer"
                        >
                            Google's Lighthouse
                        </a>
                        , if any elements failed the contrast ratio guidelines, you will know right away.
                    </p> 
                    <p>
                        If you'd like to be more proactive and test your colors as you're building, 
                        use <span> </span>
                        <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noreferrer">
                            WebAIM's contrast checker
                        </a> 
                        .  
                    </p>
                              
                    <p className="margin-top-30">
                        Checking the color contrast is easy: 
                    </p>
                    <p className="bullet-point-line">
                        enter the <strong>foreground and background colors</strong> for a given element
                    </p>
                    <p className="bullet-point-line">
                        the tool will calculate the <strong>contrast ratio</strong> for you
                    </p>
                    <p className="bullet-point-line">
                        you will get <strong>a pass or fail result</strong> for both the AA and AAA WCAG standards.
                    </p>             

                    <div className="highlight margin-top-30">
                        <details>
                            <summary>
                                <span className="details-title">
                                    Example: Using WebAIM's contrast checker
                                </span>
                            </summary>
                            <br></br>
                            <p className="margin-top-30">
                                <span className="pink-num">1. </span>Enter the foreground and background colors:
                            </p>
                            <div className="section-image">
                                <img src="/assets/images/colorContrastInput.jpg" 
                                    alt="A screenshot of WebAIM's color contrast checker. The foreground color entered is blue
                                    with hex value 169AC5 and the background color is a light gray with hex value 078005. 
                                    The contrast ratio displayed is 3.02:1."/>
                            </div>
                            <p>
                                Notice the <strong>lightness sliders</strong> that allow you to adjust the colors and see how 
                                the contrast ratio changes.
                            </p>
                           
                            <p style={{ marginTop: '50px' }}>
                                <span className="pink-num">2. </span>View the contrast ratio and the pass/fail results for each standard:
                            </p>
                            <div className="section-image">
                                <img src="/assets/images/colorContrastAnswers.jpg" 
                                    alt="A screenshot of WebAIM's color contrast checker results. Normal Text fails both 
                                    standards WCAG AA and AAA, Large Text passes WCAG AA but fails WCAG AAA, and Graphical Objects 
                                    and User Interface Components passes WCAG AA."/>
                            </div>
                            <p className="white-bg">
                                Notice how a ratio of <span className="pink-bg-white-text">3.14:1</span> fails 
                                WCAG AA for normal text, but passes for large text.
                            </p>
                            
                            <p style={{ marginTop: '30px' }}>
                                For quick access, you can <span> </span>
                                <a href="https://webaim.org/resources/contrastchecker/bookmarklet" target="_blank" rel="noreferrer">
                                    add the contrast checker to your Bookmarks bar
                                </a> 
                                <span> </span>in one easy step!
                            </p>
                           
                        </details>
                    </div>
                </div>

                {/* ****************ALT************************* */}
                <div className="section alt scroll-target" id="the-alt-attribute-for-images">
                    <div className="section-heading">
                        <span className="section-number">02</span>
                        <h2>The "alt" Attribute for Images</h2>
                    </div>

                    <div className="code code--alt">
                        <code><span className="code-blue-color">&lt;img</span></code>
                        <code className="padding-left-30">src="..."</code>
                        <code className="padding-left-30"><span className="code-pink-color">alt</span>="Fill me in or leave me empty, but do include me!"</code>
                        <code><span className="code-blue-color">/&gt;</span></code>
                    </div>
           
                    <h3>Help screen readers decide whether to read an image or not</h3>
                    <p className="white-bg">
                        Is your image purely decorative? Or, is the information presented in the image also 
                        conveyed by adjacent text? Then it's best to leave the <code>alt</code> attribute empty.
                    </p>
                    <p className="white-bg">
                        Does your image contain essential information that is not available in the text? 
                        Then add a short description in the <code>alt</code> attribute.
                    </p> 
                    <p className="white-bg">
                        Either way, it's important to <strong>add the <code>alt</code> attribute to all images</strong>. 
                    </p>
                    
                    <div className="highlight">
                        <p className="fake-heading-p">Rememeber the difference:</p>
                        <p className="white-bg">
                            A missing <code>alt</code> attribute is NOT the same 
                            as an empty <code>alt</code>!
                        </p>
                        <br/>
                        <p className="white-bg">
                            <span className="pink-text bold">Missing</span> <code>alt</code>: screen readers 
                            might read the source file name.
                        </p>
                        <p className="white-bg">
                            <span className="pink-text bold">Empty</span> <code>alt</code>: screen readers ignore 
                            the image.
                        </p>
                    
                    </div>
                </div>

                {/* ****************LINKS************************* */}
                <div className="section links scroll-target" id="links-with-discernable-text">
                    <div className="section-heading">
                        <span className="section-number">03</span>
                        <h2>Links with Discernable Text</h2>
                    </div>

                    <div className="code code--links">
                        <code>
                            <span className="code-blue-color">&lt;a</span> href="https://www.linkedin.com/in/webforeveryone/"
                            <span className="code-blue-color">&gt;</span>
                        </code>
                        <code className="padding-left-30">
                            <span className="code-yellow-color">&lt;i</span> className="fa-brands fa-linkedin" aria-hidden="true"
                            <span className="code-yellow-color">&gt;&lt;/i&gt;</span>
                        </code>
                        <code><span className="code-blue-color">&lt;/a&gt;</span></code>
                    </div>

                   
                    <h3>Help screen readers properly announce a link</h3>
                    
                    <p>
                        In the example above, the link to the LinkedIn profile
                        contains an icon and no visible text. A screen reader will announce part of the url 
                        (usually starting with the path segment)
                        and provide no information about the destination of the link. 
                    </p>
                        
                    <p>
                        Users relying on speech commands will not be able to activate the link. The command
                        <span className="bold"> "click LinkedIn"</span> would fail because the software would 
                        not recognize the 
                        name "LinkedIn". In fact, <span className="bold">the link has no accessible name</span>!
                        The browser can not compute it since none of the attributes that could provide one is present.
                    </p>

                    <div className="highlight">
                        <details>
                            <summary>
                                <span className="details-title">
                                    Accessible Name Review
                                </span>
                            </summary>
                            <p>
                                Assitive technologies recognize an interactive element by its accessible name. 
                                One of the following must be present in order for the browser to compute it:
                            </p>
                            <p><span className="pink-text bold">1. </span>visible text</p>
                            <p><span className="pink-text bold">2. </span>alt text (when an image is present)</p>
                            <p><span className="pink-text bold">3. </span>aria-label</p>
                            <p><span className="pink-text bold">
                                4. </span>aria-labelledby (it has the highest priority among all the other attributes)
                            
                            </p>
                            <p><span className="pink-text bold">5. </span>title (avoid it since it's tricky
                                to make it accessible to screen reader users)
                            </p>
                            <p>
                                <Link to="/resources/how-accessibility-works#the-accessible-name">
                                    Learn more about the accessible name
                                </Link>
                            </p>
                        </details>
                    </div>
                    
                    <h3 className="pink-text">Ways to fix links to social media profiles</h3>
                    <p className="white-bg">
                        <span className="pink-num" aria-hidden="true">1. </span> 
                        Add <code>aria-label</code> to the link element (e.g., <code>aria-label="LinkedIn Profile"</code>).
                        
                    </p>
                    <p>
                        <span className="pink-num" aria-hidden="true">2. </span> 
                        Replace the icon with text (e.g., LinkedIn). 
                    </p>
                    <p className="white-bg">
                        <span className="pink-num" aria-hidden="true">3. </span> 
                        Keep the icon, but add text with a <code>visually-hidden</code> class
                        (so the text is not visible on the screen). Screen readers 
                        will announce the text, while sighted users will rely on the icon to figure out the 
                        purpose of the link.
                    </p>
                    
                    <p style={{ marginTop: '40px' }}>
                        <span className="bold">Note: </span> 
                        This is not an exhaustive list of techniques you could use to make your social media
                        links accessible. The ones shared above are the most commonly used and you can employ them
                        anytime you use an icon instead of visible text. Plus, they also work with buttons.
                    </p>
                    <p className="white-bg">
                        <span className="bold">What about the <code>alt</code> attribute?</span> An icon displayed with an
                        <span> </span><code>&lt;i&gt;</code> tag does not accept the <code>alt</code> attribute 
                        like an <code>&lt;img&gt;</code> tag would. 
                    </p>
                    <p className="white-bg">
                        In the next section on buttons we will look at an example with an image and 
                        the <code>alt</code> attribute.
                    </p>
                    
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
                        the <code>alt</code> text of an image. This way the screen reader is also announcing there is an image
                        present. It is up to you if this information is useful to the user or not. If not, 
                        use one of the techniques discussed in the previous section and leave the <code>alt</code> attribute 
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
                    </div>
                </div>

                    
                {/* ****************CONCLUSION************************* */}
                <div className="section conclusion scroll-target" id="conclusion">
                    <h2>Conclusion</h2>
                    <p>
                        Congratulations! You are now familiar with how to fix or avoid the 6 most common 
                        accessibility issues.
                    </p>
                    <p>
                        Ready to continue your accessibility bug hunt?
                    </p>
                    <p>
                        Let's find the other 6 easy-to-fix bugs!
                    </p>
                    
                    <div className="next-article margin-top-30">
                        <span className="read-next">Read next:</span>
                        <Link to="/resources/make-it-accessible-part2" 
                                onClick={() => { scrollToTop() }}
                        >
                            Let's Make It Accessible! Part 2: On the Hunt for 6 More Bugs
                        </Link>
                    </div>
                </div>

            </div>
        </div>    
    )
}