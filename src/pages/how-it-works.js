import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import howImg from '../images/how-img.svg'

const HowPage = () => {

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
                            How It Works
                        </div>
                        <div className="how__text__desc">
                            As a seller, you can list a limited number of products on Cadala for free! Cadala offers a premium plan that offers more product listings and lesser commission rates.
                            <br/><br/>
                            Consumers can place orders on Cadala or set up their technology stack to enable the integrated dropshipping system. Sellers and consumers can use our revolutionary dashboard to manage their transactions and technical integrations.
                            <br/><br/>
                            On Cadala, your transactions will be as seamless as it can be. Dropshipping is embedded in its core so you can say goodbye to all those tricky plugins and extensions.
                        </div>
                    </div>
                </div>
            </div> 
        </Layout>
    )
}

export default HowPage