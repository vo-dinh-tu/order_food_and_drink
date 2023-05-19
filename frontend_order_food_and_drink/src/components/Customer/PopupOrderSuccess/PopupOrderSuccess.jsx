import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

import './popupOrderSuccess.scss';

function PopupOrderSuccess(props) {

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modal__success'
                >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Thông báo
                    </Modal.Title>
                    <button className='btn-success-close' onClick={props.onHide}>
                        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M11.3416 9.85278L15.9722 15.1221C16.25 15.4382 16.3889 15.8598 16.3889 16.2813C16.3889 16.7555 16.25 17.1771 15.9722 17.4932L14.9534 18.6525C14.6293 18.9686 14.2589 19.1267 13.8884 19.1267C13.4717 19.1267 13.1475 18.9686 12.8697 18.6525L8.23913 13.3832L3.60858 18.6525C3.33074 18.9686 2.9603 19.1267 2.58986 19.1267C2.17311 19.1267 1.80266 18.9686 1.52483 18.6525L0.506106 17.4932C0.228272 17.1771 0.0893555 16.7555 0.0893555 16.2813C0.0893555 15.8598 0.228272 15.4382 0.506106 15.1221L5.13666 9.85278L0.506106 4.58351C0.228272 4.26735 0.0893555 3.8985 0.0893555 3.42427C0.0893555 3.00272 0.228272 2.58118 0.506106 2.21233L1.52483 1.05309C1.80266 0.736936 2.17311 0.578857 2.58986 0.578857C2.9603 0.578857 3.33074 0.736936 3.60858 1.05309L8.23913 6.32237L12.8697 1.05309C13.1475 0.736936 13.4717 0.578857 13.8884 0.578857C14.2589 0.578857 14.6293 0.736936 14.9534 1.05309L15.9722 2.21233C16.25 2.58118 16.3889 3.00272 16.3889 3.42427C16.3889 3.8985 16.25 4.26735 15.9722 4.58351L11.3416 9.85278Z" fill="#1AC073"/>
                        </svg>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_186_1861)">
                        <rect x="30" y="20" width="100" height="100" rx="50" fill="#1AC073"/>
                        </g>
                        <path d="M64.7222 70.6945L75.3703 81.1112L96.6666 60.2778" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                        <defs>
                        <filter id="filter0_d_186_1861" x="0" y="0" width="160" height="160" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="10"/>
                        <feGaussianBlur stdDeviation="15"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.25098 0 0 0 0 0.74902 0 0 0 0 1 0 0 0 0.24 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_186_1861"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_186_1861" result="shape"/>
                        </filter>
                        </defs>
                    </svg>

                    <h4 className='success-title'>Đặt hàng thành công</h4>

                </Modal.Body>
                <Modal.Footer>
                    <Link to='/order-history' className='btn-success-follow'>Theo dõi đơn hàng</Link>
                    <Link to='/' className='btn-success-continue'>Tiếp tục mua hàng</Link>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PopupOrderSuccess;