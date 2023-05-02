import React from 'react';
import { Col } from 'react-bootstrap';

import pizza from '../../../assets/img/pizza.jpg';
import './productCard.scss';

function ProductCard(props) {
    return (
        <Col>
            <div className='product-card'>
                <div className="product-img">
                    <img src={pizza} alt="pizza" />
                </div>
                <div className="product-info">
                    <div className="product-info-left">
                        <span className='product-name'>
                            Pizza
                        </span>
                    </div>
                    <div className="product-info-right">
                        <span className='product-price'>
                            20.000 đ
                        </span>
                        <div className='btn btn-add-cart'>
                            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="22" height="20" rx="5" fill="#BEBEBE"/>
                                <rect x="0.5" y="0.5" width="22" height="20" rx="5" fill="#BEBEBE"/>
                                <rect x="0.5" y="0.5" width="22" height="20" rx="5" fill="#F3BA00"/>
                                <path d="M11.5991 10.6961V16.1863M6.04956 10.6961H11.5991H6.04956ZM17.1487 10.6961H11.5991H17.1487ZM11.5991 10.6961V5.20587V10.6961Z" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default ProductCard;