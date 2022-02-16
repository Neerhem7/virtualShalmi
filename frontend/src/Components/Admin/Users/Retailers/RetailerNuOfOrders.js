import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const GetRetailersNuOfOrders = ({ user }) => {
    const [orders, setOrders] = useState([]);
    const getAllOrders = async () => {
        await axios.get(`/api/users/orders/${user._id}`, {
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            if (res.status === 200) {
                setOrders(res.data);
            }
            else {
                Error(res.data.errorMessage);
            }
        })
    }

    useEffect(() => {
        getAllOrders();
        return () => {

        }
    }, []);

    return (
        <div>
            <p className='fs-6'>
                ({orders.length})
            </p>
        </div>
    )
}
