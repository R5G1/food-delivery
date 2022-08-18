export interface IFormInput {
  id?: string;
  name?: string;
  price?: number;
  priceNumber?: number;
  type?: string;
  gost?: string;
}
export interface IFormInputOrder {
  id?: string;
  lastName?: string;
  name?: string;
  fatherName?: string;
  tel?: number;
  dateOrder?: string;
  foodName?: string;
  dateDeliveryBefor?: string;
  dateDeliveryAfter?: string;
  deliveryTypeDay?: string;
  dayWeekBefor?: string;
  dayWeekAfter?: string;
}

export interface isArray {
  id?: string;
  name?: string;
  price: string;
  priceNumber?: number;
  type?: string;
  gost?: string;
}
export interface IbasketFormInput {
  lastName?: string;
  name?: string;
  fatherName?: string;
  tel?: number;
  email?: string;
  companyName?: string;
}
