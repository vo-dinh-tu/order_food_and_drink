import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SupplyAdd(props) {
    const [productAdd, setProductAdd] = useState({
        name: '',
        export: '',
        price: 0,
        quantity: 0,
        totalPrice: 0,
        image: null,
        type: 1
    });
    const navigate = useNavigate();




    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', productAdd.name);
        formData.append('price', productAdd.price);
        formData.append('quantity', productAdd.quantity);
        formData.append('totalPrice', productAdd.totalPrice);
        formData.append('image', productAdd.image);
        const response = await fetch('/api/supply', {
            method: 'post',
            body: formData
        });

        const data = await response.json();
        if (data) {
            navigate('/staff/supply');
        }
    }

    return (
        <section className="block-supply" data-index="2">
            <h3 className="title-admin">Thêm mới thực phẩm</h3>

            <div className="supply-container background-radius">
                <form className='supply-form' onSubmit={handleSubmit}>
                    <Form.Group className='mb-4'>
                        <Form.Label>Tên thực phẩm</Form.Label>
                        <Form.Control
                            // required
                            onChange={(event) => setProductAdd({ ...productAdd, name: event.target.value })}
                            type="text"
                            name="name"
                        />
                    </Form.Group>


                    <Form.Group className="position-relative mb-4">
                        <Form.Label>Hình ảnh</Form.Label>
                        <Form.Control
                            type="file"
                            // required
                            name="image"
                            accept='.jpg,.png,.jpeg'
                            onChange={(event) => setProductAdd({ ...productAdd, image: event.target.files[0] })}
                        />
                    </Form.Group>

                    <Form.Group className='mb-4'>
                        <Form.Label>Giá nhập</Form.Label>
                        <Form.Control
                            // required
                            onChange={(event) => setProductAdd({ ...productAdd, price: event.target.value })}
                            type="number"
                            name="price"
                        />
                    </Form.Group>

                    <Form.Group className='mb-4'>
                        <Form.Label>Số lượng</Form.Label>
                        <Form.Control
                            // required
                            onChange={(event) => setProductAdd({ ...productAdd, quantity: event.target.value })}
                            type="number"
                            name="quantity"
                        />
                    </Form.Group>

                    <Form.Group className='mb-4'>
                        <Form.Label>Tổng giá</Form.Label>
                        <Form.Control
                            // required
                            onChange={(event) => setProductAdd({ ...productAdd, totalPrice: event.target.value })}
                            type="number"
                            name="totalPrice"
                        />
                    </Form.Group>

                    <Button className='btn btn-add' type="submit">Thêm mới</Button>
                </form>

            </div>
        </section>
    );
}

export default SupplyAdd;