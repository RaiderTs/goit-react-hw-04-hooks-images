import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import apiService from '../../services';
import ErrorImage from '../ErrorImage';
import Loader from '../Loader';
import ImageGallery from '../ImageGallery';
import Button from '../Button';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

function ImagesInfo({ imageName, images, page, setImages, setPage }) {
  const [error, setError] = useState(null);
  // const [status, setStatus] = useState(Status.IDLE);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (imageName === '') {
      console.log('Ничего не введено');
      return;
    } else if (imageName) {
      fetchImages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageName]);

  useEffect(() => {
    scroll();
  });

  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const fetchImages = () => {
    // setStatus(Status.PENDING);
    setIsLoading(isLoading => !isLoading);

    apiService
      .fetchImages(imageName, page)
      .then(newImages => {
        if (newImages.total !== 0) {
          setImages(prevImages => [...prevImages, ...newImages.hits]);
          setPage(page => page + 1);
          // setStatus(Status.RESOLVED);
        } else return Promise.reject(new Error('Invalid request'));
      })
      .catch(error => {
        setError(error);
        // setStatus(Status.REJECTED);
      })
      .finally(() => setIsLoading(isLoading => !isLoading));
  };

  // if (status === Status.IDLE) {
  //   return <p>Please enter your request</p>;
  // }

  // if (status === Status.PENDING) {
  //   return <Loader isLoading={isLoading} />;
  // }

  // if (status === Status.REJECTED) {
  //   return <ErrorImage message={error.message} />;
  // }

  // if (status === Status.RESOLVED) {
  return (
    <>
      {error && <ErrorImage textError={error} />}
      <ImageGallery images={images} />
      <Loader isLoading={isLoading} />
      {/* page={this.state.page} */}
      {/* <Button onClick={fetchImages} /> */}
      {images.length > 0 && !isLoading && !error && (
        <Button onClick={fetchImages} />
      )}
    </>
  );
}
// }

ImagesInfo.propTypes = {
  imageName: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  setImages: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default ImagesInfo;

// // import { Component } from 'react';
// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import apiService from '../../services';
// import ErrorImage from '../ErrorImage';
// import Loader from '../Loader';
// import ImageGallery from '../ImageGallery';
// import Button from '../Button';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

// function ImagesInfo({ imageName, prevName }) {
//   const [images, setImages] = useState([]);
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState(Status.IDLE);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     if (imageName !== prevName) {
//       setPage(1);
//     }
//   }, [imageName, prevName]);

//   useEffect(() => {
//     if (imageName === '') {
//       return;
//     }

//     setStatus(Status.PENDING);

//     apiService
//       .fetchImages(imageName, page)
//       .then(newImages => {
//         if (newImages.total !== 0) {
//           setImages(
//             prevImages => [...prevImages, ...newImages.hits],
//             setStatus(Status.RESOLVED),
//           );
//           return;
//         }
//         return Promise.reject(new Error('Invalid request'));
//       })

//       .catch(error => {
//         setError(error);
//         setStatus(Status.REJECTED);
//       })
//       .finally(() => {
//         window.scrollTo({
//           top: document.documentElement.scrollHeight - 970,
//           behavior: 'smooth',
//         });
//       });
//   }, [imageName, page]);

//   const onLoadMore = () => {

//     setPage(page + 1);

//   };

//   if (status === Status.IDLE) {
//     return <p>Please enter your request</p>;
//   }

//   if (status === Status.PENDING) {
//     return <Loader />;
//   }

//   if (status === Status.REJECTED) {
//     return <ErrorImage message={error.message} />;
//   }

//   if (status === Status.RESOLVED) {
//     return (
//       <>
//         <ImageGallery images={images} />
//         {/* page={this.state.page} */}
//         <Button onLoadMore={onLoadMore} />
//       </>
//     );
//   }
// }

// ImagesInfo.propTypes = {
//   imageName: PropTypes.string.isRequired,
// };

// export default ImagesInfo;
