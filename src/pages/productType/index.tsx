import { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthContext } from '../../components/Context/Context';
import Button from '../../components/UI/button/Button';
import style from '../productType/index.module.scss';
function ProductType() {
  interface IFormInput {
    id?: string;
    name?: string;
  }

  const { register, handleSubmit } = useForm();

  const { isType, setIsType } = useContext(AuthContext);

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput, event: any) => {
    setIsType([...isType, data]);
    event.target.reset();
  };

  return (
    <div className={style.conteiner}>
      <div className={style.productType}>
        <h3 className={style.productTypeTitle}>Типы продуктов</h3>

        <form className={style.productTypeForm} action="get" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input"
            placeholder="идентификатор id"
            type="number"
            {...register('id')}
            required
          ></input>
          <input
            className="input"
            placeholder="Название"
            type="text"
            {...register('name')}
            required
          ></input>
          <Button type="submit">Submit</Button>
        </form>
      </div>
      <div style={{ padding: '50px 0' }}></div>
    </div>
  );
}

export default ProductType;
