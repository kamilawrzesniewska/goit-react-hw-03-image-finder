import propTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ onClickBtn }) => (
    <button className={styles.Button} type="button" onClickBtn={onClickBtn}>
      Load more
    </button>
  );
  
  Button.propTypes = {
    onClickBtn: propTypes.func.isRequired,
  };