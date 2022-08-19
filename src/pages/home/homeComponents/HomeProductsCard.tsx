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

// interface IcheckDate {}
function ProductsCard(): JSX.Element {
  const { isArray, setisArray, isNewArray, setisNewArray } = useContext(AuthContext);

  function arrayDate(dayWeekBefor: string, dayWeekAfter: string) {
    const [yearBefor, monthBefor, dayBefor] = dayWeekBefor.split('-');
    const [yearAfter, monthAfter, dayAfter] = dayWeekAfter.split('-');

    const array: string[] = [];
    let sumMonth = 0;

    const sumDay = +dayAfter - +dayBefor;

    function crietArray(params: number): void {
      let sumMonthFor = 1;
      for (let i = 0; i <= params + sumMonth; i++) {
        let sumArray = `${yearBefor}-${monthBefor}-${+dayBefor + i}`;

        if (daysInMonth(+monthBefor, +yearBefor) <= +dayBefor + i) {
          sumArray = `${yearBefor}-${+monthBefor + 1}-${sumMonthFor++}`;
        }

        array.push(sumArray);
      }
    }

    if (+monthAfter - +monthBefor === 1) {
      sumMonth = daysInMonth(+monthBefor, +yearBefor) - +dayBefor;
    }
    crietArray(sumDay);
    return array;
  }

  function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }

  function checkDate(dateStr: string, params1: string, params2: string) {
    const weekDay = [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
    ];

    let numberParams1 = 0;
    let numberParams2 = 0;
    const result = weekDay.map((item, index) => {
      if (item == params1) {
        numberParams1 = index;
      }
      if (item == params2) {
        numberParams2 = index;
      }
    });

    const [year, month, day] = dateStr.split('-');
    const date: Date = new Date(Number(year), Number(month) - 1, Number(day));

    if (params1 == weekDay[1] && params2 == weekDay[0]) {
      return date.getDay();
    }
    if (numberParams1 <= numberParams2) {
      return date.getDay() >= numberParams1 && date.getDay() <= numberParams2;
    }
    if (numberParams1 >= numberParams2) {
      return date.getDay() >= numberParams2 && date.getDay() <= numberParams1;
    }
  }

  function calcDate(
    dateDeliveryBefor: string,
    dateDeliveryAfter: string,
    deliveryTypeDay: string,
    dayWeekBefor: string,
    dayWeekAfter: string
  ) {
    const result = arrayDate('2022-05-01', '2022-06-29').filter((item, index) => {
      return checkDate(item, dayWeekBefor, dayWeekAfter);
    });
    return result;
  }
  console.log(calcDate('2021-05-01', '2021-06-29', 'ежедневная', 'Понедельник', 'Воскресенье'));

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
