import { useState, useEffect } from 'react'

const key = import.meta.env.VITE_KEY

export default function FindBook() {

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
    {data.map((data) => (
        <div key = {data.id}> 
            <h2> {data.volumeInfo.title}</h2>
            <h4> {data.volumeInfo.authors}</h4>
            <p> {data.volumeInfo.description}</p>
        </div>
    )
    )}
    </div>
)



}
