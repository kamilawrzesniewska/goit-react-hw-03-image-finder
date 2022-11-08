import propTypes from 'prop-types';
import styles from './Modal.module.css';

export const Modal = ({ clickImage, handleClose }) => {
  return (
    <div onClick={() => handleClose()} className={styles.Overlay}>
      <div className={styles.modal}>
        <img src={clickImage.largeImageURL} alt={clickImage.tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  clickImage: propTypes.object.isRequired,
  handleClose: propTypes.func.isRequired,
};
