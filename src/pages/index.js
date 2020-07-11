import React, { useState, useContext } from "react"
import { Link } from 'gatsby'
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import LangContext from '../context/langContext'
import langs from '../langs/indexLang'

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

  const context = useContext(LangContext);

  const lang = langs[context.currLang]

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
                {lang.heroMain}
              </div>
              <div className="index__hero__text__desc">
                {lang.heroSub}
              </div>
              <div className="index__hero__text__buttons">
                <Link to='/#vendor' className="index__hero__text__buttons__button index__hero__text__buttons__button--blue">
                  {lang.joinAsMerchant}
                </Link>
                <Link to='/#subscriber' className="index__hero__text__buttons__button index__hero__text__buttons__button--white">
                  {lang.getNotified}
                </Link>
              </div>
            </div>
          </div>
          
          
          <div className="index__vendor" id="vendor">
            <div className="index__vendor__content">
              <div className="index__vendor__content__text">
                <div className="index__vendor__content__text__head">
                  {lang.joinAsB2BMerchant}
                </div>
                <div className="index__vendor__content__text__desc">
                  {lang.b2bMerchHero1}
                  <br/> <br/>
                  {lang.b2bMerchHero2}
                </div>
              </div>
              <div className="index__vendor__content__form">
                <form className="index__vendor__content__form__actual" onSubmit={handleSubmit}>
                  <div className="index__vendor__content__form__actual__fields">
                    <div className="index__vendor__content__form__actual__fields__column">
                      <input 
                        type="text" 
                        placeholder={lang.name} 
                        name="name"
                        onChange={handleInputChange}
                        aria-label="Name field" 
                        className="index__vendor__content__form__actual__fields__column__input"
                        required/>
                      <input 
                        type="text" 
                        placeholder={lang.companyName} 
                        name="company"
                        onChange={handleInputChange}
                        aria-label="Company field" 
                        className="index__vendor__content__form__actual__fields__column__input"
                        required/> 
                      <input 
                        type="text" 
                        placeholder={lang.address1}
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
                          <option value="">{lang.category}</option>
                          <option value='apparel &amp; accessories'>Apparel &amp; Accessories</option>
                          <option value='automobiles &amp; motorcycles'>Automobiles &amp; Motorcycles</option>
                          <option value='baby products'>Baby Products</option>
                          <option value='beauty &amp; health'>Beauty &amp; Health</option>
                          <option value='computers &amp; networking'>Computers &amp; Networking</option>
                          <option value='consumer electronics'>Consumer Electronics</option>
                          <option value='electrical equipment &amp; supplies'>Electrical Equipment &amp; Supplies</option>
                          <option value='electronic components &amp; supplies'>Electronic Components &amp; Supplies</option>
                          <option value='furniture'>Furniture</option>
                          <option value='home &amp; garden'>Home &amp; Garden</option>
                          <option value='home appliances'>Home Appliances</option>
                          <option value='home improvement'>Home Improvement</option>
                          <option value='industry &amp; business'>Industry &amp; Business</option>
                          <option value='jewelry'>Jewelry</option>
                          <option value='lights &amp; lighting'>Lights &amp; Lighting</option>
                          <option value='luggage &amp; bags'>Luggage &amp; Bags</option>
                          <option value='office &amp; school supplies'>Office &amp; School Supplies</option>
                          <option value='phones &amp; telecommunications'>Phones &amp; Telecommunications</option>
                          <option value='shoes'>Shoes</option>
                          <option value='sports &amp; entertainment'>Sports &amp; Entertainment</option>
                          <option value='toys &amp; hobbies'>Toys &amp; Hobbies</option>
                          <option value='watches'>Watches</option>
                          <option value='food'>Food</option>
                          <option value='gifts &amp; crafts'>Gifts &amp; Crafts</option>
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
                        placeholder={lang.city}
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
                          <option value="">{lang.state}</option>
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
                        placeholder={lang.phone} 
                        name="phone"
                        onChange={handleInputChange}
                        aria-label="Phone field" 
                        className="index__vendor__content__form__actual__fields__column__input"
                        required/>
                      <input 
                        type="email" 
                        placeholder={lang.email}
                        name="email" 
                        onChange={handleInputChange}
                        aria-label="Email field" 
                        className="index__vendor__content__form__actual__fields__column__input"
                        required/>  
                    </div>
                  </div>
                  <div className="index__vendor__content__form__actual__submit">
                    <input 
                      type="submit" 
                      value={lang.submit}
                      readOnly
                      className="index__vendor__content__form__actual__submit__button"/>
                  </div>

                  <div style={modalStyle}>
                    {mutationLoading ? 
                      <p>{lang.loading}</p> : mutationError ? 
                        <p>{lang.somethingWentWrong}</p> : mutationData ? 
                          <p>{lang.submissionSuccess}</p> : null}    
                  </div>

                  <div className="index__vendor__content__form__actual__tnc">
                    {lang.agreeJoinPrivacyPolicy}
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
                {lang.b2bConsumer} <br/>
                {lang.getNotified}!
              </div>
              <div className="index__subscribe__text__desc">
                {lang.b2bConsumerHero}
              </div>
              {/* <div className="index__subscribe__text__form">   */}
                <form onSubmit={handleSubscriptionSubmit} className="index__subscribe__text__form">
                  <input 
                      type="email" 
                      name="email" 
                      placeholder={lang.email}
                      onChange={handleSubEmailChange}
                      aria-label="Email Field" 
                      className="index__subscribe__text__form__input"
                      required/>
                  <input 
                      type="submit"
                      value={lang.notifyMe}
                      readOnly
                      className="index__subscribe__text__form__submit" />            
                </form>
              {/* </div> */}
              <div style={modalStyle2}>
                {mutationLoading2 ? 
                  <p>{lang.loading}</p> : mutationError2 ? 
                    <p>{lang.somethingWentWrong}</p> : mutationData2 ? 
                      <p>{lang.subscribed}</p> : null}             
              </div>
              <div className="index__subscribe__text__tnc">
                {lang.agreeSubPrivacyPolicy}
              </div>
            </div>
          </div>                
      </div>
    </Layout>
  )
}

export default IndexPage
