import { useEffect } from "react"
import useDocTitle from "../hooks/useDocTitle"
import "./YourUsers.css"
import React from "react"

export default function YourUsers() {
    useDocTitle("Your Users | Web for Everyone");

    return (
        <div className="users">
            <div className="users--intro"> 
                <div className="users--intro--description" >
                    <h1>Your Users Navigate Websites in Various Ways</h1>
                    
                </div> 
                <div className="users--intro--image">
                    <img src="/assets/brickWallWithAccessibleEntrySign.jpg" alt="brick wall with accessible entry sign"/>
                </div>

            </div>
            {/* <div className="users--container">
                {projectsData.map((project) => (
                    <User
                        key={project.title}
                        {...project}
                    />
                ))}
            </div> */}
        </div>
    );
}