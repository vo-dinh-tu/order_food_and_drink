import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './category.scss';

function Category(props) {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(()=>{
        const fetchListCate = async () =>{
            const response = await fetch('/api/category');
            const data = await response.json();
            
            if(data && data.length > 0) setCategoryList(data);
        }

        fetchListCate();

    },[]);

    return (
        <section className="block-category" data-index="2">
            <h3 className="title-admin">Danh mục danh mục</h3>
    
            <div className="category-container background-radius">
                <div className="category-add">
                   <Link to='/staff/category/add'>Thêm mới</Link>
                </div>
        
                <Table className='category-table'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên danh mục</th>
                            <th>Hình ảnh</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoryList && categoryList.length > 0 && (
                            categoryList.map((cateItem, index)=>{
                                const {name, image, is_active} = cateItem;

                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>
                                            {name}
                                        </td>
                                        <td>
                                            <image src={image} alt=""/>
                                        </td>
                                        <td>
                                            <span className={`category-status ${is_active ? 'active' : 'inactive'}`}>{is_active ? 'active' : 'inactive'}</span>
                                        </td>
                                        <td>
                                            <Link to='/category/update'>Cập nhập</Link>
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

export default Category;