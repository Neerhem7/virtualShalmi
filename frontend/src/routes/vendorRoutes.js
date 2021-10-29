import React from 'react';

const Toaster = React.lazy(() => import('../views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('../views/base/tables/Tables'));
const Breadcrumbs = React.lazy(() => import('../views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('../views/base/cards/Cards'));
const Carousels = React.lazy(() => import('../views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('../views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('../views/base/forms/BasicForms'));
const Jumbotrons = React.lazy(() => import('../views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('../views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('../views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('../views/base/navs/Navs'));
const Paginations = React.lazy(() => import('../views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('../views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('../views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('../views/base/switches/Switches'));
const Tabs = React.lazy(() => import('../views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('../views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('../views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('../views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('../views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('../views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('../views/charts/Charts'));
const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('../views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('../views/icons/flags/Flags'));
const Brands = React.lazy(() => import('../views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('../views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('../views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('../views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('../views/theme/colors/Colors'));
const Typography = React.lazy(() => import('../views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('../views/widgets/Widgets'));
const Users = React.lazy(() => import('../views/users/Users'));
const User = React.lazy(() => import('../views/users/User'));

//const Vendor= React.lazy(()=> import('../admin/adminViews/vendors/Vendor'))

const Product = React.lazy(()=> import('../views/products/AllProduct'));
const AddProduct = React.lazy(()=> import('../views/products/addProducts/AddProduct'));
const Order = React.lazy(()=> import('../vendor/VendorViews/order/Order'));
const DetailOrder = React.lazy(()=> import('../vendor/VendorViews/order/DetailOrder'));
const Customer = React.lazy(()=> import('../views/customer/Customer'));
const Review = React.lazy(()=> import('../views/reviews/Reviews'));
const AdminLayout= React.lazy(()=> import('../admin/adminContainers/AdminLayout'));
const VisitStore = React.lazy(()=> import('../views/store/MyStore'));
const MyAccount = React.lazy(()=> import('../views/account/Account'));

const vendorRoutes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/product/addproduct', name: 'Add Product', component: AddProduct},
  { path: '/product', name: 'Product', component: Product},
  { path: '/order', name: 'Order', component: Order},
  { path: '/detailorder', exact: true,name: 'Detail Order', component: DetailOrder},
  { path: '/customer', name: 'Customer', component: Customer}, 
  { path: '/review', name: 'Review', component: Review},
  { path: '/visitstore', name: 'VisitStore', component: VisitStore},
    { path: '/myaccount', name: 'MyAccount', component: MyAccount},


  

  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  
  
];

export default vendorRoutes;
