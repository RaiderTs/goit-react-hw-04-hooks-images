// import { ImSearch } from 'react-icons/im';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import style from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [imageName, setImageName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (imageName.trim() === '') {
      toast.error('Enter a value to search');
      return;
    }

    onSubmit(imageName);
    setImageName('');
  };

  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={e => handleSubmit(e)}>
        <button type="submit" className={style.btn}>
          <span className={style.label}>Search</span>
          {/* <ImSearch  /> */}
        </button>

        <input
          className={style.input}
          type="text"
          value={imageName}
          autoComplete="off"
          autoFocus
          placeholder="Search images"
          onChange={event =>
            setImageName(event.currentTarget.value.toLowerCase())
          }
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
