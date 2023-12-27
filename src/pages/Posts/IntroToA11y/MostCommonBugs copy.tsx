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
            <p className="subtitle">Findings from the 2023 WebAIM Million Project</p>
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
                    I recommend reading the full 
                        <a href="https://webaim.org/projects/million/" target="_blank" rel="noreferrer">
                            The WebAIM Million
                        </a>
                    report, but in the meantime let's go over the list of the most common bugs.
                </p>

                
                <p>We will look at the top <span className="stats">six types of bugs</span>.</p>
                <div className="highlight">
                    <p className="adjectives"><span>the good</span> they are some of the easiest bugs to fix</p>
                    <p className="adjectives"><span>the bad</span> together, they accounted for 96.1% of all bugs found</p>
                    <p className="adjectives"><span>the sad</span> they've been the most common bugs for the last 5 years!</p>
                </div>
                

            </section>
            <section className="bug low-contrast" id="low-contrast">
                <h2>1. Low Contrast Text</h2>
                <p className="white-bg">
                    Found on <span className="stats">83.6%</span> of pages, this bug involves text without enough 
                    contrast against its background. This text is hard to read, especially for users with visual 
                    impairments.
                </p>
                <div className="highlight">
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
                        <span className="pink-text">Missing <code>alt</code>:</span> screen readers announce the image as "blank".
                    </p>
                    <p>
                        <span className="pink-text">Empty <code>alt</code>:</span> screen readers ignore the image.
                    </p>
                
                </div>
            </section>

            <section className="bug missing-linkText">
                <h2>3. Empty Links</h2>
                <p>
                    <span className="stats">Half</span> of the home pages tested had links without proper text descriptions.
                    This is a problem because screen reader users rely on link text to understand the context 
                    and the destination of a link.
                </p>
                <div className="highlight">
                    <h3>Good to remember<span className="exclamation">!</span></h3>
                    <p>Vague link text like "click here" or "continue" is not very helpful either. 
                        Instead of reading through the entire page, some screen reader users prefer to
                        navigate through the various links provided on the page. As a result,
                        the links are announced separately from their surrounding text and
                        users can struggle to understand their purpose if their text is vague.
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
                    <span className="stats">More than a quarter</span> of the home pages tested had buttons without proper 
                    text descriptions.
                    This issue is very similar to empty links: users can struggle to understand the purpose of a 
                    button if its text is vague or missing.
                </p>
                <div className="highlight">
                    <h3>An example with an empty button</h3>
                    <p><code>&lt;<span className="pink-text">button</span> id="closeModal"&gt;</code></p>
                    <p><code>&lt;<span className="pink-text">img</span> src="x-marg.svg"/&gt;</code></p>
                    <p><code>&lt;/<span className="pink-text">button</span>&gt;</code></p>
                    <p>A screen reader will announce this button as ... button, and users will not know what to do with it.</p>
                    <h4 className="pink-text">Ways to fix it</h4>

                    <p>
                        <span className="pink-num" aria-hidden="true">1. </span> 
                        Replace the image with text (e.g., Close modal)
                    </p>
                    <p>
                        <span className="pink-num" aria-hidden="true">2. </span> 
                        Use both text and image, but add a <code>visually-hidden</code> class to the text. Screen readers 
                        will announce the text, while sighted users will rely on the image to figure out the 
                        purpose of the button.
                    </p>
                    <p>
                        <span className="pink-num" aria-hidden="true">3. </span> 
                        Add <code>aria-label</code> to the button (e.g., <code>aria-label="Close modal"</code>) 
                        and an empty <code>alt</code> to the image.
                    </p>
                    <p>
                        <span className="pink-num" aria-hidden="true">4. </span> 
                        Keep just the image, but include its description within the <code>alt</code> attribute (e.g., 
                        <code> alt="Close modal</code>). This version will be more verbose, so less than ideal.
                        It will be announced as "close modal graphic button."
                    </p>
                </div>
            </section>

            <section className="bug missing-inputLabels">
                <h2>5. Missing Input Labels</h2>
                <p>
                    <span className="stats">More than a third</span> of form inputs were not properly labeled.
                    Without labels, users of assistive technologies struggle to understand the purpose of 
                    form inputs.
                </p>
                <div className="highlight">
                    <h3>An input with a visually-hidden label</h3>
                    <div className="code-bg">
                        <p>
                            <code>&lt;
                                <span className="pink-text">
                                    label
                                </span>&gt;
                            </code> 
                            &lt;span class="<span className="green-text">visually-hidden</span>"&gt;
                            <span className="green-text">Name</span>&lt;span&gt;
                        </p>
                        <p><code>&lt;<span className="pink-text">input</span> type="name" required&gt;</code></p>
                        <p><code>&lt;/<span className="pink-text">label</span>&gt;</code></p>
                    </div>
                    
                    <h3>Good news<span className="exclamation">!</span></h3>
                    <p>The "a third of form inputs" is an improvement. In 2019, the ratio was 59%.</p>
                </div>
            </section>

            
            <section className="bug missing-lang">
                <h2>6. Missing Document Language</h2>
                <p>
                    This issue was found on <span className="stats">18.6%</span> of the home pages audited.
                    When the language of a document isn't specified, it can affect how screen readers pronounce content, 
                    leading to confusion.
                </p>
                <div className="highlight">
                    <h3>Note: the <code>lang</code> attribute is added tot the <code>html</code> tag<span className="exclamation">!</span></h3>
                    <p><code>&lt;html <code className="pink-text">lang</code>="en"&gt;</code></p>
                </div>
                <p>These were the top 6 most common bugs. Let's look at one more category: headings.</p>
            </section>

            <section className="bug">
                <h2>7. Misused Headings</h2>
                <p>
                    <span className="stats">One fifth</span> of all home pages had more than one <code>&lt;h1&gt;</code>.
                    Skipped heading levels (e.g., jumping from <code>&lt;h2&gt;</code> to <code>&lt;h4&gt;</code>) 
                    were found on more than <span className="stats">40%</span> of all pages.
                    About <span className="stats">8%</span> of pages had no headings at all.
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


