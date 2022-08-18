import { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthContext } from '../../../components/Context/Context';
import { IbasketFormInput } from '../../../components/Type/Type';
import Button from '../../../components/UI/button/Button';
import styles from './style/BasketContentForm.module.scss';
import imgName from './style/images/12.svg';
import imgTell from './style/images/2.svg';
import imgEmail from './style/images/3.svg';
import imgNameCompany from './style/images/4.svg';
import imgText from './style/images/5.svg';
interface IFormInput {
  id: string;
  name: string;
  price: number;
  priceNumber: number;
  type?: string;
  gost?: string;
}
function BasketContentForm() {
  const { isArray, setisArray } = useContext(AuthContext);
  const { isNewArray, setisNewArray } = useContext(AuthContext);

  const [arrayForm, setArrayForm] = useState<IbasketFormInput[]>([]);
  const { register, handleSubmit, reset } = useForm<IbasketFormInput>();

  const onSubmit: SubmitHandler<IbasketFormInput> = (data: IbasketFormInput, event: any): void => {
    setArrayForm([data, arrayOrder()]);
    console.log([data, arrayOrder()]);
    event.target.reset();
  };

  function basketTotal(): number {
    let totalSum = 0;
    isNewArray.map((item: IFormInput) => {
      if (item.priceNumber > 0) totalSum += item.price * item.priceNumber;
    });
    return totalSum;
  }
  function arrayOrder() {
    return isNewArray.filter((array: IFormInput) => array.priceNumber > 0);
  }

  return (
    <div className={styles.conteiner}>
      <div className={styles.basketTitle}>
        <p className={styles.basketTitleP}>Заказ</p>
      </div>
      <div className={styles.basketForm}>
        <p className={styles.basketFormTitle}>Контактная информация</p>
        <form className={styles.basketFormConteiner} onSubmit={handleSubmit(onSubmit)}>
          <input
            style={{ backgroundImage: `url(${imgName})` }}
            className="input"
            placeholder="Фамилия"
            type="text"
            {...register('lastName')}
            required
          ></input>
          <input
            style={{ backgroundImage: `url(${imgName})` }}
            className="input"
            placeholder="Имя"
            type="text"
            {...register('name')}
            required
          ></input>
          <input
            style={{ backgroundImage: `url(${imgName})` }}
            className="input"
            placeholder="Отчество"
            type="text"
            {...register('fatherName')}
            required
          ></input>
          <input
            style={{ backgroundImage: `url(${imgTell})` }}
            min={0}
            className="input"
            placeholder="Контактный телефон"
            type="number"
            {...register('tel')}
            required
          ></input>
          <input
            style={{ backgroundImage: `url(${imgEmail})` }}
            className="input"
            placeholder="Email"
            type="email"
            {...register('email')}
            required
          ></input>
          <input
            style={{ backgroundImage: `url(${imgNameCompany})` }}
            className="input"
            placeholder="Организация / ИНН"
            type="text"
            {...register('companyName')}
            required
          ></input>
          <div className={styles.basketForAmountConteiner}>
            <p className={styles.basketForAmountText}>Итого</p>
            <span className={styles.basketForAmount}>{basketTotal()}</span>
          </div>
          <Button type="submit">Оформить заказ</Button>
        </form>
        <div className={styles.basketForOfferConteiner}>
          <img src={imgText} alt="" />
          <p>Коммерческое предложение</p>
        </div>
      </div>
    </div>
  );
}
export default BasketContentForm;
