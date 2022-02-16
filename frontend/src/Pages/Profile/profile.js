import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../Components/Auth/auth';
import { ProfLayout } from '../../Components/Layouts/ProfileLayout';
import { Error } from '../../Components/Messages/messages';

export const Profile = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    const getUser = async () => {
        setLoading(true);
        await axios.get(`/api/users/get/${isAuthenticated()._id}`).then(res => {
            if (res.status === 200) {
                setUser(res.data);
                setLoading(false);
            } else {
                Error(res.data.errorMessage);
            }
        })
    }

    useEffect(() => {
        getUser();
        return () => {

        }
    }, []);

    return (
        <ProfLayout sidebar>
            <div className='profile'>
                <div className='inner' style={{ marginTop: '10px', paddingTop: '47px', border: '1px solid #d4d5d9' }}>
                    <span className='user-prof'>Profile Details</span>
                    <div className='row mx-5 text-center mt-4 pb-5' style={{ borderTop: '1px solid #d4d5d9' }}>

                        <div className='col-md-5 col-sm-6 mt-4'>
                            <p> Full Name</p>
                        </div>
                        <div className='col-md-5 col-sm-6 mt-4'>
                            <p>{user.firstName} {user.lastName}</p>
                        </div>

                        <div className='col-md-5 col-sm-6 mt-4'>
                            <p> Mobile Number</p>
                        </div>
                        <div className='col-md-5 col-sm-6 mt-4'>
                            <p>{user.phone}</p>
                        </div>

                        <div className='col-md-5 col-sm-6 mt-4'>
                            <p>Email ID</p>
                        </div>
                        <div className='col-md-5 col-sm-6 mt-4'>
                            <p>{user.email}</p>
                        </div>
                        <div className='col-md-5 col-sm-6 mt-4'>
                            <p>Location</p>
                        </div>
                        <div className='col-md-5 col-sm-6 mt-4'>
                            <p>{user.city} {user.country}</p>
                        </div>
                    </div>
                    <div className='text-right p-3'>
                        <Link to={`/my/profile/update/${user._id}`} className='btn btn-dark'>Edit</Link>
                    </div>
                </div>
            </div>

        </ProfLayout>
    )
}
