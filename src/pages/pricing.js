import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import pricingImg from '../images/pricing-img.svg'

const AboutPage = () => {

    return(
        <Layout>
            <SEO title="About" />
            <div className="about-wrap">
                <div className="about">
                    <div className="about__image about__image--pricing">
                        <img src={pricingImg} alt="About" className="about__image__img" />
                    </div>
                    <div className="about__text">
                        <div className="about__text__head">
                            Start for free!
                        </div>
                        <div className="about__text__desc">
                            The first 15 product listings are free. Beyond that, the seller pays Rs. 55 per listing. Cadala charges an 8% commission on every order. All dropshipping integrations are available for free. An account can have a single user who can enjoy all these features for free - forever. 
                        </div>
                        <div className="about__text__head about__text__head--2">
                            Premium
                        </div>
                        <div className="about__text__desc">
                            Users on premium plans enjoy more free listings, lesser commission rates, ability to add more staff and departments, and more!
                        </div>
                    </div>
                </div>
            </div> 
        </Layout>
    )
}

export default AboutPage