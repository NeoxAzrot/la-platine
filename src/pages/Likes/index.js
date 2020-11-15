import React from 'react'
import Layout from 'components/Layout'
import styles from './Likes.module.css'
import Title from 'components/Title'
import ArrowUpIcon from 'icons/ArrowUpIcon'
import { Link } from 'react-router-dom'
import SongLiked from 'components/SongLiked'

const Likes = () => {
  return (
    <Layout>
      <Title name="Likes"/>
      <div className={styles.container}>
      <Link to="/" className={styles.arrow}><ArrowUpIcon/></Link>
        <h1>Mes pistes</h1>
        <div className={styles.songs}>
            <SongLiked image="../images/album1.jpg" song="Fun" artist="Skegss" like={true}/>
            <SongLiked image="../images/album2.jpg" song="Despair, Hangover &amp; Ecstasy" artist="The Dø" like={true}/>
            <SongLiked image="../images/album3.jpg" song="Balance ton porc" artist="Angèle" like={true}/>
            <SongLiked image="../images/album4.jpg" song="Por la vida" artist="Hamza" like={true}/>
            <SongLiked image="../images/album5.jpg" song="Fighters" artist="Flawx" like={true}/>
            <SongLiked image="../images/album6.jpg" song="Ma star" artist="Vald" like={true}/>
            <SongLiked image="../images/album7.jpg" song="Starboy" artist="The Weeknd feat Daft Punk" like={true}/> 
            <SongLiked image="../images/album8.jpg" song="MEVTR" artist="Damso" like={true}/> 
            <SongLiked image="../images/album9.jpg" song="Betrayed" artist="Lil Xan" like={true}/> 
            <SongLiked image="../images/album10.jpg" song="The Sweet Escape" artist="Gwen Stefani" like={true}/>
            <SongLiked image="../images/album11.jpg" song="Respire" artist="7 Jaws, Seezy" like={true}/> 
            <SongLiked image="../images/album12.jpg" song="911" artist="Damso" like={true}/> 
            <SongLiked image="../images/album13.jpg" song="Tu le C" artist="Lorenzo" like={true}/> 
            <SongLiked image="../images/album14.jpg" song="Skechers" artist="DripReport" like={true}/> 
            <SongLiked image="../images/album15.jpg" song="Wow." artist="Post Malone" like={true}/>
          </div>
      </div>
    </Layout>
  )
}

export default Likes
