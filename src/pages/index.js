import React, { useState } from "react"
import { Link } from 'gatsby'
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import heroImg from '../images/hero-img.svg'
import subImg from '../images/sub-img.svg'

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const ADD_VENDOR= gql`
        mutation MyMutation($address1: String!, $category: String!, $city: String!, $company: String!, $email: String!, $name: String!, $phone: String!, $state: String!) {
          insert_vendors(objects: {address1: $address1, category: $category, city: $city, company: $company, email: $email, name: $name, phone: $phone, state: $state}) {
            returning {
              id
            }
          }
        }
    `

const ADD_SUB= gql`
    mutation MyMutation2($subEmail: String!) {
      insert_subscribers(objects: {email: $subEmail}) {
        returning {
          id
        }
      }
    }
`

const IndexPage = () => {

  

  const [formData, updForm] = useState({
    name: "",
    city: "",
    company: "",
    state: "",
    address1: "",
    phone: "",
    email: "",
    category: "",
  })


  const [
    addVendor,
    { loading: mutationLoading, error: mutationError, data:mutationData },
  ] = useMutation(ADD_VENDOR);

  const [
    addSub,
    { loading: mutationLoading2, error: mutationError2, data:mutationData2 },
  ] = useMutation(ADD_SUB);

  const [showRequestStatus1, updRequestStatus1] = useState(0)
  const [showRequestStatus2, updRequestStatus2] = useState(0)
  const [subEmail, updSubEmail] = useState(null)

  const modalStyle = showRequestStatus1===1 ? {display: "block"} : {display: "none"}
  const modalStyle2 = showRequestStatus2===1 ? {display: "block", fontSize: "12px"} : {display: "none"}

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    updForm({
        ...formData,
        [name]: value,
    })
  }

  const handleSubEmailChange = (event) => {
    updSubEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addVendor({ variables: { ...formData } }) 
    updRequestStatus1(1)
  }

  const handleSubscriptionSubmit = (event) => {
    event.preventDefault();
    addSub({ variables: { subEmail } }) 
    updRequestStatus2(1)
  }

  if((showRequestStatus1 || showRequestStatus2) && ((mutationData || mutationError) || (mutationData2 || mutationError2))){
    setTimeout(function() { 
        updRequestStatus1(0)
        updRequestStatus2(0)
    }, 2000)
  }

  // if(mutationError){
  //   console.log(mutationError)
  // }

  return(
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
                <Link to='/#vendor' className="index__hero__text__buttons__button index__hero__text__buttons__button--blue">
                  Join as Merchant
                </Link>
                <Link to='/#subscriber' className="index__hero__text__buttons__button index__hero__text__buttons__button--white">
                  Get Notified
                </Link>
              </div>
            </div>
          </div>
          
          
          <div className="index__vendor" id="vendor">
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
                <form className="index__vendor__content__form__actual" onSubmit={handleSubmit}>
                  <div className="index__vendor__content__form__actual__fields">
                    <div className="index__vendor__content__form__actual__fields__column">
                      <input 
                        type="text" 
                        placeholder="Name" 
                        name="name"
                        onChange={handleInputChange}
                        aria-label="Name field" 
                        className="index__vendor__content__form__actual__fields__column__input"
                        required/>
                      <input 
                        type="text" 
                        placeholder="Company Name" 
                        name="company"
                        onChange={handleInputChange}
                        aria-label="Company field" 
                        className="index__vendor__content__form__actual__fields__column__input"
                        required/> 
                      <input 
                        type="text" 
                        placeholder="Address Line 1" 
                        name="address1"
                        onChange={handleInputChange}
                        aria-label="Address 1 field" 
                        className="index__vendor__content__form__actual__fields__column__input"
                        required/>
                      <select
                        name="category" 
                        aria-label="Category field"
                        onBlur={handleInputChange} 
                        className="index__vendor__content__form__actual__fields__column__input"
                        style={{backgroundColor: "#1B1464"}}
                        required>
                          <option value="">Category</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Apparel">Apparel</option>
                          <option value="Household">Household</option>
                          <option value="Industrial Equipment">Industrial Equipment</option>
                      </select>
                      {/* <input 
                        type="text" 
                        placeholder="Address Line 2" 
                        name="address2"
                        onChange={handleInputChange}
                        aria-label="Address 2 field" 
                        className="index__vendor__content__form__actual__fields__column__input"/>   */}
                    </div>
                    <div className="index__vendor__content__form__actual__fields__column">
                      <input 
                        type="text" 
                        placeholder="City" 
                        name="city"
                        onChange={handleInputChange}
                        aria-label="City field" 
                        className="index__vendor__content__form__actual__fields__column__input"
                        required/>
                      <select
                        name="state" 
                        aria-label="State field"
                        onBlur={handleInputChange} 
                        className="index__vendor__content__form__actual__fields__column__input"
                        style={{backgroundColor: "#1B1464"}}
                        required>
                          <option value="">State</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                          <option value="Daman and Diu">Daman and Diu</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Lakshadweep">Lakshadweep</option>
                          <option value="Puducherry">Puducherry</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">Himachal Pradesh</option>
                          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="West Bengal">West Bengal</option>
                      </select> 
                      <input 
                        type="tel" 
                        placeholder="Phone" 
                        name="phone"
                        onChange={handleInputChange}
                        aria-label="Phone field" 
                        className="index__vendor__content__form__actual__fields__column__input"
                        required/>
                      <input 
                        type="email" 
                        placeholder="Email"
                        name="email" 
                        onChange={handleInputChange}
                        aria-label="Email field" 
                        className="index__vendor__content__form__actual__fields__column__input"
                        required/>  
                    </div>
                  </div>
                  <div className="index__vendor__content__form__actual__submit">
                    <input type="submit" className="index__vendor__content__form__actual__submit__button"/>
                  </div>

                  <div style={modalStyle}>
                    {mutationLoading ? 
                      <p>Loading...</p> : mutationError ? 
                        <p>Something went wrong :(</p> : mutationData ? 
                          <p>Submission Successful!</p> : null}    
                  </div>

                  <div className="index__vendor__content__form__actual__tnc">
                    *By joining you agree to our terms and conditions &amp; privacy policy
                  </div>
                </form>
              </div>
            </div>
          </div> 

          <div className="index__subscribe" id="subscriber">
            <div className="index__subscribe__image">
              <img src={subImg} alt="Subscribe" className="index__subscribe__image__img" />
            </div>
            <div className="index__subscribe__text">
              <div className="index__subscribe__text__head">
                B2B Consumer? <br/>
                Get Notified!
              </div>
              <div className="index__subscribe__text__desc">
                If you are a B2B consumer, be the first ones to know when our marketplace goes live! 
              </div>
              {/* <div className="index__subscribe__text__form">   */}
                <form onSubmit={handleSubscriptionSubmit} className="index__subscribe__text__form">
                  <input 
                      type="email" 
                      name="email" 
                      placeholder="Email"
                      onChange={handleSubEmailChange}
                      aria-label="Email Field" 
                      className="index__subscribe__text__form__input"
                      required/>
                  <input 
                      type="submit"
                      value="Notify Me"
                      readOnly
                      className="index__subscribe__text__form__submit" />            
                </form>
              {/* </div> */}
              <div style={modalStyle2}>
                {mutationLoading2 ? 
                  <p>Loading...</p> : mutationError2 ? 
                    <p>Something went wrong :(</p> : mutationData2 ? 
                      <p>Subscribed!</p> : null}             
              </div>
              <div className="index__subscribe__text__tnc">
                *By subscribing you agree to our terms and conditions &amp; privacy policy
              </div>
            </div>
          </div>                
      </div>
    </Layout>
  )
}

export default IndexPage
