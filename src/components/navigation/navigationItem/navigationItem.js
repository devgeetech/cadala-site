import React from "react"

import { Link } from 'gatsby'

const NavigationItem = ( props ) => {
    
    return (
        <li className = "navigation-item">
            <Link  
                to={props.link}
                activeStyle={{color: "#000000"}}>{props.children}</Link>
        </li>
    )
}

export default NavigationItem;