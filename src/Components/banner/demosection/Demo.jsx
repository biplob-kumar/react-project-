import React from 'react'
import "./Demo.css"
import  img1  from "../../../img/1.jpg";
import  img2  from "../../../img/2.jpg";
import  img3  from "../../../img/3.jpg";
import  img4  from "../../../img/4.jpg";
import  img5  from "../../../img/5.jpg";
import  img6  from "../../../img/6.jpg";


const Demo = () => {
  return (
    <div>
        <h2 className='Headaer'>CHOOSE YOUR DEMO</h2>
     <section className='demo' >
 
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img6} alt="" />
      
      
     </section>

    </div>
  )
}

export default Demo