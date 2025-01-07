import styles from './header.module.css'
import { Link } from 'react-router-dom'

export function Header(){
  return(
    <header className={styles.container}>
      <Link to="/">
        <h1>Currency Tracker 🪙</h1>
      </Link>
    </header>
  )
}
