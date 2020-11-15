import React from 'react'
import Layout from 'components/Layout'
import styles from './Search.module.css'
import Title from 'components/Title'
import SearchBar from 'components/SearchBar'
import ContainerSingle from 'components/ContainerSingle'

const Search = () => {
  return (
    <Layout>
      <Title name="Recherche"/>
      <div className={styles.container}>
        <h2 className={styles.subTitle}>Rechercher</h2>
        <div className={styles.searchBar}>
          <SearchBar/>
        </div>
        <h2 className={styles.subTitle}>Derniers titres écoutés</h2>
        <ContainerSingle singles={
          [
            [
              "key1",
              "../images/album7.jpg",
              "Killing in the Na...",
              "Rage Against...",
              "Rage Against..."
            ],
            [
              "key2",
              "../images/album8.jpg",
              "Despair, Hango...",
              "Shake Shook Shak..",
              "The Dø"
            ],
            [
              "key3",
              "../images/album9.jpg",
              "Luminosité pute",
              "BRICKS",
              "Petit Maudit"
            ],
            [
              "key4",
              "../images/album10.jpg",
              "Primitif",
              "Xeu",
              "Vald"
            ]
          ]
        }/>
      </div>
    </Layout>
  )
}

export default Search
