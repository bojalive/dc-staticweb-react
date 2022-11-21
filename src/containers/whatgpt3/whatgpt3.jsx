import React from 'react'
import './whatgpt3.css'
import Service from '../../components/service/service';
import { axis5, milling3, setter, cmm, fixt ,camlogo} from './imports';

function whatgpt3() {
  return (
    <div className="gpt3__blogCAM section__padding" id="CAM">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">CAM CNC Contract Services, <br /> We are providing services starting @ $10/hour.</h1>
    </div>
    <div className="gpt3__blog-container">
    <div className="gpt3__blog-container_groupB">
      {/*<div className="gpt3__blog-container_groupA">*/}
      
        <Service imgUrl={axis5} date="" text="5-Axis Simultaneous Programming " />      
        <Service imgUrl={milling3} date="" text="3D milling and Turning Programming" />
        <Service imgUrl={setter} date="" text="CNC Setter and Operator 3/4/5 Axis" />
        <Service imgUrl={cmm} date="" text="CMM Programming for Zeiss & Hexagon" />
        <Service imgUrl={fixt} date="" text="Fixture Manufacturing and Exporting" />
        <Service imgUrl={camlogo} date="" text="Multiple CAM Software Supported" />
      </div>
    </div>
  </div>
  )
}

export default whatgpt3