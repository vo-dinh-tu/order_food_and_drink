import { useState } from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';

import './App.scss';
import Header from './components/Customer/Header/Header';
import Footer from './components/Customer/Footer/Footer';
import Banner from './components/Customer/Banner/Banner';
import Slider from './components/Staff/Slider/Slider';
import HeaderStaff from './components/Staff/Header/Header';
import Login from './pages/Customer/Login/Login';
import Register from './pages/Customer/Register/Register';
import Home from './pages/Customer/Home/Home';
import Detail from './pages/Customer/Detail/Detail';
import Checkout from './pages/Customer/Checkout/Checkout';
import Staff from './pages/Staff/Home/HomeStaff';
import Category from './pages/Staff/Category/Category';
import CategoryAdd from './pages/Staff/Category/CategoryAdd';
import CategoryUpdate from './pages/Staff/Category/CategoryUpdate';
import Product from './pages/Staff/Product/Product';
import ProductAdd from './pages/Staff/Product/ProductAdd';
import ProductUpdate from './pages/Staff/Product/ProductUpdate';

function App() {
  const location = useLocation();
  if(location.pathname.includes('/staff')){
    return (
      <>
      <Slider />
        <div className="main-content">
          <HeaderStaff />
          <div className="block-content">
            <Routes>
              <Route path='/staff' element={<Staff />} />
              <Route path='/staff/category' element={<Category />}/>
              <Route path='/staff/category/add' element={<CategoryAdd />}/>
              <Route path='/staff/category/update/:id' element={<CategoryUpdate />}/>
              <Route path='/staff/product' element={<Product />}/>
              <Route path='/staff/product/add' element={<ProductAdd />}/>
              <Route path='/staff/product/update/:id' element={<ProductUpdate />}/>
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
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/detail/:id' element={<Detail />}/>
        </Routes>
        <Footer />
      </>
    
    )
  }
}

export default App
