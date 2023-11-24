import { useEffect } from "react"
import { projectsData } from "../data/projectsData/projectsData"
import { Project } from "../components/Projects/Project"
import "./Projects.css"
import React from "react"

export default function Projects() {
    useEffect(() => {
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
            <div className="projects--intro">
                <h1 className='page-heading'>My Latest Projects</h1>
                <div className="subheading-div">
                    <p>TECH: JavaScript, React, TypeScript, semantic HTML, CSS</p>
                    <p>TESTING: Playwright, Lighthouse, axe Dev Tools, manual testing</p>
                    <br></br>
                    <p className="github-p">
                        <span>Please visit  </span>
                        <a  href="https://github.com/CorinaMurg"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            my GitHub page
                        </a>
                        <span> for a complete overview of my work.</span>
                    </p>
                </div>  
            </div>       
          
            
            <div className="projects--container">
                {projectsData.map((project) => (
                    <Project
                        key={project.title}
                        {...project}
                    />
                ))}
            </div>
        </div>
    );
}