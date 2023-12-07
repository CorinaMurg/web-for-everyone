
import React from "react";
import { useDocTitle } from "../hooks/useDocTitle";
import "./About.css";

export default function About() {
    useDocTitle("About | Web for Everyone");

    return (
        <div className="about">
            <div className="about--intro">
                <div className="rectangle-1">
                &lt;img alt = "a rectangle" src="/assets/rectangle.svg" /&gt;
                </div>
                <div className="rectangle-2">
                &lt;a href= /&gt;
                </div>
                <div className="rectangle-3">

                </div>
                <div className="rectangle-4">

                </div>
                <div className="rectangle-5">

                </div>
                <div className="rectangle-6">

                </div>
            </div>
            <section>
                <div className="about--image">
                    <img  
                        src="/assets/CorinaMurg.jpg"
                        alt="Corina Murg smiling. Corina has brown hair and light skin. She is wearing a brown beret 
                        and a light gray top"
                    />
                </div>
                <div className="about--content">
                    <h1>I'm Corina, and I would love to help you build an accessible site.</h1>
                    
                    <div>
                        <p>I am a self-taught software engineer with a background in math teaching.</p>

                        <p>As a teacher my focus was on creating learning experiences that were inclusive and accessible. 
                            For that reason, the frontend's concern with accessible web products deeply resonates with me.</p>

                        <p>I am excited to collaborate on projects with developers from all over the world, 
                            and engage in conversations about our responsibility to ensure that every user feels seen 
                            and valued. I believe in a web where everyone has a place!</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
