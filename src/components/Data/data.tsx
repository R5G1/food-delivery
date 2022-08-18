import { IFormInput } from '../Type/Type';

export const dataType: IFormInput[] = [
  {
    id: 'string',
    name: 'ОПБ1',
  },
  {
    id: 'string',
    name: 'ОПБ2',
  },
  {
    id: 'string',
    name: 'КХ',
  },
];
export const dataArray: IFormInput[] = [
  {
    id: 'string1',
    name: 'Опора трубчатая ТР',
    price: 200,
    priceNumber: 2,
    type: 'ОПБ2',
    gost: 'ГОСТ 14911-82',
  },
  {
    id: 'string2',
    name: 'Опора трубчатая ТР',
    price: 200,
    priceNumber: 1,
    type: 'ОПБ2',
    gost: 'ГОСТ 14911-82',
  },
  {
    id: 'string3',
    name: 'Опора подвижная ',
    price: 400,
    priceNumber: 3,
    type: 'ОПБ1',
    gost: 'ОСТ 36-146-88',
  },
  {
    id: 'string4',
    name: 'Опора подвижная',
    price: 400,
    priceNumber: 4,
    type: 'ОПБ1',
    gost: 'ОСТ 36-146-88',
  },
  {
    id: 'string5',
    name: 'Опора подвижная',
    price: 500,
    priceNumber: 0,
    type: 'КХ',
    gost: 'НТС 65-06',
  },
  {
    id: 'string6',
    name: 'Опора корпусная хомутовая',
    price: 500,
    priceNumber: 1,
    type: 'КХ',
    gost: 'НТС 65-06',
  },
];

export const dataStyleBtnSort = true;
