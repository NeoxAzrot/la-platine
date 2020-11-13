import React from 'react'
import Layout from 'components/Layout'
import styles from './Home.module.css'
import Title from 'components/Title'
import Disc from 'components/Disc'
import { Link } from 'react-router-dom'
import BrasDeLecture from 'components/BrasDeLecture'

const Home = () => {
  return (
    <Layout>
      <Title name="Disquaire"/>
      <div className={styles.container}>
        <Link to="/"><img className={styles.logo} src='../images/logo.png' alt='La Platine'/></Link>
        <div className={styles.music}>
          <div className={styles.cover}><Disc size={165} image="../images/coverFlyzen.jpg"/></div>
          <div className={styles.cover}>
            <Link to="/player"><Disc size={329} image="../images/coverNepal.jpg"/></Link>
          </div>
          <div className={styles.cover}><Disc size={165} image="../images/coverKikesa.png"/></div>
        </div>
        <BrasDeLecture/>
        <div className={styles.infos}>
          <Link to="/search/album" className={styles.title}>Babylone</Link>
          <Link to="/search/album" className={styles.album}>444NUITS</Link>
          <Link to="/search/artist" className={styles.artist}>Népal</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
