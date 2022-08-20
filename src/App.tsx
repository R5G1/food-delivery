import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import { AuthContext } from './components/Context/Context';
import { dataArray } from './components/Data/data';
import Navbar from './components/Navbar';
import Footer from './components/Navbar/Footer/Footer';

function App() {
  const [isArray, setisArray] = useState(dataArray);

  return (
    <div className="app">
      <AuthContext.Provider
        value={{
          isArray,
          setisArray,
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
