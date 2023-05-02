import React from 'react';
import { Container } from 'react-bootstrap';

import ProductList from '../../../components/Customer/Product-List/ProductList';
import Contact from '../../../components/Customer/Contact/Contact';
import './home.scss';

function Home(props) {
    const user = JSON.parse(sessionStorage.getItem("user"));

    return (
        <Container className='block-product'>
            <h2>Nổi bật hôm nay</h2>

            <ProductList />

            <div className='btn-see-more'>
                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 9.5V5M5.5 5V0.5M5.5 5H10M5.5 5H1" stroke="#929292" strokeLinecap="round"/>
                </svg>
                <span>
                    Xem thêm...
                </span>
            </div>

            <Contact />
        </Container>
    );
}

export default Home;