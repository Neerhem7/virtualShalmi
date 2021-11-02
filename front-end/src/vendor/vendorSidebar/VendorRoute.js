import React from 'react'
import { Route, Switch } from 'react-router-dom'
import VendorOrder from '../VendorOrder/VendorOrder'
import VendorDashboard from '../VendorDashboard/VendorDashboard'
import VendorProduct from '../VendorProduct/VendorProduct'
import VendorCustomer from '../VendorCustomer/VendorCustomer'
import VendorReviews from '../VendorReviews/VendorReviews'
import VendorStore from '../VendorStore/VendorStore'
import VendorSetting from '../VendorSetting/VendorSetting'
import VendorWithdraw from '../VendorWithdraw/VendorWithdraw'

const VendorRoute = () => {
    return (
        <Switch>
            <Route path='/vendor/dashboard' exact component={VendorDashboard}/>
            <Route path='/vendor/product' exact component={VendorProduct}/>
            <Route path='/vendor/order' exact component={VendorOrder}/>
            <Route path='/vendor/withdraw' exact component={VendorWithdraw}/>
            <Route path='/vendor/customer' exact component={VendorCustomer}/>
            <Route path='/vendor/review' exact component={VendorReviews}/>
            <Route path='/vendor/visitstore' exact component={VendorStore}/>
            <Route path='/vendor/setting' exact component={VendorSetting}/>
            
            
         </Switch>
    )
}

export default VendorRoute
