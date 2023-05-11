import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {visibilityCart} from '../../../actions/user';

import TableProduct from '../Table-product/TableProduct';
import './cart.scss';
import { fetchCart } from '../../../actions/cart';

function Cart({accessToken}) {
    const [cart, setCart] = useState([]);
    const isCart = useSelector(state => state.user.isCart);
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchCart([], accessToken);
    },[]);

    function handleHiddenCart(){
        const action = visibilityCart(!isCart);
        dispatch(action);
    }

    // toggle scroll body
    useEffect(()=>{
        if(isCart){
            document.body.style.overflowY = 'hidden';
        }else{
            document.body.style.overflowY = 'scroll';
        }
    },[isCart]);

    return (
        <>
            <div className={`bg-gradient ${isCart ? 'show' : ''}`}></div>
            <div className={`block-cart ${isCart ? 'show' : ''}`}>
                
                <div className="btn-close-cart" onClick={handleHiddenCart}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M10.3551 7.5L14.6165 11.7614C14.8722 12.017 15 12.358 15 12.6989C15 13.0824 14.8722 13.4233 14.6165 13.679L13.679 14.6165C13.3807 14.8722 13.0398 15 12.6989 15C12.3153 15 12.017 14.8722 11.7614 14.6165L7.5 10.3551L3.23864 14.6165C2.98295 14.8722 2.64205 15 2.30114 15C1.91761 15 1.5767 14.8722 1.32102 14.6165L0.383523 13.679C0.127841 13.4233 0 13.0824 0 12.6989C0 12.358 0.127841 12.017 0.383523 11.7614L4.64489 7.5L0.383523 3.23864C0.127841 2.98295 0 2.68466 0 2.30114C0 1.96023 0.127841 1.61932 0.383523 1.32102L1.32102 0.383523C1.5767 0.127841 1.91761 0 2.30114 0C2.64205 0 2.98295 0.127841 3.23864 0.383523L7.5 4.64489L11.7614 0.383523C12.017 0.127841 12.3153 0 12.6989 0C13.0398 0 13.3807 0.127841 13.679 0.383523L14.6165 1.32102C14.8722 1.61932 15 1.96023 15 2.30114C15 2.68466 14.8722 2.98295 14.6165 3.23864L10.3551 7.5Z" fill="#1AC073"/>
                    </svg>
                </div>

                <div className="cart-title">
                    <h3>Giỏ hàng</h3>
                </div>

                {cart ? (
                    <>
                        <div className="cart-main">
                            <TableProduct cart={cart}/>
                        </div>

                        <div className='cart-footer'>
                            <div className='cart-payment'>
                                <span>Tổng thanh toán</span>
                                <span>40.000 đ</span>
                            </div>

                            <button className="cart-payment-btn">
                                Thanh toán
                            </button>
                        </div>
                    </>
                )
                    :
                    <div>Không có giỏ hàng</div>
                    
                }

            </div>
        </>
    );
}

export default Cart;