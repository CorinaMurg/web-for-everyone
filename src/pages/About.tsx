
import React from "react";
import { Link } from "react-router-dom";
import useDocTitle from "../hooks/useDocTitle";
import useScrollToSection from "../hooks/useScrollToSection"
import styles from "./About.module.css";
import "../global.css";

export default function About() {
    useDocTitle("About | Web for Everyone");
    useScrollToSection();
    return (
        <div className={styles.about}>
            <hgroup>
                <h1>Let's Make It Accessible!</h1>
                <p className={styles['about--subtitle']}>
                    Can a screen reader user navigate your site? Can a person with low vision read your content?
                    With care and accessibility knowledge, we can make the web a better place for everyone. 
                    Let's start with your portfolio site!
                </p>
            </hgroup>
            
            <div className={styles['about--design']}>
                <div className={`${styles['rectangle']} ${styles['rectangle-1']}`}>         
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 512 512" >
                        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm161.5-86.1c-12.2-5.2-26.3 .4-31.5 12.6s.4 26.3 12.6 31.5l11.9 5.1c17.3 7.4 35.2 12.9 53.6 16.3v50.1c0 4.3-.7 8.6-2.1 12.6l-28.7 86.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l24.4-73.2c1.3-3.8 4.8-6.4 8.8-6.4s7.6 2.6 8.8 6.4l24.4 73.2c4.2 12.6 17.8 19.4 30.4 15.2s19.4-17.8 15.2-30.4l-28.7-86.1c-1.4-4.1-2.1-8.3-2.1-12.6V235.5c18.4-3.5 36.3-8.9 53.6-16.3l11.9-5.1c12.2-5.2 17.8-19.3 12.6-31.5s-19.3-17.8-31.5-12.6L338.7 175c-26.1 11.2-54.2 17-82.7 17s-56.5-5.8-82.7-17l-11.9-5.1zM256 160a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                    </svg>             
                </div>

                <div className={`${styles['rectangle']} ${styles['rectangle-2']}`}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512">
                        <path d="M502.6 54.6l-40 40c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l40-40c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3zm-320 320l-128 128c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3zM240 128c-57.6 0-105.1 43.6-111.3 99.5c-1.9 17.6-17.8 30.2-35.3 28.3s-30.2-17.8-28.3-35.3C74.8 132.5 149.4 64 240 64c97.2 0 176 78.8 176 176c0 46-17.7 87.9-46.6 119.3c-12 13-17.4 24.8-17.4 34.7V400c0 61.9-50.1 112-112 112c-17.7 0-32-14.3-32-32s14.3-32 32-32c26.5 0 48-21.5 48-48v-6.1c0-32.9 17.4-59.6 34.4-78c18.4-20 29.6-46.6 29.6-75.9c0-61.9-50.1-112-112-112zm0 80c-17.7 0-32 14.3-32 32c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-17.7-14.3-32-32-32z"/>
                    </svg>     
                </div>
                <div className={`${styles['rectangle']} ${styles['rectangle-3']}`}>        
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512" >
                        <path d="M176 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8.4 32c-36.4 0-69.6 20.5-85.9 53.1L35.4 273.7c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3L128 231.6v43.2c0 17 6.7 33.3 18.7 45.3L224 397.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V390.6c0-12.7-5.1-24.9-14.1-33.9L224 306.7V213.3l70.4 93.9c10.6 14.1 30.7 17 44.8 6.4s17-30.7 6.4-44.8L268.8 166.4C250.7 142.2 222.2 128 192 128H167.6zM128.3 346.8L97 472.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3l22-88.2-52.8-52.8zM450.8 505.1c5 7.3 15 9.1 22.3 4s9.1-15 4-22.3L358.9 316.1c-2.8 3.8-6.1 7.3-10.1 10.3c-5 3.8-10.5 6.4-16.2 7.9L450.8 505.1z"/>
                    </svg>     
                </div>
                <div className={`${styles['rectangle']} ${styles['rectangle-4']}`}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="43.75" height="35" viewBox="0 0 640 512" >
                        <path d="M156.6 46.3c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3L13.5 189.4C4.6 207.2 0 226.8 0 246.7V256c0 70.7 57.3 128 128 128h72 8v-.3c35.2-2.7 65.4-22.8 82.1-51.7c8.8-15.3 3.6-34.9-11.7-43.7s-34.9-3.6-43.7 11.7c-7 12-19.9 20-34.7 20c-22.1 0-40-17.9-40-40s17.9-40 40-40c14.8 0 27.7 8 34.7 20c8.8 15.3 28.4 20.5 43.7 11.7s20.5-28.4 11.7-43.7c-12.8-22.1-33.6-39.1-58.4-47.1l80.8-22c17-4.6 27.1-22.2 22.5-39.3s-22.2-27.1-39.3-22.5L194.9 124.6l81.6-68c13.6-11.3 15.4-31.5 4.1-45.1S249.1-3.9 235.5 7.4L133.6 92.3l23-46zM483.4 465.7c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l85.9-171.7c8.9-17.8 13.5-37.4 13.5-57.2V256c0-70.7-57.3-128-128-128H440h-8v.3c-35.2 2.7-65.4 22.8-82.1 51.7c-8.9 15.3-3.6 34.9 11.7 43.7s34.9 3.6 43.7-11.7c7-12 19.9-20 34.7-20c22.1 0 40 17.9 40 40s-17.9 40-40 40c-14.8 0-27.7-8-34.7-20c-8.9-15.3-28.4-20.5-43.7-11.7s-20.5 28.4-11.7 43.7c12.8 22.1 33.6 39.1 58.4 47.1l-80.8 22c-17.1 4.7-27.1 22.2-22.5 39.3s22.2 27.1 39.3 22.5l100.7-27.5-81.6 68c-13.6 11.3-15.4 31.5-4.1 45.1s31.5 15.4 45.1 4.1l101.9-84.9-23 46z"/>
                    </svg>
                </div>
                <div className={`${styles['rectangle']} ${styles['rectangle-5']}`}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="0 0 448 512">
                        <path d="M320 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM204.5 121.3c-5.4-2.5-11.7-1.9-16.4 1.7l-40.9 30.7c-14.1 10.6-34.2 7.7-44.8-6.4s-7.7-34.2 6.4-44.8l40.9-30.7c23.7-17.8 55.3-21 82.1-8.4l90.4 42.5c29.1 13.7 36.8 51.6 15.2 75.5L299.1 224h97.4c30.3 0 53 27.7 47.1 57.4L415.4 422.3c-3.5 17.3-20.3 28.6-37.7 25.1s-28.6-20.3-25.1-37.7L377 288H306.7c8.6 19.6 13.3 41.2 13.3 64c0 88.4-71.6 160-160 160S0 440.4 0 352s71.6-160 160-160c11.1 0 22 1.1 32.4 3.3l54.2-54.2-42.1-19.8zM160 448a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"/>
                    </svg>
                </div>
               
            </div>
            <section className={styles['about--me']}>
                <div className={styles['about--me--image']}>
                    <img  
                        src="/assets/CorinaMurg.jpg"
                        alt="Corina Murg smiling. Corina has brown hair and light skin. She is wearing a brown beret 
                        and a light gray top"
                    />
                </div>
                <div className={styles['about--me--text']}>
                    <h2>
                        I'm Corina, and I'd love to help you build an accessible portfolio site.
                    </h2>
                    
                    <div>
                        <p>
                            As web developers, we have the power to create an inclusive web, and to ensure 
                            that every user feels seen and valued. 
                        </p>
                        <p>
                            I created the <b>Web for Everyone</b> project to help entry-level developers 
                            embrace accessibility at the start of their careers. As a Trusted Tester 
                            certified accessibility specialist, I share practical techniques to avoid 
                            common bugs in your portfolio site and projects.  
                        </p>
                        
                        <h3>How to get started</h3>
                        
                        <p>
                            <span className="pink-text bold">&#x2714; </span> 
                            &nbsp;
                            <strong>New to accessibility?</strong>
                        </p>
                        <p>       
                            Start with the <span> </span>
                            <Link to="/resources#understanding-accessibility"> 
                                Understanding Accessibility
                            </Link> series. You will receive an overview of accessibility concepts and learn about the
                            most common accessibility bugs.
                        </p>
                        &nbsp;
                        <p>
                            <span className="pink-text bold">&#x2714; </span>
                            &nbsp;
                            <strong>Familiar with the basics of accessibility?</strong>
                        </p>
                        <p>
                            Start with the <span> </span>
                            <Link to="/resources#your-digital-presence"> 
                                Your Digital Presence
                            </Link> series to evaluate your portfolio site and eliminate, if present, 12 common bugs.
                        </p>
                        &nbsp;
                        <p>
                            <span className="pink-text bold">&#x2714; </span>
                            &nbsp;
                            <strong>Looking to collaborate on an accessibility review?</strong>
                        </p>
                        <p>
                            Get in touch via&nbsp;
                            <a href="https://www.linkedin.com/company/webforeveryone" 
                                target='_blank' rel="noopener noreferrer"
                                aria-label="Web for Everyone's LinkedIn page. Opens in a new tab."    
                            >       
                                Web for Everyone's LinkedIn
                                <span className="sr-only"> opens in a new tab</span>
                                <span className="external-linksvg-wrap">
                                    &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512"><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"/></svg>    
                                </span>
                            </a>   
                            <span> </span> to share the link to your portfolio site or project, and 
                            any accessibility help you are looking for.
                        </p>
                        &nbsp;
                        <p>
                            <strong>Let's build a web for everyone!</strong>
                        </p>
                    </div>
                    
                </div>
            </section>
        </div>
    );
}
