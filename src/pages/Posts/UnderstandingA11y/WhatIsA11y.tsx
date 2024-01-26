import React from "react"
import { Link } from "react-router-dom"
import { useDocTitle } from "../../../hooks/useDocTitle"
import styles from "./WhatIsA11y.module.css"
import "../../../global.css"
import windowScrollTop from "../../../utils/windowScrollTop";
import TableOfContents from "../../../components/TableOfContents/TableOfContents"

const contents = [
    {
        href: "#",
        text: "Introduction",
        "aria-label": "Introduction to what is accessibility"
    },
    {
        href: "#The DNA of the Web is Accessible",
        text: "The DNA of the Web is Accessible"
    },
    {
        href: "#The Practical Reasons for Accessibility",
        text: "The Practical Reasons for Accessibility"
    },
    {
        href: "#Web Access is Everyone's Right",
        text: "Web Access is Everyone's Right"
    },
    {
        href: "#Next Steps",
        text: "Next Steps"
    },
]

export default function MostCommonBugs() {
    useDocTitle("What is Accessiility | Web for Everyone");    
    
    return (
        <div className="article-container whatisa11y-container">
            <div className="back-links scroll-target">
                <Link to="/resources" className="back-link hover-pink">Resources</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <Link to="/resources/#what-is-accessibility" className="back-link hover-pink">
                    Understanding Accessibility
                </Link>
            </div>
            
            <h1>What is <span className="yellow-bg">Accessibility?</span></h1>
            <p className="subtitle">And why does it matter?</p>

            {/* ***************TABLE OF CONTENTS********************* */}
            <TableOfContents contents={contents} />

            {/* **************ARTICLE CONTENT***************** */}
            
            <div className={`article-content ${styles['whatisa11y']}`}>
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
                <div className="section scroll-target" id="The DNA of the Web is Accessible">
                    <h2>The DNA of the Web is Accessible</h2>
                    <p>
                        If you have good sight, you rely on it, along with a mouse or a keyboard, to open a webpage 
                        and check out its content. 
                        For the same purpose, a person who is blind may use a screen reader and a keyboard, while a 
                        person with sight but limited or no hand mobility might use voice control software.
                    </p>
                    
                    <p>
                        The tools you need to allow for these kinds of interactions (and many others!) 
                        are already in place:
                    </p>
                    <p className="bullet-point-line">
                        code syntax to create the structure and the content of your site: semantic HTML, 
                        CSS, and JavaScript
                    </p>
                    <p className="bullet-point-line">
                        assistive technologies to bridge your site and your users: screen readers, 
                        voice control software, braille displays, etc.
                    </p>

                    <div className="highlight">
                        <h3>How semantic HTML improves accessibility</h3>
                        <p className="white-bg">
                            You’ve probably used HTML tags 
                            like 
                            <span> </span>
                            <code>&lt;nav&gt;</code>,
                            <span> </span>
                            <code>&lt;main&gt;</code>,
                            <span> </span>
                            <code>&lt;footer&gt;</code>,
                            <span> </span>
                            <code>&lt;button&gt;</code>, or
                            <span> </span>
                            <code>&lt;h1&gt;</code>.
                            
                            They provide your codebase with a structure that is easy to recognize and maintain. 
                        </p>
                        <p className="white-bg">
                            But did you know that they are more than just visual markers? True! They convey information 
                            about their content to assistive tech users. That’s why we call them <span> </span>
                            <span className="pink-bg-white-text" >semantic</span> <span> </span>HTML tags. 
                        </p>
                        <p className="white-bg">
                            For example, when a screen reader encounters the <code>&lt;nav&gt;</code> tag, it 
                            announces to the user that this section of the page is for navigation. But, if you choose
                            to wrap your navigation links in a <code>&lt;div&gt;</code> tag, the user will not be 
                            immediately aware of its purpose. A <code>&lt;div&gt;</code> is just a container 
                            intended for styling purposes or for layout, and requires additional code to make it
                            accessible.
                        </p>
                        <p>
                            Always rely on semantic HTML! Think about the content and functionality you want to create,
                            and choose the appropriate HTML tag. While JavaScript 
                            will certainly help you with more complex acccessibility issues, semantic HTML is the 
                            backbone of accessibility.
                        </p>
                    </div>
                </div>

                {/* ***************The Practical Reasons for Accessibility***************** */}
                <div className="section scroll-target" id="The Practical Reasons for Accessibility">
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
                    <br></br>
                    <p className="padding-left-20">
                        Read the article <span> </span>
                        <Link to="resources/" className="bold pink-text">Does Inaccessible = Illegal?</Link>
                        <span> </span> 
                        about the legal implications of inaccessible sites.
                    </p>
                    
                    <p className="bullet-point-line margin-top-20"><strong>increased market share</strong></p>
                    <p className="padding-left-20">
                        A site can attract new visitors from the millions of users with disabilities 
                        who use the web.
                    </p>
                    
                    <p className="bullet-point-line"><strong>improved SEO</strong></p>
                    <p className="white-bg padding-left-20">
                        Many accessibility practices align with good SEO practices. For example, 
                        providing <code>alt</code> text for images, ensuring a logical content structure with 
                        proper heading tags, and maintaining a clean and navigable site structure are beneficial 
                        for both accessibility and SEO. 
                    </p>
                    
                    <p className="bullet-point-line"><strong>positive spillover</strong></p>
                    <p className="padding-left-20">
                        Many features designed for accessibility, 
                        such as clear navigation, easy-to-read fonts, and simple layouts, 
                        contribute to a more intuitive and user-friendly interface for all users, not just
                        those with disabilities. 
                    </p>
                    </div>
                    
                        
                    <p>BUT, above all . . .</p>
                </div>

                {/* *************Web Access is Everyone's Right******************** */}
                <div className="section scroll-target" id="Web Access is Everyone's Right">
                    <h2>Web Access is Everyone's Right</h2>
                    <p>
                        In our world, digital connectivity is key, and your code should allow everyone the ability 
                        to easily engage with the web.  The web is not just a form of entertainment; it's a
                        source of information and services that are integral to our daily life.
                    </p>
                    <p>
                        When was the last time you booked a flight with a travel agency? Or mailed a check to pay 
                        your bills? We regularly bypass traditional methods for online convenience.  
                        This shift to digital has been transformative for people with disabilities as well. 
                        For them, the web opens doors to autonomy and ease, and can remove many of the challenges
                        associated with their impairments.
                    </p>
                    <p>
                        Your code can help a blind student access their online course materials,
                        a person with limited mobility order their groceries, or a person with dyslexia read the
                        news. Everyone deserves the same level of freedom and functionality when interacting with
                        the web.
                    </p>     
                </div>

                {/* *********NEXT***************** */}
                <div className="bug scroll-target" id="Next Steps">
                    <h2>Next Steps</h2>
                    <p> 
                        Whether it's inconvenience or lack of awareness, the majority of websites are not 
                        accessible. 
                        A staggering 97% of them have some accessibility bugs!
                    </p>
                    
                    {/* <p>BUT, you can play a part in reducing this high percentage:</p>
                    <ul>
                        <li>set accessibility as a goal</li>
                        <li>follow good coding practices </li>
                        <li>ask questions</li>
                        <li>spread the word </li>
                    </ul> */}

                    <p>
                        The good news is that most of these bugs have easy solutions.
                        In fact, the 7 most common accessibility bugs can be fixed with only 
                        HTML and CSS! 
                    </p>
                    
                    <p>
                        Your portfolio site and personal projects are a great place to start implementing 
                        accessibility practices.
                        If you're ready to audit them, jump to this article for a list of solutions to the 
                        most common accessibility issues:
                    </p>
                    <div className="next-article">
                        <span className="read-next">Read next: </span>
                        <Link to="/resources/make-it-accessible-part1" 
                                className="read-next pink-text"
                                onClick = { () => { windowScrollTop() } }
                        >
                            Your Portfolio Site: Let's Make It Accessible!
                        </Link>
                    </div>
                    
                    <p>Interested in learning about how accessibility works? Visit the next article 
                        in the "Understanding Accessibility" series:
                    </p>
                         
                    <div className="next-article">
                        <span className="read-next">Read next: </span>
                        <Link to="/resources/how-accessibility-works" 
                                className="read-next pink-text"
                                onClick = { () => { windowScrollTop() } }
                        >
                            How Accessibility Works
                        </Link>
                    </div>

                    <p>
                        When we actively embrace accessibility and make it essential
                        to our web development learning and work, we can make a difference.
                        Together, we can build a web that's open to <span className="yellow-bg">everyone</span>!
                    </p>
                    
                </div>
            </div>
        </div>
    )
}


