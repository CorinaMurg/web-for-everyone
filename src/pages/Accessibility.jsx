import { a11yIntroData } from "../data/a11yIntroData"
import { a11yPostsData } from "../data/a11yPostsData"
import { a11yComponentsData } from "../data/a11yComponentsData"
import { a11yTipsData } from "../data/a11yTipsData"
import A11yTipItem from "../components/A11yTipItem"
import './Accessibility.css'

export default function Accessibility() {  
    return (
        <div className="a11y">
            <h1>{a11yIntroData.title}</h1>
            <div className="intro--text">
                {a11yIntroData.description.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
            
            <div className="image-div">
                <img alt={a11yIntroData.imageAlt} src={a11yIntroData.imageSrc}/>
            </div>

            <h2>Recent Posts + Resources</h2>     
            <div className="left">
                <div className="left--posts">
                    {a11yPostsData.map((post, index) => (
                        <a key={index} href={post.href} aria-label={post.hrefAriaLabel} target="_blank" rel="noopener noreferrer">
                            <div>
                                <h3>{post.title}</h3>
                                <p className="left--posts--description">{post.description}</p>
                                <p className="read-more">Read More</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <aside className="right">
                <h3 className="right--components-heading">Accessible Components</h3>
                <div className="right--components">
                    {a11yComponentsData.map((component, index) => (
                        <a key={index} href={component.href} aria-label={component.hrefAriaLabel} target="_blank" rel="noopener noreferrer">
                            <div>
                                <h4>{component.title.toLowerCase()}</h4>
                                <p className="right--components--description">{component.description}</p>
                            </div>
                        
                        </a>
                    ))}
                </div>

                <h3 className="right--tips-heading">A11y Tips</h3>
                <div className="right--tips">
                    {a11yTipsData.map((tipData, index) => (
                        <A11yTipItem
                            key={index}
                            tip={tipData.tip}
                            description={tipData.description}
                        />
                    ))}
                </div>
            </aside>
            
        </div>
    )
}
