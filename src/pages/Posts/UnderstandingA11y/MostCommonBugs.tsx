import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import scrollToTop from "../../../utils/scrollToTop"
import useDocTitle from "../../../hooks/useDocTitle"
import useScrollToSection from "../../../hooks/useScrollToSection"
import scrollToSection from "../../../utils/scrollToSection"
import styles from "./MostCommonBugs.module.css"
import "../../../global.css"
import TableOfContents from "../../../components/TableOfContents/TableOfContents"
import BackLinks from "../../../components/BackLinks/BackLinks"

const contents = [
    { href: "#", text: "WebAIM Million Study" },
    { href: "#low-contrast-text", text: "Low Contrast Text" },
    { href: "#missing-alt-text-for-images", text: "Missing Alt Text for Images" },
    { href: "#empty-links", text: "Empty Links" },
    { href: "#empty-buttons", text: "Empty Buttons" },
    { href: "#missing-input-labels", text: "Missing Input Labels" },
    { href: "#missing-document-language", text: "Missing Document Language" },
    { href: "#misused-headings", text: "Misused Headings" },
    { href: "#conclusion", text: "Conclusion" },
];

export default function MostCommonBugs() {
    useDocTitle("Most Common Accessibility Bugs | Web for Everyone");    
    useScrollToSection();

    const [textColor, setTextColor] = useState('initial')

    const toggleColor = () => {
        setTextColor(textColor === 'initial' ? '#169AC0' : 'initial');
    };
    
    return (
        <div className={`article-container ${styles['commonbugs-container']}`}>
            <BackLinks 
                secondLink="Understanding Accessibility"
                href="/resources#understanding-accessibility" 
            />
            
            <h1>The Most Common <span className="yellow-bg">Accessibility Bugs</span></h1>
            <p className="subtitle">Findings from the 2023 WebAIM Million Study</p>

            <TableOfContents contents={contents} />
            
            <div className="article-content commonbugs">
                 {/* *************0. INTRO********************** */}
                <div className="section intro" id="intro">
                    <p>
                        Here's one cool thing that happens every year: 
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
                            <span>96.3</span> percentage of home pages with a11y bugs
                        </p> 
                        <p className={styles['numbers']}>
                            <span>50</span> average bugs per page
                        </p> 
                        <p className={styles['numbers']}>
                            <span>106,245</span> highest number of bugs found on a single home page
                        </p>        
                    </div>
                    
                    <p>
                        WebAIM audits these pages using an automated tool, the WAVE accessibility engine. 
                        Automated tools are not perfect and fail to detect all  
                        accessibility barriers and guidelines violations.
                        As a result, the actual number of bugs is likely to be higher.
                    </p>
                    
                    <p>
                        <span className="bold">The good news? </span>
                        These are some of the easiest bugs to avoid or fix!
                    </p>

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
                    <div className="highlight margin-top-20 padding-left-20">
                        <details>
                            <summary>A quick view of the standards for accessibility</summary>
                            <p>
                                The W3C is an international community that develops standards for the web. 
                                It was founded in 1994 by Tim Berners-Lee, the inventor of the World Wide Web. 
                            </p>
                            <p>
                                For standards on web accessibility, the W3C has developed the Web Content
                                Accessibility Guidelines (WCAG). These guidelines are internationally recognized
                                and are the basis for many national accessibility laws.
                            </p>
                        </details>
                    </div>
                    <p>
                        The full <span> </span>
                            <a href="https://webaim.org/projects/million/" target="_blank" rel="noreferrer">
                                WebAIM Million
                            </a>
                        <span> </span>report makes for an interesting and informative read. Below we will go 
                        over the list of most common bugs. 
                    </p>
                </div>

                {/* 1. LOW CONTRAST */}
                <div className="section low-contrast scroll-target" id="low-contrast-text">
                    <div className="section-heading">
                        <span className="section-number">01</span>
                        <h2>Low Contrast Text</h2>
                    </div>
                    <p className="white-bg">
                        Found on <span className="stats">83.6%</span> of pages, this bug involves text without enough 
                        contrast against its background. This text is hard to read, especially for users with visual 
                        impairments.
                    </p>
                    <div className="highlight">
                        <p style={{ color: textColor }}>
                            Users with vision problems would have a hard time reading this sentence 
                            if the font color had an hex value of #169AC0 (light blue). 
                        </p>
                        <p>
                            Press the button to test it.
                        </p>
                        <button aria-label="Change text color from black to light blue."
                                className={styles['low-contrast--button']}
                                onClick={() => toggleColor()}
                        >
                            Change text color
                        </button>
                    </div>
                </div>

                {/* 2. ALT TEXT */}
                <div className="section alt-text scroll-target" id="missing-alt-text-for-images">
                    <div className="section-heading">
                        <span className="section-number">02</span>
                        <h2>Missing <code>alt</code> Text for Images</h2>
                    </div>
                    <p className="white-bg">
                        <span className="stats">More than half</span> of the home pages audited had this bug! 
                        When images lack the <code>alt</code> attribute, 
                        screen reader users do not know what the purpose of the image is. 
                    </p>
                    <div className="highlight">
                        <p className="fake-heading-p">
                            An important distinction to make: <span aria-hidden="true">💡</span>
                        </p>
                        <p className="white-bg margin-bottom-30">
                            A missing <code>alt</code> attribute is NOT the same 
                            as an empty <code>alt</code>!
                        </p>
                        <br />
                        <p className="white-bg">
                            <span className="pink-text">Missing</span> <code>alt</code>: screen readers might 
                            read the source file name. Add a descriptive <code>alt</code> value if the image
                            is important for understanding your content.
                        </p>
                        <p className="white-bg">
                            <span className="pink-text">Empty</span> <code>alt</code>: screen readers ignore the image.
                            If your image is purely decorative, do use an empty <code>alt</code> attribute.
                        </p>
                    
                    </div>
                </div>

                {/* 3. LINKS */}
                <div className="section empty-links scroll-target" id="empty-links">
                    <div className="section-heading">
                        <span className="section-number">03</span>
                        <h2>Empty Links</h2>
                    </div>
                    <p>
                        <span className="stats">Half</span> of the home pages tested had links without proper text descriptions.
                        This is a problem because screen reader users rely on link text to understand the context 
                        and the destination of a link.
                    </p>
                    <div className="highlight">
                        <p className="fake-heading-p">
                            Avoid vague text as well <span aria-hidden="true">💡</span>
                        </p>
                        <br />
                        <p>
                            Vague link text like <span className="pink-bg-white-text">click here</span> or 
                            <span> </span><span className="pink-bg-white-text">continue</span> is not very 
                            helpful either.
                        </p>
                        <p className="margin-top-20">
                            Instead of reading through an entire page, some screen reader users prefer to
                            navigate through the various links provided on the page.</p>
                        <p className="margin-top-20">
                            As a result, the links are announced separately from their surrounding text and
                            users can struggle to understand their purpose if the text is vague.
                        </p>
                    </div>
                </div>

                {/* 4. BUTTONS */}
                <div className="section empty-buttons scroll-target" id="empty-buttons">
                    <div className="section-heading">
                        <span className="section-number">04</span>
                        <h2>Empty Buttons</h2>
                    </div>
                    <p>
                        <span className="stats">More than a quarter</span> of the home pages tested had buttons 
                        without proper text descriptions.
                        This issue is very similar to empty links: users struggle to understand the purpose of a 
                        button if its text is vague or missing.
                    </p>
                    <div className="highlight">
                        <p className="fake-heading-p">Example: an empty button</p>
                        <div className="code">
                            <code>
                                <span className="code-blue-color">&lt;button&gt;</span>
                            </code>
                            <code className="padding-left-30">
                                <span className="code-yellow-color">&lt;img</span> src="x-mark.svg"
                                <span className="code-yellow-color">&gt;</span>
                            </code>
                            <code>
                                <span className="code-blue-color">&lt;/button&gt;</span>
                            </code>
                        </div>
                        
                        <p className="fake-heading-p margin-top-30">
                            Issue <span aria-hidden="true"> 🛠️</span>
                        </p>
                        <p className="gray-bg">
                            Text is replaced by an image with no <code>alt</code> text. 
                            Within the accessibility tree, this button object does not have an accessible name.
                        </p>
                        <p className="fake-heading-p">
                            Remember <span aria-hidden="true">💡</span>
                        </p>
                        <p className="white-bg">
                            An interactive element like a button must have a descriptive <span> </span>
                            <Link to="/resources/how-accessibility-works#the-accessible-name">
                                accessible name
                            </Link>. 
                            This button is missing any of the attributes that could be used by the browser 
                            to compute an accessible name: 
                            visible text, <code>aria-label</code>, <code>aria-labelledby</code>, or <code>alt</code>.
                        </p>
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
                <div className="section missing-inputLabels scroll-target" id="missing-input-labels">
                    <div className="section-heading">
                        <span className="section-number">05</span>
                        <h2>Missing Input Labels</h2>
                    </div>
                    <p>
                        <span className="stats">More than a third</span> 
                        of form inputs were not properly labeled.
                        Without labels, assitive tech users struggle to understand or use the input.
                    </p>
                    <p>
                        <span className="bold">The good news? </span>
                        This is an improvement from 2019 when the ratio was 59%.
                    </p>
                    <div className="highlight">
                        <p className="fake-heading-p">Example: an input without a label</p>
                        
                        <div className="code">
                            <code>
                                <span className="code-blue-color">&lt;label&gt;</span>
                            </code>
                            <code className="padding-left-30">
                                <span className="code-yellow-color">&lt;input</span> type="text" id="email"
                                <span className="code-yellow-color">&gt;</span>
                            </code>
                            <code>
                                <span className="code-blue-color">&lt;/label&gt;</span>
                            </code>
                        </div>
                    
                        <p className="fake-heading-p margin-top-30">
                            Issue <span aria-hidden="true"> 🛠️</span>
                        </p>
                        <p className="white-bg">
                            The input is wrapped in label tags without inner text. Attributes 
                            like <code>aria-label</code> or <code>aria-labelledby</code>
                            that could be used to provide an accessible name are not present.
                        </p>
                        <p className="fake-heading-p">Consequences</p>
                        <p>
                            <span className="pink-num">1. </span>Screen reader users will not 
                            understand the purpose of the input. 
                        </p>
                        <p>
                            <span className="pink-num">2. </span>Users relying on speech commands do not 
                            have a way to trigger the input.
                        </p>
                    </div>
                </div>

                {/* 6. LANG */}
                <div className="section missing-lang scroll-target" id="missing-document-language">
                    <div className="section-heading">
                        <span className="section-number">06</span>
                        <h2>Missing Document Language</h2>
                    </div>
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
                        <p className="fake-heading-p white-bg">
                            Note: the <code>lang</code> attribute is added 
                            to the <code>html</code> tag <span aria-hidden="true">💡</span>
                        </p>
                        <div className="code">
                            <code>&lt;html <code className="code-pink-color">lang</code>="en"&gt;</code>
                        </div>
                    </div>
                    
                </div>

                <div>
                    <p className="fake-heading-p margin-top-30">
                        Done with the 6 most common accessibility bugs! 
                    </p>
                    <p className="fake-heading-p">
                        Do you have time for a bonus bug? Too important to leave out!
                    </p>
                </div>

                {/* 7. HEADINGS */}
                <div className="section misused-headings scroll-target" id="misused-headings">
                    <div className="section-heading">
                        <span className="section-number">Bonus Bug:</span>
                        <h2>Misused Headings</h2>
                    </div>
                   
                    <p className="white-bg">
                        <span className="stats">One fifth</span> of all home pages had more than one <code>&lt;h1&gt;</code>.
                        Skipped heading levels (e.g., jumping from <code>&lt;h2&gt;</code> to <code>&lt;h4&gt;</code>) 
                        were found on more than <span className="stats">40%</span> of all pages.
                        About <span className="stats">8%</span> of pages had no headings at all.
                    </p>
                    <div className="highlight">
                        <p className="fake-heading-p">Why headings are important</p>
                        <p>
                            When trying to find information on a page, most screen reader users rely on headings.
                            Pressing the <span className="pink-bg-white-text">H</span> key allows them to visit each 
                            heading to get an idea about the structure and the content of the page.  
                        </p>
                        <br />
                        <p className="fake-heading-p">
                            Recommended read <span aria-hidden="true">💡</span>
                        </p>
                        <p>
                            Learn about the way screen reader users navigate the web and find information on a page 
                            from the <span> </span>
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
                <div className="section conclusion scroll-target" id="conclusion">
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
                        <Link to="/resources/make-it-accessible-part1" 
                                onClick={() => { scrollToTop() }}
                        >
                            Let's Make It Accessible! Part One: Finding the 6 Most Common Bugs
                        </Link>
                    </div>                 
                </div>
            </div>          
        </div>
    )
}


