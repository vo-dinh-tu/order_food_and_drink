import React from 'react';
import Header from '../Header/Header';
import Menus from '../Menus/Menus';

import './slider.scss';

function Slider(props) {
    return (
        <div className='slider'>
            <Header />
            <Menus />
        </div>
    );
}

export default Slider;