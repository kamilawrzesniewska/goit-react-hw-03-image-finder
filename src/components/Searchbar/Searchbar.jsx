import styles from './Searchbar.module.css'
import propTypes from 'prop-types';

export const Searchbar = ({ handleSubmit }) => {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmitStyle}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }

Searchbar.propTypes = {
    handleSubmit: propTypes.func.isRequired,
  };