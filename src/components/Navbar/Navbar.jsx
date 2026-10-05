import styles from './Navbar.module.css'

import SearchBar from '../SearchBar/SearchBar'

export default function Navbar() {
    return (
        <ul className={styles.navbarList}>
            <li><SearchBar /></li>
        </ul>
    )
}