import { Link } from "react-router-dom";
import { SampleProject } from "./SampleProject.jsx";
import { sampleProjectsData } from "../../data/sampleProjectsData/sampleProjectsData.js";
import "./SampleProjects.css";

export default function SampleProjects() {
    return (
        <div className="home--sample-projects">
                <h2 className="visually-hidden">A sample of my projects</h2>
                {sampleProjectsData.slice(0, 3).map((project) => (
                    <SampleProject
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        to={project.to}
                        toArialabel={project.toAriaLabel}
                        imageSrc={project.imageSrc}
                        imageAlt={project.imageAlt}
                    />
                ))}

                <Link className="site-link" to="/projects">My Projects</Link>
            </div>
    )
}