import { log } from 'console';
import { ReactEventHandler, ReactHTMLElement, useContext, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { AuthContext } from '../../../Context/Context';
import styles from '../headerSearch/HeaderSearch.module.scss';
import imgInput from '../images/3.svg';
import imgInput2 from '../images/31.svg';
interface IFormInput {
  id?: string;
  name: string;
  price?: string;
  priceNumber: number;
  type?: string;
  gost?: string;
}
function HeaderSearch() {
  const { isArray, setisArray, isNewArray, setisNewArray } = useContext(AuthContext);
  const [value, setValue] = useState('');

  function search() {
    setisNewArray(
      isArray.filter((item: IFormInput) => item.name.toLowerCase().includes(value.toLowerCase()))
    );
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    search();
  }

  return (
    <>
      <form className={styles.headerInput}>
        <img src={imgInput} alt="" />
        <input
          type="text"
          value={value}
          placeholder="Поиск по названию..."
          onChange={(e) => setValue(e.target.value)}
        ></input>

        <button type="submit" onClick={handleSubmit}>
          <img src={imgInput2} alt="" />
        </button>
      </form>
    </>
  );
}
export default HeaderSearch;
