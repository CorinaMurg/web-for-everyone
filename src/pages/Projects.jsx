import { Project } from "../components"
import { projectsData } from "../data/projectsData"

export default function Projects() {
    return (
        <div className="projects">
            <div className="projects--intro">
                <h1>My Projects</h1>
                <p> . ..</p>
                <p>...</p>
            </div>
            <div className="projects--grid">
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