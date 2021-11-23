import React from 'react'
import RetailerRoute from '../retailer/retailerSidebar/RetailerRoute'
import RetailerSidebar from '../retailer/retailerSidebar/RetailerSidebar'
import { BrowserRouter, Route } from 'react-router-dom'
import './adminLayout.css'
import Header from './Header'
const RetailerLayout = ({children}) => {
    return (
        <BrowserRouter>
        <Route render={(props) => (
            <div className='layout'>
                <RetailerSidebar {...props}/>
                <div className="layout__content">
                <Header/>
                    <div className="layout__content-main">
                        <RetailerRoute/>
                    </div>
                </div>
            </div>
        )}/>
    </BrowserRouter>
    )
}

export default RetailerLayout
