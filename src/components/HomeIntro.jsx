import { introCorina } from '../data/introCorinaData.js';
import './HomeIntro.css';

export default function HomeIntro() {
    return (
        <div className="home--intro">
            <div className="home--intro--about">
                <h1>HELLO, I&rsquo;m CORINA!</h1>
                {introCorina.description.map((item, index) => (
                    <div className="home--intro--lines" key={index}>
                        {/* <div className='home--intro--fontawe-container'>
                            <FontAwesomeIcon icon={iconMapping[item.icon]} color={item.color} />
                        </div> */}
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
            <div className="home--intro--anim">
                <div className="block block-1"></div>
                <div className="block block-2"></div>
                <div className="ball"></div>
            </div>
                
        </div>
    )
}