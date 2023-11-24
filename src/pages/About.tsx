
import React from "react";
import { aboutData, AboutDataItem } from "../data/aboutData/aboutData";
import "./About.css";

export default function About() {
    const renderLines = (item) => {
        return (
            <div className="section-line-container">
                <p className="section-line main-info">
                    {item.prefix && <span>{item.prefix}</span>}
                    {item.link && (
                        <a  href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            // aria-label={item.linkAriaLabel}
                        >
                            {item.linkText}
                        </a>
                    )}
                    {item.suffix && <span>{item.suffix}</span>}
                </p>
            
                {item.extras && <span className="arrow">→</span>}
                {item.extras && (
                    <p className="section-line extra-info">
                        {item.extras.prefix && <span>{item.extras.prefix}</span>}
                        {item.extras.link && (
                            <a  href={item.extras.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                // aria-label={item.extras.linkAriaLabel}
                            >
                                {item.extras.linkText}
                            </a>
                        )}
                        {item.extras.suffix && <span>{item.extras.suffix}</span>}
                    </p>
                )}
            </div>
        );
    };
    
    
    const renderAboutSections = () => 
        Object.entries(aboutData).slice(1).map(([key, lines]) => {
            const sectionLines = lines as AboutDataItem[];
            return (
                <div key={key} className={`about--section about--section--${key.replace(/\s+/g, '-')}`}>
                    <h2 className="blue-heading">{key.toUpperCase()}</h2>
                    <div>
                        {sectionLines.map((line, index) => { 
                            if (typeof line === 'string') {
                                return <p key={index} className="section-line">{line}</p>;
                            } else {
                                return renderLines(line);
                            }
                        })}
                    </div>
                </div>
            );
    });

    
    return (
        <div className="about">
            <div className="about--intro">
                <h1 className="page-heading">{aboutData.intro.heading}</h1>
                <div className="about--intro--image">
                    <img  
                        src={aboutData.intro.image.src} 
                        alt={aboutData.intro.image.alt}
                    />
                </div>
            </div>
            <div className="about--sections">
                {renderAboutSections()}
            </div>
        </div>
    );
}
