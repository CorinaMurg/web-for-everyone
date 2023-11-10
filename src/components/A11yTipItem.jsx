
import { useState } from 'react';
import A11yTipModal from './A11yTipModal';
import './A11yTipItem.css';

import PropTypes from 'prop-types';

export default function A11yTipItem({ tip, leftDescription, rightDescription }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal() {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div className="tip">
            <div className="square"></div>
            <button className="tip-button" onClick={toggleModal}>{tip}</button>
            <A11yTipModal className="tip-modal"
                isModalOpen={isModalOpen}
                closeModal={toggleModal}
                tip={tip}
                leftDescription={leftDescription}
                rightDescription={rightDescription}
            />
        </div>
    );
}

A11yTipItem.propTypes = {
    tip: PropTypes.string.isRequired,
    leftDescription: PropTypes.string.isRequired,
    rightDescription: PropTypes.string.isRequired,
};


