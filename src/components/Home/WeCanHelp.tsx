import React from 'react';
import { Link } from 'react-router-dom';
import WELogo from '../WELogo/WELogo';
import { weCanHelpData } from '../../data/homeData/weCanHelpData';
import './WeCanHelp.css';

export default function HomeIntro() {

    return (
        <section aria-labelledby="how-can-we-help" className="aside">
            <h2 id="how-can-we-help"
                aria-label="How can web for everyone help?"
            >
                How can&nbsp; <WELogo size="1.5rem"/> &nbsp;help
            </h2>
            <ul>
                {weCanHelpData.map((article, index) => (
                    <li key={index}> 
                        <div> 
                            <Link to="/resources" className='aside-link'>
                                <h3>{article.title}</h3>
                                <p>{article.description}</p>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}