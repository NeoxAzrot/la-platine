import React from 'react'
import styles from './SongLiked.module.css'
import PropTypes from 'prop-types'
import LikeIcon from 'icons/LikeIcon'
import { Link } from 'react-router-dom'
import Disc from 'components/Disc'

const SongLiked = (props) => {
  const { image, song, artist, like } = props
  return (
    <div className={styles.container}>
      <Link to="/player" className={styles.single}>
        <Disc size={41} image={image} />
        <div className={styles.infos}>
          <h3>{song}</h3>
          <p>{artist}</p>
        </div>
      </Link>
      <LikeIcon like={like}/>
    </div>
  )
}

SongLiked.propTypes = {
  image: PropTypes.string,
  song: PropTypes.string,
  artist: PropTypes.string,
  like: PropTypes.bool
}

SongLiked.defaultProps = {
  like: true
};

export default SongLiked