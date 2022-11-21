import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/DC1.png';
import google from "../../assets/googlev.png"
import twitter from "../../assets/twitter.png"
import linkedin from "../../assets/linkedin.png"

function footer() {
  return (
    <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to save cost and have quick turn arounds?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>32/7,Vivekananda Street Gnanambika Mill Post,Coimbatore-29
India, 
<br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <a href='https://www.linkedin.com/feed/' target="_blank"><h4>Links</h4></a>
        <a href='https://www.linkedin.com/company/dreamcorp-llp' target="_blank"><img src={linkedin} alt="linkedin"/></a>
        <a href='https://www.google.com/search?q=dream+corp+cbe&rlz=1C1GCEA_enIN975IN975&oq=dream+c&aqs=chrome.1.69i57j69i59l3j0i271l3j69i60.2527j0j1&sourceid=chrome&ie=UTF-8' target="_blank"><img src={google} alt="linkedin"/></a>
        <a href='https://www.linkedin.com/company/dreamcorp-llp' target="_blank"><img src={twitter} alt="linkedin"/></a>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>32/7,Vivekananda Street Gnanambika Mill Post,Coimbatore-29
India, </p>
        <p>0422-43522877</p>
        <p>sales@</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 DC. All rights reserved.</p>
    </div>
  </div>
  )
}

export default footer