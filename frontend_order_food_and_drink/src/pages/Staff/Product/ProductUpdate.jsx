import React, {useState, useEffect} from 'react';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

function ProductUpdate(props) {
    const [productItem, setProductItem] = useState(null);
    const [categoryList, setCategoryList] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        if(id !== null && id !== undefined){
            const fetchproductItem = async ()=>{
                const response = await fetch(`/api/product/${id}`);
                const data = await response.json();
                
                if(data) setProductItem(data);
            }

            fetchproductItem();
        }
    },[]);

    const fetchListCate = async () =>{
        const response = await fetch('/api/category');
        const data = await response.json();
        
        if(data && data.length > 0) setCategoryList(data);
    }

    useEffect(()=>{
        fetchListCate();
    },[]);

    const handleUpdateProduct = async (event) =>{
        event.preventDefault();

        const response = await fetch(`/api/product/${id}`,{
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productItem)
        });        
        const data = await response.json();
        
        if(data) navigate('/staff/product');
    }

    return (
        <section className="block-product-staff">
            <h3 className="title-admin">Cập nhập sản phẩm</h3>
    
            <div className="product-container background-radius">
                {productItem && (
                    <Form className='product-form' onSubmit={handleUpdateProduct}>
                        <Form.Group className='mb-4'>
                            <Form.Label>Tên danh mục</Form.Label>
                            <Form.Control
                                // required
                                type="text"
                                name="name"
                                value={productItem.name}
                                onChange={(event)=> setProductItem({...productItem, name: event.target.value})}
                            />
                        </Form.Group>

                        <Form.Group className="position-relative mb-4">
                            <Form.Label>Danh mục</Form.Label>
                            <Form.Select aria-label="Default select example"
                                onChange={(event)=> setProductItem({...productItem, category_id: event.target.value})}
                            >
                                <option>Chọn danh mục</option>
                                {categoryList && (
                                    categoryList.map((cateItem, index)=>{
                                        const {id, name} = cateItem;

                                        return(
                                            <option key={index} selected={id === productItem.category_id} value={id}>{name}</option>
                                        )
                                    })
                                )}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className='mb-4'>
                            <Form.Label>Giá sản phẩm</Form.Label>
                            <Form.Control
                                // required
                                onChange={(event)=> setProductItem({...productItem, price: event.target.value})}
                                type="number"
                                name="price"
                                value={productItem.price}
                            />
                        </Form.Group>

                        <Form.Group className="position-relative mb-4">
                            <Form.Label>Hình ảnh</Form.Label>
                            <Form.Control
                                type="file"
                                // required
                                name="image"
                                value={productItem.image}  
                            />
                        </Form.Group>

                        <Form.Group className="position-relative mb-4">
                            <Form.Label>Mô tả</Form.Label>
                            <FloatingLabel controlId="floatingTextarea2">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '200px' }}
                                    value={productItem.detail}
                                    onChange={(event)=> setProductItem({...productItem, detail: event.target.value})}
                                />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Check
                                // required
                                name="is_active"
                                label="Trạng thái"
                                checked={productItem.is_active ? true : false}
                                onChange={()=> setProductItem({...productItem, is_active: !productItem.is_active})}
                            />
                        </Form.Group>

                        <Button className='btn btn-add' type="submit">Cập nhập</Button>
                    </Form>
                )}
            </div>
        </section>
    );
}

export default ProductUpdate;