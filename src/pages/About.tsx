
import React from "react";
import { Link } from "react-router-dom";
import useDocTitle from "../hooks/useDocTitle";
import useScrollToSection from "../hooks/useScrollToSection"
import useScrollToTop from "../hooks/useScrollToTop";
import A11yBanner from "../components/A11yBanner/A11yBanner";
import styles from "./About.module.css";
import "../global.css";

export default function About() {
    useDocTitle("About | Web for Everyone");
    useScrollToTop();
    useScrollToSection();
    return (
        <div className={`${styles.about} about`}>
           
            <h1>Let's make it accessible.</h1>
            <A11yBanner/>
            <section className={styles['about--me']}>
                <div className={styles['about--me--image']}>
                    <img  
                        src="/assets/CorinaMurg.jpg"
                        alt="Corina Murg smiling. Corina has brown hair and light skin. She is wearing a brown beret 
                        and a light gray top"
                    />
                </div>
                <div className={styles['about--me--text']}>
                    <div>
                    <h2>
                        I'm Corina, and I'd love to help you build an accessible portfolio site.
                    </h2>
                    <p>
                        As web developers, we have the power to create an accessible web and to ensure 
                        that every user feels seen and valued. 
                    </p>
                    <p>
                        I created <b>Web for Everyone</b> to help entry-level developers 
                        embrace accessibility at the start of their careers. 
                    </p>
                   
                    </div>
                   
                   <div>

                   <h2>How to get started</h2>
                     
                     <p>
                         <span className="pink-text bold">&#x2714; </span> 
                         &nbsp;
                         <strong>New to accessibility?</strong>
                     </p>
                     <p>       
                         Jump to the <span> </span>
                         <Link to="/resources#understanding-accessibility"> 
                             Understanding Accessibility
                         </Link> series for an overview of accessibility concepts and to learn about the
                         most common accessibility bugs.
                     </p>
                  
                     <p>
                         <span className="pink-text bold">&#x2714; </span>
                         &nbsp;
                         <strong>Familiar with the basics of accessibility?</strong>
                     </p>
                     <p>
                         Start with the <span> </span>
                         <Link to="/resources#your-digital-presence"> 
                             Your Digital Presence
                         </Link> series to evaluate your portfolio site and eliminate, if present, 
                         some of the most common bugs.
                     </p>
                  
                     <p>
                         <span className="pink-text bold">&#x2714; </span>
                         &nbsp;
                         <strong>Looking for guidance?</strong>
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
                         <span> </span> to share the link to your portfolio site, and 
                         any accessibility help you are looking for.
                     </p>
                     <p>
                     <span className="pink-text bold">&#x2714; </span>
                         &nbsp;
                            <strong>Let's build a web for everyone!</strong>
                        </p>
                   
                   </div>
                    
                   
                        
                        
                  
                    
                </div>
            </section>
        </div>
    );
}
