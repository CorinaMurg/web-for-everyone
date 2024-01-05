import React from "react"
import { Link } from "react-router-dom"
import { useDocTitle } from "../../../hooks/useDocTitle"
import "./WhatIsA11y.css"
import windowScrollTop from "../../../utils/windowScrollTop";

export default function MostCommonBugs() {
    useDocTitle("Most Common A11y Bugs | Web for Everyone");    
    
    return (
        <div className="article-container whatisa11y-container">
            <div className="back-links scroll-target">
                <Link to="/resources" className="back-link hover-pink">Resources</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <Link to="/resources/#what-is-accessibility" className="back-link hover-pink">Understanding Accessibility</Link>
            </div>
            
            <h1>What is <span className="yellow-bg">Accessibility?</span></h1>
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
                    <p>
                        Accessibility is about creating products that <span className="yellow-bg">everyone</span> - including people with disabilities, can 
                        easily use. In web development, it means websites and apps that can be navigated and understood 
                        by all users, regardless of how they access the web.
                    </p>
                </section>

                <section className="bug scroll-target" id="The Different Ways to Interact with the Web">
                    <h2>The Different Ways to Interact with the Web</h2>
                    <p>
                        You might use your sight and a mouse, and sometimes a keyboard as well, to open a webpage and check out 
                        its content. For the same purpose, a user who is blind relies on a screen reader and a keyboard. 
                        They can’t rely on a mouse to reach and click a certain element on the page, but they can use 
                        specific keys and guidance from the screen reader to navigate to certain parts of the page. 
                    </p>
                    <p>Just like you might scroll down the page and scan the headings, they can press the 
                        <span> </span>
                        <span className="pink-bg-white-text">H</span> key to 
                        hear headings read out loud, one after the other. In fact, screen reader surveys tell us 
                        that this is the preferred way for people who are blind or have low vision 
                        to learn about the structure and the content of a webpage.

                    </p>
                </section>
                    
                <section className="bug scroll-target" id="The DNA of the Web is Accessible">
                    <h2>The DNA of the Web is Accessible</h2>
                    <p>
                        The tools and code syntax we need to allow for this kind of interaction with the web are 
                        already in place: semantic HTML, CSS, and JavaScript.
                    </p>

                    <div>
                        <h3>How Using the Correct HTML Tags Improves Accessibility</h3>
                        <p className="white-bg">
                            You’ve probably used HTML tags 
                            like 
                            <span> </span>
                            <code>&lt;header&gt;</code>, 
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
                            tools for assitive tech users. That’s why we call them semantic HTML tags. 
                            They inform assitive technologies about their content and this information
                            is then passed on to the user. 
                        </p>
                    </div>

                    <p> 
                        Unfortunately, due to inconvenience or a lack of awareness of good coding 
                        practices, the majority of websites are not fully accessible. 
                        A staggering 97% of them have some accessibility bugs.
                    </p>

                    <div>
                        <h3>Soup anyone?</h3>
                        <p className="white-bg">
                            Take this popular portfolio template on GitHub. It's been forked and stared over 100 times, 
                            yet it lacks basic accessibility features. Not a single heading 
                            element! It's a classic case of <span className="pink-bg-white-text">div soup</span> - 
                            everything wrapped in generic
                            <span> </span>
                            <code>&lt;div&gt;</code> tags,
                            which communicate nothing to a screen reader.
                        </p>
                    </div>
                </section>

                <section className="bug scroll-target" id="To Build or Not to Build an Accessible Portfolio Site">
                    <h2>To Build or Not to Build an Accessible Portfolio Site?</h2>
                    <p>    
                        If you are an entry-level web developer, you probably have a portfolio site to showcase your 
                        skills. Implementing the necessary accessible measures is not only about whether you are 
                        expecting a user with disabilities to view your portfolio; it's also about showing that you master the 
                        fundamentals of web development. These fundamentals necessarily include accessibility.
                    </p>

                    <div>
                        <h3>Why Accessibility Matters</h3>
                        <p>
                            There are certainly quite a few practical reasons that should convince you to prioritize 
                            accessibility in your work, especially as you transition from personal projects to client 
                            projects:
                        </p>
                        <ul>
                            <li><span className="bold">legal compliance</span>: 
                                Did you know that in 2008, Target (a US-based retail chain) settled a class action 
                                lawsuit with the National Federation for the Blind for $6 million? 
                                <br></br>
                                <br></br>
                                Read more about it in the <Link to="resources/">Does Inaccessible = Illegal?</Link> article in this series.
                            </li>
                            <li><span className="bold">improved SEO</span>: Accessible websites often rank higher in search engine results because they reach a broader audience.</li>
                            <li><span className="bold">increased market share</span>: Including millions of users with disabilities who use the web.</li>
                        </ul>
                        
                    </div>
                    
                    <div>
                        <h3>Web developer  =  Power  =  Responsability</h3>
                        <p>
                            There is one other argument that is equally compelling. As a developer, beyond any legal 
                            implications, you hold the power and the responsibility to make the web more inclusive 
                            and to give <span className="yellow-bg">everyone</span> the ability to fully engage with it.
                        </p>
                        <p>
                            Ignoring this responsibility means to directly deny a group of users access
                            to information and services that many of us take for granted.
                        </p>
                        <p>
                            Moreover, as you begin working for a company, if accessibility isn't already a 
                            focus, you could be the key influencer in spreading awareness and leading the initiative 
                            to integrate accessibility best practices. Remember, 97% of websites have some form of 
                            accessibility issue. If each one of us plays a part, our combined efforts could contribute 
                            to reducing this high percentage and be part of a much-needed change in the industry.
                        </p>
                    </div>

                    <div className="highlight">
                        <p> 
                            “Disabilities result from the interaction between people with impairments and barriers, 
                            not because disabilities are inherent to people with impairments. 
                        </p>
                        <p>
                            If you told me as a blind person that I had to read the prompts on the teleprompter, 
                            I would be disabled. But if you give them to me in Braille, I'm enabled.”
                        </p>
                        <p className="bold">Ed Summers, a blind developer and head of accessibility at GitHub</p>
                    </div>
                    <p>

                    </p>                
                </section>

                {/* *********NEXT***************** */}
                <section className="bug scroll-target" id="Next Steps">
                    <h2>Next Steps</h2>
                    <p>
                        Let’s actively embrace accessibility and make it essential
                        to our web development learning and work. 
                        Together, we can build a web that's open to <span className="yellow-bg">everyone</span>!
                    </p>
                    <p>
                        Your portfolio project is a great place to start implementing accessibility practices.
                        Ready to audit it? Jump to this article for a list of accessibility bugs to check for:
                    </p>
                    <div className="next-article">
                        <span className="read-next">Read next:</span>
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
                        <span className="read-next">Read next:</span>
                        <Link to="/resources/how-accessibility-works" 
                                className="read-next pink-text"
                                onClick = { () => { windowScrollTop() } }
                        >
                            How Accessibility Works
                        </Link>
                    </div>
                    
                </section>
            </article>
        </div>
    )
}


