// import { Component } from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import apiService from '../../services';
import ErrorImage from '../ErrorImage';
import Loader from '../Loader';
import ImageGallery from '../ImageGallery';
import Button from '../Button';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function ImagesInfo({ imageName, prevName }) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (imageName !== prevName) {
      setPage(1);
    }
  }, [imageName, prevName]);

 
  useEffect(() => {
    if (imageName === '') {
      return;
    }

    setStatus(Status.PENDING);

    apiService
      .fetchImages(imageName, page)
      .then(newImages => {
        if (newImages.total !== 0) {
          setImages(
            prevImages => [...prevImages, ...newImages.hits],
            setStatus(Status.RESOLVED),
          );
          return;
        }
        return Promise.reject(new Error('Invalid request'));
      })

      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      })
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight - 970,
          behavior: 'smooth',
        });
      });
  }, [imageName, page]);

  const onLoadMore = () => {

    setPage(page + 1);

  };

  if (status === Status.IDLE) {
    return <p>Please enter your request</p>;
  }

  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.REJECTED) {
    return <ErrorImage message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <ImageGallery images={images} />
        {/* page={this.state.page} */}
        <Button onLoadMore={onLoadMore} />
      </>
    );
  }
}

ImagesInfo.propTypes = {
  imageName: PropTypes.string.isRequired,
};

export default ImagesInfo;
