import React from 'react';
import { SampleProjectProps } from '../../data/sampleProjectsData/sampleProjectsData';
import { Link } from 'react-router-dom';
import "./SampleProject.css"
import "../../index.css";


export default function SampleProject({ 
    title, 
    description, 
    to, 
    toAriaLabel, 
    imageAlt, 
    imageSrc,
    className = ""
 } : SampleProjectProps) {
    return (
        <Link className={`sample-project--link ${title.toLowerCase().replace(/\W+/g, '-')}`}
            to={to} 
            aria-label={toAriaLabel}
        >
            <article className="sample-project">
                <div className="sample-project--image">
                    <img src={imageSrc} alt={imageAlt} loading='lazy'/>
                </div>
                <h3 className="sample-project--title hover-underline">{title}</h3>
                <p className="sample-project--description">{description}</p>
            </article>
        </Link>
    );
}




