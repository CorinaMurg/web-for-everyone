import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');
import './A11yTipModal.css';

import PropTypes from 'prop-types';

export default function A11yTipModal ({isModalOpen, closeModal, tip, leftDescription, rightDescription}){
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
                  maxWidth: '500px',
                  maxHeight: '80%',  
                  overflowY: 'auto', 
                },
            }}   
        >
            <h3>{tip}</h3>
            <p>{leftDescription}</p>
            <p>{rightDescription}</p>
            <button type="button" onClick={closeModal}>Close</button>
        </ReactModal>
    );
}

A11yTipModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    tip: PropTypes.string.isRequired,
    leftDescription: PropTypes.string.isRequired,
    rightDescription: PropTypes.string.isRequired,
};