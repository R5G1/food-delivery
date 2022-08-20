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
            <NavLink className={styles.navbarNavLink} to="/products">
              Поля заказа
            </NavLink>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Navbar;
