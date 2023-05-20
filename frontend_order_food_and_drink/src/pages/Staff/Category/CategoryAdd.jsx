import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function CategoryAdd(props) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const handleChange = (event)=>{
        const nameCate = event.target.value;
        setName(nameCate);
    }

    const handelFileImage = (event)=>{
        const imageCate = event.target.value;
        setImage(imageCate);
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();

        if(name !== '' && image !== ''){
            const formData = new FormData();
            formData.append('name', name);
            formData.append('image', image);

            const payload = {
                image: formData.get('image'),
                name: formData.get('name')
            };

            const response = await fetch('/api/category',{
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();
            console.log(data);
        }
    }

    return (
        <section className="block-category" data-index="2">
            <h3 className="title-admin">Thêm mới danh mục</h3>
    
            <div className="category-container background-radius">
                <form className='category-form' onSubmit={handleSubmit}>
                    <Form.Group className='mb-4'>
                        <Form.Label>Tên danh mục</Form.Label>
                        <Form.Control
                            // required
                            type="text"
                            name="name"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="position-relative mb-4">
                        <Form.Label>Hình ảnh</Form.Label>
                        <Form.Control
                            type="file"
                            // required
                            name="image"
                            onChange={handelFileImage}
                        />
                    </Form.Group>

                    {/* <Form.Group className="mb-4">
                        <Form.Check
                            required
                            name="is_active"
                            label="Trạng thái"
                            defaultValue="no"
                        />
                    </Form.Group> */}

                    <Button className='btn-add' type="submit">Thêm mới</Button>
                    {/* <input type="submit" className='btn btn-login' value="Đăng nhập"/> */}
                    
                </form>
            
            </div>
        </section>
    );
}

export default CategoryAdd;