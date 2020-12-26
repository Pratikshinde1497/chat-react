import React from 'react'

export default function Msg(props) {

  return (
    <>
      <div className={props.msg.position === "left"  ? "text-left animate__animated animate__fadeInUp" : "text-right mr-5 animate__animated animate__fadeInUp"} >
        <h5>{props.msg.text}</h5>
        <p>{props.msg.time}</p>
      </div>
    </>
    
  )
}
