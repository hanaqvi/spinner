import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles.contentArea}>
            <h1>Home</h1>
            <p>welcome to spinner, your music database</p>
        </div>
    )
}