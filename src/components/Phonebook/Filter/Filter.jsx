import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ handleInput, filter }) {
  return (
    <form className={s.form}>
      <label className={s.label} htmlFor="filter">
        Find contacts by name
        <input
          className={s.input}
          type="text"
          name="filter"
          onChange={handleInput}
          value={filter}
        />
      </label>
    </form>
  );
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};
