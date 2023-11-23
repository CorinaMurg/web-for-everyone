import React from 'react';
import { useState, FC } from 'react';
import A11yTipModal from './A11yTipModal';
import { A11yTipData } from '../../data/a11yData/a11yTipsData';
import './A11yTipItem.css';


type A11yTipItemProps = A11yTipData & {
    isModalOpen?: boolean;
    closeModal?: () => void;
    tip: React.ReactNode;
    className?: string;
};

export default function A11yTipItem ({ 
    tip, 
    left, 
    right, 
    descriptionLeft, 
    descriptionRight 
    } : A11yTipItemProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal() {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div className="tip">
            <div className="dash"></div>
            <button className="tip-button" onClick={toggleModal}>{tip}</button>
            <A11yTipModal
                className="tip-modal" 
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



