import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
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
            <p className="subtitle">Findings from the 2023 WebAIM Million Study</p>
            <section className="intro">
                <p>
                    Here's one cool thing that happens every year: the organization WebAIM -
                        <a href="https://webaim.org/" target="_blank" rel="noreferrer">
                            Web Accessibility in Mind
                        </a>         
                    - analyzes the top 1,000,000 home pages to check for accessibility errors. 

                    The results have always been pretty grim, and 2023 was no exception:
                </p>
                
                <div className="highlight">
                    <p className="numbers"><span>96.3</span> the percentage of home pages with a11y bugs</p> 
                    <p className="numbers"><span>50</span> the average bugs per page</p> 
                    <p className="numbers"><span>106,245</span> the highest number of bugs found on a single home page</p>        
                </div>
                
                <p>
                    WebAIM audits these pages using the WAVE accessibility engine, 
                    an automated tool. Automated tools are not perfect and fail to detect all  
                    accessibility barriers and guidelines violations.
                    As a result, the actual number of bugs is likely to be higher.
                </p>

                <p>
                    I recommend reading the full 
                        <a href="https://webaim.org/projects/million/" target="_blank" rel="noreferrer">
                            WebAIM Million
                        </a>
                    report, but in the meantime let's go over the list of the most common bugs: 
                </p>
                <div>
                    <ul>
                        <li>
                            <span className="list-num">1. </span>
                            <a href="#low-contrast">
                                low contrast text
                                <i className="link-arrow"></i>
                                <i className="link-arrow additional-arrow"></i>
                                <i className="link-arrow additional-arrow"></i>
                            </a>
                        </li>
                        <li>
                            <span className="list-num">2. </span>
                            <a href="#alt-text">
                                missing alternative text for images
                                <i className="link-arrow"></i>
                                <i className="link-arrow additional-arrow"></i>
                                <i className="link-arrow additional-arrow"></i>
                            </a>
                        </li>
                        <li>
                            <span className="list-num">3. </span>
                            <a href="#empty-links">
                                empty links
                                <i className="link-arrow"></i>
                                <i className="link-arrow additional-arrow"></i>
                                <i className="link-arrow additional-arrow"></i>
                            </a>
                        </li>
                        <li>
                            <span className="list-num">4. </span>
                            <a href="#empty-buttons">
                                empty buttons
                                <i className="link-arrow"></i>
                                <i className="link-arrow additional-arrow"></i>
                                <i className="link-arrow additional-arrow"></i>
                            </a>
                        </li>
                        <li>
                            <span className="list-num">5. </span>
                            <a href="#missing-inputLabels">
                                missing input labels
                                <i className="link-arrow"></i>
                                <i className="link-arrow additional-arrow"></i>
                                <i className="link-arrow additional-arrow"></i>
                            </a>
                        </li>
                        <li>
                            <span className="list-num">6. </span>
                            <a href="#missing-lang">
                                missing document language
                                <i className="link-arrow"></i>
                                <i className="link-arrow additional-arrow"></i>
                                <i className="link-arrow additional-arrow"></i>
                            </a>
                        </li>
                        <li>
                            <span className="list-num">7. </span>
                            <a href="#misused-headings">
                                misused headings
                                <i className="link-arrow"></i>
                                <i className="link-arrow additional-arrow"></i>
                                <i className="link-arrow additional-arrow"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <p>The good news? These are some of the easiest bugs to avoid or fix.</p>

                <div className="highlight bad-news">
                    <p className="fake-heading-p">The sad news?</p>
                    <p>The top 6 types of bugs accounted for over 96% of all bugs found.  
                        <span aria-hidden="true"> 😔</span>
                    </p>
                    <p>Worse: they've been the "most common bugs" for the last 5 years.  
                        <span aria-hidden="true"> 😢</span>
                    </p>
                </div>
            </section>

            <section className="bug low-contrast scroll-target" id="low-contrast">
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
                    <button aria-label="Change text color from black to light blue."
                            onClick={() => toggleColor()}
                    >
                        Change color
                    </button>
                </div>
            </section>

            <section className="bug alt-text scroll-target" id="alt-text">
                <h2>2. Missing Alternative Text for Images</h2>
                <p className="white-bg">
                    <span className="stats">More than half</span> of the home pages audited had this bug! 
                    When images lack the <code>alt</code> attribute, 
                    screen reader users do not know what the purpose of the image is. 
                </p>
                <div className="highlight">
                    <p className="fake-heading-p">An important distinction to make:</p>
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

            <section className="bug empty-links scroll-target" id="empty-links">
                <h2>3. Empty Links</h2>
                <p>
                    <span className="stats">Half</span> of the home pages tested had links without proper text descriptions.
                    This is a problem because screen reader users rely on link text to understand the context 
                    and the destination of a link.
                </p>
                <div className="highlight">
                    <p className="fake-heading-p">Good to remember<span className="exclamation">!</span></p>
                    <p>Vague link text like "click here" or "continue" is not very helpful either.</p>
                    <p>Instead of reading through an entire page, some screen reader users prefer to
                        navigate through the various links provided on the page.</p>
                    <p>As a result, the links are announced separately from their surrounding text and
                        users can struggle to understand their purpose if their text is vague.
                    </p>
                </div>
            </section>

            <section className="bug empty-buttons scroll-target" id="empty-buttons">
                <h2>4. Empty Buttons</h2>
                <p>
                    <span className="stats">More than a quarter</span> of the home pages tested had buttons without proper 
                    text descriptions.
                    This issue is very similar to empty links: users can struggle to understand the purpose of a 
                    button if its text is vague or missing.
                </p>
                <div className="highlight">
                    <p className="fake-heading-p">An example with an empty button</p>
                    <p><code>&lt;<span className="pink-text">button</span> id="closeModal"&gt;</code></p>
                    <p><code>&lt;<span className="pink-text">img</span> src="x-mark.svg"/&gt;</code></p>
                    <p><code>&lt;/<span className="pink-text">button</span>&gt;</code></p>
                    <p className="fake-heading-p">Issue <span aria-hidden="true"> 🛠️</span></p>
                    <p className="gray-bg">Text is replaced by an image with no <code>alt</code> text. Within the accessibility tree, this button 
                        object does not have an accessible name.
                    </p>
                    <p className="fake-heading-p">Remember<span className="exclamation">!</span></p>
                    <p>Assitive technologies recognnize an accessible object by its accessible name.</p>
                    <p className="fake-heading-p">Consequences</p>
                    <p><span className="pink-num">1. </span>A screen reader will announce this button as ... button, 
                        and no other information attached. Users will not know what its function is.
                    </p>
                    <p><span className="pink-num">2. </span>Users relying on voice activation will not be able to 
                        trigger the action on the button.</p>
                </div>
            </section>

            <section className="bug missing-inputLabels scroll-target" id="missing-inputLabels">
                <h2>5. Missing Input Labels</h2>
                <p>
                    <span className="stats">More than a third</span> 
                    of form inputs were not properly labeled.
                    Without labels, assitive tech users struggle to understand or use the input.
                </p>
                <div className="highlight">
                    <p className="fake-heading-p">An input without a label</p>
                    <div className="code-block">
                        <p>
                            <code>&lt;
                                <span className="pink-text">
                                    label
                                </span>&gt;
                            </code> 
                        </p>
                        <p><code>&lt;<span className="pink-text">input</span> type="text" id="email"&gt;</code></p>
                        <p><code>&lt;/<span className="pink-text">label</span>&gt;</code></p>
                    </div> 
                    <p className="fake-heading-p">Issue <span aria-hidden="true"> 🛠️</span></p>
                    <p>The input is wrapped in label tags without a text. Attributes like "aria-label" or "aria-labelledby"
                        that are taken into account when creating the accessible name are also not present.</p>
                    <p className="fake-heading-p">Consequences</p>
                    <p><span className="pink-num">1. </span>Screen reader users will not understand the purpose of the input. </p>
                    <p><span className="pink-num">2. </span>Voice activation users have
                        no clues about how to refer to the input.
                    </p>
                </div>
                <div className="highlight">   
                    <p className="fake-heading-p">Good news<span className="exclamation">!</span></p>
                    <p>The "a third of form inputs" is an improvement. In 2019, the ratio was 59%.</p>
                </div>
            </section>

            
            <section className="bug missing-lang scroll-target" id="missing-lang">
                <h2>6. Missing Document Language</h2>
                <p>
                    This issue was found on <span className="stats">18.6%</span> of the home pages audited.
                    When the language of a web page is not specified, it can affect how screen readers pronounce content, 
                    leading to confusion.
                </p>
                <div className="highlight">
                    <p className="fake-heading-p">Note: the <code>lang</code> attribute is added tot the <code>html</code> tag<span className="exclamation">!</span></p>
                    <p><code>&lt;html <code className="pink-text">lang</code>="en"&gt;</code></p>
                </div>
                
            </section>

            <section className="bug misused-headings scroll-target" id="misused-headings">
                <h2>7. Misused Headings</h2>
                <p>
                    <span className="stats">One fifth</span> of all home pages had more than one <code>&lt;h1&gt;</code>.
                    Skipped heading levels (e.g., jumping from <code>&lt;h2&gt;</code> to <code>&lt;h4&gt;</code>) 
                    were found on more than <span className="stats">40%</span> of all pages.
                    About <span className="stats">8%</span> of pages had no headings at all.
                </p>
                <div className="highlight">
                    <p className="fake-heading-p">Why headings are important</p>
                    <p>When trying to find information on a page, most screen reader users rely on headings.
                        Pressing the <span className="h-key">h</span> key allows them to visit each heading to
                        get an idea about the structure and the content of the page.  
                    </p>
                    <p className="fake-heading-p">Recommended read <span aria-hidden="true">💡</span></p>
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
            <section className="bug conclusion">
                <h2>Conclusion</h2>
                <p>
                    We just looked at the most common accessibility bugs as reported by the WebAIM Million Study.
                    
                    Fortunately, these are also the easiest to fix!
                </p>
                <p>
                    Our next article will go over the solutions to these bugs.
                    
                </p>
                
                <div className="next-article">
                    <span className="fake-heading-p">Read next:</span>
                    <Link to="/resources/make-it-accessible" className="fake-heading-p pink-text">
                        Let's Make It Accessible!
                    </Link>
                </div>
                
            </section>
        </article>
    )
}


