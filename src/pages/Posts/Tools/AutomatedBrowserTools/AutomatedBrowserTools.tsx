import React from "react";
import useDocTitle from "../../../../hooks/useDocTitle";
import useScrollToSection from "../../../../hooks/useScrollToSection"
import useScrollToTop from "../../../../hooks/useScrollToTop";
import ScrollToTopButton from "../../../../components/ScrollToTopButton/ScrollToTopButton"
import styles from './AutomatedBrowserTools.module.css';
import "../../../../global.css";
import ExternalLink from "../../../../components/ExternalLink/ExternalLink";

export default function Feedback() {
    useDocTitle("Automated Browser Tools | Web for Everyone");
    useScrollToTop();
    useScrollToSection();
    return (
        <div className={`${styles['automated-browser-tools']} article-container`}>
          
            <h1 className="article-heading-desktop ">
                <span>Automated browser tools</span>  
            </h1>
            <h1 className="article-heading-mobile">
                <span>Automated browser tools</span> 
            </h1>
            
            <section className="section margin-top-30">
                <p>
                    These are browser extensions that can help
                    you evaluate the accessibility of your site. 
                    They scan a page and identify accessibility 
                    issues based on best practices and standards established by
                    the <span> </span>
                    <ExternalLink 
                        href="https://www.w3.org/WAI/standards-guidelines/wcag/" 
                        visibleText="Web Content Accessibility Guidelines"
                    />
                    , better known as <span className="bold">WCAG</span>. 
                </p> 
                <p>
                    Here are a few of the most popular browser extensions:
                </p>
                <p className="bullet-point-line">
                    <ExternalLink
                        href=" https://wave.webaim.org/extension/" 
                        visibleText="WebAIM's WAVE"
                    />
                    <span> </span>
                    is considered the most beginner-friendly as it highlights any issues directly on the page.
                </p>
                <p className="bullet-point-line">
                    <ExternalLink
                        href="https://developer.chrome.com/docs/lighthouse/overview/" 
                        visibleText="Google's Lighthouse"
                    />
                </p>
                <p className="bullet-point-line">
                    <ExternalLink
                        href="https://www.deque.com/axe/devtools/" 
                        visibleText="Deque's axe DevTools"
                    />
                    <span> </span>
                    is probably the most comprehensive tool, with over 70 tests for accessibility issues.
                    Note that Lighthouse also uses Deque&apos;s axe-core library, but with a smaller set of tests.
                </p>
                <p>
                    Each tool has its own strengths. Best if you pick one and get 
                    familiar with it. When you run a test, it lists the accessibility issues it found, 
                    as well as links to documentation and examples on how to fix them.
                </p>
                <p>
                    As we are now looking at how to avoid the most common 
                    accessibility bugs, these tools do a great job at spotting them.
                </p>
                <p>
                    But keep in mind that automated tools are imperfect!
                    They can&apos;t test all aspects of accessibility, and will catch at
                    most 50% of all the issues.
                </p>
                <p>  
                    When building a complex website, your accessibility 
                    audit will have to include:
                </p>
                <p className="bullet-point-line">
                    <span className="bold">manual testing</span>: navigating with only the 
                    keyboard, testing with different screen readers and other different assistive technologies, to name just a few steps.
                </p>
                <p className="bullet-point-line">
                    <span className="bold">user testing</span>: involving people with disabilities in the process
                    of evaluating the site.

                </p>
                            
            </section>
            <ScrollToTopButton />
        </div>
    )
}