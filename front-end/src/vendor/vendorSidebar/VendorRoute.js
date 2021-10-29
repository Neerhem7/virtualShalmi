import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Order from '../Order'
import VendorDashboard from '../VendorDashboard'
const VendorRoute = () => {
    return (
        <Switch>
            <Route path='/vendor' exact component={VendorDashboard}/>
            <Route path='/order' component={Order}/>
         </Switch>
    )
}

export default VendorRoute
