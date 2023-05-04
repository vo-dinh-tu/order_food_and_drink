import React from 'react';
import { Container, Form } from 'react-bootstrap';

import TableProduct from '../../../components/Customer/Table-product/TableProduct';
import './checkout.scss';

function Checkout(props) {
    return (
        <div>
            <Container className='block-checkout'>
                <div className="checkout-title">
                    <h2>Thanh toán</h2>
                </div>

                <div className="checkout-content">
                    <form action="" >
                        <TableProduct />

                        <div className="checkout-group">
                            <div className="checkout-address">
                                <label>Chọn địa chỉ giao hàng</label>

                                <Form.Select name="city">
                                    <option>Chọn tỉnh/thành phố</option>
                                    <option>Hà Nội</option>
                                </Form.Select>

                                <Form.Select name="district">
                                    <option>Chọn quận/huyên</option>
                                    <option>Ba Vì</option>
                                </Form.Select>

                                <Form.Select name='ward'>
                                    <option>Chọn phường/xã</option>
                                    <option>Điện Bàn</option>
                                </Form.Select>
                            </div>

                            <div className="checkout-box">
                                <div className="box-group">
                                    <label>Tổng tiền hàng</label>
                                    <span>40.000 đ</span>
                                </div>
                                <div className="box-group">
                                    <label>Phí ship</label>
                                    <span>2.000 đ</span>
                                </div>
                                <hr />
                                <div className="box-group">
                                    <label className='title-order'>Tổng tiền hàng</label>
                                    <span className='price-order'>42.000 đ</span>
                                </div>

                                <input className='btn-checkout' type="submit" value="Đặt Hàng" />
                            </div>
                        </div>
                    </form>

                    
                </div>
            </Container>
        </div>
    );
}


export default Checkout;