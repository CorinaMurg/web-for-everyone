import React from "react";
import { ProjectData } from "../../data/projectsData/projectsData.js";
import "./User.css"
import slugify from "../../utils/slugify.js"
import "../../index.css";


export function User({
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
        <article className="user" id={slugifiedTitle}>
            <div className="user--left">
                <div className="user--left--image">
                    <img src={imageSrc} alt={imageAlt} loading='lazy'/>
                </div>
            </div> 
            <div className="user--right">
                <h2 className="user--right--title">{title}</h2>
                <div className="user--right--description">
                    {description.map((line, index) => (
                        <p key={index} className="user--right--description-line">{line}</p>
                    ))}  
                </div>
                
            </div>
        </article>
    )
}

