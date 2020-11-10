import React from 'react'
import Layout from 'components/Layout'
import styles from './Home.module.css'
import Title from 'components/Title'

const Home = () => {
  return (
    <Layout>
      <Title name="Disquaire"/>
      <div className={styles.container}>
        Page d'accueil - Disquaire
      </div>
    </Layout>
  )
}

export default Home
