import PropTypes from 'prop-types';
import "./SampleProject.css"

export function SampleProject({ title, hrefSite, sampleProjectDescription, sampleImageAlt, sampleImageSrc }) {
    return (
        <article className="sample-project">
            <div className="sample-project--image">
                <img src={sampleImageSrc} alt={sampleImageAlt} />
            </div>
            
            <a className="sample-project--title--link" href={hrefSite} target="_blank" rel="noopener noreferrer">
                <h3 className="sample-project--title">{title}</h3>
            </a>
            
            <p className="sample-project--description">{sampleProjectDescription}</p>
        </article>
    );
}

SampleProject.propTypes = {
    title: PropTypes.string,
    hrefSite: PropTypes.string,
    sampleProjectDescription: PropTypes.string,
    sampleImageAlt: PropTypes.string.isRequired,
    sampleImageSrc: PropTypes.string.isRequired,
};



