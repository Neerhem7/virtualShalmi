import axios from 'axios';
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import { message, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal';
import { Error } from '../../../Components/Messages/messages';
import { AdminLayout } from '../../../Components/Layouts/AdminLayout';

export const OrdersManagement = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    const [data, setData] = useState("null");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [success, setSuccess] = useState(false);

    const getAllOrders = async () => {
        setLoading(true);
        await axios.get(`/api/users/all-orders`, {
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            if (res.status === 200) {
                setOrders(res.data);
                setLoading(false);
            }
            else {
                swal('Sorry', 'No orders', 'error');
            }
        })
    }


    useEffect(() => {
        getAllOrders();
        return () => {

        }
    }, [success]);




    /************************************************** Modal ***********************************************/
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };



    /************************************************** Delete Orders ***********************************************/
    const deleteHandler = async (orderId) => {
        await axios.delete(`/api/users/order/delete/${orderId}`, {
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            if (res.status === 200) {
                setSuccess(true);
                message.success({
                    content: res.data.successMessage,
                    style: {
                        marginTop: '15vh',
                    },
                });
                setSuccess(false);
            }
            else {

                Error(res.data.errorMessage)
            }
        })
    }


    function cancel(e) {
        Error('Request Cancelled!')
    }


    return (
        <AdminLayout sidebar>
            <div className='orders admin-orders pt-5'>
                <h4>Total Amount Earned: Rs. {orders && orders.length > 0 && orders.reduce((a, b) => b.product && a + b.product.price * b.product.qty, 0) * 0.05}</h4>

                {
                    orders && orders.length > 0 && orders.map((order, index) => {
                        return (
                            order.product &&
                            <table className="table border-0">
                                <tbody>
                                    <tr className='bg-secondary text-white'>
                                        <th>
                                            Order #{index + 1}

                                        </th>
                                        <th>
                                            Order Id : {order._id}
                                        </th>
                                        <th>
                                            Total Price : Rs.{order.product.price * order.product.qty}
                                        </th>
                                        <th>
                                            <Link className='text-white' onClick={() => { showModal(); setUser(order.user); setData(order.data) }}>Customer</Link>
                                        </th>
                                        <th>
                                            <span>Status : &nbsp;
                                                {order.status === '1' && 'Just Placed'}
                                                {order.status === '2' && 'Confirmed'}
                                                {order.status === '3' && 'Prepared'}
                                                {order.status === '4' && 'Delivered'}
                                                {order.status === '5' && <CheckCircleOutlined className='fs-5 text-success bg-white rounded-circle' style={{ marginTop: '-10px' }} />}
                                            </span>
                                        </th>
                                        <th>
                                            <Popconfirm
                                                title="Are you sure?"
                                                onConfirm={() => deleteHandler(order._id)}
                                                onCancel={cancel}
                                                placement='topLeft'
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                                <span className='text-white'><DeleteOutlined /></span>
                                            </Popconfirm>

                                        </th>
                                    </tr>
                                    <div className='text-center mb-4' style={{ width: '100%', position: 'relative' }}>
                                        <th style={{ position: 'absolute', left: '200%', top: '0px', width: '400px' }}>
                                            <span>Placed At: {order.placed}</span>
                                        </th>
                                    </div>
                                    <tr>
                                        <th>
                                            <img src={order.product.image} height='71' width='64' alt='image' />
                                        </th>
                                        <th>
                                            {order.product.name}

                                        </th>
                                        <th>Qty:{order.product.qty}</th>
                                        <th>Rs.{order.product.price * order.product.qty}</th>
                                        <th className='text-success'>Earned: Rs.{order.product.price * order.product.qty * 0.05}</th>
                                    </tr>
                                </tbody>

                            </table>


                        )
                    })
                }

            </div>
            <Modal footer={false} width={800} title="User Info" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className="row">
                    <div className="col-md-12 my-4">
                        <h6>Profile Picture:</h6>
                        <img src={user.image} alt='image' width='200' />
                    </div>
                    <div className="col-md-6 my-4">
                        <h6>Full Name:</h6>
                        <b>{user.fname} {user.lname}</b>
                    </div>
                    <div className="col-md-6 my-4">
                        <h6>Email:</h6>
                        <b>{user.email}</b>
                    </div>
                    <div className="col-md-6 my-4">
                        <h6>Address For Delivery:</h6>
                        <b>{user.address}</b>
                    </div>
                </div>
                {
                    data &&
                    <div className="row">
                        <h2>Payment Information:</h2>
                        <div className="col-md-6 my-4">
                            <h6>Paid:</h6>
                            <b>{data.paid ? <span>True</span> : <span>false</span>}</b>
                        </div>
                        <div className="col-md-6 my-4">
                            <h6>Cancelled:</h6>
                            <b>{data.cancelled ? <span>True</span> : <span>false</span>}</b>
                        </div>
                        <div className="col-md-6 my-4">
                            <h6>PayerID:</h6>
                            <b>{data.payerID}</b>
                        </div>
                        <div className="col-md-6 my-4">
                            <h6>Payment ID:</h6>
                            <b>{data.paymentID} </b>
                        </div>
                        <div className="col-md-6 my-4">
                            <h6>Payment Token:</h6>
                            <b>{data.paymentToken} </b>
                        </div>
                        <div className="col-md-6 my-4">
                            <h6>Email:</h6>
                            <b>{data.email}</b>
                        </div>
                    </div>
                }
            </Modal>
        </AdminLayout>
    )
}
