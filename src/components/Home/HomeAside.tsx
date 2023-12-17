import React from 'react';
import { Link } from 'react-router-dom';
import WELogo from '../WELogo/WELogo';
import { homeAsideData } from '../../data/homeData/homeAsideData';
import './HomeAside.css';

export default function HomeIntro() {

    return (
        <aside className="aside">
            <h2>
                How can&nbsp; <WELogo size="2rem"/> &nbsp;help
            </h2>
            <ul>
                {homeAsideData.map((article, index) => (
                    <li key={index}> 
                        <article> 
                            <Link to="/resources">
                                <h3>{article.title}</h3>
                                <p>{article.description}
                                    {article.link &&
                                        <Link to={article.link}>
                                            {article.linkText}
                                        </Link>
                                    }  
                                </p>
                            </Link>
                        </article>
                    </li>
                ))}
            </ul>
        </aside>
    )
}