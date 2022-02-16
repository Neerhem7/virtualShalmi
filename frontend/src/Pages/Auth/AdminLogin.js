import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { UserLayout } from '../../Components/Layouts/UserLayout';
import { Helmet } from 'react-helmet';
import { setAuthentication } from '../../Components/Auth/auth';

export const AdminLogin = (props) => {
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({
        email: '',
        password: '',

    });

    const { email, password } = userData;

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }


    const onFinish = async () => {
        window.scrollTo(0, 0);
        setLoading(true);
        await axios.post('/api/users/admin/login', {email, password}).then(res => {
            setLoading(false);
            if (res.status === 200) {
                setAuthentication(res.data, res.data.token);
                swal('Congrats!', res.data.successMessage, 'success');
                props.history.push('/admin/get-products');
                window.location.reload();
            }
            else if (res.status === 201) {
                swal(res.data.errorMessage)
            }
            else {
                swal(res.data.errorMessage);
            }
        })

    };


    const antIcon = <LoadingOutlined style={{ fontSize: 30, color: '##ff3e6c' }} spin />;

    return (

        <UserLayout navbar>
            <Helmet>
                <title>Myntra | Admin</title>
            </Helmet>
            <div className='login'>
                <div className='login-inner'>
                    {
                        loading
                            ?
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '200px' }}>
                                <Spin indicator={antIcon} />
                            </div>

                            :
                            <>
                                <p className='mb-4' style={{ fontSize: '20px', fontWeight: '680', color: '#424553' }}>Login as Admin</p>
                                <form onSubmit={onFinish}>
                                    <div className="floating-label-group">
                                        <input onChange={handleChange} name='email' type="text" id="name" className="form-control" autofocus required />
                                        <label className="floating-label">Email or Username</label>
                                    </div>
                                    <div className="floating-label-group">
                                        <input onChange={handleChange} name='password' type="password" id="password" className="form-control" autofocus required />
                                        <label className="floating-label">Password</label>
                                    </div>


                                    <button type='submit' className='btn my-2 mt-2 w-100' style={{ height: '41px', background: '#ff3f6c', color: 'white' }}>
                                        Login
                                    </button>
                                </form>
                            </>
                    }
                </div>
            </div>

        </UserLayout>

    );
}
