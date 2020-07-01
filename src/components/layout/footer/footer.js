import React from "react"

import cadalaLogo from '../../../images/Logo.svg'


const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__wrap">
                <div className="footer__wrap__line">

                </div>
                <div className="footer__wrap__content">
                    <div className="footer__wrap__content__left">
                        <div className="footer__wrap__content__left__column">
                            <div className="footer__wrap__content__left__column__head">
                                Links
                            </div>
                            <div className="footer__wrap__content__left__column__links">
                                <div className="footer__wrap__content__left__column__links__link">About Us</div>
                                <div className="footer__wrap__content__left__column__links__link">How It Works</div>
                                <div className="footer__wrap__content__left__column__links__link">Pricing</div>
                            </div>
                        </div>
                        <div className="footer__wrap__content__left__column">
                            <div className="footer__wrap__content__left__column__head">
                                Learn Market
                            </div>
                            <div className="footer__wrap__content__left__column__links">
                                <div className="footer__wrap__content__left__column__links__link">B2B Online Supply</div>
                                <div className="footer__wrap__content__left__column__links__link">Dropshipping</div>
                                <div className="footer__wrap__content__left__column__links__link">Exporting</div>
                            </div>
                        </div>
                        <div className="footer__wrap__content__left__column">
                            <div className="footer__wrap__content__left__column__head">
                                Policies
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
