import React from 'react';
import { useState, useEffect } from 'react';
import './HomeIntro.css';
import Banner from '../Header/Banner';

export default function HomeIntro() {
  
    const [isBannerOpen, setIsBannerOpen] = useState(false);
    
    useEffect(() => {
        if (!sessionStorage.getItem('bannerDisplayed')) {
            setIsBannerOpen(true);
            sessionStorage.setItem('bannerDisplayed', 'true');
        }
    }, []);

    const handleCloseModal = () => {
        setIsBannerOpen(false);
    };
    return (
        <div className="home-intro">
            <Banner isBannerOpen={isBannerOpen} closeModal={handleCloseModal} />
            <h1 className="page-heading update-padding"><span>Hello, </span><span>I'm Corina!</span></h1>
            
            <div className="subheading-div update-margin">
                <p className='subheading-p'>A former high-school math teacher and self-taught developer focused on creating accessible web products. 
                    Always curious + learning.
                </p>
            </div>
            
        </div>
    )
}