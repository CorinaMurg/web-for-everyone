
import { useState } from 'react';
import A11yTipModal from './A11yTipModal';
import './A11yTipItem.css';

import PropTypes from 'prop-types';

export default function TipItem({ tip, description }) {
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
                a11yTip={tip}
                a11yTipDescription={description}
            />
        </div>
    );
}

TipItem.propTypes = {
    tip: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};


