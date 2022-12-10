import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './Components/UI/Header'
import { CharacterGrid } from './Components/Chars/CharacterGrid'


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://legacy--api.herokuapp.com/api/v1/characters?page=${page}`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [page])
  return (
    <div className="Container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} setPage={setPage} page={page} />
    </div>
  )
}



export default App
