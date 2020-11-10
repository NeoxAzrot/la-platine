import React from 'react'
import Layout from 'components/Layout'
import styles from './Search.module.css'
import Title from 'components/Title'

const Search = () => {
  return (
    <Layout>
      <Title name="Recherche"/>
      <div className={styles.container}>
        Page de recherche
      </div>
    </Layout>
  )
}

export default Search
