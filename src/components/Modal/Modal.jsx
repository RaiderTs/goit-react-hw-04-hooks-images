import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom'; // Для рендера портала
import style from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root'); 

function Modal({ onClose, src, alt }) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      window.addEventListener('keydown', handleKeyDown);
      isFirstRender.current = false;
      return;
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {

    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      onClose(); 
    }
  };

  const handleBackdropClick = event => {

    if (event.currentTarget === event.target) {

      onClose(); 
    }
  };

  return createPortal(
    <div className={style.backdrop} onClick={handleBackdropClick}>
      <div className={style.modal}>
        <img src={src} alt={alt} />
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Modal;
