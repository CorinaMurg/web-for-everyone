import React from "react"
import { Link } from "react-router-dom"
import { miniArticleData } from "../data/homeData/miniArticleData"
import WeCanHelp from "../components/Home/WeCanHelp"
import scrollToTop from "../utils/scrollToTop"
import { svgIconsData } from "../data/homeData/svgIconsData"
import SvgCard from "../components/SvgCard/SvgCard"
import styles from './Home.module.css'

export default function Home() {
    
    return (
        <div className={styles.home}>
            <section aria-labelledby="lets-make-it-accessible" className={styles['hero']}>
                {/* <div className={styles['hero-image']}>
                    <img src="/assets/images/iconsChart.jpg" 
                        alt="" 
                    />
                </div> */}
                
                <div className={styles['hero--design']}>
                    <div className={styles['hero--design--svg-grid']}>
                        {svgIconsData.map((icon, index) => (
                            <SvgCard key={index} svg={icon.svg}/>
                        ))}                 
                    </div>
                </div>
                <div className={styles['hero--container']}>
                    <h1 id="lets-make-it-accessible" 
                        className={styles['hero--container--heading']}
                    >
                        Let's Make It Accessible!
                    </h1>
                    <div className={styles['hero--container--body']}>
                        <p>
                            You're adding the finishing touches to your portfolio site.
                            Will it be ready to welcome all users? 
                        </p>
                        <p>
                            Let's explore how to check for and fix the six most common accessibility bugs!
                        </p>
                        <Link 
                            aria-label="Continue to article let's make it accessible"
                            to="/resources/make-it-accessible-part1" 
                            className={styles['hero--link']}
                            onClick={() => { scrollToTop() }}  
                        >
                            <p className={styles['read-more']}>
                                Continue to article
                                <i className={styles['link-arrow']}></i>
                                <i className={`${styles['link-arrow']} ${styles['additional-arrow']}`}></i>
                                <i className={`${styles['link-arrow']} ${styles['additional-arrow']}`}></i>
                                <i className={`${styles['link-arrow']} ${styles['additional-arrow']}`}></i>
                                <i className={`${styles['link-arrow']} ${styles['additional-arrow']}`}></i>
                            </p>
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

                                <div className={`${styles['mini-article-image']} ${styles[`mini-article-image-${index+1}`]}`}>
                                    {/* <img src={article.image} alt='' loading="lazy"/> */}
                                    <div className={styles['svg-wrap']}>
                                        <div dangerouslySetInnerHTML={{ __html: article.svg }} />
                                    </div>
                                </div>
                                <Link 
                                    to={article.link} className={styles['mini-article-link']} 
                                    onClick={() => { scrollToTop() }}
                                >
                                    <span aria-hidden="true">{`0${index+1}`}</span>
                                    <h3>{article.title}</h3>
                                    <p>{article.description}</p>
                                </Link>
                            </article>
                        </li>
                    ))}
                </ul>
            </section>
            {/* <div>
                <img src="/assets/images/yellowBg.jpg" alt=""/>
            </div> */}
            
        </div>
    )
}



