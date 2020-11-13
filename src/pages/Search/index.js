import React from 'react'
import Layout from 'components/Layout'
import styles from './Search.module.css'
import Title from 'components/Title'
import SearchBar from 'components/SearchBar'

const Search = () => {
  return (
    <Layout>
      <Title name="Recherche"/>
      <div className={styles.container}>
        Page de recherche
      </div>
      <div >
      <SearchBar placeholder='vous cherchez ?' className={styles.SearchBar}/>
      </div>
    </Layout>
  )
}

export default Search
