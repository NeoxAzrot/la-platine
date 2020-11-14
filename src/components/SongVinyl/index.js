import React from 'react'
import styles from './SongVinyl.module.css'
import PropTypes from 'prop-types'
import LikeIcon from 'icons/LikeIcon'

const SongVinyl = (props) => {
  const { name, like } = props
  return (
    <div className={styles.container}>
      <p>{name}</p>
      <LikeIcon like={like}/>
    </div>
  )
}

SongVinyl.propTypes = {
  name: PropTypes.string,
  like: PropTypes.bool
}

SongVinyl.defaultProps = {
  like: false
};

export default SongVinyl