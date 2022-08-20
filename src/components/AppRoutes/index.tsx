/* eslint-disable react/jsx-no-undef */
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../../pages/home';
import Products from '../../pages/products';
import styles from '../AppRoutes/index.module.scss';
const AppRoutes = () => {
  return (
    <div className={styles.appRouters}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
