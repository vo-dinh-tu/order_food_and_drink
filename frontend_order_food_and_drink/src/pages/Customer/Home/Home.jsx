import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import ProductList from '../../../components/Customer/Product-List/ProductList';
import Contact from '../../../components/Customer/Contact/Contact';
import Category from '../../../components/Customer/Category/Category';
import Cart from '../../../components/Customer/Cart/Cart';
import { getCategoryId } from '../../../actions/user';

import './home.scss';

function Home(props) {
    const [categories, setCategories] = useState([]);
    const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));
    const dispatch = useDispatch();

    const fetchCategory = async () =>{
        const response = await fetch('/api/category/');
        const data = await response.json();

        if (data) {
            const categoryActive = data.filter((item)=>item.is_active);
            if(categoryActive.length > 0) setCategories(categoryActive);
            
            const categoryFirst = data.find((item)=> {
                if(item.is_active) return item.id;
            });

            const action = getCategoryId(categoryFirst.id);
            dispatch(action);
        }
    }

    useEffect(()=>{
        fetchCategory();
    }, []);

    return (
        <>
            <Cart accessToken={accessToken}/>
            <Container className='block-product'>
                <h2>Nổi bật hôm nay</h2>
                <Category categories={categories}/>
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
        </>
    );
}

export default Home;