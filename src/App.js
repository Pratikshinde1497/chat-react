import './App.css';
import ChatInput from './components/input';
import MsgsCanvas from './components/msgsCanvas';
import React, {useState} from 'react'


function App() {

  const [list, setlist] = useState([{
      id: "01",
      text: "hi, how are you",
      time: "11.00",
      position: "left"
    },
    {
      id: "02",
      text: "i am fine",
      time: "11.05",
      position: "right"
    }])

  const addToMsgCanavas = (text) => {
    if(text.length <= 0) return;
    const newMsg = {
      id: new Date().toLocaleTimeString(),
      text,
      time: new Date().toLocaleTimeString(),
      position: "right"
    }
    setlist([...list, newMsg])
  }


  return (
    <div className="App">
      <MsgsCanvas list={list}/>
      <ChatInput addToMsgCanavas={addToMsgCanavas} />
    </div>
  );
}

export default App;
