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
            <a href='/' className='header__logo'>TBayEAT</a>
            <div className='header__menu-bar'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Menu</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>Profile</a></li>
                    <li><a href='#'>Logout</a></li>
                </ul>
            </div>
            <div className='header__feature'>
                <div className='header__feature-search'>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
                <div className='header__feature-cart' onClick={handleShowCart}>
                    <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.97689 9.84C3.01712 9.33881 3.24464 8.87115 3.61417 8.53017C3.98369 8.18918 4.46808 7.9999 4.97089 8H17.0289C17.5317 7.9999 18.0161 8.18918 18.3856 8.53017C18.7551 8.87115 18.9827 9.33881 19.0229 9.84L19.8259 19.84C19.848 20.1152 19.8129 20.392 19.7227 20.6529C19.6326 20.9139 19.4894 21.1533 19.3022 21.3562C19.115 21.5592 18.8878 21.7211 18.6349 21.8319C18.382 21.9427 18.109 21.9999 17.8329 22H4.16689C3.89081 21.9999 3.61774 21.9427 3.36487 21.8319C3.112 21.7211 2.8848 21.5592 2.69759 21.3562C2.51037 21.1533 2.36719 20.9139 2.27706 20.6529C2.18693 20.392 2.1518 20.1152 2.17389 19.84L2.97689 9.84V9.84Z" stroke="#F3BA00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 11V6C15 4.93913 14.5786 3.92172 13.8284 3.17157C13.0783 2.42143 12.0609 2 11 2C9.93913 2 8.92172 2.42143 8.17157 3.17157C7.42143 3.92172 7 4.93913 7 6V11" stroke="#F3BA00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Header