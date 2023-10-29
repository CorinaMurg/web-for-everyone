import PropTypes from 'prop-types';
import "./SampleProject.css"

export function SampleProject({ title, sampleProjectDescription, sampleImageAlt, sampleImageSrc }) {
    return (
        <div className="sample-project">
            <div className="sample-project--image-container">
                <img className="sample-project--image" src={sampleImageSrc} alt={sampleImageAlt || ""} />
            </div>
            <h3 className="sample-project--title">{title}</h3>
            <p className="sample-project--description">{sampleProjectDescription}</p>
        </div>
    );
}

SampleProject.propTypes = {
    title: PropTypes.string,
    sampleProjectDescription: PropTypes.string,
    sampleImageAlt: PropTypes.string,
    sampleImageSrc: PropTypes.string.isRequired,
};



