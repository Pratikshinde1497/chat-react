import React, {useState} from 'react'

export default function ChatInput(props) {
  const [msg, setMsg] =  useState("");

  const handleSend = () => {
    props.addToMsgCanavas(msg);
    setMsg("");
  }
  return (
    <div className="form-group d-flex">
      <input type="text" 
        className="form-control" 
        placeholder="enter your message" 
        value={msg} 
        onInput={ e=> setMsg(e.target.value)}
        />
      <button 
        onClick={handleSend}
        >
          Send
      </button>
    </div>
  )
}
