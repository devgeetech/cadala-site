import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import heroImg from '../images/hero-img.svg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index">
        <div className="index__hero">
          <div className="index__hero__image">
            <img src={heroImg} alt="Hero" className="index__hero__image__img" />
          </div>
          <div className="index__hero__text">
            <div className="index__hero__text__head">
              Indian manufactured products to the world.
            </div>
            <div className="index__hero__text__desc">
              Businesses are changing, the world is changing. 
              Start to explore new possibilities of B2B businesses. 
            </div>
            <div className="index__hero__text__buttons">
              <button className="index__hero__text__buttons__button index__hero__text__buttons__button--blue">Join as Merchant</button>
              <button className="index__hero__text__buttons__button index__hero__text__buttons__button--white">Get Notified</button>
            </div>
          </div>
        </div>
    </div>
  </Layout>
)

export default IndexPage
