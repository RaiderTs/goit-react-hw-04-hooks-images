import PropTypes from 'prop-types';
import style from './Button.module.css';

function Btn({ onLoadMore }) {

  
  return (
    <button type="button" className={style.btn} onClick={onLoadMore}>
      Load more
    </button>
  );
}

Btn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Btn;