import React from "react"
import { Link } from "react-router-dom"
import { miniArticleData } from "../data/homeData/miniArticleData"
import "./Home.css"

export default function Home() {
    
    return (
        <div className="home">
            <article className="main-article">
                <div className="main-image">
                    <img src="/assets/images/image-web-3-desktop.jpg" alt=""/>
                </div>
                
                <h1 className="main-heading">Let's Make It Accessible!</h1>
                <div className="main-body">
                    <div>
                        <p className="neutral-dark-grayish-blue">
                            You're adding the finishing touches to your portfolio site.
                            But will it be ready to welcome all visitors?</p>
                        <p>Let's explore how to make it accessible to everyone.</p>
                    </div>
                    
                    <Link to="/resources/make-it-accessible" className="main-link">
                        Read more →  
                    </Link>
                </div>
            </article>

            <aside className="aside">
                <h2 className="neutral-dark-grayish-blue">Accessibility Insights</h2>
                <article>
                    <a href="https://www.duckworth.senate.gov/imo/media/doc/22.09.27%20SxS%20-%20Websites%20and%20Software%20Applications%20Accessibility%20Act%20FINAL.pdf"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Proposed Accessibility Legislation a 3-page summary of the Websites and Software Applications Accessibility Act"
                    >
                        <h3>Proposed Accessibility Legislation </h3>
                    </a>
                    <p>The "Websites and Software Applications Accessibility Act" was 
                        recently Introduced in US Congress. It makes clear that websites and software
                        must be accessible to people with disabilities. In other words, lack of accessibility 
                        is discrimination!
                    </p>
                </article>
                <article>
                    <a href="https://github.blog/2023-10-26-5-tips-for-making-your-github-profile-page-accessible/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="5 Tips for Making Your GitHub Profile Page Accessible blog post on the GitHub blog"
                    >
                        <h3>5 Tips for Making Your GitHub Profile Page Accessible</h3>
                    </a>
                    <p>This GitHub blog post provides practical advice on how to ensure your GitHub profile is 
                        accessible to all. You'll find tips on link context, image alt text, heading structure, plain language, 
                        and use of emojis. Enjoy!
                    </p>
                    
                </article>
            </aside>

            <section className="mini-articles">
                {miniArticleData.map((article, index) => (
                    <article key={index} className={`mini-article mini-article-${index+1}`}>
                        <span>{`0${index+1}`}</span>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                    </article>
                ))}
            </section>
        </div>
    )
}

