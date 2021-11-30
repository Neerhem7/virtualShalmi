import './App.css';
import axios from "axios";
import React, {useEffect, useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VendorDashboard from './vendor/VendorDashboard/VendorDashboard';
import AdminDashboard from './admin/AdminDashboard';
import VendorLayout from './layout/VendorLayout';
import AdminLayout from './layout/AdminLayout';
import RetailerDashboard from './retailer/retailerDashboard';
import RetailerLayout from './layout/RetailerLayout';
import Shop from './mainPages/Shop';
import MainLayout from './layout/MainLayout';
import VendorLogin from './mainPages/VendorLogin/index';
import VendorRegister  from './mainPages/VendorRegister/index'
import RetailerLogin from './mainPages/RetailerLogin/index'
import RetailerRegister from './mainPages/RetailerRegister/index'
import Verification from './mainPages/verification/Verification';
import StoreSetup from './mainPages/storeSetup/StoreSetup';
import AddProduct from './vendor/VendorProduct/AddProduct';
import AdminLogin from './mainPages/AdminLogin/AdminLogin';
import { UserProvider } from './UserContext';
import VendorPages from './mainPages/VendorsPage/VendorPages';
import DetailProduct from './mainPages/DetailProduct';

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
  const [category, setcategory] = useState([]);
  const getCategory = () =>{
    axios.get("http://localhost:8000/category/getCategory")
    .then((res)=>{
        setcategory(res.data);
        console.log(res.data)
    }).catch((e)=>{
      console.log(e);
    })
  }
  useEffect(getCategory, []);
  return (
    <UserProvider value={category}>

    
    <BrowserRouter>
    <Switch>
    <Route exact path="/adminlogin" component={AdminLogin}></Route>
    <Route exact path="/verification" component={Verification}></Route>
      <Route exact path="/vendorlogin" component={VendorLogin}></Route>
      <Route exact path="/vendorregister" component={VendorRegister}></Route>
      <Route exact path="/vendorstoresetup/:id" component={StoreSetup}></Route>
      <Route exact path="/retailerlogin" component={RetailerLogin}></Route>
      <Route exact path="/retailerregister" component={RetailerRegister}></Route>
      <Route exact path="/verification/:id" component={Verification}></Route>
      
      <RouteWrapper exact path="/" component= {Shop} layout= {MainLayout}></RouteWrapper>
      <RouteWrapper exact path="/vendors" component= {VendorPages} layout= {MainLayout}></RouteWrapper>
      <RouteWrapper exact path="/detailproduct/:id" component= {DetailProduct} layout= {MainLayout}></RouteWrapper>

      <RouteWrapper exact path="/admin/dashboard/" component= {AdminDashboard} layout= {AdminLayout}></RouteWrapper>
      <RouteWrapper exact  path="/vendor/dashboard" component= {VendorDashboard} layout= {VendorLayout}></RouteWrapper>
      <RouteWrapper exact  path="/vendor/addproduct" component= {AddProduct} layout= {VendorLayout}></RouteWrapper>
      <RouteWrapper exact  path="/vendor/product" component= {AddProduct} layout= {VendorLayout}></RouteWrapper>
      <RouteWrapper exact  path="/retailer/dashboard" component= {RetailerDashboard} layout= {RetailerLayout}></RouteWrapper>
    </Switch>
  </BrowserRouter>
  </UserProvider>
  );
}

export default App;
