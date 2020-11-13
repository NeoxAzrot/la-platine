import React from 'react'
import Layout from 'components/Layout'
import styles from './Player.module.css'
import Title from 'components/Title'
import Disc from 'components/Disc'
import BrasDeLecture from 'components/BrasDeLecture'
import { Link } from 'react-router-dom'
import LogoBanner from 'components/LogoBanner'


var soundFrom = 'Disquaire'
var gender1 = 'du'
var gender2 = 'de la'
const Player = () => {
  return (
    <Layout>
      <Title name="Lecteur"/>
      {/*la size modifie la size de la hauteur du logobanner seulement*/}
      <LogoBanner size={64}/>
  <p className={styles.Listener}>Ecoute à partir {gender1} {soundFrom}</p>
      <div className={styles.Disc}>
        <Disc size={355} image="../images/coverNepal.jpg"/>
      </div>
      <BrasDeLecture/>
      <div className={styles.titles}>
        <Link to="/search/album" className={styles.songTitle}>Babylone</Link>
        <br/>
        <Link to="/search/artist" className={styles.songArtist}>Népal</Link>
      </div>
    </Layout>

  )
}

export default Player