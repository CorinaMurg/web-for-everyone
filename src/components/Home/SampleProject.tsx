import React from 'react';
import { SampleProjectProps } from '../../data/sampleProjectsData/sampleProjectsData';
import { Link } from 'react-router-dom';
import "./SampleProject.css"


export default function SampleProject({ 
    title, 
    description, 
    to, 
    toAriaLabel, 
    imageAlt, 
    imageSrc } : SampleProjectProps) {
    return (
        <Link className="sample-project--link" 
            to={to} 
            aria-label={toAriaLabel}
        >
            <article className="sample-project">
                <div className="sample-project--image">
                    <img src={imageSrc} alt={imageAlt} loading='lazy'/>
                </div>
                <h3 className="sample-project--title">{title}</h3>
                <p className="sample-project--description">{description}</p>
            </article>
        </Link>
    );
}




