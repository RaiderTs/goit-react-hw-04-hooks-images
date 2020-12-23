import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import style from './ImageGallery.module.css';

function ImageGallery({ images }) {
  return (
    <ul className={style.list}>
      {images.map(image => (
        <ImageGalleryItem 
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          largeImageUrl={image.largeImageURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
