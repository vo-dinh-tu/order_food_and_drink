import React from 'react';
import { Container } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import './footer.scss';

function Footer(props) {
    const location = useLocation();
    const arrayNoneFooter = ['/search', '/login', '/register', '/profile', '/checkout'];
    let isNone = false;
    if(arrayNoneFooter.includes(location.pathname)) isNone = true;

    return (
        <div className={`footer ${isNone && 'd-none'}`}>
            <Container>
                <div className='footer__top'>
                    <a href='/' className='footer__logo'>TBayEAT</a>
                    <div className='footer__menu-text'>
                        <span>Thử ngay các món ăn trên TBayEAT</span>
                    </div>
                    <div className='footer__social'>
                        <div className='footer__social-search'>
                            <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="28" height="26" rx="5" fill="#BEBEBE"/>
                                <rect width="27.75" height="25.5" rx="5" fill="white"/>
                                <path d="M17.486 14.7495L17.9571 11.6127H15.0125V9.57708C15.0125 8.71908 15.4237 7.88221 16.7426 7.88221H18.0811V5.21179C18.0811 5.21179 16.8666 5 15.7051 5C13.2804 5 11.6955 6.50258 11.6955 9.22229V11.6132H9V14.75H11.6955V22.3333H15.0125V14.75L17.486 14.7495Z" fill="#929292"/>
                            </svg>

                        </div>
                        <div className='footer__social-cart'>
                            <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="27.1532" height="25.3333" rx="5" fill="#BEBEBE"/>
                                <rect width="27.1532" height="25.3333" rx="5" fill="white"/>
                                <path d="M13.5743 9.77655C11.9994 9.77655 10.7142 11.0753 10.7142 12.6667C10.7142 14.2581 11.9994 15.5568 13.5743 15.5568C15.1491 15.5568 16.4343 14.2581 16.4343 12.6667C16.4343 11.0753 15.1491 9.77655 13.5743 9.77655ZM22.1522 12.6667C22.1522 11.4699 22.1629 10.2839 22.0964 9.08925C22.0299 7.70165 21.7166 6.47015 20.7125 5.45546C19.7063 4.43861 18.4897 4.12423 17.1166 4.05702C15.9322 3.9898 14.7586 4.00064 13.5764 4.00064C12.3921 4.00064 11.2185 3.9898 10.0363 4.05702C8.6631 4.12423 7.44442 4.44078 6.4403 5.45546C5.43404 6.47231 5.12293 7.70165 5.05642 9.08925C4.98991 10.2861 5.00064 11.472 5.00064 12.6667C5.00064 13.8613 4.98991 15.0494 5.05642 16.2441C5.12293 17.6317 5.43619 18.8632 6.4403 19.8779C7.44657 20.8947 8.6631 21.2091 10.0363 21.2763C11.2206 21.3435 12.3942 21.3327 13.5764 21.3327C14.7608 21.3327 15.9344 21.3435 17.1166 21.2763C18.4897 21.2091 19.7084 20.8926 20.7125 19.8779C21.7188 18.861 22.0299 17.6317 22.0964 16.2441C22.1651 15.0494 22.1522 13.8635 22.1522 12.6667ZM13.5743 17.1135C11.1391 17.1135 9.17374 15.1275 9.17374 12.6667C9.17374 10.2058 11.1391 8.21983 13.5743 8.21983C16.0095 8.21983 17.9748 10.2058 17.9748 12.6667C17.9748 15.1275 16.0095 17.1135 13.5743 17.1135ZM18.155 9.07624C17.5865 9.07624 17.1273 8.61226 17.1273 8.03771C17.1273 7.46315 17.5865 6.99917 18.155 6.99917C18.7236 6.99917 19.1827 7.46315 19.1827 8.03771C19.1829 8.17414 19.1565 8.30926 19.1049 8.43534C19.0533 8.56142 18.9776 8.67597 18.8821 8.77244C18.7866 8.86891 18.6733 8.94541 18.5485 8.99754C18.4238 9.04967 18.29 9.07641 18.155 9.07624Z" fill="#929292"/>
                            </svg>

                        </div>
                    </div>
                </div>
                <hr />
                <div className='footer__produce'>
                    TBayEAT
                </div>
            </Container>
        </div>
    );
}

export default Footer;