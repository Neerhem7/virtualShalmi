import React from 'react'
import { Link } from 'react-router-dom'
import sidebar_items from './AdminSidebarRoute.json'
import './adminSidebar.css'
const SidebarItem = (props) => {

    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const AdminSidebar = (props) => {
    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)
    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                Virtual Shalmi
                {/* <img src={logo} alt="company logo" /> */}
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </div>)
}

export default AdminSidebar
