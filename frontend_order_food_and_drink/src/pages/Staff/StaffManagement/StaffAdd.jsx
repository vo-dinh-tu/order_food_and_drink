import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function StaffAdd(props) {
    const [productAdd, setProductAdd] = useState({
        name: '',
        export: '',
        price: 0,
        priceSale: 0,
        quantity: 0,
        image: null,
    });
    const navigate = useNavigate();




    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', productAdd.name);
        formData.append('export', productAdd.export);
        formData.append('price', productAdd.price);
        formData.append('priceSale', productAdd.priceSale);
        formData.append('quantity', productAdd.quantity);
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

                    <Form.Group className='mb-4'>
                        <Form.Label>Nguồn cung</Form.Label>
                        <Form.Control
                            // required
                            type="text"
                            name="export"
                            onChange={(event) => setProductAdd({ ...productAdd, export: event.target.value })}
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
                        <Form.Label>Giá bán</Form.Label>
                        <Form.Control
                            // required
                            onChange={(event) => setProductAdd({ ...productAdd, priceSale: event.target.value })}
                            type="number"
                            name="priceSale"
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

                    <Button className='btn btn-add' type="submit">Thêm mới</Button>
                </form>

            </div>
        </section>
    );
}

export default StaffAdd;