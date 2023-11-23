import { useEffect } from "react"
import { projectsIntroData } from "../data/projectsData/projectsIntroData"
import { projectsData } from "../data/projectsData/projectsData"
import { Project } from "../components/Projects/Project"
import "./Projects.css"
import React from "react"

export default function Projects() {

    useEffect(() => {
        // retrieves the hash fragment from the current URL
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              const offset = 80; 
              window.scrollBy(0, -offset);
            }
        }
      }, []);
      

    return (
        <div className="projects">
            <div className="page-intro projects--intro">
                <div className='white-bg'>
                    <h1>{projectsIntroData.heading}</h1>
                    {projectsIntroData.description.map((item, index) => (
                        <div key={index}>
                            <p>{item}</p>
                        </div>
                    ))}
                    {projectsIntroData.github && (
                        <div>
                            <p>
                                <span>{projectsIntroData.github.prefix}</span>
                                <a  href={projectsIntroData.github.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label={projectsIntroData.github.linkAriaLabel}
                                >
                                    {projectsIntroData.github.linkText}
                                </a>
                                <span>{projectsIntroData.github.suffix}</span>
                            </p>
                        </div>
                    )}
                </div>   
            </div>
            
            <div className="projects--container">
                {projectsData.map((project) => (
                    <Project
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        hrefSite={project.hrefSite}
                        link1Text={project.link1Text}
                        hrefGitHub={project.hrefGitHub}
                        link2Text={project.link2Text}
                        imageAlt={project.imageAlt}
                        imageSrc={project.imageSrc}
                    />
                ))}
            </div>
        </div>
    );
}