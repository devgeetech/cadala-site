import React, { useContext } from "react"

import langs from '../../langs/navigationItemLang'
import LangContext from '../../context/langContext'

import NavigationItem from './navigationItem/navigationItem';

const NavigationItems = (props) => {

    const context = useContext(LangContext);

    const lang = langs[context.currLang]                 

    return (
        <ul className="navigation-items">
            <NavigationItem link="/">{lang.home}</NavigationItem>
            <NavigationItem link="/about">{lang.about}</NavigationItem>
            <NavigationItem link="/how-it-works">{lang.howItWorks}</NavigationItem>
            <NavigationItem link="/pricing">{lang.pricing}</NavigationItem>
        </ul>
    )
}

export default NavigationItems