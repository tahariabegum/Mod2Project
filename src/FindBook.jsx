import {useState, useEffect } from 'react'

let key = import.meta.env.VITE_KEY



export default function FindBook() {

const [data, setData] = useState(null)

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
}, [])

return (
    <>
    </>
)



}
