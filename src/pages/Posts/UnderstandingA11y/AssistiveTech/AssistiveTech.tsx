import React from "react"
import { Link } from "react-router-dom"
import useDocTitle from "../../../../hooks/useDocTitle"
import useScrollToTop from "../../../../hooks/useScrollToTop"
import useScrollToSection from "../../../../hooks/useScrollToSection"
import useHighlightTOC from "../../../../hooks/useHighlightTOC"
import ScrollToTopButton from "../../../../components/ScrollToTopButton/ScrollToTopButton"
import ExternalLink from "../../../../components/ExternalLink/ExternalLink"
import styles from "./AssistiveTech.module.css"
import "../../../../global.css"
import TableOfContents from "../../../../components/TableOfContents/TableOfContents"
import BackLinks from "../../../../components/BackLinks/BackLinks"


const contents = [    
    { href: "#keyboard", text: "The Keyboard" },
    { href: "#screen-readers", text: "Screen Readers" },
    { href: "#voice-recognition-software", text: "Voice recognition software" },
    { href: "#screen-magnifiers", text: "Screen magnifiers" },
    // { href: "#text-to-speech", text: "Text to speech" },
    { href: "#alternative-tech", text: "Keyboard or mouse alternatives" },
    { href: "#conclusion", text: "How do assistive technologies work" },
];

