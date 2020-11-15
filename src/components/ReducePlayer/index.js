import React, { useState } from 'react'
import styles from './ReducePlayer.module.css'
import ArrowUpIcon from 'icons/ArrowUpIcon'
import LikeIcon from 'icons/LikeIcon'
import PlayIcon from 'icons/PlayIcon'
import PauseIcon from 'icons/PauseIcon'
import Disc from 'components/Disc'
import { Link } from 'react-router-dom'

const ReducePlayer = () => {
  const [playIsActive, setPlayIsActive] = useState(false)

  const togglePlay = () => {
    setPlayIsActive(!playIsActive)
  }

  return (
    <div className={styles.container}>
      <div className={styles.reducePlayer}>
        <div className={styles.coverAndText}>
        <Link to="/player" className={styles.arrow}><ArrowUpIcon/></Link>
          <Link to="/player"><Disc size={43} image="../images/coverNepal.jpg" play={playIsActive}/></Link>
          <div className={styles.infosText}>
            <Link to="/search/album" className={styles.songTitle}>Babylone</Link>
            <Link to="/search/artist" className={styles.songArtist}>Népal</Link>
          </div>
        </div>
        <div className={styles.blankContainer}></div>
        <div className={styles.icons}>
          <LikeIcon like={false}/>
          <div onClick={togglePlay}>{playIsActive ? <PauseIcon/> : <PlayIcon/>}</div>
          </div>
      </div>
    </div>
  )
}

export default ReducePlayer
