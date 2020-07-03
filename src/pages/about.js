import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import aboutImg from '../images/about-img.svg'

const AboutPage = () => {

    return(
        <Layout>
            <SEO title="About" />
            <div className="about-wrap">
                <div className="about">
                    <div className="about__image">
                        <img src={aboutImg} alt="About" className="about__image__img" />
                    </div>
                    <div className="about__text">
                        <div className="about__text__head">
                            About Cadala
                        </div>
                        <div className="about__text__desc">
                            Cadala is all about giving Indian manufacturers exposure to the international demands and opening new doors for them to sell their products to a variety of customers.
                            <br/><br/>
                            The dropshipping model of business has taken the market by storm and India, one of the best producers of the world is nearly absent! We are here to bridge the gap between B2B consumers and sellers.
                        </div>
                    </div>
                </div>
            </div> 
        </Layout>
    )
}

export default AboutPage