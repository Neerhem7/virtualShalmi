import React, { useEffect } from 'react'
import 'antd/dist/antd.css';
import { Route, Switch, useHistory, withRouter } from 'react-router-dom'

import { OrdersManagement } from './Pages/Admin/Orders/OrdersManagement'
import { AllProducts } from './Pages/Home/AllProducts'
import { Product } from './Pages/Product/Product';
import { ProductCart } from './Pages/Cart/ProductCart';

import { Orders } from './Pages/Profile/Order&Returns';
import { Profile } from './Pages/Profile/profile';
import { TrackOrders } from './Pages/Profile/TrackOrders';
import { EditProfile } from './Pages/Profile/EditProfile';
import { UserReviews } from './Pages/Profile/Reviews';

import AdminRoute from './Routes/AdminRoute';
import VendorRoute from './Routes/VendorRoutes';

import { VendorSignup } from './Pages/Auth/VendorSignup';
import { VendorLogin } from './Pages/Auth/VendorLogin';
import { RetailerLogin } from './Pages/Auth/RetailerLogin';
import { RetailerSignup } from './Pages/Auth/RetailerSignup';
import { AdminLogin } from './Pages/Auth/AdminLogin';
import { VendorOrdersManagement } from './Pages/Vendor/Orders/OrdersManagement';
import { SendVerficationEmail } from './Pages/Auth/Email-Verification/SendVerficationEmail';
import { ConfirmEmail } from './Pages/Auth/Email-Verification/ConfirmEmail';
import { isAuthenticated } from './Components/Auth/auth';
import { GetCategories } from './Pages/Admin/Categories/GetCategories';
import { Products } from './Pages/Admin/Products/Products';
import { Address } from './Pages/Cart/Address';
import { VendorProducts } from './Pages/Vendor/Products/Products';
import { VendorUpdateProduct } from './Pages/Vendor/Products/UpdateProduct';
import { VendorCreateProducts } from './Pages/Vendor/Products/CreateProducts';
import { VendorReviews } from './Pages/Vendor/Reviews/Reviews';
import { VendorProfile } from './Pages/Vendor/Profile.js/VendorProfile';
import { EditVendorProfile } from './Pages/Vendor/Profile.js/EditVendorProfile';
import { Payment } from './Pages/Payment';
import { DefaultComp } from './Pages/404';
import { GetAllVenders } from './Pages/Admin/Users/GetAllVenders';
import { GetAllRetailers } from './Pages/Admin/Users/GetAllRetailers';
import { CompletedOrders } from './Pages/Profile/CompletedOrders';

const App = () => {
  const history = useHistory();
  useEffect(() => {
    if (
      !isAuthenticated()
    ) {
      return true;
    }
    else if (
      isAuthenticated() &&
      window.location.href.includes('confirm-email')
    ) {
      return true;
    }
    else if (!isAuthenticated().verification) {
      history.push('/verify-email');
    } else {
      return true;
    }
    return () => {

    }
  }, [])

  return (
    <div>
      <div style={{ marginTop: '90px' }}>
        <Switch>
          <Route exact path='/' component={AllProducts} />
          <Route exact path='/my/orders' component={Orders} />
          <Route exact path='/my/completed-orders' component={CompletedOrders} />
          <Route exact path='/my/orders/track/:id' component={TrackOrders} />
          <Route exact path='/my/profile' component={Profile} />
          <Route exact path='/my/profile/update/:id' component={EditProfile} />
          <Route exact path='/my/reviews' component={UserReviews} />
          <Route exact path='/verify-email' component={SendVerficationEmail} />
          <Route exact path='/confirm-email/:token' component={ConfirmEmail} />


          <Route exact path='/retailer/login' component={RetailerLogin} />
          <Route exact path='/retailer/signup' component={RetailerSignup} />
          <Route exact path='/product/:id' component={Product} />
          <Route exact path='/cart' component={ProductCart} />
          <Route exact path='/checkout/address' component={Address} />
          <Route exact path='/checkout/payment' component={Payment} />

          <Route exact path='/admin/login' component={AdminLogin} />
          <AdminRoute exact path='/admin/all-categories' component={GetCategories} />
          <AdminRoute exact path='/admin/get-products' component={Products} />
          <AdminRoute exact path='/admin/vendors' component={GetAllVenders} />
          <AdminRoute exact path='/admin/retailers' component={GetAllRetailers} />
          <AdminRoute exact path='/admin/orders' component={OrdersManagement} />

          <Route exact path='/vendor/login' component={VendorLogin} />
          <Route exact path='/vendor/signup' component={VendorSignup} />
          <VendorRoute exact path='/vendor/get-products' component={VendorProducts} />
          <VendorRoute exact path='/vender/create-products' component={VendorCreateProducts} />
          <VendorRoute exact path='/vendor/product/update/:id' component={VendorUpdateProduct} />
          <VendorRoute exact path='/vendor/orders' component={VendorOrdersManagement} />
          <VendorRoute exact path='/vendor/reviews' component={VendorReviews} />
          <VendorRoute exact path='/vendor/profile' component={VendorProfile} />
          <VendorRoute exact path='/vendor/profile/update/:id' component={EditVendorProfile} />
          <Route component={DefaultComp} />
        </Switch>
      </div>
    </div>

  )
}

export default withRouter(App);