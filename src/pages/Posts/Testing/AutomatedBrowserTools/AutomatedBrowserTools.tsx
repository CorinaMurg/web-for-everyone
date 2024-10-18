import React from "react";
import { Link } from "react-router-dom";
import useDocTitle from "../../../../hooks/useDocTitle";
import useScrollToSection from "../../../../hooks/useScrollToSection"
import useScrollToTop from "../../../../hooks/useScrollToTop";
import ScrollToTopButton from "../../../../components/ScrollToTopButton/ScrollToTopButton"
import BackLinks from "../../../../components/BackLinks/BackLinks";
import styles from './AutomatedBrowserTools.module.css';
import "../../../../global.css";
import ExternalLink from "../../../../components/ExternalLink/ExternalLink";

export default function AutomatedBrowserTools() {
    useDocTitle("Automated Browser Tools | Web for Everyone");
    useScrollToTop();
    useScrollToSection();
    return (
        <div className={`${styles['automated-browser-tools']} automated-browser-tools section`}>
            <BackLinks 
                secondLink="Testing for accessibility" 
                href="/blog#automated-browser-tools" 
                current="Automated browser tools"
            />
          
            <h1 className="article-heading-desktop ">
                <span>Automated browser tools</span>  
            </h1>
            
            <div className="section margin-top-30">
                <p>
                    These are browser extensions that help evaluate the accessibility of your site. 
                    They scan a page and identify accessibility issues based on best practices and standards 
                    established by the <span> </span>
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
                    is considered beginner-friendly as it highlights any issues directly on the page.
                    It&apos;s can be installed for Chrome, Firefox, and Microsoft Edge.
                </p>
                <p className="bullet-point-line">
                    <ExternalLink
                        href="https://www.deque.com/axe/browser-extensions/" 
                        visibleText="Deque's axe DevTools"
                    />
                    <span> </span>
                    is one of the most comprehensive tool, with over 70 tests for accessibility issues included with the
                    free version, and around 100 tests with the pro account.
                </p>
                <p className="bullet-point-line">
                    <ExternalLink
                        href="https://developer.chrome.com/docs/lighthouse/overview/" 
                        visibleText="Google's Lighthouse"
                    />
                    <span> </span>
                    is available by default in Chrome DevTools. It also uses Deque&apos;s axe-core library, but with a smaller set of tests.
                </p>
                <p className="bullet-point-line">
                    <ExternalLink
                        href="https://www.tpgi.com/arc-platform/arc-toolkit/" 
                        visibleText="ARC Toolkit"
                    />
                    <span> </span>
                    is a Chrome extension from TPGi. It allows you to run a test on an entire page, or on a specific element.
                </p>
                <p className="bullet-point-line">
                    <ExternalLink
                        href="https://accessibilityinsights.io/downloads/" 
                        visibleText="Microsoft's Accessibility Insights for Web"
                    />
                    <span> </span>
                    works with Chrome and Edge. It runs automated tests, as well as provides guidance on how to 
                    run certain manual tests.
                    It uses Deque&apos;s axe-core library.
                </p>

                <p>
                    Note that after installation <span className="bold">WAVE</span> and <span className="bold">Accessibility Insights </span>
                    are available directly in the browser, and their icons are placed next to the address bar.
                </p>
                <p>
                    <span className="bold">ARC</span>, <span className="bold">axe</span>, and <span className="bold">Lighthouse</span> are
                    added to the browser&apos;s DevTools, and they are available as tabs in the top menu.
                </p>

                <div className="content-image-container">
                    <img 
                        alt="Elements panel in Chrome DevTools with Lighthouse, axe DevTools, and ARC Toolkit extensions highlighted"
                        className={`styles['devTools-image'] content-image`}
                        src="/assets/devTools.jpg"
                    /> 
                </div>

                <h2>
                    Do automated tools catch all accessibility issues?
                </h2>
                <p>
                    No! They can&apos;t test all aspects of accessibility, and will catch, at
                    most, around 50% of all the issues.
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
                
                <h2>
                    Which browser tool should you use?
                </h2>
                <p>
                    Each tool has its own strengths. When you run a test, each extension will list the accessibility issues it found. 
                    They also allow you to toggle back to the corresponding node in the Elements view. Some will provide
                    links to the WCAG guidelines, while others will provide links to user-friendly documentation and examples on how to fix them.
                </p>
                <p>
                    Apart from errors, some extensions also provide alerts for elements that should be checked manually, or best practice failings.
                    The latter are cases when an element does not break any accessibility guidelines, but it does not follow best practices
                    recommended by experts and users.
                </p>
                <p>
                    Best if you try a few, pick one you find easier to use, and get familiar with it. 
                    As we are now looking at how to avoid the most common 
                    accessibility bugs, these tools do a great job at spotting them.
                </p>  
                <p className="margin-top-30 read-next">
                        <span>Read next: </span>
                        <Link 
                            to="/blog/most-common-bugs" 
                            onClick={() => { useScrollToTop() }}
                        >
                            The most common acessibility bugs
                        </Link>
                    </p>        
            </div>
            <ScrollToTopButton />
        </div>
    )
}