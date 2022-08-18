import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import { AuthContext } from './components/Context/Context';
import { dataArray, dataStyleBtnSort, dataType } from './components/Data/data';
import Navbar from './components/Navbar';
import Footer from './components/Navbar/Footer/Footer';
import { IFormInput } from './components/Type/Type';

function App() {
  const [isType, setIsType] = useState(dataType);
  const [isArray, setisArray] = useState(dataArray);

  const [isNewArray, setisNewArray] = useState<IFormInput[]>(isArray);

  const [styleBtnSort, setStyleBtnSort] = useState(dataStyleBtnSort);

  return (
    <div className="app">
      <AuthContext.Provider
        value={{
          isType,
          setIsType,
          isArray,
          setisArray,
          isNewArray,
          setisNewArray,
          styleBtnSort,
          setStyleBtnSort,
        }}
      >
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
