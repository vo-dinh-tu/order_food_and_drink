import React from 'react';
import {Link} from 'react-router-dom';

import './menus.scss';

const sliders=[
    {
      url:'/staff',
    //   icon:<FaHome />,
      name:'Trang chủ',
    },
    {
      url:'/staff/category',
    //   icon:<FaEdit />,
      name:'Danh mục',
    },
    {
      url:'/staff/product',
    //   icon:<FaTable />,
      name:'Sản phẩm',
    },
    // {
    //   url:'/charts',
    // //   icon:<FaChartPie />,
    //   name:'Charts',
    // },
    // {
    //   url:'/login',
    // //   icon:<FaSignInAlt />,
    //   name:'Login',
    // },
    // {
    //   url:'/register',
    // //   icon:<FaUserPlus />,
    //   name:'Register',
    // },
];

function Menus(props) {
    return (
        <div className="slider__menu">
            <ul className="slider__menu-list">
                {sliders.map((item, index)=>{
                    const {url,icon, name} = item

                    return (
                        <li className='slider__menu-item active`:`slider__menu-item' 
                            key={index} 
                            // onClick={()=>handleClick(index)}
                            >

                            <Link to={url} className="slider__menu-link">
                                {/* {icon} */}
                                <p className="slider__menu-name">{name}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Menus;