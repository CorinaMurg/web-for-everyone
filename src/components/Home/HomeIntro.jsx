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
                <img src="/assets/Sprout.jpg" 
                     alt={`A group of pots with dirt and green sprouts. 
                     A banner that reads: let's grow an accessible world.`}
                />
                <div className="home--intro--image--caption">
                    Let&rsquo;s Grow An Accessible World
                </div>

                <div className="photo-credit">
                    Photo by {''}
                    <a href="https://unsplash.com/@rreinhardt" 
                        aria-label="Rachel Reinhardt's portfolio page on Unsplash"
                        target="_blank" rel="noopener noreferrer"
                        title="Rachel Reinhardt's portfolio page on Unsplash"
                    >
                        <span className="photo-credit--link">Rachel Reinhardt</span>
                    </a> 
                    {' '}on{' '}
                    <span> </span>
                    <a href="https://unsplash.com/photos/a-group-of-seedlings-sprouting-from-seed-bags-xWD9BbsgHy4" 
                        aria-label="Link to Rachel Reinhardt's sprouts photo on Unsplash"
                        target="_blank" rel="noopener noreferrer"
                        title="Link to Rachel Reinhardt's sprouts photo on Unsplash"
                    >
                        <span className="photo-credit--link">Unsplash</span>
                    </a>
                    .
                </div>
            </div>
               
        </div>
    )
}