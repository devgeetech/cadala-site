import React, { useContext } from "react"
import { Link } from "gatsby"

import LangContext from '../../../context/langContext'
import langs from '../../../langs/footerLang'

import cadalaLogo from '../../../images/Logo.svg'


const Footer = () => {

    const context = useContext(LangContext);
    const lang = langs[context.currLang]

    return(
        <div className="footer">
            <div className="footer__wrap">
                <div className="footer__wrap__line">

                </div>
                <div className="footer__wrap__content">
                    <div className="footer__wrap__content__left">
                        <div className="footer__wrap__content__left__column">
                            <div className="footer__wrap__content__left__column__head">
                                {lang.links}
                            </div>
                            <div className="footer__wrap__content__left__column__links">
                                <Link to="/about" className="footer__wrap__content__left__column__links__link">{lang.about}</Link>
                                <Link to="/how-it-works" className="footer__wrap__content__left__column__links__link">{lang.howItWorks}</Link>
                                <Link to="/pricing" className="footer__wrap__content__left__column__links__link">{lang.pricing}</Link>
                            </div>
                        </div>
                        <div className="footer__wrap__content__left__column">
                            <div className="footer__wrap__content__left__column__head">
                                {lang.learnMarket}
                            </div>
                            <div className="footer__wrap__content__left__column__links">
                                <div className="footer__wrap__content__left__column__links__link">{lang.learnMarket}</div>
                                <div className="footer__wrap__content__left__column__links__link">{lang.dropshipping}</div>
                                <div className="footer__wrap__content__left__column__links__link">{lang.exporting}</div>
                            </div>
                        </div>
                        <div className="footer__wrap__content__left__column">
                            <div className="footer__wrap__content__left__column__head">
                                {lang.policies}
                            </div>
                            <div className="footer__wrap__content__left__column__links">
                                <div className="footer__wrap__content__left__column__links__link">Terms &amp; Conditions</div>
                                <div className="footer__wrap__content__left__column__links__link">Privacy Policy</div>
                                <div className="footer__wrap__content__left__column__links__link">Merchant Policy</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__wrap__content__right">
                        <div className="footer__wrap__content__right__logo">
                            <img src={cadalaLogo} alt="Cadala logo" className="footer__wrap__content__right__logo__img" />
                        </div>
                        <div className="footer__wrap__content__right__tagline">
                            India's own B2B Marketplace
                        </div>
                        <div className="footer__wrap__content__right__mail">
                            support@cadala.in
                        </div>
                    </div>
                </div>
                <div className="footer__wrap__rights">
                    <footer>
                      Copyright © {new Date().getFullYear()} Cadala. All Rights Reserved | Image Credits: Freepik
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Footer
