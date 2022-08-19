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

console.log(arrayDate('2021-05-00', '2021-06-29'));

function daysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

function checkDate(dateStr: string) {
  const [year, month, day] = dateStr.split('-');
  const date: Date = new Date(Number(year), Number(month) - 1, Number(day));
  return date.getDay() == 0 || date.getDay() == 6;
}

export default function CalcDate(
  dayWeekBefor: string,
  dayWeekAfter: string,
  deliveryTypeDay: string
) {}
