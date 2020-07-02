import React from "react"

import NavigationItems from '../../navigation/navigationItems'

import cadalaLogo from '../../../images/Logo.svg'
import menuIcon from '../../../images/menuIcon.svg'

const Header = () => {
    return(
        <div className="header">
            <div className="header__wrap">
                <div className="header__wrap__menu">
                    <img src={menuIcon} alt="Menu Icon" className="header__wrap__menu__img" />
                </div>
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