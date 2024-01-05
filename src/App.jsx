import { useState, useEffect } from 'react'
import FindBook from './FindBook'
import './App.css'


let key = import.meta.env.VITE_KEY


function App() {
  const [search, setSearch] = useState ('')


  function handleChange(e) {
    e.preventDefault()
    setSearch(e.target.value)
  }




  return (
    <>
      <input type = "text" onChange = {handleChange} value = {search} />
      <button onClick = {() => {}}> Search </button>
      <FindBook search = {search} />
    </>
  )
}

export default App
