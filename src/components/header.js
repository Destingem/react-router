import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <Link to="/"><p>Homepage</p></Link>
            <Link to="/secret"><p>Secret</p></Link>
        </header>
    )
}