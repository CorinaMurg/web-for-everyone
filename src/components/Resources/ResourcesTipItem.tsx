import React from 'react';
import { useState } from 'react';
import ResourcesTipModal from './ResourcesTipModal';
import { ResourcesTipDataTypes } from '../../data/resourcesData/resourcesTipsData';
import './ResourcesTipItem.css';


type ResourcesTipItemTypes = ResourcesTipDataTypes & {
    isModalOpen?: boolean;
    closeModal?: () => void;
    tip: React.ReactNode;
    className?: string;
};

export default function ResourcesTipItem ({ 
    tip, 
    left, 
    right, 
    descriptionLeft, 
    descriptionRight 
    } : ResourcesTipItemTypes) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal() {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div className="tip">
            <div className="dash"></div>
            <button className="tip-button" onClick={toggleModal}>{tip}</button>
            <ResourcesTipModal
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



