import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../components/Context/Context';
import { IFormInputOrder } from '../../../components/Type/Type';
import styles from '../homeComponents/style/HomeProductsCard.module.scss';
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
  deliveryTypeDay?: string;
  dayWeekBefor?: string;
  dayWeekAfter?: string;
}

function ProductsCard(): JSX.Element {
  const { isArray, setisArray, isNewArray, setisNewArray } = useContext(AuthContext);

  // function calcDate(dayWeekBefor: any, dayWeekAfter: string, deliveryTypeDay: string) {
  //   const day = dayWeekBefor.getDay();
  //   console.log(dayWeekBefor);
  //   const isWeekend = day == 6 || day == 0;
  // }

  // console.log(calcDate('2021-06-20', '2021-06-29', 'ежедневная'));

  console.log(checkDate('2021-06-20'));
  console.log(checkDate('2021-06-29'));

  function checkDate(dateStr: any) {
    const [day, month, year] = dateStr.split('-');

    const date = new Date(year, month - 1, day);

    return date.getDay() == 0 || date.getDay() == 6;
  }

  const listItems = isNewArray.map((item: IFormInput, index: number) => (
    <div className={styles.productsCardContent} key={item.id + Math.random().toString()}>
      <div className={styles.productsCardName}>
        период: {item.dateDeliveryBefor} - {item.dateDeliveryAfter}
      </div>
      <div className={styles.productsCardName}>доставка: {item.deliveryTypeDay} </div>
      <div className={styles.productsCardName}>
        дни питания: {item.dayWeekBefor}-{item.dayWeekAfter}
      </div>
    </div>
  ));
  return <div className={styles.productsCardConteiner}>{listItems}</div>;
}

export default ProductsCard;
