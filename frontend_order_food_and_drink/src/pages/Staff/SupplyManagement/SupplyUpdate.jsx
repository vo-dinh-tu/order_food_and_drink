import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function SupplyUpdate(props) {
    const [supplyItem, setSupplyItem] = useState(null);
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (id !== null && id !== undefined) {
            const fetchSupllyItem = async () => {
                const response = await fetch(`/api/supply/${id}`);
                const data = await response.json();

                if (data) setSupplyItem(data);
            }

            fetchSupllyItem();
        }
    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', supplyItem.name);
        formData.append('price', supplyItem.price);
        formData.append('priceSale', supplyItem.priceSale);
        formData.append('quantity', supplyItem.quantity);
        formData.append('image', supplyItem.image);
        const response = await fetch(`/api/supply/${id}`, {
            method: 'put',
            body: formData
        });

        const data = await response.json();
        if (data) {
            navigate('/staff/supply');
        }
    }

    return (
        <section className="block-supply" data-index="2">
            <h3 className="title-admin">Cập nhật thực phẩm</h3>

            <div className="supply-container background-radius">
                <form className='supply-form' onSubmit={handleSubmit}>
                    <Form.Group className='mb-4'>
                        <Form.Label>Tên thực phẩm</Form.Label>
                        <Form.Control
                            // required
                            onChange={(event) => setSupplyItem({ ...supplyItem, name: event.target.value })}
                            type="text"
                            name="name"
                            value={supplyItem?.name}
                        />
                    </Form.Group>


                    <Form.Group className="position-relative mb-4">
                        <Form.Label>Hình ảnh</Form.Label>
                        <Form.Control
                            type="file"
                            // required
                            name="image"
                            accept='.jpg,.png,.jpeg'
                            onChange={(event) => setSupplyItem({ ...supplyItem, image: event.target.files[0] })}
                        />
                    </Form.Group>

                    <Form.Group className='mb-4'>
                        <Form.Label>Giá nhập</Form.Label>
                        <Form.Control
                            // required
                            onChange={(event) => setSupplyItem({ ...supplyItem, price: event.target.value })}
                            type="number"
                            name="price"
                            value={supplyItem?.price}
                        />
                    </Form.Group>

                    <Form.Group className='mb-4'>
                        <Form.Label>Giá bán</Form.Label>
                        <Form.Control
                            // required
                            onChange={(event) => setSupplyItem({ ...supplyItem, priceSale: event.target.value })}
                            type="number"
                            name="priceSale"
                            value={supplyItem?.priceSale}
                        />
                    </Form.Group>

                    <Form.Group className='mb-4'>
                        <Form.Label>Số lượng</Form.Label>
                        <Form.Control
                            // required
                            onChange={(event) => setSupplyItem({ ...supplyItem, quantity: event.target.value })}
                            type="number"
                            name="quantity"
                            value={supplyItem?.quantity}
                        />
                    </Form.Group>

                    <Button className='btn btn-add' type="submit" >Cập nhật</Button>
                </form>

            </div>
        </section>
    );
}

export default SupplyUpdate;