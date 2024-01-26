import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import windowScrollTop from "../../../utils/windowScrollTop"
import { useDocTitle } from "../../../hooks/useDocTitle"
import styles from "./MostCommonBugs.module.css"
import "../../../global.css"
import TableOfContents from "../../../components/TableOfContents/TableOfContents"

const contents = [
    { href: "#", text: "WebAIM Million Study" },
    { href: "#Low Contrast Text", text: "Low Contrast Text" },
    { href: "#Missing Alternative Text for Images", text: "Missing Alternative Text for Images" },
    { href: "#Empty Links", text: "Empty Links" },
    { href: "#Empty Buttons", text: "Empty Buttons" },
    { href: "#Missing Input Labels", text: "Missing Input Labels" },
    { href: "#Missing Document Language", text: "Missing Document Language" },
    { href: "#Misused Headings", text: "Misused Headings" },
    { href: "#Conclusion", text: "Conclusion" },
];

export default function MostCommonBugs() {
    useDocTitle("Most Common Accessibility Bugs | Web for Everyone");    

    const [textColor, setTextColor] = useState('initial')

    const toggleColor = () => {
        setTextColor(textColor === 'initial' ? '#50cbe9' : 'initial');
    };
    
    return (
        <div className={`article-container ${styles['commonbugs-container']}`}>
            <div className="back-links">
                <Link to="/resources" className="back-link hover-pink">
                    Resources
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <Link to="/resources/#most-common-bugs" className="back-link hover-pink">
                    Understanding Accessibility
                </Link>
            </div>
            
            <h1>The Most Common <span className="yellow-bg">Accessibility Bugs</span></h1>
            <p className="subtitle">Findings from the 2023 WebAIM Million Study</p>

            <TableOfContents contents={contents} />
            
            <div className="article-content commonbugs">
                 {/* *************0. INTRO********************** */}
                <div className="section intro" id="intro">
                    <p>
                        Here's one cool thing that happens every year: the organization 
                        <span> </span>
                        <strong>Web Accessibility in Mind</strong>, also known as <span> </span>
                            <a href="https://webaim.org/" target="_blank" rel="noreferrer">
                                WebAIM
                            </a>         
                        , analyzes the top 1,000,000 home pages to check for accessibility errors. 
                        The results have always been pretty grim, and 2023 was no exception:
                    </p>
                    
                    <div className="highlight">
                        <p className={styles['numbers']}>
                            <span>96.3</span> the percentage of home pages with a11y bugs
                        </p> 
                        <p className={styles['numbers']}>
                            <span>50</span> the average bugs per page
                        </p> 
                        <p className={styles['numbers']}>
                            <span>106,245</span> the highest number of bugs found on a single home page
                        </p>        
                    </div>
                    
                    <p>
                        WebAIM audits these pages using an automated tool, the WAVE accessibility engine. 
                        Automated tools are not perfect and fail to detect all  
                        accessibility barriers and guidelines violations.
                        As a result, the actual number of bugs is likely to be higher.
                    </p>
                    
                    <p>The good news? These are some of the easiest bugs to avoid or fix!</p>

                    <div className="highlight bad-news">
                        <p className="fake-heading-p">The sad news?</p>
                        <p className="margin-top-20">
                            The top 6 types of bugs accounted for over 96% of all bugs found.  
                            <span aria-hidden="true"> 😔</span>
                        </p>
                        <p>Worse: they've been the "most common bugs" for the last 5 years.  
                            <span aria-hidden="true"> 😢</span>
                        </p>
                    </div>
                    <p>
                        Consider reading the full <span> </span>
                            <a href="https://webaim.org/projects/million/" target="_blank" rel="noreferrer">
                                WebAIM Million
                            </a>
                        <span> </span>report, but in the meantime let's go over the list of the most common bugs. 
                    </p>
                </div>

                {/* 1. LOW CONTRAST */}
                <div className="section low-contrast scroll-target" id="Low Contrast Text">
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
                                className={styles['low-contrast--button']}
                                onClick={() => toggleColor()}
                        >
                            Change color
                        </button>
                    </div>
                </div>

                {/* 2. ALT TEXT */}
                <div className="section alt-text scroll-target" id="Missing Alternative Text for Images">
                    <h2>2. Missing <code>alt</code> Text for Images</h2>
                    <p className="white-bg">
                        <span className="stats">More than half</span> of the home pages audited had this bug! 
                        When images lack the <code>alt</code> attribute, 
                        screen reader users do not know what the purpose of the image is. 
                    </p>
                    <div className="highlight">
                        <p className="fake-heading-p">An important distinction to make:</p>
                        <p className="gray-bg margin-bottom-30">
                            A missing <code>alt</code> attribute is NOT the same 
                            as an empty <code>alt</code>!
                        </p>
                        <p>
                            <span className="pink-text">Missing <code>alt</code>:</span> screen readers might 
                            read the source file name.
                        </p>
                        <p>
                            <span className="pink-text">Empty <code>alt</code>:</span> screen readers ignore the image.
                        </p>
                    
                    </div>
                </div>

                {/* 3. LINKS */}
                <div className="section empty-links scroll-target" id="Empty Links">
                    <h2>3. Empty Links</h2>
                    <p>
                        <span className="stats">Half</span> of the home pages tested had links without proper text descriptions.
                        This is a problem because screen reader users rely on link text to understand the context 
                        and the destination of a link.
                    </p>
                    <div className="highlight">
                        <p className="fake-heading-p">Good to remember: avoid vague text<span className="exclamation">!</span></p>
                        <p className="margin-top-20">
                            Vague link text like <span className="pink-bg-white-text">click here</span> or 
                            <span> </span><span className="pink-bg-white-text">continue</span> is not very 
                            helpful either.
                        </p>
                        <p className="margin-top-20">
                            Instead of reading through an entire page, some screen reader users prefer to
                            navigate through the various links provided on the page.</p>
                        <p className="margin-top-20">
                            As a result, the links are announced separately from their surrounding text and
                            users can struggle to understand their purpose if their text is vague.
                        </p>
                    </div>
                </div>

                {/* 4. BUTTONS */}
                <div className="section empty-buttons scroll-target" id="Empty Buttons">
                    <h2>4. Empty Buttons</h2>
                    <p>
                        <span className="stats">More than a quarter</span> of the home pages tested had buttons 
                        without proper text descriptions.
                        This issue is very similar to empty links: users can struggle to understand the purpose of a 
                        button if its text is vague or missing.
                    </p>
                    <div className="highlight">
                        <p className="fake-heading-p">An example with an empty button</p>
                        <p>
                            <code className="padding-left-20">
                                &lt;<span className="pink-text">button</span> id="closeModal"&gt;
                            </code>
                        </p>
                        <p>
                            <code className="padding-left-40">
                                &lt;<span className="pink-text">img</span> src="x-mark.svg"/&gt;
                            </code>
                        </p>
                        <p>
                            <code className="padding-left-20">
                                &lt;/<span className="pink-text">button</span>&gt;
                            </code>
                        </p>
                        <p className="fake-heading-p margin-top-30">
                            Issue <span aria-hidden="true"> 🛠️</span>
                        </p>
                        <p className="gray-bg">
                            Text is replaced by an image with no <code>alt</code> text. 
                            Within the accessibility tree, this button object does not have an accessible name.
                        </p>
                        <p className="fake-heading-p">
                            Remember<span className="exclamation">!</span>
                        </p>
                        <p>Assitive technologies recognize an accessible object by its accessible name.</p>
                        <p className="fake-heading-p">Consequences</p>
                        <p>
                            <span className="pink-num">1. </span>A screen reader will announce this button as ... button, 
                            and no other information attached. Users will not know what its function is.
                        </p>
                        <p>
                            <span className="pink-num">2. </span>Users relying on voice activation will not be able to 
                            trigger the action on the button.
                        </p>
                    </div>
                </div>

                {/* 5. INPUT LABELS */}
                <div className="section missing-inputLabels scroll-target" id="Missing Input Labels">
                    <h2>5. Missing Input Labels</h2>
                    <p>
                        <span className="stats">More than a third</span> 
                        of form inputs were not properly labeled.
                        Without labels, assitive tech users struggle to understand or use the input.
                    </p>
                    <div className="highlight">
                        <p className="fake-heading-p">An input without a label</p>
                        <p>
                            <code className="padding-left-20">
                                &lt;<span className="pink-text">label</span>&gt;
                            </code> 
                        </p>
                        <p>
                            <code className="padding-left-40">
                                &lt;<span className="pink-text">input</span> type="text" id="email"&gt;
                            </code>
                        </p>
                        <p>
                            <code className="padding-left-20">
                                &lt;/<span className="pink-text">label</span>&gt;
                            </code>
                        </p>
                        <p className="fake-heading-p margin-top-30">
                            Issue <span aria-hidden="true"> 🛠️</span>
                        </p>
                        <p>
                            The input is wrapped in label tags without a text. Attributes like "aria-label" or 
                            "aria-labelledby" that can be used to provide an accessible name are not present.
                        </p>
                        <p className="fake-heading-p">Consequences</p>
                        <p>
                            <span className="pink-num">1. </span>Screen reader users will not 
                            understand the purpose of the input. 
                        </p>
                        <p>
                            <span className="pink-num">2. </span>Voice activation users have
                            no clues about how to refer to the input.
                        </p>
                    </div>
                    <div className="highlight">   
                        <p className="fake-heading-p">
                            Good news<span className="exclamation">!</span>
                        </p>
                        <p>The "a third of form inputs" is an improvement. In 2019, the ratio was 59%.</p>
                    </div>
                </div>

                {/* 6. LANG */}
                <div className="section missing-lang scroll-target" id="Missing Document Language">
                    <h2>6. Missing Document Language</h2>
                    <p>
                        This issue was found on <span className="stats">18.6%</span> of the home pages audited.
                    </p>
                    <p>
                        When setting up their screen reader, users choose a default language. 
                        If a webpage doesn't have a "lang" attribute, the screen reader defaults to the user's 
                        chosen language. This can be problematic for multilingual users accessing content in 
                        various languages.
                    </p>
                    <div className="highlight">
                        <p className="fake-heading-p">
                            Note: the <code>lang</code> attribute is added 
                            to the <code>html</code> tag<span className="exclamation">!</span>
                        </p>
                        <p><code>&lt;html <code className="pink-text">lang</code>="en"&gt;</code></p>
                    </div>
                    
                </div>

                {/* 7. HEADINGS */}
                <div className="section misused-headings scroll-target" id="Misused Headings">
                    <h2>7. Misused Headings</h2>
                    <p>
                        <span className="stats">One fifth</span> of all home pages had more than one <code>&lt;h1&gt;</code>.
                        Skipped heading levels (e.g., jumping from <code>&lt;h2&gt;</code> to <code>&lt;h4&gt;</code>) 
                        were found on more than <span className="stats">40%</span> of all pages.
                        About <span className="stats">8%</span> of pages had no headings at all.
                    </p>
                    <div className="highlight">
                        <p className="fake-heading-p">Why headings are important</p>
                        <p>
                            When trying to find information on a page, most screen reader users rely on headings.
                            Pressing the <span className="pink-bg-white-text">h</span> key allows them to visit each 
                            heading to get an idea about the structure and the content of the page.  
                        </p>
                        <p className="fake-heading-p margin-top-30">
                            Recommended read <span aria-hidden="true">💡</span>
                        </p>
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
                </div>

                {/* CONCLUSION */}
                <div className="section conclusion" id="Conclusion">
                    <h2>Conclusion</h2>
                    <p>
                        We just looked at the most common accessibility bugs as reported by the WebAIM Million Study.
                        Fortunately, these are also the easiest to fix!
                    </p>
                    <p>
                        Next, let's look at how to avoid or fix these bugs when building your portfolio site.
                    </p>
                    
                    <div className="next-article">
                        <span className="read-next">Read next:</span>
                        <Link to="/resources/make-it-accessible" 
                                className="read-next pink-text"
                                onClick={() => { windowScrollTop() }}
                        >
                            Your Portfolio Site: Let's Make It Accessible!
                        </Link>
                    </div>
                    
                </div>

            </div>
            
        </div>
    )
}


