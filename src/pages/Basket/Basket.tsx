import styles from '../Basket/basket.module.scss';
import BasketContentCard from './basketComponents/BasketContent';
const Basket = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.basket}>
        <h2 className={styles.basketTitle}>Корзина</h2>
        <BasketContentCard />
      </div>
      <div className={styles.basketLine}></div>
      <div style={{ padding: '50px 0' }}></div>
    </div>
  );
};

export default Basket;
