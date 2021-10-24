import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminDashboard from '../admin/adminViews/dashboard/AdminDashboard';
import Vendor from '../admin/adminViews/vendors/Vendor';

// Containers
const VendorLayout = React.lazy(() => import("../vendor/VendorContainers/VendorLayout"));
const AdminLayout = React.lazy(() => import("../admin/adminContainers/AdminLayout"));

// Pages
const Home = React.lazy(() => import("../views/pages/home/Home"));
const Login = React.lazy(() => import("../views/pages/login/Login"));
const Register = React.lazy(() => import("../views/pages/register/Register"));
const Page404 = React.lazy(() => import("../views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("../views/pages/page500/Page500"));
const Order = React.lazy(()=> import("../vendor/VendorViews/order/Order"));
const DetailOrder = React.lazy(()=> import("../vendor/VendorViews/order/DetailOrder"));


export default () => {

  return (
    <Router>
        <React.Suspense>
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/register'exact component={Register} />
        <Route path='/404' component={Page404} />
        <Route path='/vendor/:path?' exact>
          <VendorLayout>
            <Switch>
              <Route path='/vendor' exact component={Order} />
              <Route path='/vendor/setting' component={DetailOrder} />
            </Switch>
          </VendorLayout>
        </Route>
        
        <Route path='/admin/:path?' exact>
          <AdminLayout>
            <Switch>
              <Route path='/admin' exact component={AdminDashboard} />
              <Route path='/admin/vendor' component={Vendor} />
            </Switch>
          </AdminLayout>
        </Route>


      </Switch>
      </React.Suspense>
    </Router>
  )

}

