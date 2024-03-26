import React from 'react';
import { useEffect } from 'react';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');
import './MenuModal.css';
import Navbar from './Navbar';
import Logo from '../Logo/Logo';

export interface MenuModalTypes {
    isMenuOpen: boolean;
    closeModal: () => void;
}

export default function MenuModal ({ isMenuOpen, closeModal } : MenuModalTypes) {
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);
    return (
        <ReactModal
            className="menu-modal"
            isOpen={isMenuOpen}
            onRequestClose={closeModal}
            style={{
                overlay: {
                zIndex: 2000,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(189, 189, 189, 0.8)',
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'start',
                },
                content: {
                  position: 'relative',
                  overflow: 'auto',
                  borderRadius: '0',
                  padding: '30px',
                  border: 'none',
                  background: '#fbf6ea',
                  width: '100%',
                  height: '100%',   
                },
            }}   
        >
            <div className='modal-header'>
                <Logo color = "var(--text-dark-color)" fontWeight={600}/>
                <button className='modal-close-button' onClick={closeModal}>
                    <span className='sr-only'>Close Navigation Menu</span>
                </button>
            </div>
            
            <Navbar closeModal={closeModal} />
            
        </ReactModal>
    );
}

