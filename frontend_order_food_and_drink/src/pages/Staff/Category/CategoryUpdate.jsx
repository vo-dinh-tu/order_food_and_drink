import React from 'react';
import { Button, Form } from 'react-bootstrap';

function CategoryAdd(props) {
    return (
        <section className="block-category" data-index="2">
            <h3 className="title-admin">Cập nhập danh mục</h3>
    
            <div className="category-container background-radius">
                <Form className='category-form'>
                    <Form.Group className='mb-4'>
                        <Form.Label>Tên danh mục</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="name"
                        />
                    </Form.Group>

                    <Form.Group className="position-relative mb-4">
                        <Form.Label>Hình ảnh</Form.Label>
                        <Form.Control
                            type="file"
                            required
                            name="image"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Check
                            required
                            name="is_active"
                            label="Trạng thái"
                            defaultValue="no"
                        />
                    </Form.Group>

                    <Button className='btn-add' type="submit">Cập nhập</Button>
                </Form>
            
            </div>
        </section>
    );
}

export default CategoryAdd;