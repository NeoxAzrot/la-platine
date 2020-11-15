import React from 'react'
import Layout from 'components/Layout'
import styles from './SearchResult.module.css'
import Title from 'components/Title'
import SearchBar from 'components/SearchBar'

const SearchResult = () => {
  return (
    <Layout>
      <Title name="Résultat de recherche"/>
      <div className={styles.container}>
        Page des résultats de recherche
        <div className={styles.searchBar}>
          <SearchBar/>
        </div>
      </div>
    </Layout>
  )
}

export default SearchResult
