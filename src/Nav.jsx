import { Link } from "react-router-dom"; 
import './App.css'

export default function Nav( {homePage} ) {

    return (

        <div className = 'navbar'>
            <Link to = '/' >
               <div className = 'home'>Home</div>
            </Link>
        </div>

    )
}