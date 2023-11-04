import PropTypes from 'prop-types';
import "./SampleProject.css"

export function SampleProject({ title, hrefSite, sampleProjectDescription, sampleImageAlt, sampleImageSrc }) {
    return (
        <article className="sample-project">
            <div className="sample-project--image-container">
                <img className="sample-project--image" src={sampleImageSrc} alt={sampleImageAlt} />
            </div>
            <h3 className="sample-project--title">
                <a href={hrefSite}>{title}</a>
            </h3>
            <p className="sample-project--description">{sampleProjectDescription}</p>
        </article>
    );
}

SampleProject.propTypes = {
    title: PropTypes.string,
    hrefSite: PropTypes.string,
    sampleProjectDescription: PropTypes.string,
    sampleImageAlt: PropTypes.string,
    sampleImageSrc: PropTypes.string.isRequired,
};



