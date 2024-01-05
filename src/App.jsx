import { useState, useEffect } from 'react'
import FindBook from './FindBook'
import './App.css'


let key = import.meta.env.VITE_KEY


function App() {

  const [search, setSearch] = useState ('')

  function handleChange(e) {
    setSearch(e.target.value)
  }

  return (
    <>
      <input type = "text" onChange = {handleChange}/>
      <button onClick = {null}> Search </button>
      <FindBook search = {search}  />
    </>
  )
}

export default App
