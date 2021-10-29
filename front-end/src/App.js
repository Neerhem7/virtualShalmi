import './App.css';
import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import VendorDashboard from './vendor/VendorDashboard';
import AdminDashboard from './admin/AdminDashboard';
import VendorLayout from './layout/VendorLayout';
import AdminLayout from './layout/AdminLayout';
import RetailerDashboard from './retailer/RetailerDashboard';
import RetailerLayout from './layout/RetailerLayout';
import Home from './mainPages/Home';
import MainLayout from './layout/MainLayout';
import About from './mainPages/About';
import Login from './mainPages/Login';

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
      <Route exact path="/login" component={Login}></Route>
      <RouteWrapper exact path="/" component= {Home} layout= {MainLayout}></RouteWrapper>
      <RouteWrapper exact path="/about" component= {About} layout= {MainLayout}></RouteWrapper>
      <RouteWrapper exact path="/admin" component= {AdminDashboard} layout= {AdminLayout}></RouteWrapper>
      <RouteWrapper exact  path="/vendor" component= {VendorDashboard} layout= {VendorLayout}></RouteWrapper>
      <RouteWrapper exact  path="/retailer" component= {RetailerDashboard} layout= {RetailerLayout}></RouteWrapper>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
