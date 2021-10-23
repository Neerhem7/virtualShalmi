import React from 'react'
import {
  VendorContent,
  VendorSidebar,
  VendorFooter,
  VendorHeader
} from './index'

const VendorLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <VendorSidebar/>
      <div className="c-wrapper">
        <VendorHeader/>
        <div className="c-body">
          <VendorContent/>
        </div>
        <VendorFooter/>
      </div>
    </div>
  )
}

export default VendorLayout
