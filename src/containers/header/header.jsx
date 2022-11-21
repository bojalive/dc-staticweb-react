import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import video from "../../assets/TurnMillSolidcam.mp4";
function header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          CNC Programmer and CAD Design Engineer at $10/hour starting
        </h1>
        <p>
          Get Started Free for 45days upto 2 CAD and CAM engineers to 
          evaluate us. We are Engineering Staffing Company offering Experianced 
          CNC programmer / Setter / Operator and CAD Design Engineers across
          the globe for variety of Industries including, Automobile, Aerospace,
          Oil and gas , General Industry etc...          
          
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address"></input>
          <button type="button">Get Started</button>
        </div>
        <div class="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <video
          src={video}
          muted
          autoPlay
          loop
         
          controls
        ></video>
        {/*<img src={ai} />*/}
      </div>
    </div>
  );
}

export default header;
