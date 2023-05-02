import React from 'react';
import { Row} from 'react-bootstrap';

import ProductCard from '../Product-Card/ProductCard';
import './ProductList.scss';

function ProductList(props) {
    return (
        <div className='product-list'>
            <Row>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Row>
        </div>
    );
}

export default ProductList;