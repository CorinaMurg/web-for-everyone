import { a11yComponentsData } from "../../data/a11yData/a11yComponentsData"
import { a11yTipsData } from "../../data/a11yData/a11yTipsData"
import A11yTipItem from "./A11yTipItem"
import './A11yAside.css'
import React from "react"

export default function A11yAside() {
    return (
        <aside className="right">
                <h3 className="right--components-heading blue-heading">Accessible Components</h3>
                <p className="right--components-subheading">Code examples in Codepen.io</p>
                <ul className="right--components">
                    {a11yComponentsData.map((component, index) => (
                        <li key={index}>
                            <div className="square"></div>
                            <a href={component.href} 
                                aria-label={component.hrefAriaLabel} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <p className="component-title">
                                    {component.title.toLowerCase()}
                                </p>
                            </a>
                        </li>
                    ))}
                </ul>

                <h3 className="right--tips-heading blue-heading">Accessibility Tips</h3>
                <p className="right--tips-subheading">Nuances of similar attributes/elements</p>
                <ul className="right--tips">
                    {a11yTipsData.map((tipData, index) => (
                        <li key={index}>
                            <A11yTipItem
                                tip={
                                    <>
                                        {tipData.left} <span className="vs">vs.</span> {tipData.right}
                                    </>
                                }
                                left={tipData.left}
                                right={tipData.right}
                                descriptionLeft={tipData.descriptionLeft}
                                descriptionRight={tipData.descriptionRight}
                            />
                        </li>
                    ))}
                </ul>
            </aside>
    )
}