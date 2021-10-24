import React from 'react'
import {
  AdminHeader,
  AdminContent,
  AdminSidebar,
  AdminFooter
} from '../adminContainers/index'

const AdminLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <AdminSidebar/>
      <div className="c-wrapper">
        <AdminHeader/>
        <div className="c-body">
          <AdminContent />
        </div>
        <AdminFooter/>
      </div>
    </div>
  )
}

export default AdminLayout
