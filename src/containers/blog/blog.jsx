import React from 'react'
import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import video1 from "../../assets/TurnMillSolidcam.mp4"
function blog() {
  return (
    
    <div className="gpt3__blog section__padding" id="works">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> Some of Our Best Works.</h1>
    </div>
    <div className="gpt3__blog-contaidner">
        <div className="gpt3__blog-container_new">
          <video src={video1}  muted         
          loop         
          controls />
          <video src={video1}  muted         
          loop         
          controls />
          <video src={video1}  muted         
          loop         
          controls />
          <video src={video1}  muted         
          loop         
          controls />
          <video src={video1}  muted         
          loop         
          controls />
          <video src={video1}  muted         
          loop         
          controls />
          <video src={video1}  muted         
          loop         
          controls />
          <video src={video1}  muted         
          loop         
          controls />
        
     </div>
    </div>
  </div>
  )
}

export default blog