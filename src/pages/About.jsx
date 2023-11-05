import corinaPhoto from "../assets/CorinaMurg.jpg";
import "./About.css";
import { aboutData } from "../data/aboutData";

export default function About() {

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
                <div className="about--intro--photo-div">
                    <img 
                        className="about--intro-corina-photo" 
                        src={corinaPhoto} 
                        alt="Corina Murg smiling. Corina has brown hair and light skin. She is wearing a brown beret and a light gray top">
                    </img>
                </div>
                <div>
                    <h1>Welcome ...</h1>
                    <p>to the nutshell version of my web development work!</p>
                    <p>For a more comprehensive view, please visit my <span> </span>
                        <a href="https://www.linkedin.com/in/corinamurg/">LinkedIn profile</a>
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
