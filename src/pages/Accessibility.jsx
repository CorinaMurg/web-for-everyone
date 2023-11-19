
import { a11yIntroData } from "../data/a11yData/a11yIntroData"
import { a11yPostsData } from "../data/a11yData/a11yPostsData"
import { a11yComponentsData } from "../data/a11yData/a11yComponentsData"
import { a11yTipsData } from "../data/a11yData/a11yTipsData"
import A11yTipItem from "../components/A11y/A11yTipItem"
import './Accessibility.css'

export default function Accessibility() {  
    return (
        <div className="a11y">
            <div className="page-intro a11y--intro">
                <div className='white-bg'>
                    <h1>{a11yIntroData.title}</h1>
                    <div className="intro--text">
                        {a11yIntroData.description.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                </div>
            </div>
            
            <h2 className="left-my-posts-heading blue-heading">My A11y Posts</h2>     
            <div className="left-my-posts-div">
                {a11yPostsData.filter(post => post.label === "corina").map((post, index) => (
                    <article key={index} className="left--post--div">
                        <h3>
                            <a  
                                href={post.href} 
                                aria-label={post.hrefAriaLabel} 
                                target="_blank" rel="noopener noreferrer"
                                className="hover-underline"
                            >
                                {post.title}
                            </a>
                        </h3>
                       
                        <div className="post-description">
                            <p>{post.description}</p>
                            <a  
                                href={post.href} 
                                aria-label={post.readMoreAriaLabel} 
                                target="_blank" rel="noopener noreferrer"
                            >
                                <span className="read-more hover-underline">Read more</span>
                            </a>
                        </div>
                        
                    </article>
                ))}
            </div>

            <h2 className='left-other-heading'>Articles by A11y Specialists</h2>     
            <div className="left-other-div">
                {a11yPostsData.filter(post => post.label === "other").map((post, index) => (
                    <article key={index} className="left--post--div">
                        <h3>
                            <a  
                                href={post.href} 
                                aria-label={post.hrefAriaLabel} 
                                target="_blank" rel="noopener noreferrer"
                                className="hover-underline"
                            >
                                {post.title}
                            </a>
                        </h3>
                        <div className="post-description">
                            <p>{post.description}</p>
                            <a  
                                href={post.href} 
                                aria-label={post.readMoreAriaLabel} 
                                target="_blank" rel="noopener noreferrer"
                            >
                                <span className="read-more hover-underline">Read more</span>
                            </a>
                        </div>
                        
                    </article>
                ))}
            </div>

            <aside className="right">
                <h3 className="right--components-heading blue-heading">Accessible Components</h3>
                <p className="right--components-subheading">Code examples in Codepen.io</p>
                <ul className="right--components">
                    {a11yComponentsData.map((component, index) => (
                        <li key={index}>
                            <div className="square"></div>
                            <a href={component.href} 
                                aria-label={component.hrefAriaLabel} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <p className="component-title">
                                    {component.title.toLowerCase()}
                                </p>
                            </a>
                        </li>
                    ))}
                </ul>

                <h3 className="right--tips-heading blue-heading">Accessibility Tips</h3>
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
                                left={tipData.left}
                                right={tipData.right}
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
