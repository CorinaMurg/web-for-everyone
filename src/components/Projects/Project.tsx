import React from "react";
import { ProjectData } from "../../data/projectsData/projectsData.js";
import "./Project.css"
import slugify from "../../utils/slugify.js"


export function Project({
    title, 
    description, 
    hrefSite, 
    link1Text, 
    hrefGitHub, 
    link2Text, 
    imageAlt, 
    imageSrc 
    }: ProjectData ) {
    const slugifiedTitle = slugify(title);      

    return (
        <article className="project" id={slugifiedTitle}>
            <div className="project--left">
                <img src={imageSrc} alt={imageAlt} loading='lazy'/>
            </div> 
            <div className="project--right">
                <h2 className="project--right--title">{title}</h2>
                <div>
                    {description.map((line, index) => (
                        <p key={index} className="project--right--description-line">{line}</p>
                    ))}  
                </div>
                <div className="project--right--links">
                    <a className="site-link" href={hrefSite} target="_blank" rel="noopener noreferrer">{link1Text}</a>
                    <a className="site-link" href={hrefGitHub} target="_blank" rel="noopener noreferrer">{link2Text}</a>
                </div> 
            </div>
             
        </article>
    )
}

