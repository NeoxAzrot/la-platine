import React from 'react'
import styles from './SearchBar.module.css'

const SearchBar=() => {
  return (
    <div className={styles.container}>
      <input type="search" placeholder="Titres, vinyles, artistes, ..."></input>
    </div>
  )
}

export default SearchBar