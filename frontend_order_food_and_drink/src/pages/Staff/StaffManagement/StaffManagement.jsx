
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import './staffManagement.scss'
function StaffManagement(props) {
    const [supplyList, setStaffList] = useState([])

    const fetchListStaff = async () => {
        const response = await fetch('/api/supply')
        const data = await response.json()
        if (data && data.length > 0) {
            setStaffList(data)
        }
    }

    useEffect(() => {
        fetchListStaff()
    }, [])
    return (
        <section className="block-staff">
            <h3 className="title-admin">Quản lý nhân viên</h3>

            <div className="staff-container background-radius">


                <Table className="staff-table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên nhân viên</th>
                            <th>Vị trí</th>
                            <th>Ngày sinh</th>
                            <th>Địa chỉ</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {supplyList && supplyList.length > 0 && (
                            supplyList.map((item, index) => {
                                const { id, name, price, priceSale, quantity, is_active } = item;

                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{name}</td>
                                        <td>{price}</td>
                                        <td>{priceSale}</td>
                                        <td>{quantity}</td>
                                        <td>
                                            <MdDelete onClick={() => { }} className='icon-delete' />
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

export default StaffManagement;