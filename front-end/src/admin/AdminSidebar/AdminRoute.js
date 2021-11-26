import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminDashboard from '../AdminDashboard'
import Category from '../Category/Category'
import Customer from '../Customer'
const AdminRoute = () => {
    return (
        <Switch>
            <Route path='/' exact component={AdminDashboard}/>
            <Route path='/admin/category' component={Category}/>
            <Route path='/customers' component={Customer}/>
         </Switch>
    )
}

export default AdminRoute
