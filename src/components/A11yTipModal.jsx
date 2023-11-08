import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

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
                },
            }}
        >
            <h2>{a11yTip}</h2>
            <p>{a11yTipDescription}</p>
            <button type="button" onClick={closeModal}>Close</button>

        </ReactModal>
    );
};

