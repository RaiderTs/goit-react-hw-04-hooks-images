import PropTypes from 'prop-types';
import errorImage from '../../img/—Pngtree—red gradient ring fork symbol_4609561.png';
import style from './ErrorImage.module.css';

function ErrorImage({ message }) {
  return (
    <div role="alert" className={style.errorWrapper}>
      <img src={errorImage} width="550" alt="sadcat" />
      <p text={message} className={style.text}>
        {message}
      </p>
    </div>
  );
}

ErrorImage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorImage;
