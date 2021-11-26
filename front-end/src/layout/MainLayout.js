import React from 'react'
import MainNavbar  from './MainNavbar'

const MainLayout = ({children}) => {
    return (
        <div>
            <MainNavbar/>
            {children}
        </div>
    )
}

export default MainLayout
