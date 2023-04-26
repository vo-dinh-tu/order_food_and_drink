import React from 'react';
import Container from 'react-bootstrap/Container';

import './login.scss';

function Login() {
    return (
        <Container className='block-login'>
            <h2>Đăng nhập</h2>
            <span>Đăng nhập và bắt đầu cuộc phiêu lưu ẩm thực của bạn!</span>

            <form className='login-form' action="/" method='post'>
                <div className='login-form-input'>
                    <input type="text" name='email' placeholder='Nhập email của bạn'/>
                </div>

                <div className='login-form-input'>
                    <input type="text" name='password' placeholder='Nhập mật khẩu của bạn'/>
                </div>

                <div className='login-form-btn'>
                    <input type="submit" className='btn btn-login' value="Đăng nhập"/>
                </div>
            </form>
        </Container>
    );
}

export default Login;