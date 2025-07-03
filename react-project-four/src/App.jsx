import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log("Button clicked", count);
  }

  return (
    <>
      {/* <Card name = "Love Babbar">
        <h2>Children element</h2>
        <p>Best Web Dev Course</p>
        <p>consistent practice is the key to success</p>
      </Card>
      <Card children = "Main ek children hu">
        <h2>Another Children element</h2>
      </Card> */}
      <Button handleClick={handleClick} text = "Click Me" >
        <h2>{count}</h2>
      </Button>
    </>
  )
}

export default App
