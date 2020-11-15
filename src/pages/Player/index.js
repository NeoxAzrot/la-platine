import React, { useState } from 'react'
import Layout from 'components/Layout'
import styles from './Player.module.css'
import Title from 'components/Title'
import Disc from 'components/Disc'
import BrasDeLecture from 'components/BrasDeLecture'
import { Link } from 'react-router-dom'
import ArrowUpIcon from 'icons/ArrowUpIcon'
import LikeIcon from 'icons/LikeIcon'
import PlayIcon from 'icons/PlayIcon'
import PauseIcon from 'icons/PauseIcon'
import ShuffleIcon from 'icons/ShuffleIcon'
import LoopIcon from 'icons/LoopIcon'
import NextPastIcon from 'icons/NextPastIcon'

let soundFrom = 'du Disquaire'

const Player = () => {
  const [playIsActive, setPlayIsActive] = useState(false)

  const togglePlay = () => {
    setPlayIsActive(!playIsActive)
  }

  return (
    <Layout>
      <Title name="Lecteur"/>
      <div className={styles.container}>
        <Link to="/" className={styles.arrow}><ArrowUpIcon/></Link>
        <div className={styles.banner}>
          <Link to="/"><img src='../images/logoBanner.png' alt='La Platine'/></Link>
          <p>Ecoute à partir {soundFrom}</p>
        </div>
        <div className={styles.songs}>
          <div className={styles.vinyl}>
            <Disc size={355} image="../images/coverNepal.jpg" play={playIsActive}/>
            <div className={styles.infos}>
              <Link to="/search/album" className={styles.title}>Babylone</Link>
              <Link to="/search/album" className={styles.album}>444NUITS</Link>
              <Link to="/search/artist" className={styles.artist}>Népal</Link>
            </div>
            <div className={styles.likeIcon}><LikeIcon like={false}/></div>
          </div>
          <div className={styles.vinyl}>
            <Disc size={355} image="../images/coverKikesa.png"/>
            <div className={styles.infos}>
              <Link to="/search/album" className={styles.title}>Dernier Texto</Link>
              <Link to="/search/album" className={styles.album}>PUZZLE</Link>
              <Link to="/search/artist" className={styles.artist}>Kikesa</Link>
            </div>
            <div className={styles.likeIcon}><LikeIcon like={true}/></div>
          </div>
        </div>
        <div className={styles.icons}>
          <div className={styles.icon}><ShuffleIcon active={false}/></div>
          <div className={styles.icon}><NextPastIcon/></div>
          <div className={styles.icon }onClick={togglePlay}>{playIsActive ? <PauseIcon/> : <PlayIcon/>}</div>
          <div className={styles.icon}><NextPastIcon/></div>
          <div className={styles.icon}><LoopIcon active={true}/></div>
        </div>
      </div>
      <div className={styles.bras}><BrasDeLecture/></div>
    </Layout>
  )
}

export default Player