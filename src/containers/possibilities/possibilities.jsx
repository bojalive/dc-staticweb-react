import React from 'react'
import './possibilities.css'
import possibilityImage from '../../assets/customerp.jpg';
import data from "../../assets/data-security.png"
import nda from "../../assets/agreement.png"
import time from "../../assets/time.png"
import focus from "../../assets/target-audience.png"
function possibilities() {
  return (
   <>
   <div className='thish1'id="possibility">
    <h1 className="gradient__text ">Our Philosophy "Customer is King"</h1>
    </div>
    <div className="gpt3__possibility section__padding" >
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
     {/*} <h4>Request Access to Get Started</h4>*/}
      <h1 className="gradient__text">Our Philosophy puts <br /> Customer Satisfaction as Priority No.1</h1>
      <p>We are an engineering service firm that create customer specific simple solutions in the areas of product development, manufacturing, sourcing by maximizing safety, productivity and reducing operating costs.</p>
      <button>Request Access to Get Started</button>
      <div className="gpt3__possibility-icons">
        <div className= "gpt3__possibility__Ind">
          <img src={data}/>
          <h4>Data Secured</h4>
        </div>
        <div className= "gpt3__possibility__Ind">
          <img src={nda}/>
          <h4>Customer NDA</h4>
        </div>
        <div className= "gpt3__possibility__Ind">
          <img src={time}/>
          <h4>24/7 Availability</h4>
        </div>
        <div className= "gpt3__possibility__Ind">
          <img src={focus}/>
          <h4>Customer Focus</h4>
        </div>  
      </div>
    </div>
  </div>
  </>
  )
}

export default possibilities