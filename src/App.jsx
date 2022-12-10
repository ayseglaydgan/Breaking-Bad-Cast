import { useState } from 'react'
import './App.css'
import Header from './Components/UI/Header'


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="Container">
      <Header />
    </div>
  )
}

export default App
