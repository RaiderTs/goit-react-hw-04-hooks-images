import PropTypes from 'prop-types';
import style from './Button.module.css';

function Btn({ onClick }) {
  return (
    <button type="button" className={style.btn} onClick={() => onClick()}>
      Load more
    </button>
  );
}

Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Btn;