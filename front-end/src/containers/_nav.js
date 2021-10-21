import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Products',
    route: '/product',
    icon: 'cil-basket',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Product',
        to: '/product/allproduct',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Product',
        to: '/product/addproduct',
      },
      
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Order',
    to: '/order',
    icon: 'cis-cart'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Reviews',
    to: '/review',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },
 ]

export default _nav
