
import { useState } from 'react';
import A11yTipModal from './A11yTipModal';
import './A11yTipItem.css';

import PropTypes from 'prop-types';
import React from 'react';

export default function A11yTipItem({ tip, left, right, descriptionLeft, descriptionRight }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal() {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div className="tip">
            <div className="square"></div>
            <button className="tip-button" onClick={toggleModal}>{tip}</button>
            <A11yTipModal
                className="tip-modal" // Add the className prop here
                isModalOpen={isModalOpen}
                isModalOpen={isModalOpen}
                closeModal={toggleModal}
                tip={tip}
                left={left}
                right={right}
                descriptionLeft={descriptionLeft}
                descriptionRight={descriptionRight}
            />
        </div>
    );
}

A11yTipItem.propTypes = {
    tip: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
    descriptionLeft: PropTypes.arrayOf(PropTypes.string).isRequired,
    descriptionRight: PropTypes.arrayOf(PropTypes.string).isRequired,
};