export default function AssistiveTech() {
    useDocTitle("Assistive Technologies | Web for Everyone");   
    useScrollToTop(); 
    useScrollToSection();
    const { activeId} = useHighlightTOC();
    
    return (
        <div className={`article-container ${styles['assitive-tech']}`}>
            <BackLinks 
                secondLink="Accessibility 101"
                href="/blog#accessibility-101" 
                current="Assistive Technologies" 
            />
            
            <h1 aria-describedby="subtitle" className="article-heading-desktop">
                <span>Assistive Technologies</span>
            </h1>
            <h1 aria-describedby="subtitle" className="article-heading-mobile">
                <span>Assistive Technologies</span>
            </h1>
            <p id="subtitle" className="subtitle">Software and hardware to navigate the web</p>

            <TableOfContents contents={contents} activeId={activeId} />
            
            <div className="article-content commonbugs">
                 {/* *************0. INTRO********************** */}
                <div className="section intro scroll-target" id="intro">
                    <h2 className="sr-only">Introduction to assistive technologies</h2>
                    <p>
                        Not everyone can use their sight and a mouse to access digital content!
                        Users with certain disabilities will need other tools to navigate the web.
                        For example, a blind person might rely on a 
                        keyboard paired with a screen reader software and a speech synthesizer software. 
                        These hardware and software are called assistive technologies.
                    </p>
                    <p>
                        It&apos;s important to note that, for example, the keyboard alone cannot guarantee access to all the elements 
                        a user might need to interact with. We&apos;ll cover this in more detail in the next posts, 
                        but let&apos;s remember that the underlying code of the website must be structured in a way that allows keyboard 
                        navigation. This is true for other assistive technologies as well. They cannot do their job unless the website is
                        built with accessibility in mind.
                    </p>
                    <p>
                        Here&apos;s an overview of some of the most common assistive technologies:
                    </p>
                </div>   

                {/* 1. Keyboard */}
                <div className="section scroll-target" id="keyboard">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">01</span>
                        <h2 className="white-bg">The Keyboard</h2>
                    </div>
                    
                    <p>
                        Using a mouse can be challenging for people with limited hand mobility. 
                        Keyboards, be they modern or traditional, are essential for these users. 
                    </p>
                    <p>
                        With the correct underlying code structure, web navigation can be achieved using 
                        just a keyboard. With the <span className="yellow-bg">Tab</span> key, users navigate through interactive elements like links 
                        and buttons. Pressing the <span className="yellow-bg">Enter</span> key activates these elements, and for buttons, 
                        the <span className="yellow-bg">Space</span> bar works as well. The arrow keys are used to navigate through menus or
                        a group of buttons, and there are shortcuts for opening, closing, or switching between apps and tabs, to name just a few.
                    </p>
                    
                </div>


                {/* 2. Screen Reader */}
                <div className="section scroll-target" id="screen-readers">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">02</span>
                        <h2>Screen readers</h2>
                    </div>
                    <p>
                        A screen reader is software typically used by people who are blind 
                        or have vision impairments. It can also benefit users with no vision impairments. 
                        For example, a person with dyslexia or a person who prefers auditory learning
                        can use a screen reader to listen to the content instead of reading it.
                    </p>
                    <p>
                        At render time, the browser builds the <span> </span>
                        <Link to="/blog/how-accessibility-works" onClick={() => { useScrollToTop() }}>
                            accessibility tree
                        </Link>
                        <span> </span>
                        with nodes that are relevant for accessibility. The screen reader accesses this tree via a 
                        set of APIs, and then makes the information 
                        available to the user through speech or braille output.
                    </p>
                    <h3>Screen readers paired with a keyboard and a speech synthesizer</h3>
                    <p>
                        If the user has no hearing impairments, they will
                        navigate through the UI elements with the keyboard, while the content 
                        on the screen is announced through speech synthesizer software.
                    </p>
                

                    <div>
                        <p>The most popular screen readers are: </p>
                        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                        <ul role="list" className="bullet-point-list">
                            <li>
                                <p>JAWS (Job Access With Speech) for Windows</p>
                            </li>
                            <li>
                                <p>VoiceOver included in macOS and iOS devices</p>
                            </li>
                            <li>
                                <p>NVDA (NonVisual Desktop Access), an open-source option for Windows.</p>
                            </li>
                            <li>
                                <p>ChromeVox for Chrome OS</p>
                            </li>
                        </ul>
                    </div>
                    <h3>Screen reader paired with a braille display</h3>
                    {/* The screen reader sends a line of text to the refreshable braille display. Users read the text on that line, 
                    then press a button to go to the next line. The pins drop down, then come up in a new configuration to reflect 
                    the new line of text. */}
                    <p>
                        For users with both vision and hearing impairments, the screen reader can be used with a braille display.  
                        In this case, the screen reader translates the content on the screen into a format that can be read on a 
                        display fitted with braille cells. As the input from the screen reader changes, the cells change dynamically
                        to convey the new information to the user.
                    </p>

                    <div className="content-image-container">
                        <img 
                            alt="Laptop fitted with a braille display"
                            className={`styles['brailleDisplay-image'] content-image`}
                            src="/assets/brailleDisplay.jpg"
                        /> 
                        <p className="margin-top-0">Photo credit: 
                            <span> </span>
                            <ExternalLink
                                href="https://unsplash.com/@elizabeth_woolner"
                                visibleText="Elizabeth Woolner"
                            /> 
                            { } on Unsplash.
                        </p>
                    </div>
                    
                </div>

                {/* 3. Voice Software https://ndassistive.org/blog/5-ways-to-use-a-computer-hands-free/
                https://www.wired.com/2015/01/intel-gave-stephen-hawking-voice/*/}

                <div className="section scroll-target" id="voice-recognition-software">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">03</span>
                        <h2>Voice recognition software</h2>
                    </div>
                    
                    <p>
                        This technology helps people 
                        with mobility issues or those who need a hands-free interraction with the web. 
                        It allows users to interact with their devices using voice commands. 
                        For example, if the user needs to active a navigation button, they can do it with 
                        the command &quot;Click navigation&quot;.
                    </p>
                    <p>
                        Dragon NaturallySpeaking is a popular example for Windows, while macOS offers 
                        Dictation. Windows users can also use Voice access, the built-in Windows 11 tool.
                    </p>
                </div>

                {/* 4. Screen Magnifiers */}
                {/* https://vimeo.com/13757711 */}
                {/* https://www.youtube.com/watch?v=ojtiVj78QPw */}
                <div className="section scroll-target" id="screen-magnifiers">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">04</span>
                        <h2>Screen magnifiers</h2>
                    </div>
                    
                    <p>
                        Screen Magnifiers are designed to enlarge the content on 
                        screen, making it more readable for users with low vision. These tools often 
                        include additional features like inverted colors and speech output.
                    </p>
                    <div className="content-image-container">
                        <img 
                            alt="Web page with Windows screen magnifier set at 200%"
                            className={`styles['screenMagnifier-image'] content-image`}
                            src="/assets/windowsMagnifier.jpg"
                        /> 
                    </div>
                </div>

                {/* 5. Text to speech
                <div className="section scroll-target" id="text-to-speech">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">05</span>
                        <h2>Text to speech</h2>
                    </div>
                    
                    <p>
                        Text-to-Speech Software (TTS) converts 
                        written text into 
                        spoken words using synthetic voices. It benefits users with reading 
                        difficulties, such as dyslexia.
                    </p>
                </div> */}

                {/* 5. Alternate Technologies */}
                <div className="section scroll-target" id="alternative-tech">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">05</span>
                        <h2>Keyboard/mouse alternatives</h2>
                    </div>
                    
                    <p>
                        These technologies simulate the functionality of 
                        the keyboard or the mouse for people with more severe physical disabilities. 

                        For example, a sip-and-puff device
                        allows a person to send signals to the computer by inhaling or exhaling into a wand, while 
                        an eye-tracking system allows mouse control through eye movements.
                    </p>
                </div>
                <p>
                    Video: Watch Zack Collie, a quadriplegic young man and gamer, explaining how he uses sip-and-puff 
                    technology to play video games.
                </p>
                <div className={styles['video-container']}>
                    {/* eslint-disable-next-line react/no-unknown-property */}
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/tn_wOwC8cVo?si=CTmEFZsKqcNEOURn" 
                        title="Zack Collie, a quadriplegic young man and gamer, explains how he uses sip-and-puff technology to play video games" 
                        // frameOrder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        // allowfullscreen
                    >
                    </iframe>
                </div>
                
                {/* CONCLUSION */}
                <div className="section conclusion scroll-target" id="conclusion">
                    <h2>How do assistive technologies work?</h2>
                    <p>
                        Given a web page, how does a screen reader know which information to share with the user?
                        How does a voice recognition software know which commands to execute?
                        To answer these questions, we need to learn about a very important concept: the accessibility tree.

                    </p>
                    
                    <p className="read-next">
                        <span className="bold">Read next: </span>
                        <Link to="/blog/how-accessibility-works" onClick={() => { useScrollToTop() }}>
                            How accessibility works
                        </Link>
                    </p>                 
                </div>
            </div> 
            <ScrollToTopButton />         
        </div>
    )
}

