import { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthContext } from '../../components/Context/Context';
import { IFormInputOrder } from '../../components/Type/Type';
import Button from '../../components/UI/button/Button';
import style from '../products/index.module.scss';

function Products() {
  const { isArray, setisArray } = useContext(AuthContext);

  const { register, handleSubmit, setValue } = useForm<IFormInputOrder>();

  const onSubmit: SubmitHandler<IFormInputOrder> = (data: IFormInputOrder, event: any) => {
    setisArray([...isArray, data]);
    const newAray = [...isArray, data];
    newAray.map((item) => {
      if (item.id.length < 7) item.id = item.id + Date.now().toString();
      if (item.dateOrder === '') item.dateOrder = minDate;
      if (item.dateDeliveryBefor === '') item.dateDeliveryBefor = dateDeliveryBefor;
    });
    setisArray(newAray);
    event.target.reset();
  };

  const [minDate, setMinDate] = useState('');
  const [dateDeliveryBefor, setDateDeliveryBefor] = useState('');

  return (
    <div className={style.conteiner}>
      <div className={style.product}>
        <h3 className={style.productTitle}>Поля заказа:</h3>
        <form className={style.productForm} action="get" onSubmit={handleSubmit(onSubmit)}>
          <input
            style={{ display: 'none' }}
            className="input"
            placeholder="идентификатор id"
            type="text"
            value="0"
            {...register(`id`)}
          ></input>
          <input
            className="input"
            placeholder="Фамилия"
            type="text"
            {...register('lastName')}
            required
          ></input>
          <input
            className="input"
            placeholder="Имя"
            type="text"
            {...register('name')}
            required
          ></input>
          <input
            className="input"
            placeholder="Отчество"
            type="text"
            {...register('fatherName')}
            required
          ></input>
          <input
            min={0}
            className="input"
            placeholder="Контактный телефон"
            type="number"
            {...register('tel')}
            required
          ></input>
          <input
            className="input"
            placeholder="Название"
            type="date"
            min="2021-01-01"
            max="2021-12-31"
            onChange={(e) => setMinDate(e.target.value)}
            required
          ></input>
          <input
            style={{ display: 'none' }}
            className="input"
            placeholder="Название"
            type="date"
            value={minDate}
            {...register('dateOrder')}
          ></input>
          <input
            className="input"
            placeholder="Hазвание рациона питания"
            type="text"
            {...register('foodName')}
            required
          ></input>
          <div style={{ display: 'flex' }}>
            <input
              className="input"
              placeholder="Период доставки с"
              type="date"
              min={minDate}
              max="2021-12-31"
              onChange={(e) => setDateDeliveryBefor(e.target.value)}
              required
            ></input>
            <input
              style={{ display: 'none' }}
              className="input"
              placeholder="Период доставки с"
              type="date"
              min={minDate}
              max="2021-12-31"
              {...register('dateDeliveryBefor')}
            ></input>

            <input
              className="input"
              placeholder="Период доставки до"
              type="date"
              min={dateDeliveryBefor}
              max="2021-12-31"
              {...register('dateDeliveryAfter')}
              required
            ></input>
          </div>
          <select className="input" {...register('deliveryTypeDay')} required>
            <option value="DEFAULT" disabled>
              расписание доставки
            </option>
            <option value="ежедневная">ежедневная</option>
            <option value="через день на один день">через день на один день питания</option>
            <option value="через день на 2 дня"> через день на 2 дня питания</option>
          </select>
          <div style={{ display: 'flex' }}>
            <select className="input" {...register('dayWeekBefor')} required>
              <option value="DEFAULT" disabled>
                дни недели питания c
              </option>
              <option value="Понедельник">Понедельник</option>
              <option value="Вторник">Вторник</option>
              <option value="Среда">Среда</option>
              <option value="Четверг">Четверг</option>
              <option value="Пятница">Пятница</option>
              <option value="Суббота">Суббота</option>
              <option value="Воскресенье">Воскресенье</option>
            </select>
            <select className="input" {...register('dayWeekAfter')} required>
              <option value="DEFAULT" disabled>
                дни недели питания до
              </option>
              <option value="Понедельник">Понедельник</option>
              <option value="Вторник">Вторник</option>
              <option value="Среда">Среда</option>
              <option value="Четверг">Четверг</option>
              <option value="Пятница">Пятница</option>
              <option value="Суббота">Суббота</option>
              <option value="Воскресенье">Воскресенье</option>
            </select>
          </div>
          <textarea
            className="input"
            name="text"
            style={{ maxWidth: '100%' }}
            placeholder="комментарий"
          ></textarea>
          <Button type="submit">Submit</Button>
        </form>
      </div>
      <div style={{ padding: '50px 0' }}></div>
    </div>
  );
}

export default Products;
