import React from 'react';
import { Link } from 'react-router-dom';

import './menus.scss';

const sliders = [
  {
    url: '/staff',
    //   icon:<FaHome />,
    name: 'Trang chủ',
  },
  {
    url: '/staff/order',
    //   icon:<FaChartPie />,
    name: 'Đơn hàng',
  },
  {
    url: '/staff/register',
    //   icon:<FaTable />,
    name: 'Đăng ký',
    role: 'ADMIN'
  },
  {
    url: '/staff/management',
    //   icon:<FaTable />,
    name: 'Quản lý nhân viên',
    role: 'ADMIN'
  },
  {
    url: '/staff/category',
    //   icon:<FaEdit />,
    name: 'Danh mục',
    role: 'ADMIN'
  },
  {
    url: '/staff/product',
    //   icon:<FaTable />,
    name: 'Sản phẩm',
    role: 'ADMIN'
  },
  {
    url: '/staff/revenue',
    //   icon:<FaTable />,
    name: 'Doanh thu',
    role: 'ADMIN'
  },
  {
    url: '/staff/supply',
    //   icon:<FaTable />,
    name: 'Xuất Nhập Thực Phẩm',
    role: 'ADMIN'
  },

];

function Menus(props) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  let roleUser = user ? user.role : null;

  return (
    <div className="slider__menu">
      <ul className="slider__menu-list">
        {sliders.map((item, index) => {
          const { url, icon, name, role } = item

          return (
            <li className='slider__menu-item active`:`slider__menu-item'
              key={index}
            // onClick={()=>handleClick(index)}
            >

              <Link to={url} className={`slider__menu-link ${role && role !== roleUser ? 'disable' : ''}`}>
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