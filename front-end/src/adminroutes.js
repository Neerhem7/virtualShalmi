import React from 'react';
const AdminDashboard = React.lazy(()=> import('./admin/views/dashboard'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/admindashboard', exact: true, name: 'Admin Dashboard' ,component: AdminDashboard},
];

export default routes;
