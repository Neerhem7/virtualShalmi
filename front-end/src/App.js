import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VendorDashboard from './vendor/VendorDashboard/VendorDashboard';
import AdminDashboard from './admin/AdminDashboard';
import VendorLayout from './layout/VendorLayout';
import AdminLayout from './layout/AdminLayout';
import RetailerDashboard from './retailer/RetailerDashboard';
import RetailerLayout from './layout/RetailerLayout';
import Home from './mainPages/Home';
import MainLayout from './layout/MainLayout';
import About from './mainPages/About';
import VendorLogin from './mainPages/VendorLogin/index';
import VendorRegister  from './mainPages/VendorRegister/index'
import RetailerLogin from './mainPages/RetailerLogin/index'
import RetailerRegister from './mainPages/RetailerRegister/index'
import Verification from './mainPages/verification/Verification';
import StoreSetup from './mainPages/storeSetup/StoreSetup';

function RouteWrapper({
  component: Component, 
  layout: Layout, 
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/verification" component={Verification}></Route>
      <Route exact path="/vendorlogin" component={VendorLogin}></Route>
      <Route exact path="/vendorregister" component={VendorRegister}></Route>
      <Route exact path="/vendorstoresetup" component={StoreSetup}></Route>
      <Route exact path="/retailerlogin" component={RetailerLogin}></Route>
      <Route exact path="/retailerregister" component={RetailerRegister}></Route>
      <RouteWrapper exact path="/" component= {Home} layout= {MainLayout}></RouteWrapper>
      <RouteWrapper exact path="/about" component= {About} layout= {MainLayout}></RouteWrapper>
      <RouteWrapper exact path="/admin" component= {AdminDashboard} layout= {AdminLayout}></RouteWrapper>
      <RouteWrapper exact  path="/vendor/dashboard" component= {VendorDashboard} layout= {VendorLayout}></RouteWrapper>
      <RouteWrapper exact  path="/retailer" component= {RetailerDashboard} layout= {RetailerLayout}></RouteWrapper>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
