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
                    <div className="about__image">
                        <img src={pricingImg} alt="About" className="about__image__img" />
                    </div>
                    <div className="about__text">
                        <div className="about__text__head">
                            Pricing
                        </div>
                        <div className="about__text__desc">
                            15 Free listings ₹55 per listing there on. 8% Commission per order. 1 User per account. Enjoy these features for free for a lifetime!  
                            <br/> <br/>
                            Premium plans will be introduced shortly with more free listings, lesser commission rates, ability to add more staffs and departments and more!
                        </div>
                    </div>
                </div>
            </div> 
        </Layout>
    )
}

export default AboutPage