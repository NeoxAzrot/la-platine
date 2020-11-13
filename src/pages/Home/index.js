import React from 'react'
import Layout from 'components/Layout'
import styles from './Home.module.css'
import Title from 'components/Title'
import Disc from 'components/Disc'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Layout>
      <Title name="Disquaire"/>
      <div className={styles.container}>
        <Link to="/"><img className={styles.logo} src='../images/logo.png' alt='La Platine'/></Link>
        <div>
          <Disc size={165} image="../images/coverFlyzen.jpg"/>
          <Link to="/player"><Disc size={329} image="../images/coverNepal.jpg"/></Link>
          <Disc size={165} image="../images/coverKikesa.png"/>
        </div>
      </div>
    </Layout>
  )
}

export default Home
