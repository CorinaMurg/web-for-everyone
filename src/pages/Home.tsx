import React from "react"
import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import { miniArticleData } from "../data/homeData/miniArticleData"
import WeCanHelp from "../components/Home/WeCanHelp"
import useScrollToTop from "../hooks/useScrollToTop"
import useScrollToSection from "../hooks/useScrollToSection"
import styles from './Home.module.css'
import "../global.css"

export default function Home() {
    useScrollToSection();
    const sectionRef = useRef<HTMLDivElement>(null);

    const scrollToSection = () => {
        if (sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.home}>
            <section className={styles['hero']}> 
                <div className={styles['hero--heading']}>   
                    <h1>
                        <span>Let's make it</span>
                        <span className="pink-text">accessible.</span>
                    </h1>
                </div>
                <p className={styles['hero--subtitle']}>
                    You're building your portfolio site. Will it be ready to welcome <span> </span>
                    all visitors, including those with disabilities? Time to check!
                </p>      

            </section>
            <section className={styles['hero--text']}>
                <div className={styles['hero--text--left']}> 
                    <h2>New to accessibility?</h2>
                    <Link 
                        to="/#understanding-accessibility" 
                        className={styles['continue-to-article']}
                    >   
                        Accessibility 101
                        <svg aria-hidden="true" id="arrow" width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17" cy="17" r="17" fill="currentColor"></circle>
                            <path d="M25.6563 18.2071C26.0469 17.8166 26.0469 17.1834 25.6563 16.7929L19.2924 10.4289C18.9018 10.0384 18.2687 10.0384 17.8782 10.4289C17.4876 10.8195 17.4876 11.4526 17.8782 11.8431L23.535 17.5L17.8782 23.1569C17.4876 23.5474 17.4876 24.1805 17.8782 24.5711C18.2687 24.9616 18.9018 24.9616 19.2924 24.5711L25.6563 18.2071ZM9.94922 18.5L24.9492 18.5L24.9492 16.5L9.94922 16.5L9.94922 18.5Z" fill="currentColor"></path>
                        </svg>
                        <svg aria-hidden="true" id="bug" width="30" height="30" viewBox="0 0 512 512">
                            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
                        </svg>
                    </Link>
                </div>
                <div className={styles['hero--text--right']}>
                    <div>
                        <h2>
                            Know accessibility?        
                        </h2>
                    </div>
                        
                    <Link 
                        to="/resources/make-it-accessible-part1" 
                        className={styles['continue-to-article']}
                        onClick={scrollToSection}
                    >   
                        Bug check
                        <svg aria-hidden="true" id="arrow" width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17" cy="17" r="17" fill="currentColor"></circle>
                            <path d="M25.6563 18.2071C26.0469 17.8166 26.0469 17.1834 25.6563 16.7929L19.2924 10.4289C18.9018 10.0384 18.2687 10.0384 17.8782 10.4289C17.4876 10.8195 17.4876 11.4526 17.8782 11.8431L23.535 17.5L17.8782 23.1569C17.4876 23.5474 17.4876 24.1805 17.8782 24.5711C18.2687 24.9616 18.9018 24.9616 19.2924 24.5711L25.6563 18.2071ZM9.94922 18.5L24.9492 18.5L24.9492 16.5L9.94922 16.5L9.94922 18.5Z" fill="currentColor"></path>
                        </svg>
                        <svg aria-hidden="true" id="bug" width="30" height="30" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L477.4 348.9c1.7-9.4 2.6-19 2.6-28.9h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H479.7c-1.1-14.1-5-27.5-11.1-39.5c.7-.6 1.4-1.2 2.1-1.9l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-.7 .7-1.3 1.4-1.9 2.1C409.2 164.1 393.1 160 376 160H264c-8.3 0-16.3 1-24 2.8L38.8 5.1zm392 430.3L336 360.7V479.2c36.6-3.6 69.7-19.6 94.8-43.8zM166.7 227.3c-3.4 9-5.6 18.7-6.4 28.7H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c0 24.6 5.5 47.8 15.4 68.6c-2.2 1.3-4.2 2.9-6 4.8l-64 64c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l63.1-63.1c24.5 21.8 55.8 36.2 90.3 39.6V335.5L166.7 227.3zM320 0c-53 0-96 43-96 96v3.6c0 15.7 12.7 28.4 28.4 28.4H387.6c15.7 0 28.4-12.7 28.4-28.4V96c0-53-43-96-96-96z"/>
                        </svg>
                    </Link>
                </div> 
            </section>

            <div className={styles['gray-bg']}>
                <WeCanHelp/>
            </div>
            
            <section 
                aria-labelledby="understanding-accessibility" 
                role="region"
                className={` ${styles['mini-articles']} scroll-target `}
                id="understanding-accessibility"
            >
                <h2 >Accessibility 101</h2>
                <ul>
                    {miniArticleData.slice(0, 3).map((article, index) => (
                        <li key={index}> 
                            <article className={`${styles['mini-article']} ${styles[`mini-article-${index+1}`]}`}>
                                <div className={`${styles['mini-article--image']} ${styles[`mini-article--image-${index+1}`]}`}>    
                                    <span aria-hidden="true">{`0${index+1}`}</span>
                                    <div className={styles['svg-wrap']}>
                                        <div dangerouslySetInnerHTML={{ __html: article.svg }} />
                                    </div>                    
                                </div>
                                <Link 
                                    to={article.link} className={styles['mini-article--link']} 
                                    onClick={() => { useScrollToTop() }}
                                >   
                                    <h3>            
                                        {article.title}
                                    </h3>
                                </Link>
                                <div className={styles['mini-article--text']}>       
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



