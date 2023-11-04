import { Link } from "react-router-dom";
import { SampleProject } from "./SampleProject.jsx";
import { projectsData } from "../data/projectsData.js";
import "./SampleProjects.css";

export function SampleProjects() {
    return (
        <div className="home--sample-projects">
                <h2 className="visually-hidden">A sample of my projects</h2>
                {projectsData.slice(0, 3).map((project) => (
                    <SampleProject
                        key={project.title}
                        title={project.title}
                        hrefSite={project.hrefSite}
                        sampleImageAlt={project.sampleImageAlt}
                        sampleImageSrc={project.sampleImageSrc}
                        sampleProjectDescription={project.sampleProjectDescription}
                    />
                ))}

                <Link className="projects-link" to="/projects">My Projects</Link>
            </div>
    )
}