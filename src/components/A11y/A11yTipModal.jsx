import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');
import './A11yTipModal.css';

import PropTypes from 'prop-types';

export default function A11yTipModal ({isModalOpen, closeModal, tip, left, right, descriptionLeft, descriptionRight}) {
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
                  backgroundColor: 'rgba(189, 189, 189, 0.8)',
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
                  minWidth: '300px',
                  maxHeight: '80%',  
                  overflowY: 'auto', 
                },
            }}   
        >
            <h3>{tip}</h3>
            <h4>{left}</h4>
            <div className='tip-description-div'>
                {descriptionLeft.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
            <h4>{right}</h4>
            <div className='tip-description-div'>
                {descriptionRight.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>

            <button type="button" onClick={closeModal}>Close</button>
        </ReactModal>
    );
}

A11yTipModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    tip: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
    descriptionLeft: PropTypes.arrayOf(PropTypes.string).isRequired,
    descriptionRight: PropTypes.arrayOf(PropTypes.string).isRequired,
};