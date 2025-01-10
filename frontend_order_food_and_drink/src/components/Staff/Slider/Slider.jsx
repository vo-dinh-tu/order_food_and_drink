import React from 'react';
import {Link} from 'react-router-dom';

import Menus from '../Menus/Menus';
import './slider.scss';
import logo from '../../../assets/img/logo.jpeg';
function Slider(props) {
    return (
        <div className='slider'>
            <div className="slider__header">
                <Link to="/staff" className="slider__header-link">
                    <img src={logo} alt="logo" className="slider__header-logo" />      
                </Link>
            </div>
            <Menus />
        </div>
    );
}

export default Slider;