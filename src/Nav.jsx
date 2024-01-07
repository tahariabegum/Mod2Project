import { Link } from "react-router-dom"; 
import './App.css'

export default function Nav() {

    return (

        <div className = 'navbar'>
            <Link to = '/' >
               <div>Home</div>
            </Link>
        </div>

    )
}