import { useEffect } from "react";
import corinaPhoto from "/assets/CorinaMurg.jpg";
import { aboutData } from "../data/aboutData";
import "./About.css";

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const renderLineWithLink = (chunks) => {
        return (
            <>
                {chunks.map((chunk, index) => {
                    if (typeof chunk === "object" && chunk.href) {
                        return (
                            <a key={index} href={chunk.href} target="_blank" rel="noopener noreferrer">
                                {chunk.text}
                            </a>
                        );
                    }
                    return <span key={index}>{chunk}</span>;
                })}
            </>
        );
    };

    const renderRegularLines = (lines) => {
        return lines.map((line, index) => (
            <p key={index} className="section-line">
                {Array.isArray(line) ? (
                    renderLineWithLink(line)
                ) : (
                    line
                )}
            </p>
        ));
    };
    
    const renderAboutSections = () => {
        return Object.entries(aboutData).map(([key, lines]) => (
            <div key={key} className={`about--section about--section--${key.replace(/\s+/g, '-')}`}>
                <h2>{key.toUpperCase()}</h2>
                <div>
                    {renderRegularLines(lines)}
                </div>
            </div>
        ));
    };
    
    return (
        <div className="about">
            <div className="about--intro">
                <div className="about--intro--image">
                    <img 
                        className="about--intro-corina-photo" 
                        src={corinaPhoto} 
                        alt="Corina Murg smiling. Corina has brown hair and light skin. She is wearing a brown beret and a light gray top"
                        loading="lazy">
                    </img>
                </div>
                <div>
                    <h1>My Career in a Nutshell</h1>
                    <p>For a more comprehensive view, please visit my <span> </span>
                        <a href="https://www.linkedin.com/in/corinamurg/" 
                        target="_blank" rel="noopener noreferrer">
                            LinkedIn profile
                        </a>
                        .
                    </p>
                </div>
            </div>
            <div className="about--sections">
                {renderAboutSections()}
            </div>
        </div>
    );
}
