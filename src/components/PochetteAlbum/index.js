import React from 'react'
import styles from './PochetteAlbum.module.css'
import PropTypes from 'prop-types'
import Disc from 'components/Disc'

const PochetteAlbum = (props) => {
  const { vinyl, album } = props
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.vinyl}><Disc size={200} image={vinyl}/></div>
        <div className={styles.album}><img src={album} alt="Pochette d'album"></img></div>
      </div>
    </div>
  )
}

PochetteAlbum.propTypes = {
  vinyl: PropTypes.string,
  album: PropTypes.string
}

export default PochetteAlbum