import React from "react"
import { Link } from "react-router-dom"
import { miniArticleData } from "../data/homeData/miniArticleData"
import WELogo from "../components/WELogo/WELogo"
import "./Home.css"

export default function Home() {
    
    return (
        <div className="home">
            <article className="hero-article">
                <div className="hero-image">
                    <img src="/assets/images/image-web-3-desktop.jpg" alt=""/>
                </div>
                
                <Link to="/resources/make-it-accessible" className="hero-link">
                    <h1 className="hero-heading">Let's Make It Accessible!</h1>
                    <p className="hero-body">
                        You're adding the finishing touches to your portfolio site.
                        But will it be ready to welcome all users? 
                        Let's explore how to make it accessible to everyone. &gt;
                    </p>
                </Link>
            </article>

            <aside className="aside">
                <h2>
                    How can&nbsp; <WELogo size="2rem"/> &nbsp;help
                </h2>
                <article>
                    <h3>List common bugs</h3>
                    <p>Most common accessibility bugs are easy to fix. You just need to know what to look for.
                        Start with &nbsp;
                            <Link to="/resources/make-it-accessible" className="link-regular">
                                Let's Make It Accessible!
                            </Link>
                        &nbsp;
                        {/* will get you started. */}
                    </p>
                    
                    <h3>Audit your site</h3>
                    <p>Reach out for a free audit of your site. You'll receive a report
                        with a list of bugs and guidance on how to address them.
                    </p>
                    <h3>Schedule a call</h3>
                    <p>Need more help? Schedule a free Zoom call to receive answers to your specific questions.
                    </p>
                </article>
                <Link to="/resources" className="aside-link">
                    Learn more
                </Link>
            </aside>

            
            <section className="mini-articles">
                <h2>Understanding Accessibility</h2>
                <ul>
                    {miniArticleData.map((article, index) => (
                        <li key={index}> 
                            <article className={`mini-article mini-article-${index+1}`}> 
                                <div className="mini-article-image">
                                    <img src={article.image} alt='' />
                                </div>
                                <Link to="/resources" className="mini-article-link">
                                    <span aria-hidden="true">{`0${index+1}`}</span>
                                    <h3>{article.title}</h3>
                                    <p>{article.description}</p>
                                </Link>
                            </article>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}



