import React from 'react';
import { Table } from 'react-bootstrap';

import pizza from '../../../assets/img/pizza.jpg';
import './tableProduct.scss';

function TableProduct(props) {
    return (
        <Table>
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

            </tbody>
        </Table>
    );
}

export default TableProduct;