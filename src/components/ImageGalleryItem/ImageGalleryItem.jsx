// import React, { Component } from 'react';
import { useState } from 'react'
import PropTypes from 'prop-types';
import Modal from '../Modal';
import style from './ImageGalleryItem.module.css';

function ImageGalleryItem({ src, alt, largeImageUrl }) {
  const [showModal, setShowModal] = useState(false);


  const toggleModal = () => {

    setShowModal(!showModal);
  };

  return (
    <li className={style.item}>
      <img
        onClick={toggleModal}
        src={src}
        alt={alt}
        className={style.image}
      />
      {showModal && (
        <Modal onClose={toggleModal} src={largeImageUrl} alt={alt} />
      )}
    </li>
  );
}
ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
