import React from 'react'
import AdminSidebar from '../admin/AdminSidebar/AdminSidebar'
import './adminLayout.css'

import { BrowserRouter, Route } from 'react-router-dom'
import AdminRoute from '../admin/AdminSidebar/AdminRoute'
const AdminLayout = ({props}) => {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className='layout'>
                    <AdminSidebar {...props}/>
                    <div className="layout__content">
                       
                        <div className="layout__content-main">
                            <AdminRoute/>
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default AdminLayout
