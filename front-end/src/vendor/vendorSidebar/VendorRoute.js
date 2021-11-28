import React from "react";
import { Route, Switch } from "react-router-dom";
import VendorOrder from "../VendorOrder/VendorOrder";
import VendorDashboard from "../VendorDashboard/VendorDashboard";
import VendorProduct from "../VendorProduct/VendorProduct";
import VendorCustomer from "../VendorCustomer/VendorCustomer";
import VendorReviews from "../VendorReviews/VendorReviews";
import VendorStore from "../VendorStore/VendorStore";
import VendorSetting from "../VendorSetting/VendorSetting";
import VendorWithdraw from "../VendorWithdraw/VendorWithdraw";
import AddProduct from "../VendorProduct/AddProduct";

const VendorRoute = () => {
  return (
    <Switch>
      <Route exact path="/vendor/dashboard"  component={VendorDashboard} />
      <Route exact path="/vendor/product"  component={VendorProduct} />
      <Route exact path="/vendor/addproduct" component={AddProduct} />
      <Route path="/vendor/order"  component={VendorOrder} />
      <Route path="/vendor/withdraw"  component={VendorWithdraw} />
      <Route path="/vendor/customer"  component={VendorCustomer} />
      <Route path="/vendor/review"  component={VendorReviews} />
      <Route path="/vendor/visitstore"  component={VendorStore} />
      <Route path="/vendor/setting"  component={VendorSetting} />
    </Switch>
  );
};

export default VendorRoute;
