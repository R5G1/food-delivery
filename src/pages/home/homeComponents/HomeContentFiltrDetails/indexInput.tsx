import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../components/Context/Context';
import { IFormInput, isArray } from '../../../../components/Type/Type';
import ProductsSelect from '../../../../components/UI/productsComponents/ProductsSelect';
import styles from '../HomeContentFiltrDetails/indexInput.module.scss';
import MultiRangeSlider from 'multi-range-slider-react';
function IndexInput() {
  const { isType, setIsType } = useContext(AuthContext);

  const { isArray, setisArray } = useContext(AuthContext);
  const { isNewArray, setisNewArray } = useContext(AuthContext);

  const [arrayFiltrType, setArrayFiltrType] = useState('');
  const [arrayFiltrPrice, setArrayFiltrPrice] = useState('');
  const [price, setPrice] = React.useState<any>(0);
  const [price1, setPrice1] = React.useState<any>(10000);

  function changeFiltrAction() {
    if (arrayFiltrType.length > 0) {
      setisNewArray(isArray.filter((array: IFormInput) => array.type === arrayFiltrType));
    }
  }
  function resetFiltrAction() {
    setisNewArray(isArray);
    setArrayFiltrType('');
  }
  function resetFiltrAll() {
    setisArray([]);
    setisNewArray([]);
  }
  useEffect(() => {
    setisNewArray(
      isArray.filter(
        (array: isArray) => (!price || price <= array.price) && (!price1 || price1 >= array.price)
      )
    );
  }, [price, price1]);

  const handleInput = (e: {
    minValue: React.SetStateAction<string>;
    maxValue: React.SetStateAction<string>;
  }) => {
    setPrice(e.minValue);
    setPrice1(e.maxValue);
  };

  return (
    <div className={styles.hCMCFilterFormConteiner}>
      <button className={styles.hCMCFilterFormPriceBtn}>Цена, руб.</button>
      <div className={styles.hCMCFilterFormInput}>
        <p className={styles.hCMCFilterFormInputText}>
          от
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </p>
        <p className={styles.hCMCFilterFormInputText}>
          до
          <input type="number" value={price1} onChange={(e) => setPrice1(e.target.value)} />
        </p>
      </div>
      <div className={styles.hCMCFilterFormInputRange}>
        <div>
          <MultiRangeSlider
            className={styles.multiRangeSlider}
            min={0}
            max={10000}
            step={10}
            ruler={true}
            label={true}
            preventWheel={false}
            minValue={price}
            maxValue={price1}
            onInput={(e: any) => {
              handleInput(e);
            }}
          />
        </div>
      </div>
      <select
        className={styles.hCMCFilterFormTypeBtn}
        defaultValue="value"
        onChange={(e) => setArrayFiltrType(e.target.value)}
        onClick={changeFiltrAction}
      >
        <option value="value">Тип продукта</option>
        <ProductsSelect />
      </select>
      <button className={styles.hCMCFilterFormBrandBtn}>Бренд</button>
      <button className={styles.hCMCFilterFormChoiceBtn}>
        <div></div> Выбор покупателей
      </button>
      <button className={styles.hCMCFilterFormChoiceABtn}>
        <div></div> Лучшая цена
      </button>
      <button
        className={
          arrayFiltrType.length > 0
            ? styles.hCMCFilterFormResetBtnActiv
            : styles.hCMCFilterFormResetBtn
        }
        onClick={resetFiltrAction}
      >
        Сбросить фильтры
      </button>
      <button className={styles.hCMCFilterFormResetBtnActiv} onClick={resetFiltrAll}>
        Очистить карточки
      </button>
    </div>
  );
}
export default IndexInput;
