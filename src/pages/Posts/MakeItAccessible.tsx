import React from "react"
import { accessibleStepsData } from "../../data/posts/accessibleStepsData"
import "./MakeItAccessible.css"

export default function MakeItAccessible() {

    const stepColors = {
        "0": "f6a560",
        "1": "755cde",
        "2": "f39e9e",
        "3": "f6a560",
        "4": "755cde",
        "5": "f39e9e",
        "6": "f6a560",
        "7": "755cde",
        "8": "f39e9e",
        "9": "f6a560",
    };

    
    return (
        <div className="makeit">
            <div className="makeit--intro">
                <h1>Let's Make It Accessible!</h1>
            </div>
            
            {accessibleStepsData.map((step, index) =>
                <article key={index} className="step">
                    <div className="step--image"
                        style={{ backgroundColor: `#${stepColors[index.toString()]}` }}
                    >
                        <span className="step--image--line1">{step.imageElement?.line1}</span>
                        <span className="step--image--line2">{step.imageElement?.line2}</span>
                        <span className="step--image--line3">{step.imageElement?.line3}</span>
                        <span className="step--image--line4">{step.imageElement?.line4}</span>
                    </div>
                    <div className="step--body">
                        <div className="step--body--heading">
                            <span className="step-number">{`0${index}`}</span>
                            <h2>{step.title}</h2>
                        </div>
                        
                        <div className="step--text">
                            {step.description.map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                    </div>
                </article>
            )}

        </div>
    )
}