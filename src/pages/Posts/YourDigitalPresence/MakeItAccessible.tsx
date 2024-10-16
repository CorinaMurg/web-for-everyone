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
import ExternalLink from "../../../components/ExternalLink/ExternalLink"
import ScrollToTopButton from "../../../components/ScrollToTopButton/ScrollToTopButton"

const contents = [
    {
        href: "#intro",
        text: "Introduction",
    },
    {
        href: "#color-contrast",
        text: "Color contrast",
    },
    {
        href: "#the-alt-attribute-for-images",
        text: "The 'alt' attribute for images",
    },
    {
        href: "#links-with-discernable-text",
        text: "Links with discernable text",
    },
    {
        href: "#buttons-with-discernable-text",
        text: "Buttons with discernable text",
    },
    {
        href: "#labels-for-inputs",
        text: "Labels for inputs",
    },
    {
        href: "#the-language-attribute",
        text: "The language attribute",
    },
    {
        href: "#conclusion",
        text: "Conclusion",
    },
]

export default function MakeItAccessible() {
    useDocTitle("Finding the six most common bugs | Web for Everyone");
    useScrollToTop();
    useScrollToSection();
    const { activeId } = useHighlightTOC();
    return (
        <div className="article-container">
            {/* **************Back Links********************** */}
            <BackLinks 
                secondLink="Your portfolio site"
                href="/blog#your-portfolio-site" 
                current="Fixing the six most common bugs"
            />
           
            <h1 aria-describedby="subtitle" className="article-heading-desktop">
                <span>Fixing the six most</span>
                <span>common bugs</span>
            </h1>
            <h1 className="article-heading-mobile">
                <span>Fixing the six most</span>
                <span>common bugs</span>
            </h1>
            <p id="subtitle" className="subtitle">Accessibility with just HTML and CSS</p>
        
            {/* **************Table of Contents********************** */}
            <TableOfContents contents={contents} activeId={activeId}/>

            {/* **************Article Content********************** */}
            <div className="article-content makeItOne">
                <div className="section intro scroll-target" id="intro">
                    <h2 className="sr-only">Introduction</h2>
                    <p>
                        The <span> </span>
                        <ExternalLink 
                            href="https://webaim.org/projects/million/" 
                            visibleText="2024 WebAIM Million Study"
                        />      
                        <span> </span>
                        of 1,000,000 home pages revealed a group of 6 bugs 
                        present on 96% of the pages.
                        Let&apos;s make sure your portfolio site is not one of them!
                    </p>

                </div>

                {/* ****************COLOR CONTRAST************************* */}
                <div className={`section ${styles.contrast} scroll-target`} id="color-contrast">
                    <div className="section-heading" >
                        <span aria-hidden="true" className="section-number">01</span>
                        <h2>
                            Color contrast
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
                        For users with low vision reading can be challenging when the text color doesn&apos;t stand out much from the 
                        background. Noticing interactive elements like buttons or form inputs is also difficult
                        if the background or border does not contrast enough with the surrounding content.
                    </p>     
                    <p>
                        To avoid these problems, we rely on <span className="bold">color contrast ratio</span> tools to compare the 
                        difference in <span className="bold">luminance</span> (brightness) between any two colors.
                    </p>       
                    <p>
                        The <span className="pink-bg-white-text"><code>4.5:1</code></span> (for smaller text) and <span> </span>
                        <span className="pink-bg-white-text"><code>3.0:1</code></span> (for larger text) ratios are 
                        minimum values expected in order for  your content to be accessible to users with low vision.
                        In terms of accessibility guidelines, we call this the <span className="bold">AA</span> level.
                    </p>
                    <p>
                        The desirable <span className="bold">AAA</span> level requires
                        a <span className="pink-bg-white-text"><code>7.0:1</code></span> contrast ratio for smaller text, 
                        and <span className="pink-bg-white-text"><code>4.5:1</code></span> for larger text.
                        Whenever possible, aim for the <span className="bold">AAA</span> level as it provides the best experience 
                        for users with low vision.
                    </p>  

                    <h3>How to check the color contrast ratio</h3>
                    <p>
                        When you run an accessibility report with automated tools like Google&apos;s Lighthouse
                        or axe DevTools, if any elements failed the contrast ratio guidelines, you will know right away.
                    </p> 
                    <p>
                        If you&apos;d like to be more proactive and test your colors as you&apos;re building, 
                        use <span> </span>
                        <ExternalLink
                            href="https://webaim.org/resources/contrastchecker/" 
                            visibleText="WebAIM's contrast checker"
                        />. 
                    </p>
                    
                    <div className="contrast-image-container">
                        <img 
                            alt="Webaim's contrast checker tool"
                            className={`styles['contrast-checker-image'] content-image`}
                            src="/assets/contrastChecker.jpg"
                        /> 
                    </div>
                    <div className="checkmark-lines">
                        <p className="bold">
                            Checking the color contrast is straightforward:
                        </p>
                        <p>
                            <span className="pink-text bold">&#x2714;</span>
                            <span>enter the foreground and background colors for a given element</span>
                        </p>
                        <p>
                            <span className="pink-text bold">&#x2714;</span>
                            <span>the tool calculates the contrast ratio</span>
                        </p>
                        <p>
                            <span className="pink-text bold">&#x2714;</span>
                            <span>you receive a <span className="bold">pass</span> or <span className="bold">fail</span> result for 
                            the <span className="bold">AA</span> and <span className="bold">AAA levels of compliance</span></span>
                        </p>
                       
                    </div>
                    <div className="content-image-container">
                        <img 
                            alt="Webaim's contrast checker results"
                            className={`styles['contrast-results-image'] content-image`}
                            src="/assets/contrastResults.jpg"
                        />  
                    </div>
                   
                    <p>
                        <span className="bold">A neat feature of the tool</span>: it provides <span className="bold">luminance sliders</span> that allow you to adjust 
                        the levels and see how the contrast ratio changes. <span aria-hidden="true"> 😎</span>
                    </p>  

                    <p >
                        For quick access, you can also <span> </span>
                        <ExternalLink
                            href="https://webaim.org/resources/contrastchecker/bookmarklet" 
                            visibleText="add the contrast checker to your Bookmarks bar"
                        />
                        <span> </span>in one easy step!
                    </p>  
                            
                    {/* *****COLOR CONTRAST FOR LINKS***** */}
                    <div className="highlight">
                        <h4 className="two-line-heading">
                            <span>Did you know?</span>
                            <span>Links also have to follow the color contrast rules!<span aria-hidden="true"> 💡</span></span> 
                        </h4>
                        <p>
                            Here&apos;s a quick checklist to make sure your links stand out from the surrounding text and the background:
                        </p>
                        <div style={{ marginTop: "30px"}} className="checkmark-lines">
                            <p>
                                <span className="pink-text bold">&#x2714;</span>
                                <span>Contrast with background is at least <span className="pink-bg-white-text"><code>4.5:1</code></span> for smaller 
                                text, and <span className="pink-bg-white-text"><code>3.0:1</code></span> for larger text</span>
                            </p>
                            <p>
                                <span className="pink-text bold">&#x2714;</span>
                                <span>Links are underlined, <span className="bold">OR</span> the next two conditions are met:</span>
                            </p>
                            <p>
                                <span className="pink-text bold">&#x2714;</span>
                                <span>Contrast with surrounding text is at least <span className="pink-bg-white-text"><code>3.0:1</code></span></span>
                            </p>
                            <p>
                                <span className="pink-text bold">&#x2714;</span>
                                <span>Non-color visual clues (like underline or a focus ring) are available on mouse hover and keyboard focus</span>
                            </p>   
                        </div>
                          
                        <p style={{ marginTop: "30px"}}>
                            And to help us, WebAIM has a special { }
                            <ExternalLink
                                href="https://webaim.org/resources/linkcontrastchecker/" 
                                visibleText="links contrast checker"
                            />
                            <span aria-hidden="true"> 🌟</span>
                        </p> 
                          
                    </div>
                    <div className="content-container">
                        <img 
                            alt="Webaim's link contrast checker"
                            className={`styles['link-contrast-checker-image'] content-image`}
                            src="/assets/linkContrastChecker.jpg"
                        />  
                    </div> 
                </div>

                {/* ****************ALT************************* */}
                <div className="section alt scroll-target" id="the-alt-attribute-for-images">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">02</span>
                        <h2>The &quot;alt&quot; attribute for images</h2>
                    </div>

                    <div className="code code--alt">
                        <code><span className="code-blue-color">&lt;img</span></code>
                        <code className="padding-left-30">src=&quot;...&quot;</code>
                        <code className="padding-left-30"><span className="code-pink-color">alt</span>=&quot;Fill me in or leave me empty, but do include me!&quot;</code>
                        <code><span className="code-blue-color">/&gt;</span></code>
                    </div>
           
                    <h3>Help screen readers decide whether to announce an image or not</h3>
                    <p className="bullet-point-line white-bg">
                        Is your image <span className="bold">purely decorative</span>? Or, is the information presented in the image 
                        conveyed by the adjacent text as well? Then it&apos;s best to leave the <code>alt</code> attribute empty.
                    </p>
                    <p className="bullet-point-line white-bg">
                        Does your image contain <span className="bold">essential information</span> that is not available in the text? 
                        Then add a short description in the <code>alt</code> attribute. No need to add the word &quot;image&quot;
                        or &quot;picture&quot; in the description, as screen readers announce it as an image by default.
                    </p> 
                    <p className="white-bg">
                        Either way, it&apos;s important to <span className="bold">add the <code>alt</code> attribute to all images</span>. 
                    </p>
                    
                    <div className="highlight">
                        <h3>
                            Missing, empty, or descriptive <code className="bold">alt</code>?
                            <span className="sr-only"> alt attribute</span>
                            <span aria-hidden="true"> 🤔</span>
                        </h3>
                        <p className="white-bg">
                            <span className="bold">Missing</span>: screen readers might 
                            read the source file name. When you have an image, the attribute is required!
                        </p>
                        <p className="white-bg">
                            <span className="bold">Empty</span>: screen readers ignore the image.
                            If your image is purely decorative, the attribute should be empty: <code>alt=&quot;&quot;</code>
                        </p>  
                        <p className="white-bg">
                            <span className="bold">Descriptive</span>: if the image
                            is important for understanding your content use the attribute to describe it: <code>alt=&quot;some description&quot;</code>
                        </p> 
                        <p className="white-bg">
                            Remember:
                            A missing <code>alt</code> attribute is NOT the same 
                            as an empty <code>alt</code>!
                        </p>
                    </div>
                </div>

                {/* ****************LINKS************************* */}
                <div className={`${styles.links} section scroll-target`} id="links-with-discernable-text">
                    <div aria-hidden="true" className="section-heading">
                        <span className="section-number">03</span>
                        <h2>Links with discernable text</h2>
                    </div>

                    <div className="code code--links">
                        <code>
                            <span className="code-blue-color">&lt;a</span> href=&quot;https://www.linkedin.com/company/webforeveryone/&quot;
                            <span className="code-blue-color">&gt;</span>
                        </code>
                        <code className="padding-left-30">
                            <span className="code-yellow-color">&lt;i</span> className=&quot;fa-brands fa-linkedin&quot; aria-hidden=&quot;true&quot;
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
                        The problem: <span className="bold">the link doesn&apos;t have an accessible name</span>!
                        Assistive technologies recognize an interactive element by its accessible name, but
                        the browser can not compute it here since none of the attributes that could provide one 
                        is present.
                    </p>
                    <p>
                        Follow this link to <span> </span>
                        <Link to="/blog/how-accessibility-works#the-accessible-name">
                            review the accessible name
                        </Link>
                        , or continue reading for a list of solutions.
                    </p>

                    <h3>Ways to fix the links to social media profiles</h3>
                    <ol className="checkmark-lines">
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
                                    Add <code>aria-label</code> to the link element (e.g., <code>aria-label=&quot;LinkedIn&quot;</code>).
                                    A quick reminder that, in general, <code>aria-label</code>is not a great choice for internationalization
                                    (for example, the text is not guaranteed to be translated by all browsers), but it&apos;s not a concern here since
                                    we are dealing with an internationally recognized brand name.
                                </span>
                            </p>
                        </li>
                    </ol>
                    
                    <p className="white-bg">
                        <span className="bold">What about the <code>alt</code> attribute?</span> An icon displayed with an
                        <span> </span><code>&lt;i&gt;</code> tag does not accept this attribute 
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
                        <h2>Buttons with discernable text</h2>
                    </div>

                    <div className="code code--buttons">
                        <code>
                            <span className="code-blue-color">&lt;button</span>
                            <span className="code-blue-color">&gt;</span>
                        </code>
                        <code className="padding-left-30">
                            <span className="code-pink-color">&lt;img</span> 
                            <span className="code-yellow-color"> alt</span>=&quot;Close&quot; src=&quot;x-mark.svg&quot;
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
                        an <code>alt</code> attribute. A screen reader will announce it as <span className="bold">&quot;Close graphic button&quot;</span>.
                    </p>
                    <p className="white-bg">
                        Notice the <span className="bold">&quot;graphic&quot;</span> part? Since the image has 
                        an <code>alt</code> attribute that is not empty, the screen reader has to announce there is an image present. 
                        It is up to you if this information is useful to the user or not (most likely not?!). If not, 
                        use one of the techniques discussed in the <span className="bold">Links</span> section, and remember to include the <code>alt</code> attribute but leave
                        it empty: <code>alt=&quot;&quot;</code>.
                    </p>
                    
                </div>

                {/* ****************LABELS************************* */}
                <div className="section labels scroll-target" id="labels-for-inputs">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">05</span>
                        <h2>Labels for inputs</h2>
                    </div>

                    <div className="code code--labels">
                        <code><span className="code-gray-color">{'// Implicit label by wrapping the input'}</span></code>
                        <code><span className="code-blue-color">&lt;label&gt;</span></code> 
                        <code className="padding-left-30">Enter your full name: </code>
                        <code className="padding-left-30">
                            <span className="code-yellow-color">&lt;input</span> id=&quot;name&quot; type=&quot;text&quot;  
                            <span className="code-yellow-color">/&gt;</span>
                        </code>
                        <code><span className="code-blue-color">&lt;/label&gt;</span></code>
                        <br/>
                        <br/>
                        <code><span className="code-gray-color">{'// Explicit label by referencing the &quot;id&quot; of the input'}</span></code>
                        <code>
                            <span className="code-blue-color">&lt;label</span> <span className="code-pink-color"></span>
                            <span className="code-pink-color">for</span>=&quot;name&quot;
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
                            <span className="code-pink-color"> id</span>=&quot;name&quot; type=&quot;text&quot; 
                            <span className="code-yellow-color">&gt;</span>
                        </code>
                    </div>

                    <h3>Help assistive tech users understand the purpose of an input</h3>

                    <p className="white-bg">
                        When it comes to your portfolio site, labels and inputs are likely to be part of your
                        contact form.
                        We will look at ways to make your contact form accessible in a separate article,
                        but now let&apos;s focus on the <code>label</code> and <code>input</code> elements.
                    </p>
                    
                    <div>
                        <h4>Why are labels important?</h4>
                        <p className="bullet-point-line margin-top-10"> 
                            For screen reader users, the label is the only way to understand the purpose of the input.
                        </p>
                        <p className="bullet-point-line margin-top-20">
                            Speech command users rely on the label to select the input or any other form field.
                        </p>
                        <p className="bullet-point-line margin-top-20">
                            Sighted users can click on the label to bring focus to the input. If you are a 
                            sighted developer, this is actually an easy way to test if a label is properly 
                            associated with an input.
                        </p>
                    </div>

                    <div>
                        <h4>Which method should you use: <span className="bold">implicit</span> or <span className="bold">explicit</span>?</h4>
                        <p className="white-bg">
                            Both are valid, but the implicit method (label wrapping the input) will cause 
                            problems for users relying on speech commands, specifically those using the 
                            Dragon NaturallySpeaking software. Why? Well, simply because there&apos;s a bug in their code!
                            <span aria-hidden="true"> ☹️</span>
                        </p> 
                        <p className="white-bg margin-top-20">
                            Since Dragon is the most popular speech recognition
                            software, it&apos;s best to <span className="bold">use the explicit 
                            method</span> (with the <code>for</code> attribute) until they fix the issue.
                        </p>
                    </div>
                </div>

                {/* ****************LANG************************* */}
                <div className="section lang scroll-target" id="the-language-attribute">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">06</span>
                        <h2>The language attribute</h2>
                    </div>

                    <div className="code code--lang">
                        <code>&lt;html <span className="code-pink-color">lang</span>=&quot;en&quot;&gt;</code>
                    </div>
              
                    <h3 className="white-bg">Use a valid language in the <code>lang</code> attribute</h3>
                    <p>
                        It enables screen readers to correctly identify the language of a webpage, so 
                        it can use the correct pronunciation.
                    </p>
                    
                    <p className="white-bg">
                        Is it common for a project to lack this attribute? Not at all! 
                        That&apos;s because when we initiate a new code base we are likely to use editors that generate 
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
                            Do you know what else the <code className="bold">lang</code> attribute can do?! <span aria-hidden="true"> 💡</span>
                        </h4>
                        <p style={{ marginTop: '30px' }}>Take a specific dialect:</p>
                        <div className="code">
                            <code>&lt;html <span className="code-pink-color">lang</span>=&quot;en-US&quot;&gt;</code>
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
                                <span className="code-pink-color">lang</span>=&quot;fr&quot;
                                <span className="code-yellow-color">&gt;</span>Bonjour
                                <span className="code-yellow-color">&lt;/span&gt;</span>
                                <span> </span>in French.
                            </code>
                            <code><span className="code-blue-color">&lt;/p&gt;</span></code>
                        </div>
                        {/* <div className="code"> 
                            <code> <span className="code-blue-color">&lt;p <span className="code-yellow-color">lang="fr"</span>&gt;</span></code>
                                <code className="padding-left-30">Bonjour</code>
                            <code><span className="code-blue-color">&lt;/p&gt;</span></code>
                        </div> */}
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
                    
                    <p className="margin-top-30 read-next">
                        <span>Read next: </span>
                        <Link to="/blog/the-next-six-bugs" onClick={() => { useScrollToTop() }}>
                            Level up: the next 6 bugs to watch for
                        </Link>
                    </p>
                </div>

            </div>
            <ScrollToTopButton />
        </div>    
    )
}