import React from 'react'
import { Bookmark } from 'lucide-react';
const Card = (props) => {
  return (
    <div className="box">
    <div className='parent'>
        <div className="top">
            <img src={props.logo} alt="" />
            <button>Save <Bookmark size={11}/></button>
        </div>
        <div className="center">
            <p>{props.company} <span>{props.postedTime}</span></p>
            <h3>{props.title}</h3>
           <div className="center-child">
            <h5>{props.jobType}</h5>
            <h5>{props.level}</h5>
            </div> 
        </div>

        <div className="bottom">
            <div className="left">
                <h5>{props.salary}</h5>
                <p>{props.location}</p>
            </div>
            <button> Apply Now </button>
        </div>
      
    </div>
    </div>
  )
}

export default Card
