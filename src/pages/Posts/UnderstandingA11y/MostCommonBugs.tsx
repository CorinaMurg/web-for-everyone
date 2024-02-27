import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import useScrollToTop from "../../../hooks/useScrollToTop"
import useDocTitle from "../../../hooks/useDocTitle"
import useScrollToSection from "../../../hooks/useScrollToSection"
import useHighlightTOC from "../../../hooks/useHighlightTOC"
import scrollToSection from "../../../utils/scrollToSection"
import styles from "./MostCommonBugs.module.css"
import "../../../global.css"
import TableOfContents from "../../../components/TableOfContents/TableOfContents"
import BackLinks from "../../../components/BackLinks/BackLinks"

const contents = [
    { href: "#intro", text: "WebAIM Million Study" },
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
    useScrollToTop(); 
    useScrollToSection();
    const { activeId} = useHighlightTOC();
    const [textColor, setTextColor] = useState('initial')

    const toggleColor = () => {
        setTextColor(textColor === 'initial' ? '#169AC0' : 'initial');
    };
    
    return (
        <div className={`article-container ${styles['commonbugs-container']}`}>
            <BackLinks 
                secondLink="Understanding Accessibility"
                href="/resources#understanding-accessibility" 
                current="The Most Common A11y Bugs"
            />
            
            <h1 aria-describedby="subtitle" className="article-heading-desktop">
                <span>The Most Common</span>
                <span className="yellow-bg">Accessibility Bugs</span>
            </h1>
            <h1 className="article-heading-mobile">
                <span>The Most Common</span>
                <span><span className="yellow-bg">Accessibility</span> Bugs</span>
                
            </h1>
            <p id="subtitle" className="subtitle">Findings from the 2023 WebAIM Million Study</p>

            <TableOfContents contents={contents} activeId={activeId} />
            
            <div className="article-content commonbugs">
                 {/* *************0. INTRO********************** */}
                <div className="section intro scroll-target" id="intro">
                    <h2 className="sr-only">WebAIM Million Study</h2>
                    <p>
                        Here's one cool thing that happens every year: 
                        <span> </span>
                        <strong>Web Accessibility in Mind</strong>, best known as <span> </span>
                        <a href="https://webaim.org/" target="_blank" rel="noreferrer">
                            WebAIM
                            <span className="sr-only"> opens in a new tab</span>
                            <span className="external-linksvg-wrap">
                                &nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512"><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"/></svg>    
                            </span>
                        </a>        
                        , analyzes the top 1,000,000 home pages to check for accessibility errors. 
                        The results have always been quite grim, and 2023 was no exception:
                    </p>
                    
                    <div className="highlight highlight-no-heading highlight-dl">
                        <dl className={styles['numbers']}>
                            <dt><span>96.3</span></dt>
                            <dd>percentage of home pages with accessibility bugs</dd>
                        </dl>
                        <dl className={` ${styles['numbers']} margin-top-20`}>
                            <dt><span>50</span></dt>
                            <dd>average bugs per page</dd>
                        </dl>
                        <dl className={` ${styles['numbers']} margin-top-20`}>
                            <dt><span>106,245</span></dt>
                            <dd>highest number of bugs found on a single home page</dd>
                        </dl>
                    </div>
 
                    <p className="margin-top-20">
                        WebAIM audits these pages using an automated tool, the WAVE accessibility engine. 
                        Automated tools are not perfect and fail to detect all  
                        accessibility barriers and guidelines violations.
                        As a result, the actual number of bugs is likely to be higher.
                    </p>
                    <div className="highlight-one-line highlight margin-top-20">
                        <details>
                            <summary>
                                How do we decide what constitutes an accessibility bug?
                            </summary>
                            <br />
                            <div className="details-content">
                            <p>
                                <strong>Standards</strong> and <strong>best practices</strong> informed by user experience!
                            </p>
                            <p>
                                The Web Content Accessibility Guidelines (WCAG) 
                                are the international standards for web accessibility. 
                                They are not an easy read, but they become one with practice.
                            </p>
                            <p>
                                The guidelines have three levels of conformance: A, AA, and AAA.
                                Level A provides only the most basic level of accessibility, and the 
                                recommended level for most websites is AA (which requires that level A has also been met).
                            </p>
                            <p>
                                Some guidelines are staggered across all three levels, while others are specific 
                                to just one level or two.
                                For example, the requirement that every web page has a title is a level A, 
                                while the target size for clickable areas has both level AA and AAA requirements. 
                                For the AA level, any clickable area (for example, the size of a button) must be of minimum 24 by 24 pixels. 
                                For the AAA level, the minimum size must be 44 by 44 pixels. 
                            </p>
                            <p>
                                In this way, the guidelines establish a minimum level of accessibility,
                                while also recommending a desirable level that will benefit the largest number of users. 
                            </p>
                            <p>   
                                In this article, we will review the 6 most common accessibility bugs by referencing the negative
                                impact they have on users with disabilities, without mentioning the specific WCAG
                                guidelines that they violate or the level of conformance they fail to meet.
                            </p>

                            <p>For an overview of the WCAG guidelines, the article <span> </span>
                                <a href="https://tetralogical.com/blog/2020/04/10/wcag-primer/" target="_blank" rel="noreferrer">
                                    WCAG primer by Léonie Watson 
                                    <span className="sr-only"> opens in a new tab</span>
                                    <span className="external-linksvg-wrap">
                                        &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512"><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"/></svg>    
                                    </span>
                                </a>
                                <span> </span> is a great start.
                            </p>
                            </div>
                        </details>         
                    </div>
                    
                    <p className="margin-top-30">
                        The full <span> </span>
                            <a href="https://webaim.org/projects/million/" target="_blank" rel="noreferrer">
                                WebAIM Million
                                <span className="sr-only"> opens in a new tab</span>
                                <span className="external-linksvg-wrap">
                                    &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512"><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"/></svg>    
                                </span>
                            </a>
                            <span> </span>
                        report makes for an interesting and informative read, do check it out!
                    </p>
                    <p>
                        In the meantime, let's go over the list with the <strong>6 most common bugs</strong> found 
                        in the 2023 study. What do we know about them?
                    </p>

                    <ul className="bullet-point-list padding-left-20">
                        <li>
                            They accounted for 96% of all bugs found!
                        </li>
                        <li>
                            They've been the "most common bugs" for the last 5 years!
                        </li>

                    </ul>
                    <p>
                        <strong>The good news? </strong>
                        These are some of the easiest bugs to avoid or fix!
                    </p>
                    <p>
                        <strong>Note</strong>: This article focuses on statistics from the study and why these bugs are problematic 
                        for users with disabilities.
                        We discuss in-depth solutions in <span> </span>
                        <Link to="/resources/make-it-accessible-part1">
                            Let's Make It Accessible! Part One: Fixing the 6 Most Common Bugs
                        </Link>
                        .
                    </p>
                    <p> 
                        <strong>Recommended</strong>: To understand the impact of these bugs on users with disabilities,
                        make sure to review <span> </span>
                        <Link to="/resources/how-accessibility-works">
                            How Accessibility Works
                        </Link>, especially the section on the <strong>accessible name</strong>.
                    </p>
                </div>

                {/* 1. LOW CONTRAST */}
                <div className="section low-contrast scroll-target" id="low-contrast-text">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">01</span>
                        <h2>Low Contrast Text</h2>
                    </div>
                    <p className="white-bg">
                        Found on <span className="stats">83.6%</span> of pages, this bug involves text without enough 
                        contrast against its background. This text is hard to read, especially for users with visual 
                        impairments.
                    </p>
                    <div className="highlight">
                        <h3>Example: text with low contrast ratio</h3>
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
                        <span aria-hidden="true" className="section-number">02</span>
                        <h2>Missing <code>alt</code> Text for Images</h2>
                    </div>
                    <p className="white-bg">
                        <span className="stats">More than half</span> of the home pages audited had this bug! 
                        When images lack the <code>alt</code> attribute, 
                        screen reader users do not know what the purpose of the image is. Usually, when 
                        this attribute is missing, the screen reader will read the source file name.
                    </p>
                    <div className="highlight">
                        <h3 className="white-bg margin-bottom-30">
                            An empty <code>alt</code> is NOT a missing <code>alt</code>!
                            <span aria-hidden="true"> 💡</span>
                        </h3>
                        <p>
                            An important distinction to make: 
                        </p>
                        
                        <p className="white-bg">
                            <strong><span className="pink-text">Missing</span> alt</strong>: screen readers 
                            read the source file name. When you have an image, the <code>alt</code> attribute 
                            is required!
                        </p>
                        <p>
                            <strong><span className="pink-text">Empty</span> alt</strong>: screen readers ignore the image.
                            If your image is purely decorative, the attribute should be empty.
                        </p>  
                    
                    </div>
                </div>

                {/* 3. LINKS */}
                <div className="section empty-links scroll-target" id="empty-links">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">03</span>
                        <h2>Empty Links</h2>
                    </div>
                    <p>
                        <span className="stats">Half</span> of the home pages tested had links without a name.
                        This is a problem because screen reader users rely on a descriptive name
                        to understand the purpose and the destination of a link. Voice users would not be able to
                        activate the link without a name.
                    </p>
                    <p>
                        Follow this link to <span> </span>        
                        <Link to="/resources/how-accessibility-works#the-accessible-name">
                            review how the name of an interactive element is determined
                        </Link> 
                        .
                    </p>
                    <div className="highlight">
                        <h3>
                            Avoid vague text as well! <span aria-hidden="true">💡</span>
                        </h3>
                        <p>
                            Vague link text like <span className="pink-bg-white-text">click here</span> or 
                            <span> </span><span className="pink-bg-white-text">read more</span> is not very 
                            helpful either.
                        </p>
                        
                        <p className="margin-top-20">
                            Instead of reading through an entire page, some screen reader users prefer to
                            navigate through the various links provided on the page.</p>
                        <p className="margin-top-20">
                            As a result, the links are announced separately from their surrounding text and
                            users can struggle to understand their purpose if the text is vague.
                        </p>
                        <p>
                            <strong>A good example:</strong> "Click here to learn more about our services"
                        </p>
                        
                    </div>
                </div>

                {/* 4. BUTTONS */}
                <div className="section empty-buttons scroll-target" id="empty-buttons">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">04</span>
                        <h2>Empty Buttons</h2>
                    </div>
                    <p>
                        <span className="stats">More than a quarter</span> of the home pages tested had buttons 
                        with no name.
                        This issue is very similar to empty links: users struggle to understand the purpose of a 
                        button if its text is vague or missing.
                    </p>
                    <div className="highlight">
                        <h3>Example: an empty button</h3>
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
                        <p className="white-bg">
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
                        <p className="fake-heading-p">Consequences of empty buttons</p>
                        <ul className="bullet-point-list">
                            <li>
                                A screen reader will announce this button as ... "button", and no other 
                                information attached. Users would not be aware of its purpose.
                            </li>
                            <li>
                                Users relying on speech commands would not be able to trigger the action 
                                on the button.
                            </li>
                        </ul>
                        <br/>
                    </div>
                </div>

                {/* 5. INPUT LABELS */}
                <div className="section missing-inputLabels scroll-target" id="missing-input-labels">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">05</span>
                        <h2>Missing Input Labels</h2>
                    </div>
                    <p>
                        <span className="stats">More than a third</span> of
                        form inputs were not properly labeled.
                        Without labels, assitive tech users struggle to understand or use the input.
                    </p>
                    <p>
                        <span className="bold">The good news? </span>
                        This is an improvement from 2019 when the ratio was 59%.
                    </p>
                    <div className="highlight">
                        <h3>Example: an input without a label</h3>
                        
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
                            like <code>aria-label</code> or <code>aria-labelledby</code> <span> </span>
                            that could be used to provide an accessible name are not present.
                        </p>
                        <p className="fake-heading-p">Consequences of missing input labels</p>
                        <ul className="bullet-point-list">
                            <li>
                                Screen reader users will not understand the purpose of the input
                            </li>
                            <li>
                                Users relying on speech commands do not have a way to select the input.
                            </li>
                        </ul>
                        <br/>
                    </div>
                </div>

                {/* 6. LANG */}
                <div className="section missing-lang scroll-target" id="missing-document-language">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">06</span>
                        <h2>Missing Document Language</h2>
                    </div>
                    <p>
                        This bug was found on <span className="stats">18.6%</span> of the home pages audited.
                    </p>
                    <p className="white-bg">
                        If a webpage doesn't have a <code>lang</code> attribute, the screen reader defaults to 
                        the operating system's language. This can be problematic for multilingual users accessing content in 
                        various languages.
                    </p>
                    <p className="white-bg">
                        For example, let's say a screen reader user with a device set to English wants to read a webpage
                        in French. If the page's <code>lang</code> attribute is missing, the screen reader will
                        read the French text in English!
                    </p>
                    <div className="highlight">
                        <h3 className="white-bg">
                            The <code>lang</code> is added 
                            to the <code>html</code> tag! <span aria-hidden="true">💡</span>
                        </h3>
                        <div className="code">
                            <code>&lt;html <code className="code-pink-color">lang</code>="en"&gt;</code>
                        </div>
                    </div>
                    
                </div>

                <div>
                    <p className="margin-top-30">
                        Done with the 6 most common accessibility bugs! 
                        Do you have time for a <strong>bonus bug</strong>? Too important to leave it out!
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
                        <h3>Why headings are important</h3>
                        <p>
                            Headings help break down a webpage into sections, kind of like chapters in a book. 
                            If you're looking at the screen, you can quickly glance over the headings to find 
                            the part you're interested in. 
                        </p>
                        <p>
                            For someone using a screen reader, it's a bit different. 
                            They can't see the headings, but they can press 
                            the <span className="pink-bg-white-text">H</span> key to jump from one heading 
                            to another. This way, they can get a sense of what's on the page and decide what to read.
                        </p>
                        <br />
                        <p>
                            <strong>
                                Recommended read <span aria-hidden="true">💡</span>
                            </strong>
                        </p>
                        <p>
                            Learn about the range of options screen reader users have to navigate the web and to
                            find information on a page from the <span> </span>
                            <a href="https://webaim.org/projects/screenreadersurvey9/#finding"
                                target="_blank" 
                                rel="noreferrer"
                            >
                                WebAIM's Screen Reader User Survey
                                <span className="sr-only"> opens in a new tab</span>
                                <span className="external-linksvg-wrap">
                                    &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512"><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"/></svg>    
                                </span>
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
                    
                    <p>
                        <b>Read next: </b>
                        <Link to="/resources/make-it-accessible-part1">
                            Let's Make It Accessible! Part One: Fixing the 6 Most Common Bugs
                        </Link>
                    </p>                 
                </div>
            </div>          
        </div>
    )
}


