
import { Project } from "../components/Project"
import { projectsData } from "../data/projectsData"
import "./Projects.css"

export default function Projects() {

    return (
        <div className="projects">
            <div className="projects--intro">
                <h1>Latest Projects</h1>
                <p>Please visit <span> </span>
                    <a href="https://github.com/CorinaMurg" target="_blank" rel="noopener noreferrer">
                        my GitHub page
                    </a> for a complete overview of my work. 
                </p>
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