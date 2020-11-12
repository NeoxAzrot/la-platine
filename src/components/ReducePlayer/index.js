import React from 'react'
import styles from './ReducePlayer.module.css'
import ArrowUpIcon from 'icons/ArrowUpIcon'
import LikeIcon from 'icons/LikeIcon'
import PlayIcon from 'icons/PlayIcon'
import Disc from 'components/Disc'

const ReducePlayer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.reducePlayer}>
        <div className={styles.coverAndText}>
          <ArrowUpIcon/>
          <Disc size={43} image="images/cover.jpg"/>
          <div className={styles.infosText}>
            <p className={styles.songTitle}>Babylone</p>
            <p className={styles.songArtist}>Népal</p>
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
