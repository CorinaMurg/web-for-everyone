import { useEffect } from "react"
import { Project } from "../components/Project/Project"
import { projectsData } from "../data/projectsData/projectsData"
import "./Projects.css"

export default function Projects() {

    useEffect(() => {
        // retrieves the hash fragment from the current URL
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              const offset = 50; 
              window.scrollBy(0, -offset);
            }
        }
      }, []);
      

    return (
        <div className="projects">
            <div className="projects--intro">
                <h1>Latest Projects</h1>
                {/* <p>Please visit <span> </span>
                    <a href="https://github.com/CorinaMurg" target="_blank" rel="noopener noreferrer">
                        my GitHub page
                    </a> for a complete overview of my work. 
                </p> */}
            </div>
            <div className="projects--container">
                {projectsData.map((project) => (
                    <Project
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        hrefSite={project.hrefSite}
                        hrefGitHub={project.hrefGitHub}
                        imageAlt={project.imageAlt}
                        imageSrc={project.imageSrc}
                    />
                ))}
            </div>
        </div>
    );
}