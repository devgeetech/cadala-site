import React, { useContext } from "react"
import { Link } from "gatsby"

import LangContext from '../../../../context/langContext'

import NavigationItems from '../../../navigation/navigationItems'
import logo from "../../../../images/Logo.svg"
import close from "../../../../images/close.svg"

const Sidebar = ({ show, onClose }) => {

  const context = useContext(LangContext);

  let styleClass = "sidebar sidebar--close"

  if(show===1){
    styleClass = "sidebar sidebar--open"
  }

  const handleLangChange = (event) => {
    context.updateLang(event.target.value)
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
        <div className="sidebar__lang-select">
          <div className="sidebar__lang-select__head">Select Language</div>
          <select className="sidebar__lang-select__dropdown" 
            onChange={handleLangChange} 
            onBlur={handleLangChange}>
            <option value={0}>English</option>
            <option value={1}>हिन्दी</option>
            <option value={2}>தமிழ்</option>
          </select>
        </div>
    </div>
  )
}

export default Sidebar
