import { useState } from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';

import './App.scss';
import Header from './components/Customer/Header/Header';
import Footer from './components/Customer/Footer/Footer';
import Banner from './components/Customer/Banner/Banner';
import Login from './pages/Customer/Login/Login';
import Register from './pages/Customer/Register/Register';
import Home from './pages/Customer/Home/Home';
import Staff from './pages/Staff/Home/HomeStaff';
import Category from './pages/Staff/Category/Category';
import Slider from './components/Staff/Slider/Slider';

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
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/' element={<Home />}/>
        </Routes>
        <Footer />
      </>
    
    )
  }
}

export default App
