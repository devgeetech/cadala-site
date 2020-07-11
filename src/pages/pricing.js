import React, { useContext } from "react"

import LangContext from '../context/langContext'
import langs from '../langs/pricingLang'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import pricingImg from '../images/pricing-img.svg'

const AboutPage = () => {

    const context = useContext(LangContext);
    const lang = langs[context.currLang]

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
                            {lang.head}
                        </div>
                        <div className="about__text__desc">
                            {lang.hero}
                        </div>
                        <div className="about__text__head about__text__head--2">
                            {lang.premiumHead}
                        </div>
                        <div className="about__text__desc">
                            {lang.premiumText}
                        </div>
                    </div>
                </div>
            </div> 
        </Layout>
    )
}

export default AboutPage