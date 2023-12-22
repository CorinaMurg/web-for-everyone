import React from "react"
import { useState } from "react"
import { useDocTitle } from "../../../hooks/useDocTitle"
import "./MostCommonBugs.css"

export default function MostCommonBugs() {
    useDocTitle("Most Common A11y Bugs | Web for Everyone");

    const [textColor, setTextColor] = useState('initial')

    const toggleColor = () => {
        setTextColor(textColor === 'initial' ? '#50cbe9' : 'initial');
    };
    
    
    return (
        <article className="commonbugs">
            <h1>Most Common A11y Bugs</h1>
            <section className="intro">
                
                {/* <p className="highlight">
                    WebAIM (Web Accessibility in Mind) is an organization dedicated to improving web
                    accessibility for people with disabilities. It is part of the 
                    Center for Persons with Disabilities at Utah State University. 
                </p> */}
                <p>
                    Here's one cool thing that happens every year: the organization WebAIM -
                        <a href="https://webaim.org/" target="_blank" rel="noreferrer">
                            Web Accessibility in Mind
                        </a>         
                    - analyzes the top 1,000,000 home pages to check for accessibility errors. 
                    The results have always been pretty grim, and 2023 is no exception:
                </p>
                
                <div className="highlight">
                    <p className="numbers"><span>96.3</span> the percentage of home pages with a11y bugs</p> 
                    <p className="numbers"><span>50</span> the average bugs per page</p> 
                    <p className="numbers"><span>106,245</span> the highest number of bugs found on a single home page</p>        
                </div>
                        
                <p>
                    I recommend checking out the full 
                        <a href="https://webaim.org/projects/million/" target="_blank" rel="noreferrer">
                            The WebAIM Million
                        </a>
                    report, but in the meantime let's go over the list of most common bugs.
                </p>

            </section>
            <section className="bug">
                <h2>1. Low Contrast Text</h2>
                <p className="white-bg">
                    Found on <span className="stats">83.6%</span> of pages, this bug involves text without enough 
                    contrast against its background. This text is hard to read, especially for users with visual 
                    impairments.
                </p>
                <div className="highlight low-contrast">
                    <p style={{ color: textColor }}>
                        Users with vision problems would have a hard time reading this sentence if the font color 
                        had an hex value of #50cbe9. Press the button to test it.
                    </p>
                    <button aria-label="Change text color from black to light blue"
                            onClick={() => toggleColor()}
                    >
                        Change color
                    </button>
                </div>

            </section>
            <section className="bug">
                <h2>2. Missing Alternative Text for Images</h2>
                <p className="white-bg">
                    <span className="stats">More than half</span> of the home pages audited had this bug! 
                    When images lack the <code>alt</code> attribute, 
                    screen reader users do not know what the purpose of the image is. 
                </p>
                <div className="highlight alt-text">
                    <h3>An important distinction to make:</h3>
                    <p className="gray-bg">
                        A missing <code>alt</code> attribute is NOT the same 
                        as an empty <code>alt</code>!
                    </p>
                    <p>
                        <span className="pink-bg">Missing <code>alt</code>:</span> screen readers announce the image as "blank".
                        Sometimes they read the name of the file as a description for the image.
                    </p>
                    <p>
                        <span className="pink-bg">Empty <code>alt</code>:</span> screen readers ignore the image.
                    </p>
                
                </div>
            </section>

            <section className="bug missing-linkText">
                <h2>3. Empty Links</h2>
                <p>
                    Half of the home pages tested had links without proper text descriptions.
                    This is a problem because screen reader users rely on link text to understand the context 
                    and the destination of a link.
                </p>
                <div className="highlight">
                    <h3>Good to remember<span className="exclamation">!</span></h3>
                    <p>Vague link text like "click here" or "continue" is not very helpful either. 
                        Screen readers announce links separately from their surrounding text. As a result, 
                        users can struggle to understand the purpose of a link if its text is vague.
                    </p>
                    <h3>Solution 💡</h3>
                    <p >
                        Need a vague link text due to visual design constraints?
                    </p>
                    <p className="gray-bg">
                        The <code>aria-label</code> can provide a 
                        more descriptive alternative. If you use it, screen readers will 
                        typically read out the aria-label instead of the visible text.
                    </p>
                </div>
            </section>

            <section className="bug missing-buttonText">
                <h2>4. Empty Buttons</h2>
                <p>
                    More than a quarter of the home pages tested had buttons without proper text descriptions.
                    This issue is very similar to empty links: users can struggle to understand the purpose of a 
                    button if its text is vague or missing.
                </p>
                <div className="highlight">
                    <h3>An example with an empty button</h3>
                    <p><code>&lt;button onClick = " ... "&gt;</code></p>
                    <p><code>&lt;img src = " ... "/&gt;</code></p>
                    <p><code>&lt;/button&gt;</code></p>
                    <h4 className="pink-text">Note</h4>
                    <p>A screen reader cannot announce this button properly because it does not have an
                        accessible name. 
                    </p>
                    <p><span className="exclamation" aria-hidden="true">!</span> no aria-label or aria-labeledby attribute</p>
                    <p><span className="exclamation" aria-hidden="true">!</span> no visible text</p>
                    <p><span className="exclamation" aria-hidden="true">!</span> no alt text for image</p>
                </div>
            </section>

            <section className="bug missing-inputLabels">
                <h2>5. Missing Input Labels</h2>
                <p>
                    More than a third of form inputs were not properly labeled.
                    Without labels, users of assistive technologies struggle to understand the purpose of 
                    form inputs.
                </p>
                <div className="highlight">
                    <h3>Good news<span className="exclamation">!</span></h3>
                    <p>The "a third of form inputs" is an improvement. In 2019, the ratio was 59%.</p>
                </div>
            </section>

            
            
            <section className="bug">
                <h2>6. Missing Document Language</h2>
                <p>
                    This issue was found on <span className="stats">18.6%</span> of the home pages audited.
                    When the language of a document isn't specified, it can affect how screen readers pronounce content, 
                    leading to confusion.
                </p>
            </section>

            <section className="bug">
                <h2>7. Misused Headings</h2>
                <p>
                    One fifth of all home pages had more than one <code>&lt;h1&gt;</code>.
                    Skipped heading levels (e.g., jumping from <code>&lt;h2&gt;</code> to <code>&lt;h4&gt;</code>) 
                    were present on more than 40% all pages.
                    About 8% of pages had no headings present at all.
                </p>
                <div className="highlight">
                    <h3>Why headings are important</h3>
                    <p>When trying to find information on a page, most screen reader users rely on headings.
                        Pressing the <span className="h-key">h</span> key allows them to visit each heading and 
                        get an idea about the structure and the content of the page.  
                    </p>
                    <h3>Recommended read 💡</h3>
                    <p>
                        Learn about the way screen reader users navigate the web and find information on a page 
                        from the
                        <a href="https://webaim.org/projects/screenreadersurvey9/#finding"
                            target="_blank" 
                            rel="noreferrer"
                        >
                            WebAIM's Screen Reader User Survey
                        </a>
                        .
                    </p>
                </div>
            </section>
        </article>
    )
}




