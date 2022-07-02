import PropTypes from 'prop-types';
import s from './Contacts.module.css';

function Contacts({ contacts, handleBtn }) {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={s.listItem}>
              <span>
                {name}: {number}
              </span>

              <button
                className={s.button}
                type="button"
                onClick={() => handleBtn(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
