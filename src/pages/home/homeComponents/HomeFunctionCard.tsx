function arrayDate(paramsBefor: string, paramsAfter: string) {
  const [yearBefor, monthBefor, dayBefor] = paramsBefor.split('-');
  const [yearAfter, monthAfter, dayAfter] = paramsAfter.split('-');

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

  weekDay.map((item, index) => {
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
    return date.getDay() >= 0 && date.getDay() <= weekDay.length;
  }
  if (numberParams1 <= numberParams2) {
    return date.getDay() >= numberParams1 && date.getDay() <= numberParams2;
  }
  if (numberParams1 >= numberParams2) {
    return (date.getDay() > numberParams2 && date.getDay() < numberParams1) == false;
  }
}

function CalcDate(
  dateDeliveryBefor: string,
  dateDeliveryAfter: string,
  deliveryTypeDay: string,
  dayWeekBefor: string,
  dayWeekAfter: string
): string[] | string | undefined | any {
  const result = arrayDate(dateDeliveryBefor, dateDeliveryAfter).filter((item, index) => {
    return checkDate(item, dayWeekBefor, dayWeekAfter);
  });

  const ferstDay = +result[0].split('-')[2] % 2 == 0;

  const resultOneDay = result.filter((item, index) => {
    const [yearBefor, monthBefor, dayBefor] = item.split('-');

    return ferstDay ? +dayBefor % 2 == 0 : +dayBefor % 2 > 0;
  });
  if (deliveryTypeDay == 'ежедневная') {
    return result;
  }
  if (deliveryTypeDay == 'через день на один день') {
    return resultOneDay.map((item) => `${item} - 1 порции, `);
  }
  if (deliveryTypeDay == 'через день на 2 дня') {
    return resultOneDay.map((item) => `${item} - 2 порции, `);
  }
}
export default CalcDate;
