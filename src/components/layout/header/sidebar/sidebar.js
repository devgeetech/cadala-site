import React from "react"
import { Link } from "gatsby"

import NavigationItems from '../../../navigation/navigationItems'
import logo from "../../../../images/Logo.svg"
import close from "../../../../images/close.svg"

const Sidebar = ({ show, onClose }) => {

  let styleClass = "sidebar sidebar--close"

  if(show===1){
    styleClass = "sidebar sidebar--open"
  }

  return (
    <div className={styleClass}>
        <button className="sidebar__close-icon" onClick={onClose} onKeyDown={onClose}>
            <img src={close} alt="Cadala logo" />
        </button>
        <div className="sidebar__logo">
            <Link to="/">
              <img src={logo} alt="Cadala logo" />
            </Link>
        </div>
        <div className="sidebar__navItems">
            <NavigationItems />
        </div>
    </div>
  )
}

export default Sidebar
