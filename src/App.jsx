import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './Components/UI/Header'
import { CharacterGrid } from './Components/Chars/CharacterGrid'
import Search from './Components/UI/Search'



const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://legacy--api.herokuapp.com/api/v1/characters?page=${page}`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [page])

  useEffect(() => {
    console.log(query)

    const newItems = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
    setItems(newItems)
  }, [query])



  return (
    <div className="Container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} setPage={setPage} page={page} />
    </div>
  )
}



export default App
