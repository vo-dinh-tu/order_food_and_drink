import React, {useState, useEffect} from 'react';
import { Button, Form, FloatingLabel  } from 'react-bootstrap';


function ProductAdd(props) {
    const [categoryList, setCategoryList] = useState([]);
    
    const fetchListCate = async () =>{
        const response = await fetch('/api/category');
        const data = await response.json();
        
        if(data && data.length > 0) setCategoryList(data);
    }

    useEffect(()=>{
        fetchListCate();
    },[]);

    return (
        <section className="block-product-staff">
            <h3 className="title-admin">Thêm mới sản phẩm</h3>

            <div className="product-container background-radius">
                <form className='product-form'>
                    <Form.Group className='mb-4'>
                        <Form.Label>Tên danh mục</Form.Label>
                        <Form.Control
                            // required
                            type="text"
                            name="name"
                        />
                    </Form.Group>

                    <Form.Group className="position-relative mb-4">
                        <Form.Label>Danh mục</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Chọn danh mục</option>
                            {categoryList && (
                                categoryList.map((cateItem, index)=>{
                                    const {id, name} = cateItem;

                                    return(
                                        <option value={id}>{name}</option>
                                    )
                                })
                            )}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="position-relative mb-4">
                        <Form.Label>Hình ảnh</Form.Label>
                        <Form.Control
                            type="file"
                            // required
                            name="image"
                        />
                    </Form.Group>

                    <Form.Group className="position-relative mb-4">
                        <Form.Label>Mô tả</Form.Label>
                        <FloatingLabel controlId="floatingTextarea2">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '200px' }}
                            />
                        </FloatingLabel>
                    </Form.Group>

                    <Button className='btn btn-add' type="submit">Thêm mới</Button>
                </form>
            
            </div>
        </section>
    );
}

export default ProductAdd;