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
                <h2 className="neutral-dark-grayish-blue">Accessibility News</h2>
                <article>
                    <h3>Lack of accessibility === Discrimination</h3>
                    <p>...</p>
                </article>
                <article>
                    <h3>The Downsides of ...</h3>
                    <p>What are the possible adverse effects ...</p>
                </article>
                <article>
                    <h3>Is ... important?</h3>
                    <p>Private ...</p>
                </article>
            </aside>

            <section className="mini-articles">
                <article className="mini-article mini-article-1">
                    <div className="mini-image">
                        <img src="/assets/images/image-top-laptops.jpg" alt=""/>
                    </div>
                    <div className="mini-body">
                        <span>01</span>
                        <h3>Build with accessibility in mind</h3>
                        <p>Just starting to learn about web development? 
                            These are the things you should know about accessibility.</p>
                    </div>
                    
                </article>
                <article className="mini-article mini-article-2">
                    <div className="mini-image">
                        <img src="/assets/images/image-top-laptops.jpg" alt=""/>
                    </div>
                    <div className="mini-body">
                        <span>02</span>
                        <h3>Getting started with a11y</h3>
                        <p>A list of resources and courses to help you create a site that everyone can access.</p>
                    </div>
                </article>

                <article className="mini-article mini-article-3">
                    <div className="mini-image">
                        <img src="/assets/images/image-top-laptops.jpg" alt=""/>
                    </div>
                    <div className="mini-body">
                        <span>03</span>
                        <h3>How can WE help</h3>
                        <p>Reach out if you would like feedback on a project. Use your LinkedIn account to </p>
                    </div>
                </article>

                <article className="mini-article mini-article-4">
                    <div className="mini-image">
                        <img src="/assets/images/image-top-laptops.jpg" alt=""/>
                    </div>
                    <div className="mini-body">
                        <span>01</span>
                        <h3>Do you know your HTML?</h3>
                        <p>Semantic HTML is the foundation of an accessible website. Plus, it has SEO advantages, and it makes your 
                            code more readable and maintainable. </p>
                    </div>
                    
                </article>
                <article className="mini-article mini-article-5">
                    <div className="mini-image">
                        <img src="/assets/images/image-top-laptops.jpg" alt=""/>
                    </div>
                    <div className="mini-body">
                        <span>02</span>
                        <h3>Getting started with a11y</h3>
                        <p>Our best .</p>
                    </div>
                </article>

                <article className="mini-article mini-article-6">
                    <div className="mini-image">
                        <img src="/assets/images/image-top-laptops.jpg" alt=""/>
                    </div>
                    <div className="mini-body">
                        <span>03</span>
                        <h3>The Growth of Gaming</h3>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </article>
            </section>
        </div>
    )
}

