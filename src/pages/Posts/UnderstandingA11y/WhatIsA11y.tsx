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
        "aria-label": "Introduction to what is accessibility"
    },
    {
        href: "#the-DNA-of-the-web-is-accessible",
        text: "The DNA of the Web is Accessible"
    },
    {
        href: "#why-accessibility",
        text: "Why Accessibility?"
    },
    {
        href: "#web-access-is-everyone's-right",
        text: "Web Access is Everyone's Right"
    },
    {
        href: "#next-steps",
        text: "Next Steps"
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
                secondLink="Understanding Accessibility"
                href="/resources#understanding-accessibility" 
                current="What is Accessibility?"
            />
            
            <h1 aria-describedby="subtitle" className="article-heading-desktop">
                <span>What is <span className="yellow-bg">Accessibility?</span></span>
                
            </h1>
            <h1 className="article-heading-mobile">
                <span>What is</span>
                <span className="yellow-bg">Accessibility?</span>
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
                        that <span className="yellow-bg">everyone</span>,
                        including people with disabilities, can easily navigate. 
                        
                        When you put this superpower to use, you make accessibility happen.
                        All visitors, regardless of how they access your finished product, will be able to navigate 
                        it and understand it.
                    </p>
                </div>
                    
                {/* ****************The DNA of the Web is Accessible****************** */}
                <div className="section scroll-target" id="the-DNA-of-the-web-is-accessible">
                    <h2>The DNA of the Web is Accessible</h2>
                    <p>
                        If you have good sight and hand mobility, you can rely on them to navigate
                        to a webpage and check out its content (probably with the help of a mouse or a keyboard). 
                        For the same purpose, a person who is blind may use a screen reader and a keyboard, while a 
                        person with good sight but limited or no hand mobility might use speech recognition software.
                    </p>    
                    <p>
                        As a developer, the tools you need to allow for these kinds of interactions (and many others!) 
                        are the same tools you use to build your websites or apps:
                    </p>
                    <ul>
                        <li>
                            <p className="bullet-point-line">
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
                        <li><p className="bullet-point-line margin-top-20">CSS</p></li>
                        <li><p className="bullet-point-line margin-top-20">JavaScript</p></li>
                    </ul>
                    <p>
                        <strong className=" margin-top-20 white-bg">
                        Should your HTML file be a soup of <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> tags?
                        </strong>
                    </p>
                    <p className="white-bg">
                        Of course not! We are lucky to be developers at a time when <code>HTML5</code> is the 
                        standard, and it comes with a whole set of semantic tags. These are tags that share the 
                        purpose of their content with the browser and the assistive technologies that 
                        people with disabilities use to access the web.
                    </p>

                    {/* *********WHAT ARE ASSISTIVE TECH************* */}
                    <div className="highlight highlight-one-line">
                        <details>
                            <summary>What are assistive technologies?</summary>
                            <div className="details-content">
                            <p>
                                Assistive technologies are software or hardware that help people with disabilities 
                                interact with the web.  
                            </p>
                            <p>
                                Here's an overview of some of the most common assistive technologies:
                            </p>
                            <p>
                                <strong className="pink-text">1.</strong><strong> Screen Readers</strong> are typically used by people who are blind 
                                or have vision impairments. Users navigate through the UI elements with the 
                                keyboard, and the content on the screen is shared with them through synthetic speech.  Examples of screen readers include JAWS (Job Access With Speech) for Windows, VoiceOver included in macOS and iOS devices, and NVDA (NonVisual Desktop Access), an open-source option for Windows.
                            </p>
                            <p>
                                <strong className="pink-text">2.</strong><strong> Screen Readers with Braille Displays</strong> for users with both 
                                vision and hearing impairments. The screen reader 
                                translates the content on the screen into a format that can be read on a 
                                braille display. These displays are fitted with braille cells that change dynamically.
                            </p>
                            <p>
                                <strong className="pink-text">3.</strong><strong> Screen Magnifiers</strong> are designed to enlarge the content on 
                                screen, making it more readable for users with low vision. These tools often 
                                include additional features to enhance contrast and reduce glare.
                            </p>
                            <p>
                                <strong className="pink-text">4.</strong><strong> Speech Recognition Software</strong> allows users to interact with 
                                their devices using voice commands. This technology helps people 
                                with mobility issues or those who need a hands-free interraction with the web. 
                                Dragon NaturallySpeaking is a popular example for Windows, while macOS offers 
                                Dictation. Windows has integrated Cortana for voice commands.
                            </p>
                            <p>
                                <strong className="pink-text">5.</strong><strong> Text-to-Speech Software (TTS)</strong> converts written text into 
                                spoken words using synthetic voices. It benefits users with reading 
                                difficulties, such as dyslexia, or those who prefer auditory learning.
                            </p>
                            
                            <p>
                                <strong className="pink-text">6.</strong><strong> Alternate Input Technologies</strong> simulate the functionality of 
                                the keyboard for people with more severe physical disabilities. Examples include 
                                head pointers that allow users to perform mouse movements, clicks, and typing tasks 
                                using head movements, and sip&puff devices controlled 
                                by inhaling or exhaling. 
                            </p>
                            <p>
                                <strong className="pink-text">7.</strong><strong> Alternate Pointing Devices</strong> replicate the functionality of 
                                a traditional mouse. 
                                Examples include trackballs, which can be easier to manipulate than a standard 
                                mouse; joystick mice, for people with limited hand dexterity; 
                                and eye-tracking systems, which allow mouse control through eye movements.
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
                            When a screen reader encounters the navigation section of your site, it 
                            will announce it to the user as <strong>"navigation landmark"</strong>. And that's because you chose
                            to wrap your navigation links in <code>&lt;nav&gt;</code> tags. 
                        </p>
                        <p className="white-bg">
                            Had you chosen a <code>&lt;div&gt;</code> instead, 
                            the user would not be immediately aware of its purpose. A <code>&lt;div&gt;</code> has
                            no semantic meaning. It is just a container intended for styling purposes or for layout, 
                            and requires additional code to make it accessible.
                        </p>
                        <p>
                            <strong>Always rely on semantic HTML!</strong>
                        </p>
                        <p>
                            Think about the content and the functionality 
                            you want to create, and choose the appropriate HTML tags. While JavaScript can help with more 
                            complex acccessibility issues, semantic HTML is the foundation of accessibility.
                        </p>
                    </div>
                    <p>
                        <strong className="margin-top-0">
                            Our job as developers is threefold:
                        </strong>   
                    </p>  
                    <ul>
                        <li>
                            <p className="bullet-point-line">
                                Set accessibility as a goal. 
                            </p>
                        </li>
                        <li>
                            <p className="bullet-point-line margin-top-20">
                                Ask questions. Reach out for help and guidance.
                                Learn about the ways in which 
                                users of all abilities interact with the web and the functionality
                                we need to provide for each group. 
                            </p>
                        </li>
                        <li>
                            <p className="bullet-point-line margin-top-20">
                                Follow good coding practices.
                            </p>
                        </li>
                    </ul>
                    <p>
                        <strong className="margin-top-20">
                            If we do our part, then the browser and the assistive technologies can do theirs!
                        </strong>
                    </p>
                </div>

                {/* ***************WHY Accessibility***************** */}
                <div className="section scroll-target" id="why-accessibility">
                    <h2>Why Accessibility?</h2>
                    <p>
                        From a business side, there are certainly a few practical reasons that can motivate 
                        a company to prioritize accessibility:
                    </p>
                    
                    <div>
                        <p className="bullet-point-line"><strong>legal compliance</strong></p>
                        <p className="padding-left-20">
                            Did you know that in 2008, Target (a US-based retail chain) settled a class action 
                            lawsuit with the National Federation for the Blind for $6 million? 
                        </p>
                        <p className="margin-top-20 padding-left-20">
                            The legal implications of inaccessible sites are real!
                        </p>
                        <p className="margin-top-20 padding-left-20">
                            While the accessibility guidelines established by the W3C (the World Wide Web Consortium)
                            are not legally binding, many countries have adopted legislation founded on them.
                        </p>
                        
                        <p className="bullet-point-line margin-top-20"><strong>increased market share</strong></p>
                        <p className="padding-left-20">
                            A site can attract new visitors from the millions of users with disabilities 
                            who use the web.
                        </p>
                    
                        <p className="bullet-point-line margin-top-20"><strong>improved SEO</strong></p>
                        <p className="white-bg padding-left-20">
                            Many accessibility practices align with good SEO practices. For example, 
                            providing <code>alt</code> text for images and ensuring a logical content structure with 
                            proper heading tags are beneficial for both accessibility and SEO. 
                        </p>
                        
                        <p className="bullet-point-line margin-top-20"><strong>positive spillover</strong></p>
                        <p className="padding-left-20">
                            Many features designed for accessibility, 
                            such as clear navigation, easy-to-read fonts, and simple layouts, 
                            contribute to a more intuitive and user-friendly interface for all users, not just
                            those with disabilities. 
                        </p>
                    </div>
                    <p>
                        <strong>BUT, above all . . .</strong>
                    </p>
                </div>

                {/* *************Web Access is Everyone's Right******************** */}
                <div className="section scroll-target" id="web-access-is-everyone's-right">
                    <h2>Web Access is Everyone's Right!</h2>
                    <p>
                        In our world, digital connectivity is key, and your finished product should allow everyone 
                        the ability to easily engage with it.  The web is not just a form of entertainment; it's a
                        source of information and services that are integral to our daily life.
                    </p>
                    <p>
                        When was the last time you booked a flight with a travel agency? Or mailed a check to pay 
                        your bills? We regularly bypass traditional methods for online convenience. 
                    </p>
                    <p> 
                        This shift to digital has been transformative for people with disabilities as well. 
                        For them, <strong>the web opens doors to autonomy and ease</strong>, and can remove many of the challenges
                        associated with their impairments.
                    </p>    
                    <p> 
                        <span className="yellow-bg">Everyone</span> deserves a high level of freedom and functionality when interacting with
                        the web. And <strong>your code can help!</strong> It can allow:
                    </p>              
                    <p className="padding-left-20">
                        <span className="pink-text bold">&#x2714; </span>a blind student to access their online course materials,
                    </p>
                    <p className="padding-left-20">
                        <span className="pink-text bold">&#x2714; </span>a person with limited mobility to order their groceries,
                    </p>
                    <p className="padding-left-20">
                        <span className="pink-text bold">&#x2714; </span>a person with dyslexia to read the news.
                    </p>                  
                </div>

                {/* *********NEXT***************** */}
                <div className="section scroll-target" id="next-steps">
                    <h2>Next Steps</h2>
                    <p> 
                        Whether it's inconvenience or lack of awareness, the majority of websites are not 
                        accessible. 
                        A staggering 97% of them have some accessibility bugs!
                    </p>

                    <p>
                        The good news is that most of these bugs have easy solutions.
                        In fact, the 6 most common accessibility bugs can be fixed with only 
                        HTML and CSS! 
                    </p>
                    
                    <p>
                        Your portfolio site and personal projects are a great place to start implementing 
                        accessibility practices.
                        If you're ready to audit them, jump to the next article for a list of solutions to the 
                        most common issues:
                    </p>

                    <p>
                        <b>Read next: </b>
                        <Link to="/resources/make-it-accessible-part1">
                            Let's Make It Accessible! Part One: Finding the 6 Most Common Bugs
                        </Link>
                    </p>
                    
                    <p>
                        Interested in learning about how accessibility works? Visit the next article 
                        in the "Understanding Accessibility" series:
                    </p>
                         
                    <p>
                        <b>Read next: </b>
                        <Link to="/resources/how-accessibility-works">
                            How Accessibility Works
                        </Link>
                    </p>

                    <p>
                        When we actively embrace accessibility and make it essential
                        to our web development learning and work, we can make a difference.
                        Let's build a web that's open to <span className="yellow-bg">everyone</span>!
                    </p>
                    
                </div>
            </div>
        </div>
    )
}


