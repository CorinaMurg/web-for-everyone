import React from "react"
import { Link } from "react-router-dom"
import { useThemeClass } from "../../../hooks/useThemeClass"
import { useState, useEffect } from "react"
import useScrollToTop from "../../../hooks/useScrollToTop"
import useDocTitle from "../../../hooks/useDocTitle"
import useScrollToSection from "../../../hooks/useScrollToSection"
import useHighlightTOC from "../../../hooks/useHighlightTOC"
import styles from "./MostCommonBugs.module.css"
import "../../../global.css"
import TableOfContents from "../../../components/TableOfContents/TableOfContents"
import BackLinks from "../../../components/BackLinks/BackLinks"

const contents = [
    { href: "#intro", text: "WebAIM Million study" },
    { href: "#low-contrast-text", text: "Low contrast text" },
    
    { href: "#missing-alt-text-for-images", text: "Missing alt text for images" },
    { href: "#missing-input-labels", text: "Missing input labels" },
    { href: "#empty-links", text: "Empty links" },
    { href: "#empty-buttons", text: "Empty buttons" },
    
    { href: "#missing-document-language", text: "Missing document language" },
    { href: "#misused-headings", text: "Misused headings" },
    { href: "#conclusion", text: "Conclusion" },
];

export default function MostCommonBugs() {
    useDocTitle("Most common bugs | Web for Everyone");   
    useScrollToTop(); 
    useScrollToSection();
    const { activeId} = useHighlightTOC();

    const themeClass = useThemeClass();
    
    // let initialColor = themeClass === "light" ? "#000" : "#fbf6ea"
    // const [textColor, setTextColor] = useState(initialColor)

    // const toggleColor = () => {
    //     setTextColor(textColor === initialColor ? '#169AC0' : initialColor);
    // };

    const getInitialColor = (theme: string) => theme === "light" ? "#000" : "#fbf6ea";
    const getBlueColor = (theme: string) => theme === "light" ? "#169AC0" : "#2f4f7e";
    const [textColor, setTextColor] = useState(getInitialColor(themeClass));

    useEffect(() => {
        setTextColor(getInitialColor(themeClass));
    }, [themeClass]);

    const toggleColor = () => {
        setTextColor(prevColor => prevColor === getInitialColor(themeClass) ? getBlueColor(themeClass) : getInitialColor(themeClass));
    };

    return (
        <div className={`article-container ${styles['commonbugs-container']}`}>
            <BackLinks 
                secondLink="Accessibility 101"
                href="/blog#accessibility-101" 
                current="The most common bugs"
            />
            
            <h1 aria-describedby="subtitle" className="article-heading-desktop">
                <span>The most common bugs</span>
            </h1>
            <h1 aria-describedby="subtitle" className="article-heading-mobile">
                <span>The most common</span>
                <span>bugs</span>
                
            </h1>
            <p id="subtitle" className="subtitle">Findings from the 2024 WebAIM Million study</p>

            <TableOfContents contents={contents} activeId={activeId} />
            
            <div className="article-content commonbugs">
                 {/* *************0. INTRO********************** */}
                <div className="section intro scroll-target" id="intro">
                    <h2 className="sr-only">WebAIM Million Study</h2>
                    <p>
                        Here's one cool thing that happens every year: 
                        <span> </span>
                        <span className="bold">Web Accessibility in Mind</span>, best known as <span> </span>
                        <a href="https://webaim.org/" target="_blank" rel="noreferrer">
                            WebAIM
                            <span className="sr-only"> opens in a new tab</span>
                            <span className="external-linksvg-wrap">
                                &nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512"><path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"/></svg>    
                            </span>
                        </a>        
                        , analyzes the top 1,000,000 home pages to check for accessibility errors. 
                        The stats are not great, but compared with previous years, they are (very slowly) improving.
                    </p>
                    
                    <div className={`highlight highlight-no-heading highlight-dl`}>
                        <dl className={styles['numbers']}>
                            <dt><span>96</span></dt>
                            <dd>percentage of home pages with accessibility bugs</dd>
                        </dl>
                        <dl className={` ${styles['numbers']} margin-top-20`}>
                            <dt><span>57</span></dt>
                            <dd>number of average accessibility bugs per page</dd>
                        </dl>
                        <dl className={` ${styles['numbers']} margin-top-20`}>
                            <dt><span>31</span></dt>
                            <dd>percentage of home pages with 10 or fewer errors</dd>
                        </dl>
                        <dl className={` ${styles['numbers']} margin-top-20`}>
                            <dt><span>1173</span></dt>
                            <dd>average number of elements per home page</dd>
                        </dl>
                    </div>
 
                    <p className="margin-top-20">
                        WebAIM audits these pages using an automated tool, the WAVE accessibility engine. 
                        Automated tools are not perfect and fail to detect all  
                        accessibility barriers and guidelines violations.
                        As a result, the actual number of bugs is likely to be higher. <span aria-hidden="true">😢</span>
                    </p>
                    {/* How do we know what's an accessibility bug? */}
                    <div className="highlight-one-line highlight margin-top-20">
                        <details>
                            <summary>
                                <span className="summary-title">
                                    How do we know what's an accessibility bug?
                                </span>
                            </summary>
                            <br />
                            <div className="details-content">
                            <p>
                                From <span className="bold">standards</span> and <span>best practices</span> informed by user experience!
                            </p>
                            <p>
                                The Web Content Accessibility Guidelines (WCAG) 
                                are the international standards for web accessibility. 
                                They are not an easy read, but they become one with practice.
                            </p>
                            <p>
                                The structure is a bit different then the name suggests.
                                There are four principles: perceivable, operable, understandable, and robust.
                                Each principle has a set of guidelines, and each guideline has a set of success criteria.
                                The success criteria are in fact the specific rules we use to determine if a website is accessible.
                            </p>
                            <p>
                                Each success criterion has one of the three levels of conformance: A, AA, and AAA.
                                Level A criteria provide only the most basic level of accessibility, and the 
                                recommended level for most websites is AA (which requires that level A criteria have also been met).
                            </p>
                            <p>
                                Usually, a specific accessibility goal is addressed by a success criterion with a given level of 
                                conformance. For example, the requirement that every web page has a title is a level A criterion.
                            </p>
                            <p>
                                We can also have two criteria, each at a different level, addressing the same goal.
                                For example, when it comes to the size of clickable areas, we have a level AA criterion 
                                that requires a minimum of 24 by 24 pixels. We also have a AAA level criterion that sets the minimum size to 44 by 44 pixels. 
                            </p>
                            <p>
                                In this way, the guidelines establish a minimum level of accessibility,
                                while also recommending a desirable level that will benefit the largest number of users. 
                            </p>
                            <p>   
                                In this article, we will review the 6 most common accessibility bugs by referencing the negative
                                impact they have on users with disabilities, without mentioning the specific WCAG
                                success criteria that they violate.
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
                        In the meantime, let's go over the list with the <span className="bold">6 most common bugs</span> found 
                        in the 2024 study. What do we know about them?
                    </p>

                    <ul role="list" className="bullet-point-list">
                        <li>
                            <p>They accounted for 96% of all bugs found!</p>
                        </li>
                        <li>
                            <p>They've been the "most common bugs" for the last 5 years!</p>
                        </li>
                    </ul>
                    <p>
                        <span className="bold">The good news? </span>
                        These are some of the easiest bugs to avoid or fix!
                    </p>
                    <p>
                        <span className="bold">Note</span>: With readability in mind, all numbers from the report 
                        are rounded here to the nearest
                        whole number. The percentage 96 comes up in two places. As the percentage of home pages with 
                        detected failures, it was rounded up from 95.9%. As the percentage of all errors that these 6 bugs
                        account for, it was rounded down from 96.4%. 
                    </p>
                    <p>
                        Apologies in advance for the many numbers in this article!
                        Sometimes they are necessary to have a bird's eye view of the situation.
                        
                    </p>
                    <p>
                        <span className="bold">Another note</span>: This article focuses on statistics from the study 
                        and why these bugs are problematic 
                        for users with disabilities.
                        We discuss in-depth solutions in <span> </span>
                        <Link to="/blog/fixing-the-six-most-common-bugs" 
                            // when used the focus moves at the beginning of the page. without it, the focus moves to
                            // backlinks
                            // onClick={() => { useScrollToTop() }}
                        >
                            Fixing the 6 most common bugs
                        </Link>
                        .
                    </p>
                    <p> 
                        <span className="bold">Recommended</span>: To understand the impact of these bugs on users with disabilities,
                        make sure to review <span> </span>
                        <Link to="/blog/how-accessibility-works">
                            How accessibility works
                        </Link>, especially the section on the <span className="bold">accessible name</span>.
                    </p>
                </div>

                {/* 1. LOW CONTRAST */}
                <div className="section low-contrast scroll-target" id="low-contrast-text">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">01</span>
                        <h2>Low contrast text</h2>
                    </div>
                    <p className="white-bg">
                        Found on <span className="stats">81%</span> of pages, this bug involves text without enough 
                        contrast against its background. This text is hard to read, especially for users with visual 
                        impairments.
                    </p>
                    <div className="highlight">
                        <h3>Example: text with low contrast ratio</h3>
                        <p style={{ color: textColor }} className={styles['low-contrast-paragraph']}>
                            Users with vision problems would have a hard time reading this sentence 
                            if we changed the font color to certain shades of blue. 
                        </p>
                        <p>
                            Press the button to test it.
                        </p>
                        <button className={styles['low-contrast--button']} onClick={() => toggleColor()}>
                            Change text color
                        </button>
                    </div>
                </div>

                {/* 2. ALT TEXT */}
                <div className="section alt-text scroll-target" id="missing-alt-text-for-images">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">02</span>
                        <h2 className="white-bg">Missing "alt" text for images</h2>
                    </div>
                    <p className="white-bg">
                        <span className="stats">More than half</span> of the home pages audited had this bug! 
                        When images lack the <code>alt</code> attribute, 
                        screen reader users do not know what the purpose of the image is. Usually, when 
                        this attribute is missing, the screen reader will read the source file name.
                    </p>
                    <div className="highlight">
                        <h3 className="margin-bottom-30">
                            An empty <code className="bold code-blue-color">alt</code> is NOT a missing <code className="bold yellow-text">alt</code>!
                            <span aria-hidden="true"> 💡</span>
                        </h3>
                        <p>
                            An important distinction to make: 
                        </p>
                        
                        <p className="white-bg">
                            <span className="bold-large yellow-text">Missing</span>: screen readers 
                            read the source file name. When you have an image, the <code>alt</code> attribute 
                            is required!
                        </p>
                        <p>
                            <span className="bold-large code-blue-color">Empty</span>: screen readers ignore the image.
                            If your image is purely decorative, the attribute should be empty.
                        </p>  
                    
                    </div>
                </div>

                {/* 3. INPUT LABELS */}
                <div className="section missing-inputLabels scroll-target" id="missing-input-labels">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">03</span>
                        <h2>Missing input labels</h2>
                    </div>
                    <p>
                        <span className="stats">Almost half</span> of the pages lacked input labels.
                        Without labels, assitive tech users struggle to understand or use the input.
                    </p>
                    {/* <p>
                        <span className="bold">The good news? </span>
                        This is an improvement from 2019 when the ratio was 59%.
                    </p> */}
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
                    
                        <p className="white-bg">
                            The input is wrapped in label tags without inner text. There's no visible or <span> </span>
                            <code>visually-hidden</code> text, and no ARIA attribute to provide an accessible name.
                        </p>
                        <p>
                            The label tells the user what the input is for. 
                            For a sighted user, there might be clues on the page, but for a screen reader user,
                            the input is a mystery.
                        </p>
                        <p>
                            True, a lot of inputs have placeholder text. One of the (many) problems with 
                            placeholder text is that browsers can't be trusted to use it to compute the accessible name.
                            So if placeholder text is the only text, not everyone will know what the input is for.
                        </p>
                    </div>
                </div>

                {/* 4. LINKS */}
                <div className="section empty-links scroll-target" id="empty-links">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">04</span>
                        <h2>Empty links</h2>
                    </div>
                    <p>
                        <span className="stats">Almost half</span> of the home pages tested had links without a name.
                        This is a problem because screen reader users rely on a descriptive name
                        to understand the purpose and the destination of a link.
                    </p>
                    <p>
                        Follow this link to review the <span> </span>        
                        <Link to="/blog/how-accessibility-works#the-accessible-name">
                            accessible name
                        </Link> 
                        , the name by which an interactive element is known to assistive technologies.
                        .
                    </p>
                    <div className="highlight">
                        <h3>
                            Avoid vague text as well! <span aria-hidden="true">💡</span>
                        </h3>
                        <p>
                            Vague link text like <span className="pink-bg-white-text">click here</span> or 
                            <span> </span><span className="pink-bg-white-text">learn more</span> is not very 
                            helpful either.
                        </p>
                        
                        <p className="margin-top-20">
                            Instead of reading through an entire page, some screen reader users prefer to
                            navigate through the various links provided on the page.</p>
                        <p className="margin-top-20">
                            As a result, the links are announced separately from their surrounding text and
                            users will not understand their purpose if the text is vague.
                        </p>
                        <p>
                            <span className="bold">A good example of a link text:</span> "Learn more about our services"
                        </p>
                        
                    </div>
                </div>

                {/* 5. BUTTONS */}
                <div className="section empty-buttons scroll-target" id="empty-buttons">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">05</span>
                        <h2>Empty buttons</h2>
                    </div>
                    <p>
                        <span className="stats">Just under 30%</span> of the home pages tested had buttons 
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
                        
                        <p className=" margin-top-30">
                            <span className="bold">Issue </span> <span aria-hidden="true"> 🛠️</span>
                        </p>
                        <p className="white-bg">
                            Text is replaced by an image with no <code>alt</code> text. 
                            Within the accessibility tree, this button object does not have an accessible name.
                        </p>
                        <p >
                            <span className="bold">Remember </span> <span aria-hidden="true">💡</span>
                        </p>
                        <p className="white-bg">
                            An interactive element like a button must have a descriptive
                            accessible name. 
                            This button is missing any of the attributes that could be used by the browser 
                            to compute an accessible name: 
                            visible text, <code>aria-labelledby</code>, or <code>alt</code>, to 
                            name a few.
                        </p>
                        <p className="bold">Consequences of empty buttons</p>
                        <p className="bullet-point-line">
                            A screen reader will announce it simply as "button", and no other 
                            information attached. Users would not know what is the purpose of the button.
                        </p>
                        <p className="bullet-point-line">
                            Users relying on speech commands would have to go through extra steps 
                            to trigger the action on the button.
                        </p>
                        
                        <br/>
                    </div>
                </div>

                

                {/* 6. LANG */}
                <div className="section missing-lang scroll-target" id="missing-document-language">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">06</span>
                        <h2>Missing document language</h2>
                    </div>
                    <p>
                        This bug was found on <span className="stats">17%</span> of the home pages audited.
                    </p>
                    <p className="white-bg">
                        If a webpage doesn't have a <code>lang</code> attribute, the screen reader defaults to 
                        the operating system's language. This can be a problem for multilingual users accessing content in 
                        various languages.
                    </p>
                    <p className="white-bg">
                        For example, let's say a screen reader user with a device set to English wants to read a webpage
                        in French. If the page's <code>lang</code> attribute is missing, the screen reader will
                        read the French text as if it were English.
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
                        Do you have time for a <span className="bold">bonus bug</span>? Too important to leave it out!
                    </p>
                </div>

                {/* 7. HEADINGS */}
                <div className="section misused-headings scroll-target" id="misused-headings">
                    <div className="section-heading">
                        <span className="section-number">Bonus bug:</span>
                        <h2>Misused headings</h2>
                    </div>
                   
                    <p className="white-bg">
                        <span className="stats">About 17%</span> of all home pages had more than one <code>&lt;h1&gt;</code>.
                        Skipped heading levels (e.g., jumping from <code>&lt;h2&gt;</code> to <code>&lt;h4&gt;</code>) 
                        were found on more than <span className="stats">38%</span> of all pages.
                        About <span className="stats">11%</span> of pages had no headings at all.
                    </p>
                    <div className="highlight">
                        <h3>Why headings are important</h3>
                        <p>
                            Headings help break down a webpage into sections, kind of like chapters in a book. 
                            If you're looking at the screen, you can quickly glance over the headings to find 
                            the part you're interested in. 
                        </p>
                        <p>
                            Someone using a screen reader relies on headings as well.
                            Pressing 
                            the <span className="pink-bg-white-text">H</span> key allows them to jump from one heading 
                            to another. This way, they can get a sense of what's on the page and decide what to read.
                        </p>
                        
                        <p className="white-bg">
                            As a good practice, we have to use <code>&lt;h1&gt;</code> at the start of the page.
                            Also, we should not skip heading levels, and use <code>&lt;h1&gt;</code> to <span> </span>
                            <code>&lt;h6&gt;</code> in descending order.
                        </p>
                        <br />
                        <h4 className="recommended-read">
                            Recommended read <span aria-hidden="true">💡</span>
                        </h4>
                        <p>
                            Learn how screen reader users navigate the web to
                            find information on a page from the <span> </span>
                            <a href="https://webaim.org/projects/screenreadersurvey10/#finding"
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
                        Fortunately, these are also the easiest to avoid!
                    </p>
                    <p>
                        Time to look at your portfolio site to see if any of these bugs are present!
                    </p>
                    
                    <p className="read-next">
                        <span className="bold">Read next: </span>
                        <Link to="/blog/fixing-the-six-most-common-bugs" onClick={() => { useScrollToTop() }}>
                            Fixing the 6 most common bugs
                        </Link>
                    </p>                 
                </div>
            </div>          
        </div>
    )
}


