import { introCorina } from '../../data/homeData/introCorinaData.js';
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
                <img src="/assets/greenForest.jpg" 
                     alt={`A group of pots with dirt and green sprouts. 
                     A banner that reads: let's grow an accessible world.`}
                />
                <div className="home--intro--image--caption">
                    Let&rsquo;s Grow An Accessible World
                </div>

                <div className="photo-credit">
                    Photo by {''}
                    <a href="https://unsplash.com/@ankitch6"
                        aria-label="Ankit Choudhary's portfolio page on Unsplash"
                        target="_blank" rel="noopener noreferrer"
                        title="Ankit Choudhary's portfolio page on Unsplash"
                    >
                        <span className="photo-credit--link">Ankit Choudhary</span>
                    </a> 
                    {' '}on{' '}
                    <span> </span>
                    <a href="https://unsplash.com/photos/green-grass-field-with-trees-SDP7QQjHWNI" 
                        aria-label="Link to Ankit Choudhary green forest photo on Unsplash"
                        target="_blank" rel="noopener noreferrer"
                        title="Link to Ankit Choudhary green forest photo on Unsplash"
                    >
                        <span className="photo-credit--link">Unsplash</span>
                    </a>
                    .
                </div>
            </div>
               
        </div>
    )
}