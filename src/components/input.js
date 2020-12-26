import React, {useState} from 'react'

export default function ChatInput(props) {
  const [msg, setMsg] =  useState("");
  const [onClick, setonClick] = useState(false)
  const handleSend = () => {
    setonClick(true)
    props.addToMsgCanavas(msg);
    setMsg("");
  }

  const handleOnInput = (e) => {
    setMsg(e.target.value)
    setonClick(false)
  }
  return (
    <div className="input-group">
      <input type="text" 
        className="form-control" 
        placeholder="enter your message" 
        value={msg} 
        onInput={ handleOnInput}
        />
      <button 
        onClick={handleSend}
        className={ onClick ? "animate__animated  animate__fadeOutUp": ""}
        >
          Send
      </button>
    </div>
  )
}
