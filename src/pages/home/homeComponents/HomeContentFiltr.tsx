import styles from '../homeComponents/style/HomeContentFiltr.module.scss';
import imgBtn from '../homeComponents/images/1.svg';
import imgBtnSection from '../homeComponents//images/2.svg';
import IndexInput from './HomeContentFiltrDetails/indexInput';
import { useState } from 'react';
import HideContent from '../../../components/UI/hideContent/HideContent';
function HomeContentFiltr(): JSX.Element {
  const [btnHide, setBtnHide] = useState(true);
  return (
    <div className={styles.homeContentMenuCategories}>
      <button className={styles.hCMCBtn}>
        <img src={imgBtn} alt="" />
        <p>Категории</p>
      </button>
      <div className={styles.hCMCFilterConteiner}>
        <HideContent
          titleDown={
            <button
              className={styles.hCMCFilterBtn}
              onClick={() => {
                setBtnHide(!btnHide);
              }}
            >
              {btnHide ? 'Скрыть' : 'Показать все'}
            </button>
          }
        >
          <div className={styles.hCMCFilterText}>
            <p className={styles.hCMCFilterTextPLight}>Серия 5.904-1 выпуск 1:</p>
            <p className={styles.hCMCFilterTextPBold}>
              Детали крепления воздуховодов<span></span>
            </p>
          </div>
          <div className={styles.hCMCFilterText}>
            <p className={styles.hCMCFilterTextPLight}>Серия 4.903-10 Выпуск 4,5,6:</p>
            <p className={styles.hCMCFilterTextPBold}>
              Изделия и детали трубопроводов для тепловых сетей <span></span>
            </p>
          </div>
          <div className={styles.hCMCFilterText}>
            <p className={styles.hCMCFilterTextPLight}>Серия 4.900-9 Выпуск 1:</p>
            <p className={styles.hCMCFilterTextPBold}>
              Узлы и детали трубопроводов из пластмассовых труб для <span></span>
            </p>
          </div>
          <div className={styles.hCMCFilterText}>
            <p className={styles.hCMCFilterTextPLight}>
              систем водоснабжения и канализации Серия 3.900-9:
            </p>
            <p className={styles.hCMCFilterTextPBold}>
              Опорные конструкции и средства <span></span>
            </p>
          </div>
          <div className={styles.hCMCFilterText}>
            <p className={styles.hCMCFilterTextPLight}>
              крепления трубопроводов Л8-508.000 - Л8-524.000:
            </p>
            <p className={styles.hCMCFilterTextPBold}>
              Опоры и подвески трубопроводов Дн 89мм <span></span>
            </p>
          </div>
          <div className={styles.hCMCFilterText}>
            <p className={styles.hCMCFilterTextPLight}>Л8-138.000 - Л8-200.000:</p>
            <p className={styles.hCMCFilterTextPBold}>
              Опоры и подвески станционных трубопроводов<span></span>
            </p>
          </div>
        </HideContent>
      </div>

      <HideContent
        titleUp={
          <button className={styles.hCMCFilterBtnSection}>
            <img src={imgBtnSection} alt="" /> <p>Фильтры</p>
          </button>
        }
      >
        <IndexInput />
      </HideContent>
    </div>
  );
}

export default HomeContentFiltr;
