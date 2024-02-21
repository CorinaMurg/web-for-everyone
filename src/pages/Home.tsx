import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { miniArticleData } from "../data/homeData/miniArticleData"
import WeCanHelp from "../components/Home/WeCanHelp"
import scrollToTop from "../utils/scrollToTop"
import { svgIconsData } from "../data/homeData/svgIconsData"
import SvgCard from "../components/SvgCard/SvgCard"
import styles from './Home.module.css'

export default function Home() {
    
    const [isBetaOpen, setIsBetaOpen] = useState(true);

    const closeBeta = () => {
        setIsBetaOpen(false);
    }

    return (
        <div className={styles.home}>
            <section className={styles['hero']}> 
                <div className={styles['hero--design']}>
                    {/* <div className={styles['hero--design--svg-grid']}>
                        {svgIconsData.map((icon, index) => (
                            <SvgCard key={index} svg={icon.svg}/>
                        ))}                 
                    </div> */}
                    <img className="hero-img-desktop" src="/assets/images/heroYellowImage.jpg" alt=""/>
                    {/* <img className="hero-img-mobile" src="/assets/images/heroYellowImage-mobile.jpg" alt=""/> */}
                    
                    {isBetaOpen &&
                        <div className={styles.beta}>
                            <p className={styles['beta-message']}>
                                <span>This site is in Beta. </span>
                                We welcome&nbsp;
                                <a href="https://www.linkedin.com/company/webforeveryone" 
                                    target='_blank' rel="noopener noreferrer" 
                                > 
                                    your feedback
                                    <span className="sr-only">page&nbsp; opens in a new tab</span>
                                    <span className="external-linksvg-wrap">
                                        &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512">
                                            <path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"/>
                                        </svg>    
                                    </span>
                                </a>&nbsp;
                            </p>
                            <button className={styles['beta-button']} onClick={() => closeBeta()}>
                                <span className='sr-only'>Close Beta message</span>
                            </button>
                        </div>
                    }
                    
                </div>
                <div className={styles['hero--text']}>
                    <h1 id="lets-make-it-accessible" 
                        className={styles['hero--text--heading']}
                    >
                        <span>Let's Make It</span>
                        <span>Accessible!</span>
                    </h1>
                    <div className={styles['hero--text--body']}>
                        <p>
                            You're adding the finishing touches to your portfolio site.
                            Will it be ready to welcome all users, including those with disabilities? 
                        </p>
                        <p>
                            Scroll down to explore accessibility essentials, or jump straight to 
                            squashing some bugs!
                        </p>
                        <Link 
                            // aria-label="Continue to article let's make it accessible"
                            to="/resources/make-it-accessible-part1" 
                            className={styles['continue-to-article']}
                            onClick={() => { scrollToTop() }}  
                        >   
                            Bug Squashing
                            <svg aria-hidden="true" id="arrow" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17" cy="17" r="17" fill="currentColor"></circle>
                                <path d="M25.6563 18.2071C26.0469 17.8166 26.0469 17.1834 25.6563 16.7929L19.2924 10.4289C18.9018 10.0384 18.2687 10.0384 17.8782 10.4289C17.4876 10.8195 17.4876 11.4526 17.8782 11.8431L23.535 17.5L17.8782 23.1569C17.4876 23.5474 17.4876 24.1805 17.8782 24.5711C18.2687 24.9616 18.9018 24.9616 19.2924 24.5711L25.6563 18.2071ZM9.94922 18.5L24.9492 18.5L24.9492 16.5L9.94922 16.5L9.94922 18.5Z" fill="currentColor"></path>
                            </svg>
                            <svg aria-hidden="true" id="bug" width="34" height="34" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L477.4 348.9c1.7-9.4 2.6-19 2.6-28.9h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H479.7c-1.1-14.1-5-27.5-11.1-39.5c.7-.6 1.4-1.2 2.1-1.9l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-.7 .7-1.3 1.4-1.9 2.1C409.2 164.1 393.1 160 376 160H264c-8.3 0-16.3 1-24 2.8L38.8 5.1zm392 430.3L336 360.7V479.2c36.6-3.6 69.7-19.6 94.8-43.8zM166.7 227.3c-3.4 9-5.6 18.7-6.4 28.7H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c0 24.6 5.5 47.8 15.4 68.6c-2.2 1.3-4.2 2.9-6 4.8l-64 64c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l63.1-63.1c24.5 21.8 55.8 36.2 90.3 39.6V335.5L166.7 227.3zM320 0c-53 0-96 43-96 96v3.6c0 15.7 12.7 28.4 28.4 28.4H387.6c15.7 0 28.4-12.7 28.4-28.4V96c0-53-43-96-96-96z"/>
                            </svg>
                        </Link>
                    </div>
                    
                </div>
            </section>

            <WeCanHelp/>
            
            <section aria-labelledby="understanding-accessibility" className={styles['mini-articles']}>
                <h2 id="understanding-accessibility">Understanding Accessibility</h2>
                <ul>
                    {miniArticleData.slice(0, 3).map((article, index) => (
                        <li key={index}> 
                            <article className={`${styles['mini-article']} ${styles[`mini-article-${index+1}`]}`}>

                                <div className={`${styles['mini-article--image']} ${styles[`mini-article--image-${index+1}`]}`}>
                                    {/* <img src={article.image} alt='' loading="lazy"/> */}
                                    <div className={styles['svg-wrap']}>
                                        <div dangerouslySetInnerHTML={{ __html: article.svg }} />
                                    </div>
                                </div>
                                <div className={styles['mini-article--text']}>
                                    <Link 
                                        to={article.link} className={styles['mini-article--link']} 
                                        onClick={() => { scrollToTop() }}
                                    >   
                                        <h3>
                                            <span aria-hidden="true">{`0${index+1}`}</span>
                                            {article.title}
                                        </h3>
                                    </Link>
                                    <p>{article.description}</p>
                                    <div className="continue-to-article margin-top-30">
                                        <svg aria-hidden="true" className="mini-article-svg" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="17" cy="17" r="17" fill="currentColor"></circle>
                                            <path d="M25.6563 18.2071C26.0469 17.8166 26.0469 17.1834 25.6563 16.7929L19.2924 10.4289C18.9018 10.0384 18.2687 10.0384 17.8782 10.4289C17.4876 10.8195 17.4876 11.4526 17.8782 11.8431L23.535 17.5L17.8782 23.1569C17.4876 23.5474 17.4876 24.1805 17.8782 24.5711C18.2687 24.9616 18.9018 24.9616 19.2924 24.5711L25.6563 18.2071ZM9.94922 18.5L24.9492 18.5L24.9492 16.5L9.94922 16.5L9.94922 18.5Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}



