import React from 'react'
import "./Support.css"
import  images from "../../../img/team.svg";
const Support = () => {
  return (
    <div className='Support' >
     <img src={images} alt="" />
     <div className="support-content">
     <h2>DEDICATED SUPPORT FORUM</h2>
     <p>Join the conversation on Support Forum to find solutions, ask questions, and share your ideas.</p>
    <button>Support Link</button>
     </div>



    </div>
  )
}

export default Support