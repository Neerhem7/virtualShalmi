import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { Helmet } from 'react-helmet';
import { isAuthenticated } from '../../Components/Auth/auth';
import { UserLayout } from '../../Components/Layouts/UserLayout';
import { Success } from '../../Components/Messages/messages';

export const Address = (props) => {   
    const [created, setCreated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [sendingAddress, setSendingAddress] = useState({});
    const [data, setData] = useState({
        name: '',
        mobile: '',
        address: '',
        pinCode: '',
        city: '',
        state: ''
    });

    const { name, mobile, address, pinCode, city, state } = data;

    const handleAddressChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        await axios.post('/api/users/address/post', { name, mobile, address, pinCode, city, country: state }, { headers : {
            'authorization' : 'Bearer ' + localStorage.getItem('token')
          }}).then(res => {
            if (res.status === 200) {
                setLoading(false);
                setCreated(true);
                setSendingAddress(res.data.result.address);
                Success(res.data.successMessage)
            } else {
                Error(res.data.errorMessage);
            }
        });

    }


    const moveToPayment = async () => {
         await localStorage.setItem('addressInfo', JSON.stringify(sendingAddress));
         isAuthenticated() ? props.history.push('/checkout/payment') : props.history.push('/login')
    }


    const antIcon = <LoadingOutlined style={{ fontSize: 30, color: '##ff3e6c' }} spin />;


    /*************************************************************************************************************
    *********************************************   Side Product Details *******************************************
    *************************************************************************************************************/
    const sideProductDetails = () => {
        return (
            <div className='col-md-4 mt-2'>
                <h6 className='text-muted'>PRICE DETAILS ({localStorage.getItem('totalProducts')} Items)</h6>
                <div className='row'>
                    <div className='col-md-4 my-2'>
                        <h6> Total Amount </h6>
                    </div>
                    <div className='col-md-6 mt-2' style={{ paddingLeft: '108px' }}>
                        <h6>Rs. {localStorage.getItem('totalPrice')}</h6>
                    </div>
                    {
                        created &&

                        <div className='col-md-8'>
                            <Link onClick={() => moveToPayment()} className='btn my-2' style={{ width: '310px', background: '#ff3f6c', color: 'white' }}>Continue</Link>
                        </div>

                    }
                </div>
            </div>


        )
    }

    const createAddress = () => {
        return (
            <>
                <div>
                    <div className='row address'>
                        <div className='col-md-8' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '32px', paddingLeft: '82px' }}>
                            <form className='border' onSubmit={submitHandler}>
                                <div className="row p-3">
                                    <div className="col-xs-4 col-xs-offset-4 ">
                                        <div>
                                            <h6>Contact Details:</h6>
                                            <div className="floating-label-group">
                                                <input onChange={handleAddressChange} name='name' type="text" id="name" className="form-control" autocomplete="off" autofocus required />
                                                <label className="floating-label">Name</label>
                                            </div>
                                            <div className="floating-label-group">
                                                <input onChange={handleAddressChange} name='mobile' type="number" id="Mobile no." className="form-control" autocomplete="off" autofocus required />
                                                <label className="floating-label">Mobile no.</label>
                                            </div>
                                        </div>

                                        <div></div>
                                        <h6>Address:</h6>
                                        <div className="floating-label-group">
                                            <input onChange={handleAddressChange} name='pinCode' type="number" id="Pin-Code" className="form-control" autocomplete="off" autofocus required />
                                            <label className="floating-label">Pin Code</label>
                                        </div>
                                        <div className="floating-label-group">
                                            <input onChange={handleAddressChange} name='address' type="text" id="Address" className="form-control" autocomplete="off" autofocus required />
                                            <label className="floating-label">Address(House No, Building, Street, Area)</label>
                                        </div>
                                        <div className="floating-label-group">
                                            <input onChange={handleAddressChange} name='city' type="text" id="City" className="form-control" autocomplete="off" autofocus required />
                                            <label className="floating-label">City</label>
                                        </div>
                                        <div className="floating-label-group">
                                            <input onChange={handleAddressChange} name='state' type="text" id="State" className="form-control" autocomplete="off" autofocus required />
                                            <label className="floating-label">Country</label>
                                        </div>
                                    </div>

                                </div>
                                <div className='submit-btn-container'>
                                    <button className='btn submit-btn' type='submit'>ADD ADDRESS</button>
                                </div>
                            </form>
                        </div>
                        {sideProductDetails()}

                    </div>

                </div>
            </>

        )
    }

    return (
        <UserLayout breadcrumb>
            {loading
                ?
                <div className='text-center fixed-top' style={{ marginTop: '50vh' }}>
                    <Spin indicator={antIcon} />
                </div>

                :
                <div>
                    <Helmet>
                        <title>Virtual Shalmi | Address</title>
                    </Helmet>
                    {createAddress()}
                </div>
            }


        </UserLayout>
    )
}
