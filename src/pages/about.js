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
                            Cadala plans to help those who are on the dark side of the e-commerce revolution. Equipping manufacturers with the capabilities to tackle the rapidly advancing world and letting the world in on the wonderful array of Indian products are the prime focuses of Cadala. 
                            <br/><br/>
                            Using our refined dropshipping capabilities, we intend to bridge the gap between B2B consumers and sellers. We strive to build trust and confidence between the elements of the marketplace.
                        </div>
                    </div>
                </div>
            </div> 
        </Layout>
    )
}

export default AboutPage