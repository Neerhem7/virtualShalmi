import React from 'react';
const AdminDashboard = React.lazy(()=> import('../admin/adminViews/dashboard/AdminDashboard'));
const Vendor = React.lazy(()=> import('../admin/adminViews/vendors/Vendor'));
const Retailer = React.lazy(()=> import('../admin/adminViews/retailer/Retailer'));

const adminroutes = [
 
  { path: '/', exact: true, name: 'admin' },
  { path: '/admindashboard', exact: true,name: 'Admin Dashboard' ,component: AdminDashboard},
  { path: '/adminvendor', exact: true, name: 'Vendor' ,component: Vendor},
  { path: '/adminretailer', exact: true, name: 'Retailer' ,component: Retailer },
  
];

export default adminroutes;
