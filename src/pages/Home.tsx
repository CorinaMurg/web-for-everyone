import React from "react"
import { Link } from "react-router-dom"
import { miniArticleData } from "../data/homeData/miniArticleData"
import HomeAside from "../components/Home/HomeAside"
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
                    <div className="hero-body">
                        <p>
                            You're adding the finishing touches to your portfolio site.
                            But will it be ready to welcome all users? 
                            Let's explore how to make it accessible to everyone.
                        </p>
                        <p className="read-more">
                            Read more
                            <i className="read-more-arrow"></i>
                            <i className="read-more-arrow additional-arrow"></i>
                            <i className="read-more-arrow additional-arrow"></i>
                            <i className="read-more-arrow additional-arrow"></i>
                            <i className="read-more-arrow additional-arrow"></i>
                        </p>

                    </div>
                    
                </Link>
            </article>

            <HomeAside/>

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



