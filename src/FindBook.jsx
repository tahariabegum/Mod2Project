import { useState, useEffect } from 'react'

export default function FindBook( {search} ) {
    const [data, setData] = useState([])
    const key = import.meta.env.VITE_KEY

    useEffect (() => {
    
        async function findBook() {

            try {
                const response = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${key}`)
                const data = await response.json()
                setData(data.items)

            } catch (err) {
                console.log(err)
            }

        }

    findBook();
    
    }, [search])

return (
    <div>
    {data?.map((items) => (
        <div key = {items.id}> 
            <img src = {items.volumeInfo?.imageLinks?.thumbnail} alt=""/>
            <h2> {items.volumeInfo?.title}</h2>
            <h4> {items.volumeInfo?.authors}</h4>
            <p> {items.volumeInfo?.description}</p>
        </div>
    )
    )}
    </div>
)



}
