import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './profile.scss';

function Profile(props) {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [userUpdate, setUserUpdate] = useState(user || null);
    const [selectedImage, setSelectedImage] = useState(null);
    const accessToken = JSON.parse(sessionStorage.getItem("accessToken"));

    console.log(userUpdate);
    useEffect(()=>{
        console.log('update');
        sessionStorage.setItem("user", JSON.stringify(userUpdate));
    },[userUpdate]);
    
    const fetchUpdateInfoUser = async (event) =>{
        event.preventDefault();

        const formData = new FormData();
        formData.append("first_name", userUpdate.firstName);
        formData.append("last_name", userUpdate.lastName);
        formData.append("avatar", selectedImage);
        formData.append("phone", userUpdate.phone);
        formData.append("gender", userUpdate.gender);
        formData.append("age", userUpdate.age);

        const response = await fetch("/api/customer",{
            method: 'post',
            body: formData,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const data = await response.json();
        console.log(data);
        if(data.status === 200) {
            setUserUpdate(data);
            sessionStorage.setItem("user", JSON.stringify(userUpdate));
        }
    }
    console.log(selectedImage);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
        // setUserUpdate({...userUpdate, avatar:file.name})
    };

    return (
        <div className='block-profile'>
            <Container>
                <Row>
                    <Col xs={4}>
                        <div className="profile__image">
                            <div className="profile__image-group">
                                <img src={selectedImage ? URL.createObjectURL(selectedImage) : `http://localhost:8080/static/images/${userUpdate.avatar}`} alt="Selected" />
                                <input  type="file" name='avartar' accept="image/*" 
                                    onChange={handleImageChange}
                                />
                            </div>
                            <div className="upload-image">
                                Nhấn vào ảnh để tải ảnh
                            </div>
                        </div>
                    </Col>

                    <Col xs={8}>
                        <div className="profile__title">
                            <h2>Thông tin cá nhân</h2>
                        </div>
                        <div className="profile__info">
                            <form action="">
                                <div className='form-group'>
                                    <div className='profile-form-input'>
                                        <input type="text" name='first_name'
                                            onChange={(event)=> setUserUpdate({...userUpdate, firstName: event.target.value})} 
                                            value={userUpdate && userUpdate.firstName} 
                                            placeholder='Nhập tên của bạn'
                                        />
                                    </div>

                                    <div className='profile-form-input'>
                                        <input type="text" name='last_name' 
                                            onChange={(event)=> setUserUpdate({...userUpdate, lastName: event.target.value})} 
                                            value={userUpdate && userUpdate.lastName} 
                                            placeholder='Nhập họ của bạn'
                                        />
                                    </div>
                                </div>

                                <div className='profile-form-input'>
                                    <input type="text" name='email' 
                                        onChange={(event)=> setUserUpdate({...userUpdate, email: event.target.value})} 
                                        value={userUpdate && userUpdate.email} 
                                        placeholder='Nhập email của bạn'
                                    />
                                </div>

                                {/* <div className='profile-form-input'>
                                    <input type="password" name='password' value={user.password} placeholder='Nhập mật khẩu của bạn'/>
                                </div> */}

                                <div className='profile-form-input'>
                                    <input type="number" name='age' 
                                        onChange={(event)=> setUserUpdate({...userUpdate, age: event.target.value})}  
                                        value={userUpdate && userUpdate.age} 
                                        placeholder='Nhập tuổi của bạn'
                                    />
                                </div>

                                <div className='form-group'>
                                    <div className='profile-form-input'>
                                        <input type="text" name='phone' 
                                            onChange={(event)=> setUserUpdate({...userUpdate, phone: event.target.value})}  
                                            value={userUpdate && userUpdate.phone} 
                                            placeholder='Nhập số điện thoại'
                                        />
                                    </div>

                                    <select
                                        onChange={(event)=> setUserUpdate({...userUpdate, gender: event.target.value})}  
                                        name="gender" id="gender"
                                    >
                                        <option>Giới tính</option>
                                        <option selected={userUpdate.gender === 'male'} value="male">Nam</option>
                                        <option selected={userUpdate.gender === 'female'} value="female">Nữ</option>
                                    </select>
                                </div>

                                <div className='profile-form-btn'>
                                    <input type="submit" onClick={(event)=>fetchUpdateInfoUser(event)} className='btn btn-profile' value="Cập nhập"/>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Profile;