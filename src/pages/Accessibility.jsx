import { useEffect } from 'react'
import { a11yIntroData } from "../data/a11yIntroData"
import { a11yPostsData } from "../data/a11yPostsData"
import { a11yComponentsData } from "../data/a11yComponentsData"
import { a11yTipsData } from "../data/a11yTipsData"
import A11yTipItem from "../components/A11yTipItem"
import './Accessibility.css'
import '../index.css'

export default function Accessibility() {  
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="a11y">
            <h1>{a11yIntroData.title}</h1>
            <div className="intro--text">
                {a11yIntroData.description.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
              
            <div className="intro--image">
                <img alt="" src={a11yIntroData.imageSrc}/>
                <div className="photo-credit">
                    Photo by{' '}
                    <a href={a11yIntroData.photographerSrc} 
                        target="_blank" rel="noopener noreferrer" 
                        title={a11yIntroData.photographerSrcAriaLabel} 
                        aria-label={a11yIntroData.photographerSrcAriaLabel}
                    >
                        <span className="photo-credit--link">{a11yIntroData.photographer}</span>
                    </a>
                    {' '}on{' '}
                    <a href={a11yIntroData.unsplashSrc} 
                        target="_blank" rel="noopener noreferrer" 
                        title={a11yIntroData.unsplashSrcAriaLabel} 
                        aria-label={a11yIntroData.unsplashSrcAriaLabel}
                    >
                        <span className="photo-credit--link">Unsplash</span>
                    </a>
                </div>
            </div>
            
            <h2>Recent Posts + Resources</h2>     
            <div className="left">
                <div className="left--posts">
                    {a11yPostsData.map((post, index) => (
                        <a key={index} href={post.href} aria-label={post.hrefAriaLabel} target="_blank" rel="noopener noreferrer">
                            <div>
                                <h3>{post.title}</h3>
                                <p className="left--posts--description">{post.description}</p>
                                <a href={post.href} target="_blank" rel="noopener noreferrer" title={post.hrefAriaLabel} aria-label={post.hrefAriaLabel}>
                                    <span className="read-more">Read more</span>
                                </a>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <aside className="right">
                <h3 className="right--components-heading">Accessible Components</h3>
                <p className="right--components-subheading">Examples of code</p>
                <ul className="right--components">
                    {a11yComponentsData.map((component, index) => (
                        <li key={index}>
                            <div className="square"></div>
                            <a href={component.href} aria-label={component.hrefAriaLabel} target="_blank" rel="noopener noreferrer">
                                <p className="component-title">
                                    {component.title.toLowerCase()}
                                </p>
                            </a>
                        </li>
                    ))}
                </ul>

                <h3 className="right--tips-heading">Accessibility Tips</h3>
                <p className="right--tips-subheading">Nuances of similar attributes/elements</p>
                <ul className="right--tips">
                    {a11yTipsData.map((tipData, index) => (
                        <li key={index}>
                            
                            <A11yTipItem
                                tip={
                                    <>
                                        {tipData.left} <span className="vs">vs.</span> {tipData.right}
                                    </>
                                }
                                descriptionLeft={tipData.descriptionLeft}
                                descriptionRight={tipData.descriptionRight}
                            />
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    )
}
