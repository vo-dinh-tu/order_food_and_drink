import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './order.scss';

function Order(props) {
    const [orderList, setOrderList] = useState();
    const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));

    const fetchOrderList = async (accessToken)=>{
        const response = await fetch('/api/order',{
            method: 'get',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        });
        const data = await response.json();

        if(data) setOrderList(data);
    }

    useEffect(()=>{
        if (accessToken) fetchOrderList(accessToken);
    }, []);

    return (
        <section className="block-order">
            <h3 className="title-admin">Danh sách đơn hàng</h3>

            <div className="order-container background-radius">
                <Table className='order-table'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã đơn hàng</th>
                            <th>Tên khách hàng</th>
                            <th>Số lượng sản phẩm</th>
                            <th>Tổng tiền</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderList && orderList.length > 0 && (
                            orderList.map((orderItem, index)=>{
                                const {id,first_name, last_name, total_item, total_price} = orderItem;

                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>
                                            {id}
                                        </td>
                                        <td>{first_name + ' ' + last_name}</td>
                                        <td>
                                            {total_item}
                                        </td>
                                        <td>
                                            <span>
                                                {total_price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                                            </span>
                                        </td>
                                        <td>
                                            <Link to={`/staff/order/detail/${id}`}>
                                                Chi tiết
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                </Table>
            </div>
        </section>
    );
}

export default Order;