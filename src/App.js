import './App.css';
import ChatInput from './components/input';
import MsgsCanvas from './components/msgsCanvas';

function App() {

  const list = [
    {
      text: "hi, how are you",
      time: "11.00",
      position: "left"
    },
    {
      text: "i am fine",
      time: "11.05",
      position: "right"
    }
  ]

  const addToMsgCanavas = (text) => {
    const newMsg = {
      text,
      time: Date.now(),
      position: "right"
    }

    list.push(newMsg);
    console.log(list);
  }
  
  return (
    <div className="App">
      <MsgsCanvas/>
      <ChatInput addToMsgCanavas={addToMsgCanavas} />
    </div>
  );
}

export default App;
