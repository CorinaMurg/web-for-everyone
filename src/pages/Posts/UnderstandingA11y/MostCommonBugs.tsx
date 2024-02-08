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
                        <strong>Web Accessibility in Mind</strong>, best known as <span> </span>
                        <a href="https://webaim.org/" target="_blank" rel="noreferrer">
                            WebAIM
                        </a>         
                        , analyzes the top 1,000,000 home pages to check for accessibility errors. 
                        The results have always been quite grim, and 2023 was no exception:
                    </p>
                    
                    <div className="highlight">
                        <dl className={styles['numbers']}>
                            <dt><span>96.3</span></dt>
                            <dd>percentage of home pages with accessibility bugs</dd>
                        </dl>
                        <br />
                        <dl className={styles['numbers']}>
                            <dt><span>50</span></dt>
                            <dd>average bugs per page</dd>
                        </dl>
                        <br />
                        <dl className={styles['numbers']}>
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
                    <div className="highlight margin-top-20">
                        <details>
                            <summary>
                                How do we decide what constitutes an accessibility bug?
                            </summary>
                            <br />
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
                                Some guidelines are staggered across all three levels, while others are specific to just one level or two.
                                For example, the requirement that every web page has a title is a level A, 
                                while the target size for clickable areas has both level AA and AAA requirements. For the AA level,
                                any clickable area must be of minimum 24 by 24 pixels. For the AAA level, the minimum size must be 44 by 44 pixels.

                            </p>
                            <p>   
                                In this article, we will review the 6 most common accessibility bugs by referencing the negative
                                impact they have on users with disabilities, without mentioning the specific WCAG
                                guidelines that they violate or the level of conformance they fail to meet.
                            </p>

                            <p>For an overview of the WCAG guidelines, the article <span> </span>
                                <a href="https://tetralogical.com/blog/2020/04/10/wcag-primer/" target="_blank" rel="noreferrer">
                                    WCAG primer by Léonie Watson 
                                </a> is a great start.
                            </p>
                        </details>         
                    </div>
                    
                    <p className="margin-top-30">
                        The full <span> </span>
                            <a href="https://webaim.org/projects/million/" target="_blank" rel="noreferrer">
                                WebAIM Million
                            </a>
                        <span> </span>report makes for an interesting and informative read, do check it out!
                        In the meantime, let's go over the list of the 6 most common bugs found in the 2023 study.
                    </p>
                    <div className="note">
                        <p><strong>Note</strong>:</p>
                        <p>
                            This article focuses on statistics from the study and why these bugs are problematic 
                            for users with disabilities.
                            We discuss in-depth solutions in <span> </span>
                            <Link to="/resources/make-it-accessible-part1" 
                                    onClick={() => { scrollToTop() }}
                            >
                                Let's Make It Accessible! Part One: Finding the 6 Most Common Bugs
                            </Link>
                            .
                        </p>
                    </div>
                    <p className="margin-top-30">
                        What do we know about the <strong>6 most common accessibility bugs</strong>?
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
                    

                    {/* <div className="highlight margin-top-20 padding-left-20">
                        <details>
                            <summary>A quick view of the standards for accessibility</summary>
                            <p>
                                The World Wide Web Consortium, better know as W3C, is an international community 
                                that develops standards for the web. 
                            </p>
                            <p>
                                For standards on web accessibility, the W3C has setup the  the Web Content
                                Accessibility Guidelines (WCAG). These guidelines are internationally recognized
                                and are the basis for many national accessibility laws.
                            </p>
                            <div>
                        <h3>Standards</h3>
                        <p>
                            The Web Content Accessibility Guidelines (WCAG) 
                            are the international standards for web accessibility. 
                            They are also the basis for many national accessibility laws.
                        </p>
                        <h3>Feedback from users with disabilities</h3>
                        <p>
                            Aren't the guidelines based on the needs of users with disabilities? 
                            They are, but they are also playing catch-up with the ever-changing web and the new ways 
                            people use it. What ultimately matters is the user experience. 
                        </p>
                    </div>
                        </details>
                    </div> */}
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
                        <span className="section-number">02</span>
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
                            <strong><span className="pink-text">Missing</span> alt</strong>: screen readers might 
                            read the source file name. Add a descriptive <code>alt</code> value if the image
                            is important for understanding your content.
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
                        <span className="section-number">03</span>
                        <h2>Empty Links</h2>
                    </div>
                    <p>
                        <span className="stats">Half</span> of the home pages tested had links without a name.
                        This is a problem because screen reader users rely on a descriptive name
                        to understand the purpose and the destination of a link.
                    </p>
                    <p>
                        Follow this link to <span> </span>        
                        <Link to="/resources/how-accessibility-works#the-accessible-name">
                            review how the name of a link is determined
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
                        <p>
                            <strong>A good example:</strong> "Click here to learn more about our services"
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
                        <p className="fake-heading-p">Consequences of empty buttons</p>
                        <ul className="bullet-point-list">
                            <li>
                                A screen reader will announce this button as ... "button", and no other 
                                information attached. Users would not be aware of its purpose.
                            </li>
                            <li>
                                Users relying on voice commands would not be able to trigger the action on the button.
                            </li>
                        </ul>
                        <br/>
                    </div>
                </div>

                {/* 5. INPUT LABELS */}
                <div className="section missing-inputLabels scroll-target" id="missing-input-labels">
                    <div className="section-heading">
                        <span className="section-number">05</span>
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
                            like <code>aria-label</code> or <code>aria-labelledby</code>
                            that could be used to provide an accessible name are not present.
                        </p>
                        <p className="fake-heading-p">Consequences of missing input labels</p>
                        <ul className="bullet-point-list">
                            <li>
                                Screen reader users will not understand the purpose of the input
                            </li>
                            <li>
                                Users relying on speech commands do not have a way to trigger the input.
                            </li>
                        </ul>
                        <br/>
                    </div>
                </div>

                {/* 6. LANG */}
                <div className="section missing-lang scroll-target" id="missing-document-language">
                    <div className="section-heading">
                        <span className="section-number">06</span>
                        <h2>Missing Document Language</h2>
                    </div>
                    <p>
                        This bug was found on <span className="stats">18.6%</span> of the home pages audited.
                    </p>
                    <p className="white-bg">
                        When setting up their screen reader, users choose a default language. 
                        If a webpage doesn't have a <code>lang</code> attribute, the screen reader defaults to the user's 
                        chosen language. This can be problematic for multilingual users accessing content in 
                        various languages.
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
                    </p>
                    <p>
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
                            When trying to find information on a page, most screen reader users rely on headings.
                            Pressing the <span className="pink-bg-white-text">H</span> key allows them to visit each 
                            heading to get an idea about the structure and the content of the page.  
                        </p>
                        <br />
                        <p className="fake-heading-p">
                            Recommended read <span aria-hidden="true">💡</span>
                        </p>
                        <p>
                            Learn about the range of options screen reader users have to navigate the web and to
                            find information on a page from the <span> </span>
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


