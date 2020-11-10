import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <nav className={styles.header}>
      La Platine
      <ul className={styles.menu}>
        <li>
          <NavLink to="/home" className={styles.menuItem} activeClassName={styles.active}>Disquaire</NavLink>
        </li>
        <li>
          <NavLink to="/search" className={styles.menuItem} activeClassName={styles.active}>Recherche</NavLink>
        </li>
        <li>
          <NavLink to="/account" className={styles.menuItem} activeClassName={styles.active}>Compte</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
