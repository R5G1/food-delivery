import { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthContext } from '../../components/Context/Context';
import { IFormInput } from '../../components/Type/Type';
import Button from '../../components/UI/button/Button';
import style from '../products/index.module.scss';
import ProductsSelect from '../../components/UI/productsComponents/ProductsSelect';

function Products() {
  const { isType, setIsType, isArray, setisArray } = useContext(AuthContext);

  const { register, handleSubmit, setValue } = useForm<IFormInput>();
  const [type, setType] = useState<IFormInput[]>([]);

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput, event: any) => {
    setisArray([...isArray, data]);
    const newAray = [...isArray, data];
    newAray.map((item) => {
      if (item.id.length < 7) item.id = item.id + Date.now().toString();
    });
    setisArray(newAray);
    event.target.reset();
  };

  return (
    <div className={style.conteiner}>
      <div className={style.product}>
        <h3 className={style.productTitle}>Продукты</h3>
        <form className={style.productForm} action="get" onSubmit={handleSubmit(onSubmit)}>
          <input
            maxLength={6}
            required
            className="input"
            placeholder="идентификатор id"
            type="text"
            {...register(`id`)}
          ></input>
          <input
            className="input"
            placeholder="Название"
            type="text"
            {...register('name')}
            required
          ></input>

          <select className="input" {...register('type')} required>
            {isType.length > 0 ? (
              ProductsSelect()
            ) : (
              <option value="Тип не указан">Тип не указан</option>
            )}
          </select>
          <input
            min={0}
            className="input"
            placeholder="Цена"
            type="number"
            {...register('price')}
            required
          ></input>
          <input
            style={{ display: 'none' }}
            min={0}
            className="input"
            placeholder="Цена"
            type="number"
            value={0}
            {...register('priceNumber')}
            required
          ></input>
          <select className="input" {...register('gost')} required>
            <option value="ГОСТ 14911-82">ГОСТ 14911-82</option>
            <option value="ОСТ 36-146-88">ОСТ 36-146-88</option>
            <option value="НТС 65-06">НТС 65-06</option>
          </select>
          <Button type="submit">Submit</Button>
        </form>
      </div>
      <div style={{ padding: '50px 0' }}></div>
    </div>
  );
}

export default Products;
