import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RetailerDashboard from '../retailerDashboard'
import RetailerOrder from '../retailerOrder/RetailerOrder'
import RetailerReview from '../retailerReview/RetailerReview'
import RetailerSetting from '../retailerSetting/RetailerSetting'
const RetailerRoute = () => {
    return (
        <Switch>
            <Route path='/retailer/dashboard' exact component={RetailerDashboard}/>
            <Route path='/retailer/order' exact component={RetailerOrder}/>
            <Route path='/retailer/review' exact component={RetailerReview}/>
            <Route path='/retailer/setting' exact component={RetailerSetting}/>
            
         </Switch>
    )
}

export default RetailerRoute
