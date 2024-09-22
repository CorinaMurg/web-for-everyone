import React from 'react';
import { useEffect, useRef } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');
import './MenuModal.css';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import { useThemeClass } from '../../hooks/useThemeClass';

export interface MenuModalTypes {
    isMenuOpen: boolean;
    closeModal: () => void;
}

export default function MenuModal ({ isMenuOpen, closeModal } : MenuModalTypes) {
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    const afterOpenModal = () => {
        closeButtonRef.current?.focus();
    };

    const { theme } = useContext(ThemeContext);
    const themeClass = useThemeClass();
    
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
            className={`menu-modal ${themeClass}`}
            // https://reactcommunity.org/react-modal/accessibility/
            contentLabel='Menu'
            isOpen={isMenuOpen}
            onRequestClose={closeModal}
            onAfterOpen={afterOpenModal}
            style={{
                overlay: {
                zIndex: 2000,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
                  background: 'var(--body-bg-color)',
                  width: '100%',
                  height: '100%',   
                },
            }}   
        >
            <div className='modal-header'>
                <Logo theme={theme}/>
                <button className='modal-close-button' onClick={closeModal} ref={closeButtonRef}>
                <svg id="close-button" width="30" height="30" viewBox="0 0 384 512">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
                    <span className='sr-only'>Close Menu</span>
                </button>
            </div>
            
            <Navbar closeModal={closeModal} />
            
        </ReactModal>
    );
}

