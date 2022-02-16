import React from 'react'
import VendorSidebar from '../vendor/vendorSidebar/VendorSidebar'
import './adminLayout.css'
import VendorRoute from '../vendor/vendorSidebar/VendorRoute'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import VendorDashboard from '../vendor/VendorDashboard/VendorDashboard'

const VendorLayout = ({children}) => {
    return (
       

        <div className='layout'>
        <VendorSidebar/>
        <div className="layout__content">
            <Header/>
            <div className="layout__content-main">
                {children}

            </div>
        </div>
    </div>
  
    //     <BrowserRouter>
    //     <Route render={(props) => (
    //         <div className='layout'>
    //             {children}
    //             {/* <VendorSidebar {...props}/> */}
    //             <div className="layout__content">
    //                 <Header/>

    //                 <div className="layout__content-main">
    //                     <VendorRoute/>
    //                 </div>
    //             </div>
    //         </div>
    //     )}/>
    // </BrowserRouter>
    )
}

export default VendorLayout
