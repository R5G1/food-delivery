import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../components/Context/Context';
import styles from '../homeComponents/style/HomeProductsCard.module.scss';
import img from './images/6.png';
interface IFormInput {
  id?: string;
  name: string;
  price?: string;
  priceNumber: number;
  type?: string;
  gost?: string;
}

function ProductsCard(): JSX.Element {
  const { isArray, setisArray, styleBtnSort, setStyleBtnSort } = useContext(AuthContext);
  const { isNewArray, setisNewArray } = useContext(AuthContext);
  const [count, setCount] = useState<number>(0);

  function aadhit(array: string) {
    const itemRu = array.toLowerCase().includes('о');
    const itemEn = array.toLowerCase().includes('o');
    if (itemRu || itemEn) {
      return <div className={styles.productsCardActionName}>хит</div>;
    }
  }
  function aadAction(array: string) {
    const itemRu = array.toLowerCase().includes('а');
    const itemEn = array.toLowerCase().includes('a');
    if (itemRu || itemEn) {
      return <div className={styles.productsCardActionName}>акция</div>;
    }
  }
  function addNumber() {
    return setCount(count + 1);
  }
  function minusNumber() {
    if (count === 0) {
      return setCount(count);
    }
    return setCount(count - 1);
  }
  function addBasketCount(number: number) {
    const newAray = [...isArray];
    newAray.forEach((item, index: number) => {
      if (number === index) {
        item.priceNumber = count;
      }
    });
    setisArray(newAray);
    setCount(0);
  }

  const listItems = isNewArray.map((item: IFormInput, index: number) => (
    <div
      className={styleBtnSort ? styles.productsCardContent : styles.productsCardContentFalse}
      key={item.id + Math.random().toString()}
    >
      <div className={styleBtnSort ? styles.productsCardAction : styles.productsCardActionFalse}>
        {aadhit(item.name)}
        {aadAction(item.name)}
      </div>
      <img className={styles.productsCardImg} src={img} alt="" />

      <div className={styles.productsCardGost}>{item.gost}</div>
      <div className={styles.productsCardName}>{item.name}</div>
      <div className={styles.productsCardType}>{item.type}</div>
      <div className={styles.productsCardPrice}>{item.price} руб.</div>
      <div
        className={
          styleBtnSort ? styles.productsCardHoverConteiner : styles.productsCardHoverConteinerFalse
        }
      >
        <div className={styles.productsCardHoverContent}>
          <p>{item.price} руб.</p>
          <div className={styles.productsCardPriceHoverInput}>
            <button onClick={addNumber}>+</button>
            <input
              type="number"
              defaultValue={count}
              onChange={(e) => setisArray(e.target.value)}
            />
            <button onClick={minusNumber}>-</button>
          </div>
        </div>
        <div className={styles.productsCardHoverBtn}>
          <button onClick={() => addBasketCount(index)}>В корзину</button>
          <button>Подробнее</button>
        </div>
      </div>
    </div>
  ));
  return (
    <div
      className={styleBtnSort ? styles.productsCardConteiner : styles.productsCardConteinerFalse}
    >
      {listItems}
    </div>
  );
}

export default ProductsCard;
