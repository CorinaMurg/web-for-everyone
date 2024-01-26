import React from "react"
import { Link } from "react-router-dom"
import useDocTitle from "../../../hooks/useDocTitle"
import scrollToTop from "../../../utils/scrollToTop";



export default function MostCommonBugs() {
    useDocTitle("Testing for Accessibility | Web for Everyone");    
    
    return (
        <div className="article-container whatisa11y-container">
            <div className="back-links scroll-target">
                <Link to="/resources" className="back-link hover-pink">Resources</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <Link to="/resources/#testing-for-accessibility" className="back-link hover-pink">Understanding Accessibility</Link>
            </div>
            
            <h1>Testing for <span className="yellow-bg">Accessibility</span></h1>
            <p className="subtitle">And why does it matter?</p>

            <section className="table-contents">
                <h2 className="heading blue-heading">Table of Contents</h2>
                <ul className="table-contents--list">
                    <li className="table-contents--list--item">
                        <a href="#" className="hover-pink" aria-label="Introduction to what is accessibility">Introduction</a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#The Different Ways to Interact with the Web" className="hover-pink">The Different Ways to Interact with the Web</a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#The DNA of the Web is Accessible" className="hover-pink">The DNA of the Web is Accessible</a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#To Build or Not to Build an Accessible Portfolio Site" className="hover-pink"
                            aria-label="To Build or Not to Build an Accessible Portfolio Site?"
                        >
                            To Build/Not to Build an Accessible Portfolio?
                        </a>
                    </li>
                    <li className="table-contents--list--item">
                        <a href="#Next Steps" className="hover-pink">Next Steps</a>
                    </li>
                </ul>
            </section>
            
            <article className="article-content whatisa11y">
                 {/* *************0. INTRO********************** */}
                <section className="intro" id="intro">
                    {/* <p>
                        Accessibility is about creating products that <span className="yellow-bg">everyone</span>,
                        including people with disabilities, can 
                        easily use. In web development, it means websites and apps that can be navigated and understood 
                        by all users, regardless of how they access the web.
                    </p> */}

                    {/* <p>
                        Becoming a web developer comes with a superpower: to create products 
                        that <span className="yellow-bg">everyone</span>,
                        including people with disabilities, can 
                        easily use. That's what accessibility is: when your website or app can be navigated and 
                        understood by all users, regardless of how they access the web.
                    </p> */}
                    <p>
                        Becoming a web developer comes with a cool superpower: to create sites and apps
                        that <span className="yellow-bg">everyone</span>,
                        including people with disabilities, can easily navigate. 
                        
                        When you put this superpower to use, you make accessibility happen.
                        All visitors, regardless of how they access your finished product, will be able to navigate 
                        it and understand it.
                    </p>
                </section>
                    
                <section className="bug scroll-target" id="The DNA of the Web is Accessible">
                    <h2>The DNA of the Web is Accessible</h2>
                    <p>
                        If you have good sight, you rely on it (along with a mouse or a keyboard) to open a webpage 
                        and check out its content. 
                        For the same purpose, a person who is blind relies on a screen reader and a keyboard, while
                        a person with sight, but no use of their hands will use voice control software.
                    </p>
                    <div>
                        <p>
                            The tools you need to allow for these kinds of interactions (and many others!) 
                            are already in place:
                        </p>
                        <ul>
                            <li>code syntax to create the structure and the content 
                                of your site: HTML, CSS, and JavaScript
                            </li>
                            <li>assitive technologies to bridge your site and your users: screen readers, voice control 
                                software, braille displays, etc.
                            </li>
                            
                        </ul>
                    </div>
                    

                    <div className="highlight">
                        <h3>How Using the Correct HTML Tags Improves Accessibility</h3>
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
                            <code>&lt;button&gt;</code>,
                            <span> </span>
                            <code>&lt;h1&gt;</code> to
                            <span> </span>
                            <code>&lt;h6&gt;</code> headings.
                            <span> </span>
                            
                            They provide your codebase with a structure that is easy to recognize and maintain. 
                        </p>
                        <p>
                            But did you know that they are more than just visual markers? True! They are also navigational 
                            tools for assistive tech users. That’s why we call them <span> </span>
                            <span className="pink-bg-white-text" >semantic</span> <span> </span>HTML tags. 
                            They inform assistive technologies about their content, and this information
                            is then passed on to the user. 
                        </p>
                    </div>

                    {/* <p> 
                        Unfortunately, due to inconvenience or a lack of awareness of good coding 
                        practices, the majority of websites are not fully accessible. 
                        A staggering 97% of them have some accessibility bugs.
                    </p>

                    <div>
                        <h3>Soup anyone?</h3>
                        <p className="white-bg">
                            Take this popular portfolio template on GitHub. It's been forked and starred over 100 times, 
                            yet it lacks basic accessibility features. Not a single heading 
                            element! It's a classic case of <span className="pink-bg-white-text">div soup</span>. 
                            Everything is wrapped in generic
                            <span> </span>
                            <code>&lt;div&gt;</code> tags,
                            which communicate nothing to a screen reader.
                        </p>
                    </div> */}
                </section>

                <section className="bug scroll-target" id="To Build or Not to Build an Accessible Portfolio Site">

                    <h2>The Practical Reasons for Accessibility</h2>
                    <p>
                        From a business side, there are certainly a few practical reasons that can motivate 
                        a company to prioritize accessibility:
                        
                    </p>
                    <ul>
                        <li><strong>legal compliance</strong> 
                            <p>
                                Did you know that in 2008, Target (a US-based retail chain) settled a class action 
                                lawsuit with the National Federation for the Blind for $6 million? 
                            </p>
                            
                            <p>
                                Read the article
                                <Link to="resources/" className="bold pink-text">Does Inaccessible = Illegal?</Link> 
                                about the legal implications of inaccessible sites.
                            </p>
                        </li>
                        <li><strong>increased market share</strong> 
                            <p>
                                A site can attract new visitors from the millions of users with disabilities 
                                who use the web.
                            </p>
                        </li>
                        <li><strong>improved SEO</strong>
                            <p>
                                Accessible websites often rank higher in search engine results because they reach a 
                                broader audience.
                            </p>
                        </li> 
                        <li><strong>positive spillover</strong>
                            <p>
                                Accessible websites often rank higher in search engine results because they reach a 
                                broader audience.
                            </p>
                        </li> 
                    </ul>

                    <p>BUT, above all . . .</p>
                    <h2>Web Access is Everyone's Right</h2>
                    <p>
                        In our world, digital connectivity is key, and your code should allow everyone the ability 
                        to fully engage with the web.  The web is not just a form of entertainment; it's a
                        source of information and services that are integral to our daily life.
                    </p>
                    <p>
                        When was the last time you booked a flight with a travel agency? Or mailed a check to pay 
                        your bills? We regularly bypass traditional methods for online convenience.  
                        This shift to digital has been transformative for people with disabilities. 
                        The web opens doors to autonomy and ease, removing the need for physical travel and the 
                        associated challenges. 
                    </p>
                    <p>
                        Let’s rememeber: your good coding practices can provide those with disabilities with the 
                        same level of freedom and functionality that everyone else enjoys.
                    </p>

                    <div className="highlight">
                        {/* <p> 
                            “Disabilities result from the interaction between people with impairments and barriers, 
                            not because disabilities are inherent to people with impairments. 
                        </p> */}
                        <p>
                            If you told me, as a blind person, that I had to read the prompts on the teleprompter, 
                            I would be disabled. But if you give them to me in Braille, I'm enabled.”
                        </p>
                        <p className="bold">Ed Summers, a blind developer and head of accessibility at GitHub</p>
                    </div>

                    <p> 
                        Whether it's inconvenience or lack of awareness, the majority of websites are not fully 
                        accessible. 
                        A staggering 97% of them have some accessibility bugs.
                    </p>
                    
                    <p>BUT, you can play a part in reducing this high percentage:</p>
                    <ul>
                        <li>set accessibility as a goal</li>
                        <li>follow good coding practices </li>
                        <li>ask questions</li>
                        <li>spread the word </li>
                    </ul>

                    <p>
                        Let’s actively embrace accessibility and make it essential
                        to our web development learning and work. 
                        Together, we can build a web that's open to <span className="yellow-bg">everyone</span>!
                    </p>
                                    
                </section>

                {/* *********NEXT***************** */}
                <section className="bug scroll-target" id="Next Steps">
                    <h2>Next Steps</h2>
                    
                    <p>
                        Your portfolio site and personal projects are a great place to start implementing accessibility practices.
                        Are you ready to audit them? Jump to this article for a list of common accessibility bugs you should
                        check for and ways to fix them:
                    </p>
                    <div className="next-article">
                        <span className="read-next">Read next:</span>
                        <Link to="/resources/make-it-accessible-part1" 
                                className="read-next pink-text"
                                onClick = { () => { scrollToTop() } }
                        >
                            Your Portfolio Site: Let's Make It Accessible!
                        </Link>
                    </div>
                    
                    <p>Interested in learning about how accessibility works? Visit the next article 
                        in the "Understanding Accessibility" series:
                    </p>
                         
                    <div className="next-article">
                        <span className="read-next">Read next:</span>
                        <Link to="/resources/how-accessibility-works" 
                                className="read-next pink-text"
                                onClick = { () => { scrollToTop() } }
                        >
                            How Accessibility Works
                        </Link>
                    </div>
                    
                </section>
            </article>
        </div>
    )
}


