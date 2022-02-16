import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminDashboard from '../AdminDashboard'
import AdminProduct from '../AdminProducts/AdminProduct'
import AdminRetailers from '../AdminRetailers/AdminRetailers'
import AdminSetting from '../AdminSetting/AdminSetting'
import Category from '../Category/Category'
import Customer from '../Customer'
const AdminRoute = () => {
    return (
        <Switch>
            <Route exact  path='/admin/dashboard' exact component={AdminDashboard}/>
            <Route exact path='/admin/category' component={Category}/>
            <Route exact path='/admin/product' component={AdminProduct}/>
            <Route exact path='/admin/retailer' component={AdminRetailers}/>
            <Route exact path='/admin/setting' component={AdminSetting}/>
         </Switch>
    )
}

export default AdminRoute
