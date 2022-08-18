import styles from '../homeComponents/style/HomeContentCard.module.scss';
import ProductsCard from './HomeProductsCard';

function HomeContentCard() {
  return (
    <div className={styles.conteiner}>
      <div className={styles.homeContentCardConteiner}>
        <ProductsCard />
      </div>
    </div>
  );
}
export default HomeContentCard;
