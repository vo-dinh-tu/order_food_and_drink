import React from 'react';
import { 
    FaSearch,
    FaBell,
    FaUser,
    FaRunning,
    FaUserAlt
} from "react-icons/fa";

import './header.scss';

function Header(props) {
    return (
        <div className="header-staff">
            <div className="col-2">
                {/* <img src={listImg} className="slider__header-showicon" /> */}
            </div>
            <div className="header__search">
                <span className="search-icon">
                <FaSearch />
                </span>
                <input type="text" className="form-search" placeholder="Search" />
            </div>

            <div className="header__user">
                <div className="header__notifi">
                    <FaBell />
                </div>

                <div className="header__user-avatar">
                    {/* <img src={userImg} alt="" className="user-img" /> */}
                    <FaUserAlt />
                    <div className="header__user-profile">
                        <div className="user-profile-name">
                            <h4>Admin</h4>
            
                        </div>

                        <ul className="profile-list">
                            <li className="profile-item">
                                <a href="" className="profile-item-link">
                                    <FaUser />
                                    Thông tin cá nhân
                                </a>
                            </li>
                        </ul>

                        <div className="user-logout">
                            <FaRunning />
                            <a href="" className="profile-item-link">
                            Logout
                            </a>
                        </div>
                    </div>
                </div>

                <p>Admin</p>
            </div>
        </div>
    );
}

export default Header;