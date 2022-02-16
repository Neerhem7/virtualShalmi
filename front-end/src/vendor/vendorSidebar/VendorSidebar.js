import React from 'react'
import { Link } from 'react-router-dom'
import sidebar_items from './VendorSidebarRoute.json'
import './vendorSidebar.css'
import VendorLayout from '../../layout/VendorLayout'
const SidebarItem = (props) => {

    const active = props.active ? 'active' : ''

    return (
        <div className="vsidebar__item">
            <div className={`vsidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const VendorSidebar = (props) => {
   // const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)
    return (
        <>
        <div className='vsidebar'>
            <div className="vsidebar__logo">
                Virtual Shalmi
                {/* <img src={logo} alt="company logo" /> */}
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                           // active={index === activeItem}
                        />
                    </Link>
                ))
            }
            
        </div>
        </>
    //      <div className='vsidebar'>
    //      <div className="vsidebar__logo">
    //          Virtual Shalmi
    //          {/* <img src={logo} alt="company logo" /> */}
    //      </div>
    //      {
    //          sidebar_items.map((item, index) => (
    //              <Link to={item.route} key={index}>
    //                  <SidebarItem
    //                      title={item.display_name}
    //                      icon={item.icon}
    //                      active={index === activeItem}
    //                  />
    //              </Link>
    //          ))
    //      }
    //  </div>
        )
}

export default VendorSidebar
