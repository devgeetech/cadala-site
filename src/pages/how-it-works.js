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
                        <div className="howt__text__desc">
                            The sellers join to our free tier at this time. The free tier is limited but would give sellers a great possibility to run their business successfully. Learn about our free tier in the pricing page.
                            <br/><br/>
                            We'll be introducing premium tiers to which the sellers can switch or have as a compliment for their quality service (based on evaluation). 
                            <br/><br/>
                            The consumers can register as B2B wholesale buyers or as dropshippers. Dropshippers will have a dashboard from where they can import products to their store. 
                        </div>
                    </div>
                </div>
            </div> 
        </Layout>
    )
}

export default HowPage