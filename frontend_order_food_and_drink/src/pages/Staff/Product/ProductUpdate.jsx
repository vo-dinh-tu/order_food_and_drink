import React, {useState, useEffect} from 'react';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function ProductUpdate(props) {
    const [productItem, setproductItem] = useState(null);
    const [categoryList, setCategoryList] = useState([]);
    const { id } = useParams();
 
    useEffect(()=>{
        if(id !== null && id !== undefined){
            const fetchproductItem = async ()=>{
                const response = await fetch(`/api/product/${id}`);
                const data = await response.json();
                
                if(data) setproductItem(data);
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

    return (
        <section className="block-product-staff">
            <h3 className="title-admin">Cập nhập sản phẩm</h3>
    
            <div className="product-container background-radius">
                {productItem && (
                    <Form className='product-form' >
                        <Form.Group className='mb-4'>
                            <Form.Label>Tên danh mục</Form.Label>
                            <Form.Control
                                // required
                                type="text"
                                name="name"
                                value={productItem.name}
                                // value={cateUpdate.name !== '' ? cateUpdate.name : productItem.name}
                                // onChange={(event)=> setCateUpdate({...cateUpdate, name: event.target.value})}
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
                                            <option selected={id === productItem.category_id} value={id}>{name}</option>
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
                                value={productItem.image}  
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Check
                                // required
                                name="is_active"
                                label="Trạng thái"
                                // value={cateUpdate.is_active !== null ? !cateUpdate.is_active : !cateItem.is_active}
                                // checked={cateUpdate.is_active !== null ? cateUpdate.is_active : cateItem.is_active}
                                // onChange={(event)=> setCateUpdate({...cateUpdate, is_active: event.target.value === 'true' ? true : false})}
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
                                />
                            </FloatingLabel>
                        </Form.Group>

                        <Button className='btn btn-add' type="submit">Cập nhập</Button>
                    </Form>
                )}
            </div>
        </section>
    );
}

export default ProductUpdate;