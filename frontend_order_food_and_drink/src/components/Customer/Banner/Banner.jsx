import React from 'react';

import './banner.scss';
import bannerImg from '../../../assets/img/banner.png';

function Banner(props) {
    const { isDisplay } = props;
    if (isDisplay) {
        return (
            <div className='banner'>
                <div className='banner__content'>
                    <h2 className='banner__content__title'>
                        Thử ngay các món ăn trên TBayEAT
                    </h2>
                    <div className='banner__content__desc'>
                        Đặt món trên TBayEAT để cảm nhận dịch vụ tiện ích mà chúng tôi mang lại cho bạn những món ăn ngon hấp dẫn.
                    </div>
                    <div className='banner__content__search-box'>
                        <input type='text' value='' name='' placeholder='Tìm kiếm món ăn yêu thích'/>
                        <div className='banner__content__btn search-btn'>Tìm kiếm</div>
                    </div>
                </div>
                <div className='banner__image'>
                    <img src={bannerImg} alt='' title='' />
                </div>
            </div>
        );
    } else {
        return (
            <></>
        );
    }
}

export default Banner;