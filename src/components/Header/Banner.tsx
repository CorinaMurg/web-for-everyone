import React from 'react';
import { useEffect } from 'react';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');
import './Banner.css';

type BannerTypes = {
    isBannerOpen: boolean;
    closeModal: () => void;
}

export default function Banner ({
    isBannerOpen, 
    closeModal, 
    } : BannerTypes) {

    return (
        <ReactModal
            className="banner-modal-content"
            overlayClassName="banner-modal-overlay"
            isOpen={isBannerOpen}
            onRequestClose={closeModal}
        >
            <div className='message'
                role="alertdialog"
                aria-label='this site is still a work in progress. 
                Expect UI and accessibility bugs. Thank you for your patience!'
            >
                Please note this site is still a work in progress. 
                Expect UI and accessibility bugs. Thank you for your patience!
            </div>
            <button 
                className='modal-close-button' 
                onClick={closeModal}
            >
                <span className='sr-only'>
                    Close message about site being a work in progress
                </span>
            </button>
        </ReactModal>
    );
}

