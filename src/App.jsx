import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./javascript";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
    </>
  )
}

export default App
