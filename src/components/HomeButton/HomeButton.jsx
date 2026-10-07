import { useNavigate } from 'react-router-dom';
import styles from './HomeButton.module.css';
import logo from '../../assets/logo.png';

export default function HomeButton() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/`);
    }


    return (
        <button className={styles.homeButton} onClick={handleClick} aria-label="Home">
            Spinner
        </button>
    )
}