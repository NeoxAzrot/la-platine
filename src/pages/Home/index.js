import React from 'react'
import Menu from 'components/Menu'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Menu />
      Page d'accueil
      Marie est dans la branche dev
      paulin Jouhet
      Malvinyl
    </div>
  )
}

export default Home
