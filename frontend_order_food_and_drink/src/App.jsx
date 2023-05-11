import { useState } from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';

import './App.scss';
import Header from './components/Customer/Header/Header';
import Footer from './components/Customer/Footer/Footer';
import Banner from './components/Customer/Banner/Banner';
import Login from './pages/Customer/Login/Login';
import Register from './pages/Customer/Register/Register';
import Home from './pages/Customer/Home/Home';
import Detail from './pages/Customer/Detail/Detail';
import Staff from './pages/Staff/Home/HomeStaff';
import Category from './pages/Staff/Category/Category';
import Slider from './components/Staff/Slider/Slider';
import Cart from './components/Customer/Cart/Cart';
import Checkout from './pages/Customer/Checkout/Checkout';

function App() {
  const location = useLocation();

  if(location.pathname.includes('/staff')){
    return (
      <>
      <Slider />
        <div className="main-content">

        <div className="content">
          <Routes>
            <Route path='/staff' element={<Staff />} />
            <Route path='/staff/category' element={<Category />}/>
          </Routes>
        </div>
      </div>
    </>
    )
  }else{
    return(
      <>
        <Header />
        <Banner />
        {/* <Cart /> */}
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/detail' element={<Detail />}/>
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
      </>
    
    )
  }
}

export default App
