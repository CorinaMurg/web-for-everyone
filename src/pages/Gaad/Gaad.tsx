import React from "react";
import useDocTitle from "../../hooks/useDocTitle";
import useScrollToSection from "../../hooks/useScrollToSection"
import useScrollToTop from "../../hooks/useScrollToTop";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton"
import A11yBanner from "../../components/A11yBanner/A11yBanner";
import styles from "./Gaad.module.css";
import "../../global.css";
import ExternalLink from "../../components/ExternalLink/ExternalLink";

export default function Feedback() {
    useDocTitle("GAAD 2024 | Web for Everyone");
    useScrollToTop();
    useScrollToSection();
    return (
        <div className={`${styles['gaad']} gaad`}>
          
            <h1 className="article-heading-desktop ">
                <span><span className="pink-text">GAAD</span> 2024</span>  
            </h1>
            <h1 className="article-heading-mobile">
                <span><span className="pink-text">GAAD</span> 2024</span>
            </h1>
            
            <section className="section margin-top-30">
                <p>
                    NOTE: While GAAD 2024 has passed, there's no reason to wait until next year to 
                    start learning about accessibility. Use the ideas below to get started today!
                </p>

                <p>
                    It's May 16, 2024, {' '}
                    <ExternalLink
                        href="https://accessibility.day/"
                        visibleText="Global Accessibility Awareness Day"
                    />
                    . 
                    Let's learn something about accessibility today. 
                    Fix a bug. Learn a new skill. Teach someone. Consider the ways in which disabled users access your site.
                    Plan to build with accessibility in mind every day.
                </p>
                <p>
                    Here are just a few ideas to get you started:
                    
                </p>
            </section>
            
            <section className="section margin-top-30">
                <h2 id="report-a11y-issues" className="white-bg">
                    1. Look for the <code>alt</code> attribute.
                </h2>
                <p className="white-bg">
                    Check that every image on your site has the <code>alt</code> attribute.
                    When images lack the alt attribute, screen reader users do not know what the purpose 
                    of the image is. Usually, when this attribute is missing, the screen reader will read the 
                    source file name. Not very helpful, right?
                </p>
                <p className="flex-gap-10 white-bg">
                    <span className="pink-text bold" aria-hidden="true">&#x2714; </span>
                    <span>
                        Is your image <span className="bold">purely decorative</span>? Or, is the information presented in the image 
                        conveyed by the adjacent text as well? Then it's best to leave the <code>alt</code> attribute empty.
                    </span>
                </p>
                <p className="flex-gap-10 white-bg">
                    <span className="pink-text bold">&#x2714; </span>
                    <span>
                        Does your image contain <span className="bold">essential information</span> that is not available in the text? 
                        Then add a short description in the <code>alt</code> attribute. No need to add the word "image"
                        or "picture" in the description, as screen readers announce it as an image by default.
                    </span>
                </p> 
                <p className="white-bg">
                    Either way, it's important to <span className="bold">add the <code>alt</code> attribute to all images</span>. 
                </p>
            </section>
            <section className="section margin-top-30">
                <h2>
                    2. Put down your mouse
                </h2>
                <p>
                    Navigate your site with keyboard alone. Can you reach every interactive element? Can you tell where you are on the page? 
                    Can you navigate your site without getting stuck?
                </p>
                <p className="white-bg">
                    If you answered "no" to any of these questions, the solution might be as simple as replacing
                    a non-semantic <code>div</code> with a semantic <code>button</code> or <code>input</code> element.
                    Other times, you might need to add certain HTML or ARIA attributes.
                </p>
                <p>
                    Not everyone can use a mouse! People who are blind or have low vision, as well as those without 
                    fine motor skills, rely on a keyboard to navigate the web. Make sure all interactive 
                    elements on your site are reachable and usable with a keyboard.
                </p>
                <p>
                    Here's a great article from Carrie Fisher to help you sort out any keyboard navigation 
                    issues on your site: {' '}
                    <ExternalLink
                        href="https://web.dev/learn/accessibility/focus?continue=https%3A%2F%2Fweb.dev%2Flearn%2Faccessibility%23article-https%3A%2F%2Fweb.dev%2Flearn%2Faccessibility%2Ffocus"
                        visibleText="Keyboard Focus"
                    />
                </p>
            </section>
            <section className="section margin-top-30">
                <h2>
                    3. Research the most common accessibility bugs
                </h2>
                <p>
                    <span className="bold">Web Accessibility in Mind</span>, best known as <span> </span>
                    <ExternalLink
                            href="https://webaim.org/"
                            visibleText="WebAIM"
                    />     
                    , analyzes the top 1,000,000 home pages to check for accessibility errors. 
                </p>
                <p>
                    Read the summary of the {' '}
                    <ExternalLink
                        href="https://webaim.org/projects/million"
                        visibleText="2024 WebAIM Million"
                    /> 
                    {' '}
                    study, then share with your network what you found to be the most surprising or interesting fact.
                </p>
            </section>
            <section className="section margin-top-30">
                <h2>
                    4. Watch a video about the accessibility tree
                </h2>
                <p>
                    The accessibility tree is a simplified version of the DOM tree, containing only the nodes
                    that need to be exposed to assistive technologies, like links or headings.
                    When triggered, assistive technologies use the browser's accessibility APIs to retrieve 
                    information from the accessibility tree and present it to users.
                </p>
                <p>
                    Understand the accessibility tree and you will be better equipped to build accessible sites!
                </p>
                <p>
                    Here's a great video from Google's Chrome Developers to get you started: {' '}
                    <ExternalLink
                        href="https://www.youtube.com/watch?v=Th-nv-SCj4Q"
                        visibleText="Debugging accessibility with Chrome DevTools"
                    />.
                </p>
            </section>
            <section className="section margin-top-30">
                <h2>
                    5. Register for an accessibility course
                </h2>
                <p>
                    Make a plan to finish it by the end of the year. It's wonderful that we have a special day
                    to focus on accessibility, but accessibility must be a year-round commitment.
                </p>
                <div>
                <p>
                    Here are three great courses to learn about accessibility:
                </p>
                <ul>
                    <li>
                        <p className="bullet-point-line margin-top-30">
                            Carrie Fisher's course {' '}
                            <ExternalLink
                                href="https://web.dev/learn/accessibility"
                                visibleText="Learn Accessibility"
                            />
                            {' '} on web.dev.
                        </p>
                    </li>
                    <li>
                        <p className="bullet-point-line margin-top-30">
                            Jon Kuperman's course {' '}
                            <ExternalLink
                                href="https://frontendmasters.com/courses/accessibility-v2/"
                                visibleText="Website Accessibility"
                            />
                            {' '} on Frontend Masters.
                        </p>
                    </li>
                    <li>
                        <p className="bullet-point-line margin-top-30">
                            Sara Soueidan's course {' '}
                            <ExternalLink
                                href="https://practical-accessibility.today/"
                                visibleText="Practical Accessibility"
                            />
                        </p>
                        
                    </li>
                </ul>
                </div>     
                <section className="section margin-top-30">
                    <h2>
                        Ready to start?
                    </h2>
                    <p>
                        These are 5 ideas to choose from. Try one or try them all. 
                        Pick an easy one or a challenging one. No matter what you pick, it will be a win for you 
                        and a win for accessibility as well.
                    </p> 
                </section>
                   
            </section>
            <ScrollToTopButton />
               
        </div>
    )
}