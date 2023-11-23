import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./SampleProject.css"

export function SampleProject({ title, description, to, toAriaLabel, imageAlt, imageSrc }) {
    return (
        <Link className="sample-project--link" 
            to={to} 
            aria-label={toAriaLabel}
        >
            <article className="sample-project">
                <div className="sample-project--image">
                    <img src={imageSrc} alt={imageAlt} loading='lazy'/>
                </div>
                <h3 className="sample-project--title">{title}</h3>
                <p className="sample-project--description">{description}</p>
            </article>
        </Link>
    );
}

SampleProject.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    toAriaLabel: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
};



