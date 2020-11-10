import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.css'
import HomeIcon from '../../icons/HomeIcon'
import SearchIcon from '../../icons/SearchIcon'
import AccountIcon from '../../icons/AccountIcon'

const Menu = () => {
  return (
    <nav className={styles.header}>
      <ul className={styles.menu}>
        <li>
          <NavLink to="/home" className={styles.menuItem} activeClassName={styles.active}>
            <HomeIcon/>
            Disquaire
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" className={styles.menuItem} activeClassName={styles.active}>
            <SearchIcon/>
            Recherche
          </NavLink>
        </li>
        <li>
          <NavLink to="/account" className={styles.menuItem} activeClassName={styles.active}>
            <AccountIcon/>
            Compte
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
