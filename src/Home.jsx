import { useState, useEffect } from 'react'
import FindBook from './FindBook'
import './App.css'


let key = import.meta.env.VITE_KEY


export default function Home() {
  const [search, setSearch] = useState ('')
  const [findBook, setFindBook] = useState('')


  function handleChange(e) {
    setSearch(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setFindBook(search)
  }

  return (
    <div className = 'container'>
      <div>
        <h1 className = 'title'> WebsiteTitle </h1>
      </div>
      <form onSubmit = {handleSubmit}>
        <input type = "text" onChange = {handleChange} value = {search} placeholder='Type book title, author name, ISBN'/>
        <button> Search </button>
      </form>
      <FindBook search = {findBook} />
    </div>
  )
}


