import React from "react"
import { Link } from "react-router-dom"
import useDocTitle from "../../../hooks/useDocTitle"
import useScrollToSection from "../../../hooks/useScrollToSection"
import styles from "./WhatIsA11y.module.css"
import "../../../global.css"
import scrollToTop from "../../../utils/scrollToTop";
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
        href: "#the-practical-reasons-for-accessibility",
        text: "The Practical Reasons for Accessibility"
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
    useScrollToSection();   
    
    return (
        <div className="article-container whatisa11y-container">
            <BackLinks 
                secondLink="Understanding Accessibility"
                href="/resources#understanding-accessibility" 
            />
            
            <h1>What is <span className="yellow-bg">Accessibility?</span></h1>
            <p className="subtitle">And why does it matter?</p>

            {/* ***************TABLE OF CONTENTS********************* */}
            <TableOfContents contents={contents} />

            {/* **************ARTICLE CONTENT***************** */}
            
            <div className={`article-content ${styles['whatIsA11y']}`}>
                 {/* *************0. INTRO********************** */}
                <div className="setion intro" id="intro">
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
                        to a webpage and check out its content (probably with the help a mouse or a keyboard). 
                        For the same purpose, a person who is blind may use a screen reader and a keyboard, while a 
                        person with good sight but limited or no hand mobility might use speech recognition software.
                    </p>
                    
                    <p>
                        As a developer, the tools you need to allow for these kinds of interactions (and many others!) 
                        are the same tools you use to build your website or app:
                    </p>
                    <ul>
                        <li>
                            <p className="bullet-point-line">
                                HTML (with a little help 
                                from <a href="https://www.w3.org/WAI/standards-guidelines/aria/" target="_blank" rel="noopener noreferrer" className="hover-pink">
                                    ARIA
                                </a> attributes)
                            </p>
                        </li>
                        <li><p className="bullet-point-line margin-top-20">CSS</p></li>
                        <li><p className="bullet-point-line margin-top-20">JavaScript</p></li>
                    </ul>
                    <strong className=" margin-top-20 white-bg">
                        Should your HTML file be a soup of <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> tags?
                    </strong>
                    <p className="white-bg">
                        Of course not! We are lucky to be developers at a time when <code>HTML5</code> is the 
                        standard, and it comes with a whole set of semantic tags. These are tags that share the 
                        purpose of their content with the browser, and thus with the assistive technologies that 
                        people with disabilities use to access the web.
                    </p>
                    <strong className="margin-top-20">
                        Our job as developers is threefold:
                    </strong>
                    <ul>
                        <li>
                            <p className="bullet-point-line">
                                Set accessibility as a goal. Learn about the ways in which 
                                users of all abilities interact with the web and the functionality
                                we need to provide for each group. 
                            </p>
                        </li>
                        <li>
                            <p className="bullet-point-line margin-top-20">
                                Ask questions. Reach out for help and guidance.
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
                            If we do our part, then the browser and the assistive technologies can do theirs.
                        </strong>
                    </p>
                    <div className="highlight margin-top-20">
                        <h3>How semantic HTML improves accessibility</h3>
                        <p className="white-bg">
                            You’ve probably used HTML tags like <code>&lt;nav&gt;</code>,
                            <span> </span><code>&lt;button&gt;</code>, or <code>&lt;h1&gt;</code>.
                            
                            They provide your codebase with a structure that is easy to recognize and maintain. 
                        </p>
                        <p className="white-bg">
                            For example, to designate a navigation
                            section you would use the <code>&lt;nav&gt;</code> tags, and for the main heading
                            of a page you would choose the <code>&lt;h1&gt;</code> tags.
                        </p>
                        <p className="white-bg">
                            Did you know that these tags are more than just markers for your code? True! 
                            They convey information about their content to assistive tech users as well. 
                            That’s why we call them <span className="pink-bg-white-text" >semantic</span> HTML tags. 
                        </p>
                        <p className="white-bg">
                            When a screen reader encounters the navigation section of your site, it 
                            will announce it to the user as such. And that's because you chose
                            to wrap your navigation links in <code>&lt;nav&gt;</code> tags. 
                        </p>
                        <p className="white-bg">
                            Had you chosen a <code>&lt;div&gt;</code> instead, 
                            the user would not be immediately aware of its purpose. A <code>&lt;div&gt;</code> has
                            no semantic meaning. It is just a container intended for styling purposes or for layout, 
                            and requires additional code to make it accessible.
                        </p>
                        <br/>
                        <strong>Always rely on semantic HTML!</strong>
                        <br/>  
                        <p>
                            Think about the content and the functionality 
                            you want to create, and choose the appropriate HTML tags. While JavaScript can help with more 
                            complex acccessibility issues, semantic HTML is the foundation of accessibility.
                        </p>
                    </div>
                </div>

                {/* ***************The Practical Reasons for Accessibility***************** */}
                <div className="section scroll-target" id="the-practical-reasons-for-accessibility">
                    <h2>The Practical Reasons for Accessibility</h2>
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
                    
                        
                    <strong>BUT, above all . . .</strong>
                </div>

                {/* *************Web Access is Everyone's Right******************** */}
                <div className="section scroll-target" id="web-access-is-everyone's-right">
                    <h2>Web Access is Everyone's Right</h2>
                    <p>
                        In our world, digital connectivity is key, and your finished product should allow everyone 
                        the ability to easily engage with the web.  The web is not just a form of entertainment; it's a
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
                    <div>
                        
                    
                    <p>
                        Your code can help 
                    </p>
                    <ul className="bullet-point-list">
                        <li>
                            a blind student access their online course materials,
                        </li>
                        <li>
                            a person with limited mobility order their groceries, 
                        </li>
                        <li>
                            a person with dyslexia read the news. 
                        </li>
                    </ul>
                    </div>
                    <p> 
                        <strong>Everyone deserves a high level of freedom and functionality when interacting with
                        the web</strong>.
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
                        most common accessibility issues:
                    </p>
                    <div className="next-article">
                        <span className="read-next">Read next: </span>
                        
                        <Link to="/resources/make-it-accessible-part1" 
                                onClick = { () => { scrollToTop() } }
                        >
                            Let's Make It Accessible! Part One: Finding the 6 Most Common Bugs
                        </Link>
                    </div>
                    
                    <p>
                        Interested in learning about how accessibility works? Visit the next article 
                        in the "Understanding Accessibility" series:
                    </p>
                         
                    <div className="next-article">
                        <span className="read-next">Read next: </span>
                        <Link to="/resources/how-accessibility-works" 
                                onClick = { () => { scrollToTop() } }
                        >
                            How Accessibility Works
                        </Link>
                    </div>

                    <p className="margin-top-30">
                        When we actively embrace accessibility and make it essential
                        to our web development learning and work, we can make a difference.
                        Together, we can build a web that's open to <span className="yellow-bg">everyone</span>!
                    </p>
                    
                </div>
            </div>
        </div>
    )
}


