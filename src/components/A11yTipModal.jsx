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
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                content: {
                  position: 'relative',
                  overflow: 'auto',
                  borderRadius: '10px',
                  padding: '30px',
                  border: 'none',
                  background: 'white',
                  maxWidth: '500px', // Set a max-width if you want to limit its size
                  maxHeight: '80%',  // Set a max-height if you want to limit its size
                  overflowY: 'auto', // Add scroll if content is too long
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