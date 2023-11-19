import { introCorina } from '../../data/homeData/introCorinaData.js';
import './HomeIntro.css';

export default function HomeIntro() {
    return (
        <div className="page-intro home--intro">
            <div className='white-bg'>
                <h1>HELLO, I&rsquo;m CORINA!</h1>

                <div className="home--intro--about">
                    {introCorina.description.map((item, index) => (
                        <div className="home--intro--lines" key={index}>
                            {/* <div className='home--intro--fontawe-container'>
                                <FontAwesomeIcon icon={iconMapping[item.icon]} color={item.color} />
                            </div> */}
                            <p className='subheading-p'>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>   
        </div>
    )
}