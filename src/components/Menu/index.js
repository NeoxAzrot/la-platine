import React from 'react'
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <nav className={styles.header}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          Premier composant
        </li>
        <li className={styles.menuItem}>
          Styliser les composants
        </li>
        <li className={styles.menuItem}>
          Hooks
        </li>
      </ul>
    </nav>
  )
}

export default Menu
