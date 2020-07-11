import React, { useContext } from "react"

import LangContext from '../context/langContext'
import langs from '../langs/howItWorksLang'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import howImg from '../images/how-img.svg'

const HowPage = () => {

    const context = useContext(LangContext);
    const lang = langs[context.currLang]

    return(
        <Layout>
            <SEO title="How It Works" />
            <div className="how-wrap">
                <div className="how">
                    <div className="how__image">
                        <img src={howImg} alt="How it works" className="how__image__img" />
                    </div>
                    <div className="how__text">
                        <div className="how__text__head">
                            {lang.head}
                        </div>
                        <div className="how__text__desc">
                            {lang.hero1}
                            <br/><br/>
                            {lang.hero2}
                            <br/><br/>
                            {lang.hero3}
                        </div>
                    </div>
                </div>
            </div> 
        </Layout>
    )
}

export default HowPage