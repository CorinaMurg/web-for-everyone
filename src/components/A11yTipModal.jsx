import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

import PropTypes from 'prop-types';

export default function A11yTipModal ({isModalOpen, closeModal, a11yTip, a11yTipDescription}){
    return (
        <ReactModal
            className="modal"
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={{
                overlay: {
                    zIndex: 1000,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(189, 189, 189, 0.5)',
                },
                content: {
                    position: 'absolute',
                    overflow: 'auto',
                    borderRadius: '10px',
                    padding: '30px',
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    border: 'none',
                    background: 'white',
                },
            }}
        >
            <h2>{a11yTip}</h2>
            <p>{a11yTipDescription}</p>
            <button type="button" onClick={closeModal}>Close</button>

        </ReactModal>
    );
}

A11yTipModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    a11yTip: PropTypes.string.isRequired,
    a11yTipDescription: PropTypes.string.isRequired,
};