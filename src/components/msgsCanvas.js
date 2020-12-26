import React from 'react'
import Msg from './msg'

export default function MsgsCanvas(props) {
  return (
    <div style={{ background: "lightblue"}}>
      {
        props.list.map(msg=> 
          <Msg msg={msg} key={msg.id}/>
      )
      }
    </div>
  )
}
