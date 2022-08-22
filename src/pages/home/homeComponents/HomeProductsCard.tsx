import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../components/Context/Context';
import { IarrayDifference, IFormInputOrder } from '../../../components/Type/Type';
import styles from '../homeComponents/style/HomeProductsCard.module.scss';
import CalcDate from './HomeFunctionCard';
import calcDate from './HomeFunctionCard';
interface IFormInput {
  id?: string;
  lastName?: string;
  name?: string;
  fatherName?: string;
  tel?: number;
  dateOrder?: string;
  foodName?: string;
  dateDeliveryBefor: string;
  dateDeliveryAfter: string;
  deliveryTypeDay: string;
  dayWeekBefor: string;
  dayWeekAfter: string;
}

function ProductsCard(): JSX.Element {
  const { isArray, setisArray } = useContext(AuthContext);

  function arrayDifference(
    dateDeliveryBefor: string,
    dateDeliveryAfter: string,
    deliveryTypeDay: string,
    dayWeekBefor: string,
    dayWeekAfter: string
  ) {
    const result = CalcDate(
      dateDeliveryBefor,
      dateDeliveryAfter,
      deliveryTypeDay,
      dayWeekBefor,
      dayWeekAfter
    ).length;
    return deliveryTypeDay === 'через день на 2 дня' ? result * 2 : result;
  }

  const listItems = isArray.map((item: IFormInput, index: number) => (
    <div className={styles.productsCardContent} key={item.id + Math.random().toString()}>
      <div>
        <div className={styles.productsCardName}>
          период: {item.dateDeliveryBefor} - {item.dateDeliveryAfter}
        </div>
        <div className={styles.productsCardName}>доставка: {item.deliveryTypeDay} </div>
        <div className={styles.productsCardName}>
          дни питания: {item.dayWeekBefor}-{item.dayWeekAfter}
        </div>
        <div className={styles.productsCardName}>
          Всего будет доставлено{' '}
          {arrayDifference(
            item.dateDeliveryBefor,
            item.dateDeliveryAfter,
            item.deliveryTypeDay,
            item.dayWeekBefor,
            item.dayWeekAfter
          )}{' '}
          порций.
        </div>
      </div>
      <div className={styles.productsCardDate}>
        {CalcDate(
          item.dateDeliveryBefor,
          item.dateDeliveryAfter,
          item.deliveryTypeDay,
          item.dayWeekBefor,
          item.dayWeekAfter
        ).join(' , ')}
      </div>
    </div>
  ));
  return <div className={styles.productsCardConteiner}>{listItems}</div>;
}

export default ProductsCard;
