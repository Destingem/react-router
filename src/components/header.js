import { NavLink } from "react-router-dom"
import styles from "./header.module.css"
export default function Header(){
    return(
        <header className={styles.header}>
            <nav>
            <ul>
                <li><NavLink exact activeClassName={styles.active} to="/">Homepage</NavLink></li>
                <li><NavLink exact activeClassName={styles.active} to="secret">Secret</NavLink></li>
            </ul>
            </nav>
        </header>
    )
}