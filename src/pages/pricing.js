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
                            First 15 Free listings are free. ₹55 per listing there on. 8% Commission per order. 1 User per account. Enjoy these features for free for a lifetime!  
                        </div>
                        <div className="about__text__head about__text__head--2">
                            Premium
                        </div>
                        <div className="about__text__desc">
                            Premium plans will be introduced shortly with more free listings, lesser commission rates, ability to add more staffs and departments and more!
                        </div>
                    </div>
                </div>
            </div> 
        </Layout>
    )
}

export default AboutPage