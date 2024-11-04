
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import './staffManagement.scss'
function StaffManagement(props) {
    const [supplyList, setStaffList] = useState([])
    const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));

    const fetchListStaff = async () => {
        const response = await fetch('/api/admin/staff', {
            method: 'get',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
        )
        const data = await response.json()
        if (data && data.length > 0) {
            setStaffList(data)
        }
    }
    const handleDeleteItem = async (id) => {
        const result = confirm('Bạn có muốn xóa');

        if (result && id) {
            handleDelete(id);
            fetchListStaff();
        }
    }
    const handleDelete = async (id) => {
        const response = await fetch(`/api/admin/staff/${id}`, {
            method: 'delete',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        const data = await response.json()
        return data
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
                            <th>Giới tính</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {supplyList && supplyList.length > 0 && (
                            supplyList.map((item, index) => {
                                const { id, last_name, first_name, role, gender, is_active } = item;

                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{last_name + " " + first_name}</td>
                                        <td>{role}</td>
                                        <td>{gender}</td>
                                        <td>
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

export default StaffManagement;