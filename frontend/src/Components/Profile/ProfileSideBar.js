import React from 'react'
import { NavLink } from 'react-router-dom'


export const ProfileSideBar = () => {
    return (
        <>
            <div className='profile-sidebar' style={{ borderRight: '1px solid #d4d5d9', paddingRight: '23px' }}>
                <div>
                    <div className='prof-div'>
                        <p>Orders</p>
                        <NavLink activeClassName='profile-sidebar-links' to='/my/orders'>Orders</NavLink>
                        <div className = 'pt-2'>
                            <NavLink activeClassName='profile-sidebar-links' to='/my/completed-orders'>Completed</NavLink>
                        </div>
                    </div>
                    <div className='prof-div'>
                        <p>Profile</p>
                        <div>
                            <NavLink activeClassName='profile-sidebar-links' to='/my/profile'>Profile</NavLink>
                        </div>
                    </div>
                    <div className='prof-div'>
                        <p>Reviews</p>
                        <div>
                            <NavLink activeClassName='profile-sidebar-links' to='/my/reviews'>Reviews</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
