import React from 'react'
import styles from './ReducePlayer.module.css'
import ArrowUpIcon from 'icons/ArrowUpIcon'
import LikeIcon from 'icons/LikeIcon'
import PlayIcon from 'icons/PlayIcon'
import Disc from 'components/Disc'
import { Link } from 'react-router-dom'

const ReducePlayer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.reducePlayer}>
        <div className={styles.coverAndText}>
        <Link to="/player"><ArrowUpIcon/></Link>
          <Link to="/player"><Disc size={43} image="../images/cover.jpg"/></Link>
          <div className={styles.infosText}>
            <Link to="/search/album" className={styles.songTitle}>Babylone</Link>
            <Link to="/search/artist" className={styles.songArtist}>Népal</Link>
          </div>
        </div>
        <div className={styles.blankContainer}></div>
        <div className={styles.icons}>
          <LikeIcon/>
          <PlayIcon/>
        </div>
      </div>
    </div>
  )
}

export default ReducePlayer
