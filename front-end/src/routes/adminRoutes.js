import React from 'react';
const AdminDashboard = React.lazy(()=> import('../admin/adminViews/dashboard/AdminDashboard'));
const Vendor = React.lazy(()=> import('../admin/adminViews/vendors/Vendor'));

const adminroutes = [
 
  { path: '/', exact: true, name: 'admin' },
  { path: '/admindashboard', exact: true,name: 'Admin Dashboard' ,component: AdminDashboard},
  { path: '/vendor', exact: true, name: 'Vendor' ,component: Vendor},
 
];

export default adminroutes;
