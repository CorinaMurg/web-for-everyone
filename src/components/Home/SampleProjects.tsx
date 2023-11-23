import React from "react";
import { Link } from "react-router-dom";
import SampleProject from "./SampleProject";
import { sampleProjectsData } from "../../data/sampleProjectsData/sampleProjectsData";
import handleLinkClick from "../../utils/handleLinkClick";
import "./SampleProjects.css";


export default function SampleProjects() {
    return (
        <div className="home--sample-projects">
            <h2 className="blue-heading">recent projects</h2>
            {sampleProjectsData.slice(0, 3).map((project) => (
                <SampleProject
                    key={project.title}
                    {...project}
                />
            ))}

            <Link className="site-link" 
                to="/projects" 
                onClick={handleLinkClick}
            >
                My Projects
            </Link>
        </div>
    )
}