import React from 'react'
import CIcon from '@coreui/icons-react'

const _adminnav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/vendor',
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
        name: 'Retailers',
        to: '/adminretailer',
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
    name: 'Dashboard',
    to: '/adminvendor',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },

 ]

export default _adminnav
