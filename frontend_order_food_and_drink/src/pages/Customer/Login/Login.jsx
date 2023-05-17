import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate  } from "react-router-dom";

import './login.scss';
import { fetchInitCart } from '../../../actions/cart';

function Login() {
    const [accessToken, setAccessToken] = useState(null);
    const [validated, setValidated] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        page: 'user'
    });

    const navigate = useNavigate();

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const loginAccessToken = async () =>{
        const response = await fetch('/api/auth/', {
            method: 'get',
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
        });
      
        const user = await response.json();
        
        if(user){
            sessionStorage.setItem('user', JSON.stringify(user));
            navigate('/');
        }
    }

    if(accessToken) {
        loginAccessToken();
        fetchInitCart(accessToken);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(validated){
            const response = await fetch('/api/auth/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if(response.ok){
                setAccessToken(data.accessToken);
                sessionStorage.setItem('accessToken', JSON.stringify(data.accessToken));
            }
        }
    }

    return (
        <Container className='block-login'>
            <h2>Đăng nhập</h2>
            <span>Đăng nhập và bắt đầu cuộc phiêu lưu ẩm thực của bạn!</span>

            <form className='login-form' onSubmit={handleSubmit}>
                <div className='login-form-input'>
                    <input type="text" name='email' onChange={handleChange} placeholder='Nhập email của bạn'/>
                </div>

                <div className='login-form-input'>
                    <input type="text" name='password' onChange={handleChange} placeholder='Nhập mật khẩu của bạn'/>
                    <input type="hidden" name='page'/>
                </div>

                <div className='login-form-btn'>
                    <input type="submit" className='btn btn-login' value="Đăng nhập"/>
                </div>
            </form>
        </Container>
    );
}

export default Login;