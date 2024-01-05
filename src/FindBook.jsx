import { useState, useEffect } from 'react'

const key = import.meta.env.VITE_KEY

export default function FindBook( {search} ) {
    const [data, setData] = useState([])

    useEffect (() => {
    
    async function findBook() {

    try {
    const response = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${key}`)
    const data = await response.json()
    setData(data)

    } catch (err) {
        console.log(err)
    }

    }

    findBook();
    
  }, [])

return (
    <div>
    {Object.values(data).map((items) => (
        <div key = {items.id}> 
            <h2> {items.volumeInfo.title}</h2>
            <h4> {items.volumeInfo.authors}</h4>
            <p> {items.volumeInfo.description}</p>
        </div>
    )
    )}
    </div>
)



}
