import React from 'react'
import VendorSidebar from '../vendor/vendorSidebar/VendorSidebar'
import './adminLayout.css'
import VendorRoute from '../vendor/vendorSidebar/VendorRoute'
import { BrowserRouter, Route } from 'react-router-dom'

const VendorLayout = ({children}) => {
    return (
        <BrowserRouter>
        <Route render={(props) => (
            <div className='layout'>
                <VendorSidebar {...props}/>
                <div className="layout__content">
                   
                    <div className="layout__content-main">
                        <VendorRoute/>
                    </div>
                </div>
            </div>
        )}/>
    </BrowserRouter>
    )
}

export default VendorLayout
