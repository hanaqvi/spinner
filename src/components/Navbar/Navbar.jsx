import styles from './Navbar.module.css'

import SearchBar from '../SearchBar/SearchBar'
import HomeButton from '../HomeButton/HomeButton'

export default function Navbar() {
    return (
        <ul className={styles.navbarList}>
            <li><HomeButton /></li>
            <li><SearchBar /></li>
        </ul>
    )
}