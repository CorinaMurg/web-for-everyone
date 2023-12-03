import { useEffect } from "react"
import { projectsData } from "../data/projectsData/projectsData"
import { User } from "../components/Users/User"
import "./YourUsers.css"
import React from "react"

export default function YourUsers() {
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
        <div className="users">
            <div className="users--intro"> 
                <div className="users--intro--description" >
                    <h1>Accessibility is a Responsability.</h1>
                    
                </div> 
                <div className="users--intro--image">
                    <img src="/assets/brickWallWithAccessibleEntrySign.jpg" alt="brick wall with accessible entry sign"/>
                </div>

            </div>
            <div className="users--container">
                {projectsData.map((project) => (
                    <User
                        key={project.title}
                        {...project}
                    />
                ))}
            </div>
        </div>
    );
}