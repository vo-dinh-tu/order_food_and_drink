
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { FaFileExport } from "react-icons/fa6";
import moment from 'moment';
import './supplyManagement.scss'
function SupplyManagement(props) {
    const [supplyList, setSupplyList] = useState([])

    const fetchListSupply = async () => {
        const response = await fetch('/api/supply')
        const data = await response.json()
        if (data && data.length > 0) {
            setSupplyList(data)
        }
    }
    const handleDeleteItem = async (id) => {
        const result = confirm('Bạn có muốn xóa');

        if (result && id) {
            handleDelete(id);
            fetchListSupply();
        }
    }
    const handleDelete = async (id) => {
        const response = await fetch(`/api/supply/${id}`, {
            method: 'delete',
        })
        const data = await response.json()
        return data
    }

    const handleExport = async (id) => {
        const response = await fetch(`/api/supply/export/${id}`, {
            method: 'put',
        })
        const data = await response.json()
        if (data) {
            fetchListSupply()
        }
    }

    useEffect(() => {
        fetchListSupply()
    }, [])
    return (
        <section className="block-supply">
            <h3 className="title-admin">Quản lý xuất nhập thực phẩm</h3>

            <div className="supply-container background-radius">
                <div className="supply-add">
                    <Link to='/staff/supply/add'>Thêm mới</Link>
                </div>

                <Table className="supply-table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên thực phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Giá nhập</th>
                            <th>Số lượng </th>
                            <th>Tổng giá </th>
                            <th>Ngày tạo </th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {supplyList && supplyList.length > 0 && (
                            supplyList.map((item, index) => {
                                const { id, name, image, price, priceSale, quantity, totalPrice, exports, is_active, createdAt } = item;

                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{name}</td>
                                        <td>
                                            <img src={`http://localhost:8080/static/images/${image}`} alt="" />
                                        </td>
                                        <td>{price}</td>
                                        <td>{quantity}</td>
                                        <td>{totalPrice}</td>
                                        <td>{moment(createdAt).format('DD-MM-YYYY')}</td>
                                        <td>
                                            <Link to={`/staff/supply/update/${id}`}><FaRegEdit className='icon-update' /></Link>
                                            <MdDelete onClick={() => handleDeleteItem(id)} className='icon-delete' />
                                        </td>
                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                </Table>
            </div>


        </section>
    )
}

export default SupplyManagement;




