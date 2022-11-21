import React from 'react'
import './cad.css'
import Service from '../../components/service/service';
import { cadconversion, cad3d, cadmigration, caddrafting, fixtdesign ,cadsoftwares} from './imports';

function CADService() {
  return (
    <div className="gpt3__blog section__padding" id="CAD">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">CAD Design Contract Services, <br /> Services starting @ $10/hour.</h1>
    </div>
    <div className="gpt3__blog-container">
    <div className="gpt3__blog-container_groupB">
      {/*<div className="gpt3__blog-container_groupA">*/}
      
        <Service imgUrl={cad3d} date="" text="3D Modeling" />      
        <Service imgUrl={cadconversion} date="" text="CAD Conversion" />
        <Service imgUrl={caddrafting} date="" text="2D Drafting" />
        <Service imgUrl={cadmigration} date="" text="CAD Migration" />
        <Service imgUrl={fixtdesign} date="" text="Fixture " />
        <Service imgUrl={cadsoftwares} date="" text="5+ Softwares" />
      </div>
    </div>
  </div>
  )
}

export default CADService