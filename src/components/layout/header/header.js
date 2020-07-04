import React, { useState } from "react"

import NavigationItems from '../../navigation/navigationItems'
import SideBar from './sidebar/sidebar'

import cadalaLogo from '../../../images/Logo.svg'
import menuIcon from '../../../images/menuIcon.svg'

const Header = () => {

    const [showSidebar, updSidebar] = useState(0)
    const sideBarOpenHandler = () => {
        updSidebar(1)
    }

    const sideBarClosedHandler = () => {
        updSidebar(0)
    }

    return(
        <div className="header">
            <div className="header__wrap">

                {/* +-----------MENU ICON---------------+ */}
                <button className="header__wrap__menu" onClick={sideBarOpenHandler}>
                    <img src={menuIcon} alt="menu icon" className="header__wrap__menu__img"/>
                </button>
                <SideBar show={showSidebar} onClose={sideBarClosedHandler}/>
                {/* +-----------END OF MENU ICON CODE---------------+ */}

                <div className="header__wrap__logo">
                    <img src={cadalaLogo} alt="Cadala Logo" className="header__wrap__logo__img" />
                </div>
                <div className="header__wrap__nav-items">
                    <NavigationItems />
                </div>  
            </div>
        </div>
    )
}

export default Header