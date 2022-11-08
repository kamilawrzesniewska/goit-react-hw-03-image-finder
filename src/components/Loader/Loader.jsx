import styles from './Loader.module.css';
import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <BallTriangle
        visible={true}
        height="80"
        width="80"
        wrapperStyle={{}}
        color="#123456"
        ariaLabel="ball-triangle-loading"
      />
    </div>
  );
};