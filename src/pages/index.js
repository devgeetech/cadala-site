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
        
        
        <div className="index__vendor">
          <div className="index__vendor__content">
            <div className="index__vendor__content__text">
              <div className="index__vendor__content__text__head">
                Join as a B2B Merchant
              </div>
              <div className="index__vendor__content__text__desc">
                Join a revolutionary marketplace that showcases the many variety of things 
                Indian manufacturers offer.<br/> <br/>

                Get more orders and reach with new business models like dropshipping. 
                Export private labelled products and expand your business empire!
              </div>
            </div>

            <div className="index__vendor__content__form">
              <form className="index__vendor__content__form__actual">
                <div className="index__vendor__content__form__actual__fields">
                  <div className="index__vendor__content__form__actual__fields__column">
                    <input 
                      type="text" 
                      placeholder="Name" 
                      aria-label="Name field" 
                      className="index__vendor__content__form__actual__fields__column__input"/>
                    <input 
                      type="text" 
                      placeholder="Company Name" 
                      aria-label="Company field" 
                      className="index__vendor__content__form__actual__fields__column__input"/> 
                    <input 
                      type="text" 
                      placeholder="Address Line 1" 
                      aria-label="Address 1 field" 
                      className="index__vendor__content__form__actual__fields__column__input"/>
                    <input 
                      type="text" 
                      placeholder="Address Line 1" 
                      aria-label="Address 2 field" 
                      className="index__vendor__content__form__actual__fields__column__input"/>  
                  </div>
                  <div className="index__vendor__content__form__actual__fields__column">
                    <input 
                      type="text" 
                      placeholder="City" 
                      aria-label="City field" 
                      className="index__vendor__content__form__actual__fields__column__input"/>
                    <input 
                      type="text" 
                      placeholder="State" 
                      aria-label="State field" 
                      className="index__vendor__content__form__actual__fields__column__input"/> 
                    <input 
                      type="tel" 
                      placeholder="Phone" 
                      aria-label="Phone field" 
                      className="index__vendor__content__form__actual__fields__column__input"/>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      aria-label="Email field" 
                      className="index__vendor__content__form__actual__fields__column__input"/>  
                  </div>
                </div>
                <div className="index__vendor__content__form__actual__submit">
                  <input type="submit" className="index__vendor__content__form__actual__submit__button"/>
                </div>
                <div className="index__vendor__content__form__actual__tnc">
                  *By joining you agree to our terms and conditions &amp; privacy policy
                </div>
              </form>
            </div>
          </div>
        </div>   


    </div>
  </Layout>
)

export default IndexPage
