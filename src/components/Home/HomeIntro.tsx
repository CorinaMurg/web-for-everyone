import React from 'react';
import { introCorina } from '../../data/homeData/homeIntroData.js';
import './HomeIntro.css';

export default function HomeIntro() {
    return (
        <div className="page-intro home--intro">
            <div className='white-bg'>
                <h1>{introCorina.heading}</h1>

                <div className="home--intro--about">
                    {introCorina.description.map((item, index) => (
                        <div className="home--intro--lines" key={index}>
                            <p className='subheading-p'>{item}</p>
                        </div>
                    ))}
                </div>
            </div>   
        </div>
    )
}