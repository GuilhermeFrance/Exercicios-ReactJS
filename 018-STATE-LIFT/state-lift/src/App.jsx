import { useState } from 'react'

import './App.css'
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  const [count, setCount] = useState(0)

  const [message, setMessage] = useState();

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <>
     <Message msg={message}/>
     <ChangeMessageState handleMessage={handleMessage} />
    </>
  )
}

export default App
