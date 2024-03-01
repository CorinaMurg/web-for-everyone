import React from "react"
import { Link } from "react-router-dom"
import useScrollToTop from "../../../hooks/useScrollToTop"
import useDocTitle from "../../../hooks/useDocTitle"
import useScrollToSection from "../../../hooks/useScrollToSection"
import useHighlightTOC from "../../../hooks/useHighlightTOC"
import "../../../global.css"
import styles from "./MakeItAccessible.module.css"
import TableOfContents from "../../../components/TableOfContents/TableOfContents"
import BackLinks from "../../../components/BackLinks/BackLinks"
import WarningTriangle from "../../../components/WarningTriangle"
import ExternalLink from "../../../components/ExternalLink/ExternalLink"

const contents = [
    {
        href: "#intro",
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
    useDocTitle("Let's Make It Accessible Part One | Web for Everyone");
    useScrollToTop();
    useScrollToSection();
    const { activeId } = useHighlightTOC();
    return (
        <div className="article-container">
            
            {/* **************Back Links********************** */}
            <BackLinks 
                secondLink="Your Digital Presence"
                href="/resources#your-digital-presence" 
                current="Let's Make It Accessible - Part One"
            />
            
            <h1 aria-describedby="subtitle" className="article-heading-desktop">
                <span>Your Portfolio Site:</span>
                <span className="yellow-bg">Let's Make It Accessible!</span>
            </h1>
            <h1 className="article-heading-mobile">
                <span>Your Portfolio:</span>
                <span>Let's Make It</span>
                <span className="yellow-bg">Accessible!</span>
            </h1>
            <p id="subtitle" className="subtitle">Part One: Fixing the 6 Most Common Bugs</p>

            {/* **************Table of Contents********************** */}
            <TableOfContents contents={contents} activeId={activeId}/>

            {/* **************Article Content********************** */}
            <div className="article-content makeItOne">
                <div className="section intro scroll-target" id="intro">
                    <h2 className="sr-only">Introduction</h2>
                    {/* <p>
                        Guaranteeing 100% accessibility is a complex task, and it becomes ever more 
                        challenging as the functionality of a website increases. However, in a few 
                        steps you can make sure that your site is free of the most common,
                        easy-to-fix accessibility issues. 
                    </p> */}
                    <p>
                        The <span> </span>
                        <ExternalLink 
                            href="https://webaim.org/projects/million/" 
                            visibleText="2023 WebAIM Million Study"
                        />      
                        <span> </span>
                        of 1,000,000 home pages revealed a group of 6 bugs 
                        present on 96% of the pages.
                        Let's make sure your portfolio site is not one of them!
                    </p>

                    {/* **************Automated testing tools****************** */}
                    <div className="highlight highlight-one-line">
                        <details>
                            <summary>
                                <span className="summary-title">
                                    Automated testing tools: optional, but recommended!
                                </span>
                            </summary>
                            <br/>
                            <div className="details-content">
                            <p>
                                These are browser extensions that can help
                                you evaluate the accessibility of your site. 
                                They scan a page and identify accessibility 
                                issues based on best practices and standards established by
                                the <span> </span>
                                <ExternalLink 
                                    href="https://www.w3.org/WAI/standards-guidelines/wcag/" 
                                    visibleText="Web Content Accessibility Guidelines"
                                />
                                , bettwer known as <span className="bold">WCAG</span>. 
                            </p> 
                            <p>
                                Here are a few of the most popular browser extensions:
                            </p>
                            <p className="bullet-point-line">
                                <ExternalLink
                                    href=" https://wave.webaim.org/extension/" 
                                    visibleText="WebAIM's WAVE"
                                />
                                <span> </span>
                                is considered the most beginner-friendly as it highlights any issues directly on the page.
                            </p>
                            <p className="bullet-point-line">
                                <ExternalLink
                                    href="https://www.deque.com/axe/devtools/" 
                                    visibleText="Deque's axe DevTools"
                                />
                            </p>
                            <p className="bullet-point-line">
                                <ExternalLink
                                    href="https://developer.chrome.com/docs/lighthouse/overview/" 
                                    visibleText="Google's Lighthouse"
                                />
                            </p>
                            <p>
                                Each tool has its own strengths. Best if you pick one and get 
                                familiar with it. When you run a test, it lists the accessibility issues it found, 
                                as well as links to documentation and examples on how to fix them.
                            </p>
                            <p>
                                As we are now looking at how to avoid the most common 
                                accessibility bugs, these tools do a great job at spotting them.
                            </p>
                            <p>
                                But keep in mind that automated tools are imperfect!
                                They can't test all aspects of accessibility, and will catch at
                                most 50% of all the issues.
                            </p>
                            <div className="warning">
                                <WarningTriangle />
                                <p>  
                                    When building a complex website, your accessibility 
                                    audit will have to include:
                                </p>
                                <p className="bullet-point-line">
                                    <strong>manual testing</strong>: navigating with only the 
                                    keyboard, using different assistive technologies, to name a few
                                </p>
                                <p className="bullet-point-line">
                                    <strong>user testing</strong>: involving people with disabilities in the process
                                    of evaluating the site

                                </p>
                            </div>
                            </div>
                        </details>
                    </div>
                </div>

                {/* ****************COLOR CONTRAST************************* */}
                <div className={`section ${styles.contrast} scroll-target`} id="color-contrast">
                    <div className="section-heading" >
                        <span aria-hidden="true" className="section-number">01</span>
                        <h2>
                            Color Contrast
                        </h2>
                    </div>
                    
                    <div className={`code ${styles['code--contrast']}`}>
                        <dl className={styles['numbers']}>
                            <dt><code><span className="code-blue-color">Text smaller than 19px:</span></code></dt>
                            <dd><code>min. contrast ratio of <span className="white-bg-dark-text">4.5:1</span></code></dd>
                        </dl>
                       
                        <dl className={`${styles['numbers']} margin-top-20`}>
                            <dt><code><span className="code-yellow-color">Text 19px or larger, and bold:</span></code></dt>
                            <dd><code>min. contrast ratio of <span className="white-bg-dark-text">3.0:1</span></code></dd>
                        </dl>
                      
                        <dl className={`${styles['numbers']} margin-top-20`}>
                            <dt><code><span className="code-pink-color">Text 24px or larger:</span></code></dt>
                            <dd><code>min. contrast ratio of <span className="white-bg-dark-text">3.0:1</span></code></dd>
                        </dl>
                    </div>
       
                    <h3>Mind the color contrast ratio to help users with low vision</h3>
                    
                    <p>
                        For users with low vision reading can be challenging when the text color doesn't stand out much from the 
                        background. Noticing interactive elements like buttons or form inputs is also difficult
                        if the background or border does not contrast enough with the surrounding content.
                    </p>     
                    <p>
                        To avoid these problems, we rely on <strong>color contrast ratio</strong> tools to compare the 
                        difference in <strong>luminance</strong> (brightness) between any two colors.
                    </p>       
                    <p>
                        The <span className="dark-bg-white-text">4.5:1</span> (for smaller text) and <span> </span>
                        <span className="dark-bg-white-text">3.0:1</span> (for larger text) ratios are 
                        minimum values expected in order for  your content to be accessible to users with low vision.
                        In terms of accessibility guidelines, we call this the <strong>AA</strong> level.
                    </p>
                    <p>
                        The desirable <strong>AAA</strong> level requires
                        a <span className="dark-bg-white-text">7.0:1</span> contrast ratio for smaller text, 
                        and <span className="dark-bg-white-text">4.5:1</span> for larger text.
                        Whenever possible, aim for the <strong>AAA</strong> level as it provides the best experience 
                        for users with low vision.
                    </p>  

                    <h3>How to check the color contrast ratio</h3>
                    <p>
                        When you run an accessibility report with automated tools like Google's Lighthouse
                        or axe DevTools, if any elements failed the contrast ratio guidelines, you will know right away.
                    </p> 
                    <p>
                        If you'd like to be more proactive and test your colors as you're building, 
                        use <span> </span>
                        <ExternalLink
                            href="https://webaim.org/resources/contrastchecker/" 
                            visibleText="WebAIM's contrast checker"
                        />
                        .  
                    </p>
                    <p >
                        For quick access, you can also <span> </span>
                        <ExternalLink
                            href="https://webaim.org/resources/contrastchecker/bookmarklet" 
                            visibleText="add the contrast checker to your Bookmarks bar"
                        />
                        <span> </span>in one easy step!
                    </p>     
                    <p >
                        <strong>Checking the color contrast is straightforward</strong>: 
                    </p>
                    <div className="checkmark-line padding-left-20">
                        <p style={{marginTop: "0"}}>
                            <span className="pink-text bold">&#x2714; </span>
                            <span>enter the foreground and background colors for a given element</span>
                        </p>
                        <p>
                            <span className="pink-text bold">&#x2714; </span>
                            <span>the tool calculates the contrast ratio</span>
                        </p>
                        <p>
                            <span className="pink-text bold">&#x2714; </span>
                            <span>you receive a <strong>pass</strong> or <strong>fail</strong> result for 
                            the <strong>AA</strong> and <strong>AAA</strong> levels of accessibility compliance</span>
                        </p>
                    </div>
                            {/* <p></p>
                    <p className="margin-top-20 padding-left-20">
                        <strong className="pink-text"> 1. </strong>enter the foreground and background colors for a given element
                    </p>
                    <p className="margin-top-10 padding-left-20">
                        <strong className="pink-text">2. </strong>the tool calculates the contrast ratio
                    </p>
                    <p className="margin-top-10 padding-left-20">
                        <strong className="pink-text">3. </strong>you receive a <strong>pass</strong> or <strong>fail</strong> result for 
                        the <strong>AA</strong> and <strong>AAA</strong> levels of accessibility compliance
                    </p> 
                    </div> */}
                    
                    <p>
                        <strong>A neat feature of the tool</strong>: it provides <strong>luminance sliders</strong> that allow you to adjust 
                        the levels and see how the contrast ratio changes. <span aria-hidden="true"> 😎</span>
                    </p>  
                            
                    {/* Example: Using WebAIM's contrast checker */}
                    {/* <div className="highlight highlight-one-line margin-top-30">
                        <details>
                            <summary>
                                <span className="details-title">
                                    Example: Using WebAIM's contrast checker
                                </span>
                            </summary>
                            <br></br>
                            <div className="details-content">
                            <p className="margin-top-30">
                                <span className="pink-num">1. </span>Enter the foreground and background colors:
                            </p>
                            <div className="section-image">
                                <img src="/assets/images/colorContrastInput.jpg" 
                                    alt="WebAIM's color contrast checker.  
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
                                    alt="WebAIM's color contrast checker results."/>
                            </div>

                            <p className="white-bg">
                                Notice how a ratio of <span className="pink-bg-white-text">3.14:1</span> fails 
                                WCAG AA for normal text, but passes for large text.
                            </p>
                            
                            </div>
                        </details>
                    </div> */}

                    
                    {/* *****COLOR CONTRAST FOR LINKS***** */}
                    <div className="highlight">
                        <h4 className="two-line-heading">
                            <span>Did you know?</span>
                            <span>Links also have to follow the color contrast rules!<span aria-hidden="true"> 💡</span></span> 
                        </h4>
                        <p>
                            Here's a quick checklist to make sure your links stand out from the surrounding text and the background:
                        </p>
                        <div style={{ marginTop: "30px"}} className="checkmark-line padding-left-20">
                            <p>
                                <span className="pink-text bold">&#x2714; </span> 
                                <span>Contrast with background is at least <span className="dark-bg-white-text"><code>4.5:1</code></span> for smaller 
                                text, and <span className="dark-bg-white-text"><code>3.0:1</code></span> for larger text</span>
                            </p>
                            <p>
                                <span className="pink-text bold">&#x2714; </span>
                                <span>Links are underlined, <strong>OR</strong> the next two conditions are met:</span>
                            </p>
                            <p>
                                <span className="pink-text bold">&#x2714; </span>
                                <span>Contrast with surrounding text is at least <span className="dark-bg-white-text"><code>3.0:1</code></span></span>
                            </p>
                            <p>
                                <span className="pink-text bold">&#x2714; </span>
                                <span>Non-color visual clues (like underline or a focus ring) are available on mouse hover and keyboard focus</span>
                            </p>   
                        </div>
                          
                        <p style={{ marginTop: "30px"}}>
                            And to help you, WebAIM has a special contrast checker for links! <span> </span>
                            <ExternalLink
                                href="https://webaim.org/resources/linkcontrastchecker/" 
                                visibleText="WebAIM's link contrast checker"
                            />
                        </p>        
                    </div>
                </div>

                {/* ****************ALT************************* */}
                <div className="section alt scroll-target" id="the-alt-attribute-for-images">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">02</span>
                        <h2>The "alt" Attribute for Images</h2>
                    </div>

                    <div className="code code--alt">
                        <code><span className="code-blue-color">&lt;img</span></code>
                        <code className="padding-left-30">src="..."</code>
                        <code className="padding-left-30"><span className="code-pink-color">alt</span>="Fill me in or leave me empty, but do include me!"</code>
                        <code><span className="code-blue-color">/&gt;</span></code>
                    </div>
           
                    <h3>Help screen readers decide whether to announce an image or not</h3>
                    <p className="bullet-point-line white-bg">
                        Is your image <strong>purely decorative</strong>? Or, is the information presented in the image 
                        conveyed by the adjacent text as well? Then it's best to leave the <code>alt</code> attribute empty.
                    </p>
                    <p className="bullet-point-line white-bg">
                        Does your image contain <strong>essential information</strong> that is not available in the text? 
                        Then add a short description in the <code>alt</code> attribute. No need to add the word "image"
                        or "picture" in the description, as screen readers announce it as an image by default.
                    </p> 
                    <p className="white-bg">
                        Either way, it's important to <strong>add the <code>alt</code> attribute to all images</strong>. 
                    </p>
                    
                    <div className="highlight">
                        <h4><span className="yellow-bg-dark-text">Missing</span>, <span> </span>
                            <span className="yellow-bg-dark-text">empty</span>, or <span className="yellow-bg-dark-text">descriptive</span>?
                            <span className="sr-only"> alt attribute</span>
                            <span aria-hidden="true"> 🤔</span>
                        </h4>
                        <p className="white-bg">
                            <strong><span className="pink-text">Missing</span> alt</strong>: screen readers might 
                            read the source file name. When you have an image, the <code>alt</code> attribute is required!
                        </p>
                        <p>
                            <strong><span className="pink-text">Empty</span> alt</strong>: screen readers ignore the image.
                            If your image is purely decorative, the attribute should be empty.
                        </p>  
                        <p className="white-bg">
                            <strong><span className="pink-text">Descriptive</span> alt</strong>: add informative text if the image
                            is important for understanding your content.
                        </p> 
                        <p className="white-bg">
                            <strong>Remember</strong>:
                            A missing <code>alt</code> attribute is NOT the same 
                            as an empty <code>alt</code>!
                        </p>
                    </div>
                </div>

                {/* ****************LINKS************************* */}
                <div className={`${styles.links} section scroll-target`} id="links-with-discernable-text">
                    <div aria-hidden="true" className="section-heading">
                        <span className="section-number">03</span>
                        <h2>Links with Discernable Text</h2>
                    </div>

                    <div className="code code--links">
                        <code>
                            <span className="code-blue-color">&lt;a</span> href="https://www.linkedin.com/company/webforeveryone/"
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
                        You have to be careful with your social media links. 
                        If they are coded like the example above, they are not accessible.
                    </p>
                    <p>
                        The link to the LinkedIn profile
                        contains an icon and no visible text. A screen reader will announce part of the url 
                        (usually starting with the path segment)
                        and provide no information about the destination of the link. 
                    </p>
                    <p>
                        The problem: <strong>the link has no accessible name</strong>!
                        Assitive technologies recognize an interactive element by its accessible name, but
                        the browser can not compute it here since none of the attributes that could provide one 
                        is present.
                    </p>
                    <p>
                        Follow this link to <span> </span>
                        <Link to="/resources/how-accessibility-works#the-accessible-name">
                            review the accessible name
                        </Link>
                        , or continue reading for a list of solutions.
                    </p>

                    <h3>Ways to fix the links to social media profiles</h3>
                    <ol className="checkmark-line">
                        <li>
                            <p>
                                <span className="pink-text bold">&#x2714; </span>
                                <span>Replace the icon with text (e.g., LinkedIn).</span>
                            </p>
                        </li>
                        
                        <li>
                            <p className="white-bg">
                                <span className="pink-text bold">&#x2714; </span>       
                                <span>Keep the icon, but add text with a <code>visually-hidden</code> class
                                (so the text is not visible on the screen). Screen readers 
                                will announce the text, while sighted users will rely on the icon to figure out the 
                                purpose of the link.</span>
                            </p>
                        </li>
                        <li>
                            <p className="white-bg">
                                <span className="pink-text bold">&#x2714; </span>
                                <span>
                                    Add <code>aria-label</code> to the link element (e.g., <code>aria-label="LinkedIn Profile"</code>).
                                    A quick reminder that this is not a great choice because it does not
                                    take a <code>lang</code> attribute, nor it's guaranteed to be translated by all browsers!
                                </span>
                            </p>
                        </li>
                    </ol>
                    
                    <p className="white-bg">
                        <strong>What about the <code>alt</code> attribute?</strong> An icon displayed with an
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
                        <span aria-hidden="true" className="section-number">04</span>
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
                        an <code>alt</code> attribute. A screen reader will announce it as <strong>"Close modal graphic button"</strong>.
                    </p>
                    <p className="white-bg">
                        Notice the <strong>"graphic"</strong> part? Since the image has 
                        an <code>alt</code> text, the screen reader has to announce there is an image present. 
                        It is up to you if this information is useful to the user or not (most likely not?!). If not, 
                        use one of the techniques discussed in the <strong>Links</strong> section (like adding <span> </span>
                        <code>aria-label</code> or visible text) and remember to include the <code>alt</code> attrinute but leave
                        it empty.
                    </p>
                    
                </div>

                {/* ****************LABELS************************* */}
                <div className="section labels scroll-target" id="labels-for-inputs">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">05</span>
                        <h2>Labels for Inputs</h2>
                    </div>

                    <div className="code code--labels">
                        <code><span className="code-gray-color">// Implicit label by wrapping the input</span></code>
                        <code><span className="code-blue-color">&lt;label&gt;</span></code> 
                        <code className="padding-left-30">Enter your full name: </code>
                        <code className="padding-left-30">
                            <span className="code-yellow-color">&lt;input</span> id="name" type="text"  
                            <span className="code-yellow-color">/&gt;</span>
                        </code>
                        <code><span className="code-blue-color">&lt;/label&gt;</span></code>
                        <br/>
                        <br/>
                        <code><span className="code-gray-color">// Explicit label by referencing the "id" of the input</span></code>
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
                        <code>
                            <span className="code-yellow-color">&lt;input</span> 
                            <span className="code-pink-color"> id</span>="name" type="text" 
                            <span className="code-yellow-color">&gt;</span>
                        </code>
                    </div>

                    <h3>Help assistive tech users understand the purpose of an input</h3>

                    <p className="white-bg">
                        When it comes to your portfolio site, labels and inputs are likely to be part of your
                        contact form.
                        We will look at ways to make your contact form accessible in a separate article,
                        but now let's focus on the <code>label</code> and <code>input</code> elements.
                    </p>
                    <p>
                        <strong>Why are labels important?</strong>
                    </p>
                    <p className="bullet-point-line"> 
                        For screen reader users, the label is the only way to understand the purpose of the input.
                    </p>
                    <p className="bullet-point-line">
                        Speech command users rely on the label to select the input or any other form field.
                    </p>
                    <p className="bullet-point-line">
                        Sighted users can click on the label to bring focus to the input. This is actually 
                        an easy way if you are a sighted developer to test if a label is properly associated 
                        with an input.
                    </p>
                    <p>
                        <strong>Which method should you use?</strong>
                    </p>
                    <p className="white-bg">
                        Both are valid, but the explicit method (label wrapping the input) will cause 
                        problems for users relying on speech commands, specifically those using the 
                        Dragon NaturallySpeaking software. Since Dragon is the most popular speech recognition
                        software, it's best to <strong>use the implicit method</strong> (with the <code>for</code> attribute) until this issue is resolved.
                    </p>
                    
                </div>

                {/* ****************LANG************************* */}
                <div className="section lang scroll-target" id="the-language-attribute">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">06</span>
                        <h2>The Language Attribute</h2>
                    </div>

                    <div className="code code--lang">
                        <code>&lt;html <span className="code-pink-color">lang</span>="en"&gt;</code>
                    </div>
              
                    <h3 className="white-bg">Use a valid language in the <code>lang</code> attribute</h3>
                    <p>
                        It enables screen readers to correctly identify the language of a webpage, so 
                        it can use the correct pronunciation.
                    </p>
                    
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
                        <h4>
                            Do you know what else the lang attribute can do?! <span aria-hidden="true"> 💡</span>
                        </h4>
                        <p style={{ marginTop: '30px' }}>Take a specific dialect:</p>
                        <div className="code">
                            <code>&lt;html <span className="code-pink-color">lang</span>="en-US"&gt;</code>
                        </div>
                        <p style={{ marginTop: '50px' }}>
                            Specify the language of a certain word or section of the page:
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
                        Congratulations! You are now familiar with the 6 most common 
                        accessibility issues and how to avoid them in your portfolio site.
                    </p>
                    <p>
                        Ready to continue your accessibility bug hunt?
                    </p>
                    <p>
                        Let's find the other 6 easy-to-fix bugs!
                    </p>
                    
                    <p className="margin-top-30">
                        <b>Read next: </b>
                        <Link to="/resources/make-it-accessible-part2">
                            Let's Make It Accessible! Part 2: On the Hunt for 6 More Bugs
                        </Link>
                    </p>
                </div>

            </div>
        </div>    
    )
}