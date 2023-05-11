import React from 'react';
import { useDispatch } from 'react-redux';

import { getCategoryId } from '../../../actions/user';
import './category.scss';

function Category({categories}) {
    const dispatch = useDispatch();

    const handleGetCateId = (categoryId) =>{
        const action = getCategoryId(categoryId);
        dispatch(action);
    }

    return (
        <div className='home-category'>
            <ul className="category-list">
                {
                    categories && (
                        categories.map((cate)=>{
                            const {id, name, is_active} = cate;
                            
                            if(is_active){
                                return(
                                    <li onClick={()=>handleGetCateId(id)} key={id} className='category-item active'>{name}</li>
                                )
                            }
                        })
                    )
                }
            </ul>
        </div>
    );
}

export default Category;