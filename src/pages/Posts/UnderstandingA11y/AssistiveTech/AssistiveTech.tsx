import React from "react"
import { Link } from "react-router-dom"
import useDocTitle from "../../../../hooks/useDocTitle"
import useScrollToTop from "../../../../hooks/useScrollToTop"
import useScrollToSection from "../../../../hooks/useScrollToSection"
import useHighlightTOC from "../../../../hooks/useHighlightTOC"
import ScrollToTopButton from "../../../../components/ScrollToTopButton/ScrollToTopButton"
import styles from "./AssistiveTech.module.css"
import "../../../../global.css"
import TableOfContents from "../../../../components/TableOfContents/TableOfContents"
import BackLinks from "../../../../components/BackLinks/BackLinks"


const contents = [    
    { href: "#screen-reader", text: "Screen Readers" },
    { href: "#voice-recognition-software", text: "Voice recognition software" },
    { href: "#text-to-speech", text: "Text to speech" },
    { href: "#screen-magnifiers", text: "Screen magnifiers" },
    { href: "#input-tech", text: "Keyboard alternatives" },
    { href: "#poining-tech", text: "Keyboard mouse" },
    // { href: "#conclusion", text: "Conclusion" },
];

export default function AssistiveTech() {
    useDocTitle("Assitive Technologies | Web for Everyone");   
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
                        Certain disabilities can make it difficult for users to interact with digital content.
                        Assistive technologies are hardware and software tools that help users with disabilities
                        navigate the web. These tools adapt the content on the screen to suit the user's needs.  
                    </p>
                    <p>
                        Here&apos;s an overview of some of the most common assistive technologies:
                    </p>
                </div>   

                {/* 1. Screen Reader */}
                <div className="section scroll-target" id="screen-reader-speech">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">01</span>
                        <h2>Screen readers</h2>
                    </div>
                    <p>
                        Screen Readers are typically used by people who are blind 
                        or have vision impairments. Users navigate through the UI elements with the 
                        keyboard, and the content on the screen is shared with them through synthetic speech.  Examples of screen readers include JAWS (Job Access With Speech) for Windows, VoiceOver included in macOS and iOS devices, and NVDA (NonVisual Desktop Access), an open-source option for Windows.
                    </p>

                    <p>
                        <span className="bold">Screen Readers with Braille Displays</span> for users with both 
                        vision and hearing impairments. The screen reader 
                        translates the content on the screen into a format that can be read on a 
                        braille display. These displays are fitted with braille cells that change dynamically.
                    </p>
                </div>

                {/* 2. Voice Software */}
                <div className="section scroll-target" id="voice-recognition-software">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">02</span>
                        <h2 className="white-bg">Voice recognition software</h2>
                    </div>
                    
                    <p>
                        Voice Recognition Software allows users to interact with 
                        their devices using voice commands. This technology helps people 
                        with mobility issues or those who need a hands-free interraction with the web. 
                        Dragon NaturallySpeaking is a popular example for Windows, while macOS offers 
                        Dictation. Windows has integrated Cortana for voice commands.
                    </p>
                </div>

                {/* 3. Screen Magnifiers */}
                <div className="section scroll-target" id="screen-magnifiers">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">03</span>
                        <h2 className="white-bg">Screen magnifiers</h2>
                    </div>
                    
                    <p>
                        Screen Magnifiers are designed to enlarge the content on 
                        screen, making it more readable for users with low vision. These tools often 
                        include additional features to enhance contrast and reduce glare.
                    </p>
                </div>

                {/* 4. Text to speech */}
                <div className="section scroll-target" id="text-to-speech">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">04</span>
                        <h2 className="white-bg">Text to speech</h2>
                    </div>
                    
                    <p>
                        Text-to-Speech Software (TTS) converts 
                        written text into 
                        spoken words using synthetic voices. It benefits users with reading 
                        difficulties, such as dyslexia.
                    </p>
                </div>

                {/* 5. Alternate Input Technologies */}
                <div className="section scroll-target" id="input-tech">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">04</span>
                        <h2 className="white-bg">Keyboard alternatives</h2>
                    </div>
                    
                    <p>
                        Alternate Input Technologies simulate the functionality of 
                        the keyboard for people with more severe physical disabilities. For example, a sip&puff device
                        allows a person to send signals to the computer by inhaling or exhaling into a wand. 
                    </p>
                </div>

                {/* 6. Alternate Pointing Technologies */}
                <div className="section scroll-target" id="pointing-tech">
                    <div className="section-heading">
                        <span aria-hidden="true" className="section-number">04</span>
                        <h2 className="white-bg">Mouse alternatives</h2>
                    </div>
                    
                    <p>
                        Alternate Pointing Devices replicate the functionality of 
                        a traditional mouse. 
                        For example, an eye-tracking system allows mouse control through eye movements.
                    </p>   
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
            <ScrollToTopButton />         
        </div>
    )
}

{/* *********WHAT ARE ASSISTIVE TECH************* */}
<div className="highlight highlight-one-line">
<details>
    <summary>
        <span className="summary-title">
            What are assistive technologies?
        </span>
    </summary>
    <div className="details-content margin-top-20">
        
        
        
  
        

        
        
        
    </div>
</details>
</div>
