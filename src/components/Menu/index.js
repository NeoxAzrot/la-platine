import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <nav className={styles.header}>
      La Platine
      <ul className={styles.menu}>
        <li>
          <Link to="/home" className={styles.menuItem}>Disquaire</Link>
        </li>
        <li>
          <Link to="/search" className={styles.menuItem}>Recherche</Link>
        </li>
        <li>
          <Link to="/account" className={styles.menuItem}>Compte</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
