import { useState, useEffect } from 'react'
import FindBook from './FindBook'
import './App.css'


let key = import.meta.env.VITE_KEY


function App() {
  const [search, setSearch] = useState ('')


  function handleChange(e) {
    setSearch(e.target.value)
  }

  
 

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <input type = "text" onChange = {handleChange} value = {search} />
        <button> Search </button>
      </form>
      <FindBook search = {search} />
    </div>
  )
}

export default App
