import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

function OrderDetail(props) {
    const [orderDetail, setOrderDetail] = useState(null);
    const [orderItems, setOrderItems] = useState([]);
    const { orderId } = useParams();
    const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));

    if(orderId && accessToken){
        useEffect(()=>{
            fetchOrderDetail(orderId, accessToken);
        },[orderId, accessToken]);
    }

    const fetchOrderDetail = async (orderId, accessToken)=>{
        const response = await fetch(`/api/order/${orderId}`,{
            method: 'get',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        });
        const data = await response.json();

        if(data){
            setOrderDetail(data.order);
            setOrderItems(data.orderItems);
            return;
        }
    }

    return (
        <div className='order__detail'>
            <h3 className="title-admin">Đơn hàng: #{orderDetail && orderDetail.id}</h3>

            <div className="order__detail-container background-radius">
                <div className="order__detail-head">
                    <span>Tên tài khoản: </span>
                    <span>Ngày đặt hàng: </span>
                </div>
                <div className="order__detail-group">
                    <Row>
                        {orderItems && orderItems.map((item, index)=>{
                            const {id, product_name, product_image, price, qty} = item;

                            return (
                                <Col xs={6} className=''>
                                    <div className="order__detail-item" key={index}>
                                        <img src={`http://localhost:8080/static/images/${product_image}`} alt="" />
                                        <div className="detail-item-info">
                                            <label>Tên sản phẩm: <span>{product_name}</span></label>
                                            <label>Số lượng: <span>{qty}</span></label>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
                <div className="order__detail-foot">
                    <div className="order__detail-status">
                        <label>Trạng thái đơn hàng:
                            <span className='order-status'>{orderDetail &&  orderDetail.status}</span>
                        </label>
                        <label>
                            Tổng thanh toán:
                            <span>{orderDetail && orderDetail.total_price}</span>
                        </label>
                    </div>
                    <div className="order__detail-group-btn">
                        <button className='btn btn-confirm'>Nhận đơn</button>
                        <button className='btn btn-processing'>Đang làm</button>
                        <button className='btn btn-complete'>Hoàn thành</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
