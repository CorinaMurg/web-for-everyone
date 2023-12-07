import React from "react"
import { useDocTitle } from "../../hooks/useDocTitle"
import { accessibleStepsData } from "../../data/posts/accessibleStepsData"
import "./MakeItAccessible.css"

export default function MakeItAccessible() {
    useDocTitle("Let's Make It Accessible | Web for Everyone");

    const stepColors = {
        "0": "f6a560",
        "1": "755cde",
        "2": "f39e9e",
        "3": "61c4b7",
        "4": "eb7565",
        "5": "f6a560",
        "6": "755cde",
        "7": "f39e9e",
        "8": "61c4b7",
        "9": "f6a560",
    };

    
    return (
        <div className="makeit">
            <h1>Let's Make It Accessible!</h1>
            
            {accessibleStepsData.map((step, index) =>
                <article key={index} className="step">
                    <div className="step--heading">
                        <span className="step-number">{`0${index}`}</span>
                        <h2>{step.title}</h2>
                    </div>

                    <div className={`step--code ${step.title.toLowerCase().replace(/\W+/g, '-')}`}
                    
                        style={{ backgroundColor: `#${stepColors[index.toString()]}` }}
                    >
                        <code className="line1">{step.codeElement?.line1}</code>
                        <code className="line2">{step.codeElement?.line2}</code>
                        <code className="line3">{step.codeElement?.line3}</code>
                        <code className="line4">{step.codeElement?.line4}</code>
                        <code className="line5">{step.codeElement?.line5}</code>
                        <code className="line6">{step.codeElement?.line6}</code>
                    </div>

                    <div className={`step--body step--body--${step.title.toLowerCase().replace(/\W+/g, '-')}`}>
                        {step.description.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                    {step.image &&
                        <div className="step--image">
                            <img src={step.image} alt={step.imageAlt}/>
                        </div>
                    }
                    
                </article>
            )}

        </div>
    )
}