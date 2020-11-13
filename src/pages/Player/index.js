import React from 'react'
import Layout from 'components/Layout'
import styles from './Player.module.css'
import Title from 'components/Title'
import Disc from 'components/Disc'
import BrasDeLecture from 'components/BrasDeLecture'
import { Link } from 'react-router-dom'
import LogoBanner from 'components/LogoBanner'

let soundFrom = 'du Disquaire'

const Player = () => {
  return (
    <Layout>
      <Title name="Lecteur"/>
      <div className={styles.container}>
        <LogoBanner size={64}/>
        <p className={styles.Listener}>Ecoute à partir {soundFrom}</p>
        <div className={styles.Disc}>
          <Disc size={355} image="../images/coverNepal.jpg"/>
        </div>
        <BrasDeLecture/>
        <div className={styles.titles}>
          <p className={styles.songTitle}>Babylone</p>
          <p className={styles.songArtist}>Népal</p>
        </div>
      </div>
    </Layout>

  )
}

export default Player