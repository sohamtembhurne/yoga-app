import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import Home from './components/pages/Home';
import Receipt from './components/pages/Receipt';
import { MobileProvider } from './components/context/MobileContext';
import Toaster from './components/common/Toaster';

const App = () => {
  return (
    <BrowserRouter>
      <MobileProvider>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobile" element={<LoginPage />} />
          <Route path="/payment" element={<RegisterPage />} />
          <Route path="/receipt" element={<Receipt />} />
        </Routes>
      </MobileProvider>
    </BrowserRouter>
  );
};

export default App;
