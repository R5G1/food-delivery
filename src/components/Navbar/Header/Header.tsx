import { FC } from 'react';
import styles from '../Header/Header.module.scss';

const Header: FC = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.headerConteiner}></div>
    </div>
  );
};

export default Header;
