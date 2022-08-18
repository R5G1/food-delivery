import { NavLink } from 'react-router-dom';
import styles from '../Navbar/index.module.scss';
import imgTel from '../Navbar/images/1.svg';
import imgSelect from '../Navbar/images/2.svg';
import imgMeil from '../Navbar/images/3.svg';
import Header from './Header/Header';
const Navbar = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.navbarConteiner}>
        <div className={styles.navbar}>
          <div className={styles.navbarNav}>
            <NavLink className={styles.navbarNavLink} to="/">
              Главная
            </NavLink>
            <NavLink className={styles.navbarNavLink} to="/productType">
              Типы продуктов
            </NavLink>
            <NavLink className={styles.navbarNavLink} to="/products">
              Продукты
            </NavLink>
          </div>
          <div className={styles.navbarContacts}>
            <div className={styles.navbarContactsTell}>
              <img src={imgTel} alt="" />
              <a href="tel:+7 (499) 380-78-90" rel="noreferrer">
                +7 (499) 380-78-90
              </a>
            </div>
            <div className={styles.navbarContactsSelect}>
              <img src={imgSelect} alt="" />
              <select>
                <option value="value1">Москва</option>
                <option value="value2">Значение 2</option>
                <option value="value3">Значение 3</option>
              </select>
            </div>

            <div className={styles.navbarContactsText}>
              <img src={imgMeil} alt="" />
              <a href="mailto:info@bastion.pro" rel="noreferrer">
                info@bastion.pro
              </a>
            </div>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Navbar;
