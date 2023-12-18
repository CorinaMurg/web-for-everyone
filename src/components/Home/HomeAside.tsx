import React from 'react';
import { Link } from 'react-router-dom';
import WELogo from '../WELogo/WELogo';
import { homeAsideData } from '../../data/homeData/homeAsideData';
import './HomeAside.css';

export default function HomeIntro() {

    return (
        <aside className="aside">
            <h2>
                How can&nbsp; <WELogo size="1.5rem"/> &nbsp;help
            </h2>
            <ul>
                {homeAsideData.map((article, index) => (
                    <li key={index}> 
                        <article> 
                            <Link to="/resources" className='aside-link'>
                                <h3>{article.title}</h3>
                                <p>{article.description}</p>
                            </Link>
                        </article>
                    </li>
                ))}
            </ul>
        </aside>
    )
}