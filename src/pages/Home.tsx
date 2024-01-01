import React from "react"
import { Link } from "react-router-dom"
import { miniArticleData } from "../data/homeData/miniArticleData"
import HomeAside from "../components/Home/HomeAside"
import handleLinkClick from "../utils/handleLinkClick"
import "./Home.css"

export default function Home() {
    
    return (
        <div className="home">
            <article className="hero-article">
                <div className="hero-image">
                    <img src="/assets/images/image-web-3-desktop.jpg" 
                        alt="" 
                    />
                </div>
                
                <div className="hero-container">
                    <h1 className="hero-heading">Let's Make It Accessible!</h1>
                    <div className="hero-body">
                        <p>
                            You're adding the finishing touches to your portfolio site.
                            But will it be ready to welcome all users? Let's explore how you can check for the most common accessibility bugs.
                            {/* Let's explore how to make it accessible to everyone. */}
                             
                        </p>
                        <Link to="/resources/make-it-accessible-part1" className="hero-link" onClick={() => { handleLinkClick() }}>
                            <p className="read-more">
                                Continue to article
                                <i className="link-arrow"></i>
                                <i className="link-arrow additional-arrow"></i>
                                <i className="link-arrow additional-arrow"></i>
                                <i className="link-arrow additional-arrow"></i>
                                <i className="link-arrow additional-arrow"></i>
                            </p>
                        </Link>

                    </div>
                    
                </div>
            </article>

            <HomeAside/>

            <section className="mini-articles">
                <h2>Understanding Accessibility</h2>
                <ul>
                    {miniArticleData.map((article, index) => (
                        <li key={index}> 
                            <article className={`mini-article mini-article-${index+1}`}> 
                                <div className="mini-article-image">
                                    <img src={article.image} alt='' loading="lazy"/>
                                </div>
                                <Link to={article.link} className="mini-article-link" onClick={() => { handleLinkClick() }}>
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



