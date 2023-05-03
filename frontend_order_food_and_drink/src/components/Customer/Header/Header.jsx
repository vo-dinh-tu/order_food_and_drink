import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {visibilityCart} from '../../../actions/user';

import './header.scss';

function Header(props) {
    const isCart = useSelector(state => state.user.isCart);
    const dispatch = useDispatch();

    function handleShowCart(){
        const action = visibilityCart(!isCart);
        dispatch(action);
    }

    return (
        <div className='header'>
            <h2>Header</h2>

            <div onClick={handleShowCart}>
                Cart
            </div>
        </div>
    );
}

export default Header