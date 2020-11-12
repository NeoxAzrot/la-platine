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
        <Link to="/player"><Disc size={329} image="../images/cover.jpg"/></Link>
        <p>TEST</p>
      </div>
    </Layout>
  )
}

export default Home
