import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function CategoryAdd(props) {
    const [cateItem, setCateItem] = useState(null);
    const [cateUpdate, setCateUpdate] = useState({
        name: '',
        image: '',
        is_active: null
    });
    const { id } = useParams();
 
    useEffect(()=>{
        if(id !== null && id !== undefined){
            const fetchCategoryItem = async ()=>{
                const response = await fetch(`/api/category/${id}`);
                const data = await response.json();
                
                if(data) setCateItem(data);
            }

            fetchCategoryItem();
        }
    },[]);

    const handleUpdateCate = async () =>{
        const response = await fetch(`/api/category/${id}`,{
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cateUpdate)
        });        
        const data = await response.json();
        return data;
    }

    return (
        <section className="block-category" data-index="2">
            <h3 className="title-admin">Cập nhập danh mục</h3>
    
            <div className="category-container background-radius">
                {cateItem && (
                    <Form className='category-form' onSubmit={handleUpdateCate}>
                        <Form.Group className='mb-4'>
                            <Form.Label>Tên danh mục</Form.Label>
                            <Form.Control
                                // required
                                type="text"
                                name="name"
                                value={cateUpdate.name !== '' ? cateUpdate.name : cateItem.name}
                                onChange={(event)=> setCateUpdate({...cateUpdate, name: event.target.value})}
                            />
                        </Form.Group>

                        <Form.Group className="position-relative mb-4">
                            <Form.Label>Hình ảnh</Form.Label>
                            <Form.Control
                                type="file"
                                // required
                                name="image"
                                value={cateItem.image}  
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Check
                                // required
                                name="is_active"
                                label="Trạng thái"
                                value={cateUpdate.is_active !== null ? !cateUpdate.is_active : !cateItem.is_active}
                                checked={cateUpdate.is_active !== null ? cateUpdate.is_active : cateItem.is_active}
                                onChange={(event)=> setCateUpdate({...cateUpdate, is_active: event.target.value === 'true' ? true : false})}
                            />
                        </Form.Group>

                        <Button className='btn-add' type="submit">Cập nhập</Button>
                    </Form>
                )}
            </div>
        </section>
    );
}

export default CategoryAdd;