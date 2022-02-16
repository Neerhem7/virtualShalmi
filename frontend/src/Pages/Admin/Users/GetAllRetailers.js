import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DeleteOutlined } from '@ant-design/icons';
import swal from 'sweetalert';
import { UserDrawer } from '../../../Components/Admin/Users/Drawer';
import { AdminLayout } from '../../../Components/Layouts/AdminLayout';
import { GetRetailersNuOfOrders } from '../../../Components/Admin/Users/Retailers/RetailerNuOfOrders';
import { RetailersOrdersDrawer } from '../../../Components/Admin/Users/Retailers/RetailersOrdersDrawer';



export const GetAllRetailers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        getUsers();
        return () => {

        }
    }, [success]);

    const getUsers = async () => {
        setLoading(true);
        await axios.get('/api/users/get/retailers', {
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            setLoading(false);
            if (res.status === 200) {
                setUsers(res.data);
            } else {
                setUsers('');
            }
        })
    }

    const deleteHandler = async (userId) => {
        setLoading(true);
        await axios.delete(`/api/users/delete/${userId}`, {
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            setLoading(false);
            if (res.status === 200) {
                setSuccess(true);
                swal('Success', res.data.successMessage, 'success');
                setSuccess(false);
            } else {
                swal('Error', 'Error in deleting User', 'error');
            }
        })
    }


    return (
        <AdminLayout sidebar>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Picture</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Orders</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr>
                                    <th className='pt-4' scope="row">{index + 1}</th>
                                    <td><img width='60' height='64' src={user.userPicture.url} alt={user.firsName} /></td>
                                    <td className='pt-4'>{user.firstName} {user.lastName}</td>
                                    <td className='pt-4'>{user.username}</td>
                                    <td className='pt-4'>{user.email}</td>
                                    <td className='pt-4 d-flex gap-2'><GetRetailersNuOfOrders user = {user} /> <RetailersOrdersDrawer retailer={user} /></td>
                                    <td className='pt-4'>
                                        <UserDrawer user={user} />
                                        <a className='ml-3' onClick={() => { deleteHandler(user._id); setSuccess(true); }}><DeleteOutlined /></a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </AdminLayout>
    )
}
