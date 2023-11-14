import PropTypes from 'prop-types';
import "./SampleProject.css"

export function SampleProject({ title, hrefSite, sampleProjectDescription, sampleImageAlt, sampleImageSrc }) {
    return (
        <a className="sample-project--link" href={hrefSite} target="_blank" rel="noopener noreferrer">
            <article className="sample-project">
                <div className="sample-project--image">
                    <img src={sampleImageSrc} alt={sampleImageAlt} loading='lazy'/>
                </div>
                <h3 className="sample-project--title">{title}</h3>
                <p className="sample-project--description">{sampleProjectDescription}</p>
            </article>
        </a>
    );
}

SampleProject.propTypes = {
    title: PropTypes.string,
    hrefSite: PropTypes.string,
    sampleProjectDescription: PropTypes.string,
    sampleImageAlt: PropTypes.string.isRequired,
    sampleImageSrc: PropTypes.string.isRequired,
};



