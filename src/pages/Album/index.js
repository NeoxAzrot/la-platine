import React from 'react'
import Layout from 'components/Layout'
import styles from './Album.module.css'
import Title from 'components/Title'
import ArrowUpIcon from 'icons/ArrowUpIcon'
import { Link } from 'react-router-dom'
import PochetteAlbum from 'components/PochetteAlbum'
import SongVinyl from 'components/SongVinyl'

const Album = () => {
  return (
    <Layout>
      <Title name="Vinyle"/>
      <div className={styles.container}>
        <Link to="/" className={styles.arrow}><ArrowUpIcon/></Link>
        <PochetteAlbum vinyl="../images/coverManu.jpg" album="../images/album6.jpg"/>
        <div className={styles.infosAlbum}>
          <h1>Clandestino</h1>
          <div className={styles.songs}>
            <SongVinyl name="Clandestino" like={true}/>
            <SongVinyl name="Desaparecido" like={false}/>
            <SongVinyl name="Je ne t'aime plus" like={false}/>
            <SongVinyl name="Bongo Bong." like={false}/>
            <SongVinyl name="Mentira" like={true}/>
            <SongVinyl name="Por El Suelo" like={false}/>
            <SongVinyl name="Welcome to Tijuana" like={false}/> 
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Album
