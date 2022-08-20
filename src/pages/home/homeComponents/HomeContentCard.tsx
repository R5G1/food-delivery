import { useContext } from 'react';
import { AuthContext } from '../../../components/Context/Context';
import styles from '../homeComponents/style/HomeContentCard.module.scss';
import ProductsCard from './HomeProductsCard';

function HomeContentCard() {
  const { isArray, setisArray } = useContext(AuthContext);
  function reset() {
    setisArray([]);
  }
  return (
    <div className={styles.conteiner}>
      <div className={styles.homeContentCardConteiner}>
        <button className={styles.hCMGBtn} onClick={reset}>
          очистить массив{' '}
        </button>
        <ProductsCard />
      </div>
    </div>
  );
}
export default HomeContentCard;
