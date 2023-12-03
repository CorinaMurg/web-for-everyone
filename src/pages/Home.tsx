import React from "react"
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
                    
                    <a href="#" className="main-link">Read more</a>
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
                    <span className="read-more">Read more</span>
                    
                </article>
            </aside>

            <section className="mini-articles">
                <article className="mini-article mini-article-1">
                    <div className="mini-top-border">
                    </div>
                    <div className="mini-body">
                        <span>01</span>
                        <h3>Build with accessibility in mind</h3>
                        <p>Just starting to learn about web development? 
                            These are the things you should know about accessibility.</p>
                    </div>
                    
                </article>
                <article className="mini-article mini-article-2">
                    <div className="mini-top-border">
                    </div>
                    <div className="mini-body">
                        <span>02</span>
                        <h3>Getting started with a11y</h3>
                        <p>A list of resources and courses to help you create a site that everyone can access.</p>
                    </div>
                </article>

                <article className="mini-article mini-article-3">
                    <div className="mini-top-border">
                    </div>
                    <div className="mini-body">
                        <span>03</span>
                        <h3>How can WE help</h3>
                        <p>Reach out if you would like feedback on a project. 
                           Read about the two easy steps to receive a free accessibility review of your site.</p>
                    </div>
                </article>

                <article className="mini-article mini-article-4">
                    <div className="mini-top-border">
                    </div>
                    <div className="mini-body">
                        <span>04</span>
                        <h3>Do you know your HTML?</h3>
                        <p>Semantic HTML is the foundation of an accessible website. 
                            Plus, it has SEO advantages, and it makes your 
                            code more readable and maintainable. </p>
                    </div>
                    
                </article>
                <article className="mini-article mini-article-5">
                    <div className="mini-top-border">
                    </div>
                    <div className="mini-body">
                        <span>05</span>
                        <h3>Getting started with a11y</h3>
                        <p>Our best .</p>
                    </div>
                </article>

                <article className="mini-article mini-article-6">
                    <div className="mini-top-border">
                    </div>
                    <div className="mini-body">
                        <span>06</span>
                        <h3>The Growth of Gaming</h3>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </article>
            </section>
        </div>
    )
}

