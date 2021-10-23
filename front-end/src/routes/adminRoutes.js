import React from 'react';
const AdminDashboard = React.lazy(()=> import('../admin/adminViews/dashboard/AdminDashboard'));
const Vendor = React.lazy(()=> import('../admin/adminViews/vendors/Vendor'));
const adminroutes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/admindashboard', exact: true, name: 'Admin Dashboard' ,component: AdminDashboard},
  
  { path: '/admindashboardvendor', exact: true, name: 'Admin Dashboard Vendor' ,component: Vendor},
];

export default adminroutes;
