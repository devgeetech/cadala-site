import React, { useContext } from "react"

import LangContext from '../context/langContext'
import langs from '../langs/aboutLang'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import aboutImg from '../images/about-img.svg'

const AboutPage = () => {

    const context = useContext(LangContext);
    const lang = langs[context.currLang]

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
                            {lang.head}
                        </div>
                        <div className="about__text__desc">
                            {lang.hero1}
                            <br/><br/>
                            {lang.hero2}
                        </div>
                    </div>
                </div>
            </div> 
        </Layout>
    )
}

export default AboutPage