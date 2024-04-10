import React from "react"
import { Link } from "react-router-dom"
import useScrollToTop from "../../../hooks/useScrollToTop"
import useDocTitle from "../../../hooks/useDocTitle"
import useScrollToSection from "../../../hooks/useScrollToSection"
import useHighlightTOC from "../../../hooks/useHighlightTOC"
import styles from "./WhatIsA11y.module.css"
import "../../../global.css"
import TableOfContents from "../../../components/TableOfContents/TableOfContents"
import BackLinks from "../../../components/BackLinks/BackLinks"

const contents = [
    {
        href: "#intro",
        text: "Introduction",
        "aria-label": ""
    },
    {
        href: "#the-DNA-of-the-web-is-accessible",
        text: "The DNA of the web is accessible"
    },
    {
        href: "#why-accessibility",
        text: "Why accessibility?"
    },
    {
        href: "#web-access-is-everyone's-right",
        text: "Web access is everyone's right"
    },
    {
        href: "#next-steps",
        text: "Next steps"
    },
]

export default function WhatIsA11y() {
    useDocTitle("What is Accessiility | Web for Everyone"); 
    useScrollToTop();
    useScrollToSection();   
    const { activeId } = useHighlightTOC();
    return (
        <div className="article-container whatisa11y-container">
            <BackLinks 
                secondLink="Accessibility 101"
                href="/blog#accessibility-101" 
                current="What is accessibility?"
            />
            
            <h1 aria-describedby="subtitle" className="article-heading-desktop">
                <span>What is accessibility?</span>
            </h1>
            <h1 className="article-heading-mobile">
                <span>What is</span>
                <span>accessibility?</span>
            </h1>
            <p id="subtitle" className="subtitle">And why does it matter?</p>

            {/* ***************TABLE OF CONTENTS********************* */}
            <TableOfContents contents={contents} activeId={activeId}/>

            {/* **************ARTICLE CONTENT***************** */}
            
            <div className={`article-content ${styles['whatIsA11y']}`}>
                 {/* *************0. INTRO********************** */}
                <div className="section intro scroll-target" id="intro">
                    <h2 className="sr-only">Introduction: The Definition of Accessibility</h2>
                    <p>
                        Becoming a web developer comes with a cool superpower: to create sites and apps
                        that everyone,
                        including people with disabilities, can easily navigate. 
                    </p>
                    <p>
                        When you put this superpower to use, you make accessibility happen.
                        All visitors, regardless of how they access your finished product, will be able to navigate 
                        it and understand it.
                    </p>
                </div>
                    
                {/* ****************The DNA of the Web is Accessible****************** */}
                <div className="section scroll-target" id="the-DNA-of-the-web-is-accessible">
                    <h2>The DNA of the web is accessible</h2>
                    <p>
                        If you have good sight and hand mobility, you can rely on them to navigate
                        to a webpage and check out its content (probably with the help of a mouse or a keyboard). 
                    </p>
                    <p>
                        For the same purpose, a person who is blind may use a screen reader and a keyboard, while a 
                        person with good sight but limited or no hand mobility might use speech recognition software.
                    </p>    
                    <p>
                        As a developer, the tools you need to allow for these kinds of interactions (and many others!) 
                        are the same tools you use to build your websites or apps:
                    </p>
                    <ul role="list" className="bullet-point-list">
                        <li>
                            <p>
                                HTML (with a little help 
                                from <span> </span>
                                <a href="https://www.w3.org/WAI/standards-guidelines/aria/" target="_blank" rel="noopener noreferrer">
                                    ARIA
                                    <span className="sr-only"> opens in a new tab</span>
                                    <span className="external-linksvg-wrap">
                                        &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512"><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"/></svg>    
                                    </span>
                                </a>
                                <span> </span> attributes)
                            </p>
                        </li>
                        <li><p>CSS</p></li>
                        <li><p>JavaScript</p></li>
                    </ul>
                    <div>
                        <h3 className="white-bg">
                            Should your HTML be a soup of <code>&lt;div&gt;</code> tags?
                        </h3>
                        <p className="white-bg margin-top-20">
                            Of course not! We are lucky to be developers at a time when <code>HTML5</code> is the 
                            standard, and it comes with a whole set of semantic tags. These are tags that share the 
                            purpose of their content with the browser and the assistive technologies that 
                            people with disabilities use to access the web.
                        </p>
                    </div>
                    {/* *********WHAT ARE ASSISTIVE TECH************* */}
                    <div className="highlight highlight-one-line">
                        <details>
                            <summary>
                                <span className="summary-title">
                                    What are assistive technologies?
                                </span>
                            </summary>
                            <div className="details-content margin-top-20">
                                <p>
                                    Assistive technologies are software or hardware that help people with disabilities 
                                    interact with the web.  
                                </p>
                                <p>
                                    Here's an overview of some of the most common assistive technologies:
                                </p>
                                <p>
                                    <span className="bold"><span className="pink-text">1.</span> Screen Readers</span> are typically used by people who are blind 
                                    or have vision impairments. Users navigate through the UI elements with the 
                                    keyboard, and the content on the screen is shared with them through synthetic speech.  Examples of screen readers include JAWS (Job Access With Speech) for Windows, VoiceOver included in macOS and iOS devices, and NVDA (NonVisual Desktop Access), an open-source option for Windows.
                                </p>
                                <p>
                                    <span className="bold"><span className="pink-text">2.</span> Screen Readers with Braille Displays</span> for users with both 
                                    vision and hearing impairments. The screen reader 
                                    translates the content on the screen into a format that can be read on a 
                                    braille display. These displays are fitted with braille cells that change dynamically.
                                </p>
                                <p>
                                    <span className="bold"><span className="pink-text">3.</span> Screen Magnifiers</span> are designed to enlarge the content on 
                                    screen, making it more readable for users with low vision. These tools often 
                                    include additional features to enhance contrast and reduce glare.
                                </p>
                                <p>
                                    <span className="bold"><span className="pink-text">4.</span> Speech Recognition Software</span> allows users to interact with 
                                    their devices using voice commands. This technology helps people 
                                    with mobility issues or those who need a hands-free interraction with the web. 
                                    Dragon NaturallySpeaking is a popular example for Windows, while macOS offers 
                                    Dictation. Windows has integrated Cortana for voice commands.
                                </p>
                                <p>
                                    <span className="bold"><span className="pink-text">5.</span> Text-to-Speech Software (TTS)</span> converts 
                                    written text into 
                                    spoken words using synthetic voices. It benefits users with reading 
                                    difficulties, such as dyslexia.
                                </p>
                                
                                <p>
                                    <span className="bold"><span className="pink-text">6.</span> Alternate Input Technologies</span> simulate the functionality of 
                                    the keyboard for people with more severe physical disabilities. For example, a sip&puff device
                                    allows a person to send signals to the computer by inhaling or exhaling into a wand. 
                                </p>
                                <p>
                                    <span className="bold"><span className="pink-text">7.</span> Alternate Pointing Devices</span> replicate the functionality of 
                                    a traditional mouse. 
                                    For example, an eye-tracking system allows mouse control through eye movements.
                                </p>   
                            </div>
                        </details>
                    </div>
                    
                    <div className="highlight margin-top-20">
                        <h3>How semantic HTML improves accessibility</h3>
                        <p className="white-bg">
                            You’ve probably used HTML tags like <code>&lt;nav&gt;</code>,
                            <span> </span><code>&lt;button&gt;</code>, <code>&lt;p&gt;</code> or <code>&lt;h1&gt;</code>.
                            
                            They provide your codebase with a structure that is easy to recognize and maintain. 
                        </p>
                        <p className="white-bg">
                            For example, to designate a navigation
                            section you would use the <code>&lt;nav&gt;</code> tags, and for the main heading
                            of a page you would choose the <code>&lt;h1&gt;</code> tags.
                        </p>
                        <p className="white-bg">
                            We call these tags <span className="pink-bg-white-text" >semantic</span> because they let us 
                            know what type of content they hold. But the really neat quality of many semantic 
                            tags (not all though!) is that they convey information about their content to 
                            assistive technologies as well.
                        </p>
                        <p className="white-bg">
                            For example, when a screen reader encounters the main heading of this page, it 
                            will announce it to the user as <em>"What is accessibility; heading level 1"</em>. 
                            And that's because we wrapped the main heading in <code>&lt;h1&gt;</code> tags. 
                        </p>
                        <p className="white-bg">
                            Had we chosen a <code>&lt;div&gt;</code> instead and styled it to look like a heading,
                            the user would not be immediately aware of its role. A <code>&lt;div&gt;</code> has
                            no semantic meaning. It is just a container intended for styling purposes or for layout, 
                            and requires additional code to make it accessible.
                        </p>
                        <p className="bold">
                            Always start with semantic HTML!
                        </p>
                        <p>
                            Think about the content and the functionality 
                            you want to create, and choose the appropriate HTML tags. While JavaScript 
                            and ARIA can help with more 
                            complex acccessibility issues, semantic HTML is the foundation of accessibility.
                        </p>
                    </div>
                    
                    <div>
                        <h3>
                            Our job as developers is threefold:
                        </h3>   
                        &nbsp;
                        <ul role="list" className="bullet-point-list margin-top-0">
                            <li>
                                <p>
                                    Set accessibility as a goal. 
                                </p>
                            </li>
                            <li>
                                <p>
                                    Ask questions. Reach out for help and guidance.
                                    Learn about the ways in which 
                                    users of all abilities interact with the web and the functionality
                                    we need to provide for each group. 
                                </p>
                            </li>
                            <li>
                                <p>
                                    Follow good coding practices.
                                </p>
                            </li>
                        </ul>
                    </div>
                    
                    <p>
                        If we do our part, then the browser and the assistive technologies can do theirs!
                    </p>
                </div>

                {/* ***************WHY Accessibility***************** */}
                <div className="section scroll-target" id="why-accessibility">
                    <h2>Why accessibility?</h2>
                    <p>
                        From a business side, there are certainly a few practical reasons that can motivate 
                        a company to prioritize accessibility:
                    </p>
                    
                    <div>
                        <p className="bullet-point-line bold">legal compliance</p>
                        <p className="padding-left-20">
                            While the accessibility guidelines established by the W3C (the World Wide Web Consortium)
                            are not legally binding, many countries have adopted legislation founded on them.
                        </p>
                        <p className="margin-top-20 padding-left-20">
                            Did you know that in 2008, Target (a US-based retail chain) settled a class action 
                            lawsuit with the National Federation for the Blind for $6 million? And that in 2023, 
                            there were over 4,000 web accessibility lawsuits filed in the US alone?
                        </p>
                        
                        <p className="bold bullet-point-line margin-top-20">increased market share</p>
                        <p className="padding-left-20">
                            A site can attract new visitors from the millions of users with disabilities 
                            who use the web.
                        </p>
                    
                        <p className="bold bullet-point-line margin-top-20">improved SEO</p>
                        <p className="white-bg padding-left-20">
                            Many accessibility practices align with good SEO practices. For example, 
                            providing <code>alt</code> text for images and ensuring a logical content structure with 
                            proper heading tags are beneficial for both accessibility and SEO. 
                        </p>
                        
                        <p className="bold bullet-point-line margin-top-20">positive spillover</p>
                        <p className="padding-left-20">
                            Many features designed for accessibility, 
                            such as clear navigation, easy-to-read fonts, and simple layouts, 
                            contribute to a more intuitive and user-friendly interface for all users, not just
                            those with disabilities. 
                        </p>
                    </div>
                    <p>
                        BUT, above all the legal and market incentives, web access is everyone's right.
                    </p>
                </div>

                {/* *************Web Access is Everyone's Right******************** */}
                <div className="section scroll-target" id="web-access-is-everyone's-right">
                    <h2>Web access is everyone's right!</h2>
                    <p>
                        In our world, digital connectivity is key, and your finished product should allow everyone 
                        the ability to easily engage with it.  The web is not just a form of entertainment; it's a
                        source of information and services that are part of our daily life.
                    </p>
                    <p>
                        When was the last time you booked a flight with a travel agency? Or mailed a check to pay 
                        your bills? We regularly bypass traditional methods for online convenience. 
                    </p>
                    <p> 
                       
                        This shift to digital can benefit people with disabilities as well, but only
                        if we build with accessibility in mind.
                        For people with disabilities, an accessible web opens the door to freedom and privacy, 
                        and can remove many of the challenges associated with their impairments: a blind student 
                        could access online courses or a person with limited mobility could order their groceries online.
                    </p>                  
                </div>

                {/* *********NEXT***************** */}
                <div className="section scroll-target" id="next-steps">
                    <h2>Next steps</h2>
                    <p> 
                        Whether it's inconvenience or lack of awareness, the majority of websites are not 
                        accessible. 97% of them have some accessibility bugs!
                    </p>

                    <p>
                        The good news is that most of these bugs have easy solutions.
                        In fact, the 6 most common accessibility bugs can be fixed with only 
                        HTML and CSS! 
                    </p>
                    
                    <p>
                        Your portfolio site and personal projects are a great place to start implementing 
                        accessibility practices. But, before jumping into reviewing your code, let's understand 
                        how accessibility works.
                    </p>
                         
                    <p>
                        <b>Read next: </b>
                        <Link to="/blog/how-accessibility-works" onClick={() => { useScrollToTop() }}>
                            How accessibility works
                        </Link>
                    </p>
                    
                </div>
            </div>
        </div>
    )
}


