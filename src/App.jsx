import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './Components/UI/Header'


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://legacy--api.herokuapp.com/api/v1/characters`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [])
  return (
    <div className="Container">
      <Header />
    </div>
  )
}



export default App
