import React, { useEffect } from 'react';
import {Table} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {visibilityCart} from '../../../actions/user';

import pizza from '../../../assets/img/pizza.jpg';
import './cart.scss';

function Cart(props) {
    const isCart = useSelector(state => state.user.isCart);
    const dispatch = useDispatch();

    function handleHiddenCart(){
        const action = visibilityCart(!isCart);
        dispatch(action);
    }

    // toggle scroll body
    useEffect(()=>{
        if(isCart){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'scroll';
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

                <div className="cart-main">
                    <Table >
                        <thead>
                            <tr>
                                <th>Sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Số tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={pizza} alt="" />

                                    <span className='product-name'>Home made pizza 12’</span>
                                </td>
                                <td>
                                    <div className='quantity-group'>
                                        <div className="minus">
                                            <svg width="6" height="2" viewBox="0 0 6 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.93103 0H0V1.47826H5.93103V0Z" fill="#1AC073"/>
                                            </svg>
                                        </div>
                                        <input type="text" name='quantity' value={1} />
                                        <div className="plus">
                                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.93103 2.21741H0V3.69567H5.93103V2.21741Z" fill="#1AC073"/>
                                                <path d="M3.70673 5.91304L3.70673 0L2.22397 0V5.91304H3.70673Z" fill="#1AC073"/>
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className='product-price'>20.000 đ</span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <img src={pizza} alt="" />

                                    <span className='product-name'>Home made pizza 12’</span>
                                </td>
                                <td>
                                    <div className='quantity-group'>
                                        <div className="minus">
                                            <svg width="6" height="2" viewBox="0 0 6 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.93103 0H0V1.47826H5.93103V0Z" fill="#1AC073"/>
                                            </svg>
                                        </div>
                                        <input type="text" name='quantity' value={1} />
                                        <div className="plus">
                                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.93103 2.21741H0V3.69567H5.93103V2.21741Z" fill="#1AC073"/>
                                                <path d="M3.70673 5.91304L3.70673 0L2.22397 0V5.91304H3.70673Z" fill="#1AC073"/>
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className='product-price'>20.000 đ</span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <img src={pizza} alt="" />

                                    <span className='product-name'>Home made pizza 12’</span>
                                </td>
                                <td>
                                    <div className='quantity-group'>
                                        <div className="minus">
                                            <svg width="6" height="2" viewBox="0 0 6 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.93103 0H0V1.47826H5.93103V0Z" fill="#1AC073"/>
                                            </svg>
                                        </div>
                                        <input type="text" name='quantity' value={1} />
                                        <div className="plus">
                                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.93103 2.21741H0V3.69567H5.93103V2.21741Z" fill="#1AC073"/>
                                                <path d="M3.70673 5.91304L3.70673 0L2.22397 0V5.91304H3.70673Z" fill="#1AC073"/>
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className='product-price'>20.000 đ</span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <img src={pizza} alt="" />

                                    <span className='product-name'>Home made pizza 12’</span>
                                </td>
                                <td>
                                    <div className='quantity-group'>
                                        <div className="minus">
                                            <svg width="6" height="2" viewBox="0 0 6 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.93103 0H0V1.47826H5.93103V0Z" fill="#1AC073"/>
                                            </svg>
                                        </div>
                                        <input type="text" name='quantity' value={1} />
                                        <div className="plus">
                                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.93103 2.21741H0V3.69567H5.93103V2.21741Z" fill="#1AC073"/>
                                                <path d="M3.70673 5.91304L3.70673 0L2.22397 0V5.91304H3.70673Z" fill="#1AC073"/>
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className='product-price'>20.000 đ</span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <img src={pizza} alt="" />

                                    <span className='product-name'>Home made pizza 12’</span>
                                </td>
                                <td>
                                    <div className='quantity-group'>
                                        <div className="minus">
                                            <svg width="6" height="2" viewBox="0 0 6 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.93103 0H0V1.47826H5.93103V0Z" fill="#1AC073"/>
                                            </svg>
                                        </div>
                                        <input type="text" name='quantity' value={1} />
                                        <div className="plus">
                                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.93103 2.21741H0V3.69567H5.93103V2.21741Z" fill="#1AC073"/>
                                                <path d="M3.70673 5.91304L3.70673 0L2.22397 0V5.91304H3.70673Z" fill="#1AC073"/>
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className='product-price'>20.000 đ</span>
                                </td>
                            </tr>

                            <tr className='cart-total'>
                                <td>Tổng tiền hàng</td>
                                <td></td>
                                <td>40.000 đ</td>
                            </tr>
                        </tbody>
                    </Table>
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
            </div>
        </>
    );
}

export default Cart;