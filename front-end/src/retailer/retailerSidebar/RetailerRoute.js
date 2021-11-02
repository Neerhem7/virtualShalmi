import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RetailerDashboard from '../RetailerDashboard'
const RetailerRoute = () => {
    return (
        <Switch>
            <Route path='/retailer' exact component={RetailerDashboard}/>
            
         </Switch>
    )
}

export default RetailerRoute
