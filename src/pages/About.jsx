
import { aboutData } from "../data/aboutData";
import "./About.css";

export default function About() {
    const renderLines = (item) => {
        return (
            <div className="section-line-container">
                <p className="section-line main-info">
                    {item.prefix && <span>{item.prefix}</span>}
                    {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.linkText}
                        </a>
                    )}
                    {item.suffix && <span>{item.suffix}</span>}
                </p>
                {item.extras && <span className="arrow">→</span>}
                {item.extras && item.extras.map((extra, idx) => (
                    <p key={idx} className="section-line extra-info">
                        {extra.prefix && <span>{extra.prefix}</span>}
                        {extra.link && (
                            <a href={extra.link} target="_blank" rel="noopener noreferrer">
                                {extra.linkText}
                            </a>
                        )}
                        {extra.suffix && <span>{extra.suffix}</span>}
                    </p>
                ))}
            </div>
        );
    };
    
    
    const renderAboutSections = () => {
        return Object.entries(aboutData).map(([key, lines]) => (
            <div key={key} className={`about--section about--section--${key.replace(/\s+/g, '-')}`}>
                <h2>{key.toUpperCase()}</h2>
                <div>
                    {lines.map((line, index) => { 
                        if (typeof line === 'string') {
                            return <p key={index} className="section-line">{line}</p>;
                        } else {
                            return renderLines(line);
                        }
                    })}
                </div>
            </div>
        ));
    };
    
    
    return (
        <div className="about">
            <div className="about--intro">
                <div className="about--intro--image">
                    <img  
                        src="/assets/CorinaMurg.jpg" 
                        alt="Corina Murg smiling. Corina has brown hair and light skin. She is wearing a brown beret and a light gray top"
                    />
                </div>
                <div>
                    <h1>My Career in a Nutshell</h1>
                    <p>For a more comprehensive view, please visit my {' '}
                        <a href="https://www.linkedin.com/in/corinamurg/" 
                            target="_blank" 
                            rel="noopener noreferrer">
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
