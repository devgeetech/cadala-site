import React from "react"

// import LangContext from '../../../context/langContext'

import NavigationItem from './navigationItem/navigationItem';

const NavigationItems = (props) => {

    // const context = useContext(LangContext);

    // const lang = context.currLang===1 ? 
    //                 {
    //                     home: "Home",
    //                     categories: "Categories",
    //                     about: "About",
    //                     contact: "Contact",
    //                 } : {
    //                     home: "الصفحة الرئيسية",
    //                     categories: "التصنيفات",
    //                     about: "حول",
    //                     contact: "اتصل"
    //                 }
                        

    return (
        <ul className="navigation-items">
            <NavigationItem link="/">HOME</NavigationItem>
            <NavigationItem link="/about">ABOUT</NavigationItem>
            <NavigationItem link="/how-it-works">HOW IT WORKS</NavigationItem>
            <NavigationItem link="/pricing">PRICING</NavigationItem>
        </ul>
    )
}

export default NavigationItems