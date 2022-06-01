import { Hearts } from 'react-loader-spinner';
import s from './Styles.module.css';
function Loader() {
  return (
    <div className={s.load}>
      <Hearts
        ariaLabel="loading-indicator"
        color="red"
        height={80}
        width={80}
      />
    </div>
  );
}
export default Loader;
