import { SetStateAction, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../components/Context/Context';
import { IFormInput } from '../../../components/Type/Type';
import styles from '../homeComponents/style/HomeContentCard.module.scss';
import ProductsCard from './HomeProductsCard';
interface IarrayGost {
  gost: string;
  action: boolean;
}
function HomeContentCard() {
  const { isArray, setisArray } = useContext(AuthContext);
  const { isNewArray, setisNewArray } = useContext(AuthContext);
  const [arrayFiltr, setArrayFiltr] = useState<IFormInput[]>(isArray);

  const [arrayGost, setArrayGost] = useState<IarrayGost[]>([
    { gost: 'ГОСТ 14911-82', action: false },
    { gost: 'ОСТ 36-146-88', action: false },
    { gost: 'НТС 65-06', action: false },
  ]);

  function ContentFiltr() {
    const result = arrayGost.map((item: IarrayGost, index) => (
      <button
        key={Math.random().toString()}
        className={styles.hCMGBtn}
        onClick={() => changeGostAction(index)}
        style={item.action ? { background: '#C93E33' } : { background: '#F9F9F9' }}
      >
        {item.gost}
      </button>
    ));
    return <div className={styles.homeContentMenuGostConteiner}>{result}</div>;
  }

  function changeGostAction(number: number) {
    const newAray = [...arrayGost];
    newAray.forEach((item, index: number) => {
      if (number === index && item.action === false) {
        item.action = true;
      } else {
        item.action = false;
      }

      if (number === index && item.action) {
        setisNewArray(isArray.filter((array: IFormInput) => array.gost === item.gost));
      }
      if (number === index && item.action == false) {
        setisNewArray(isArray);
      }
    });
    setArrayGost(newAray);
  }

  return (
    <div className={styles.conteiner}>
      <ContentFiltr />
      <div className={styles.homeContentCardConteiner}>
        <ProductsCard />
      </div>
    </div>
  );
}
export default HomeContentCard;
