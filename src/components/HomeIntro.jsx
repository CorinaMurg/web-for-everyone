import { introCorina } from '../data/introCorinaData.js';
import sprout from "/assets/Sprout.jpg"
import './HomeIntro.css';

export default function HomeIntro() {
    return (
        <div className="home--intro">
            <h1>HELLO, I&rsquo;m CORINA!</h1>
            
            <div className="home--intro--about">
                {introCorina.description.map((item, index) => (
                    <div className="home--intro--lines" key={index}>
                        {/* <div className='home--intro--fontawe-container'>
                            <FontAwesomeIcon icon={iconMapping[item.icon]} color={item.color} />
                        </div> */}
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
            <div className="home--intro--image">
                <img src={sprout} alt="Pots with dirt and green sprouts."/>
                <div className="home--intro--image--caption">
                    Let&rsquo;s Grow an Accessible World
                </div>
                <div className="home--intro--image--credit">
                    Photo by ... on Unsplash
                </div>
            </div>
               
        </div>
    )
}