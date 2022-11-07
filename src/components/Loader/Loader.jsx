import styles from './Loader.module.css';
import { TailSpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        wrapperStyle={{}}
        color="#567342"
        ariaLabel="oval-loading"
      />
    </div>
  );
};