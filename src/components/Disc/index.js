import React from 'react'
import styles from './Disc.module.css'
import PropTypes from 'prop-types'

const Disc = (props) => {
  const { size, image, play } = props

  let className = styles.container
  if(play) {
    className += ` ${styles.active}`
  } 

    return (
      <div className={className}>
        <img className={styles.album} style={{height: `${size}px`, width: `${size}px`}} src='../images/vinyle.png' alt='Vinyle de l&apos;album'/>
        <img className={styles.cover} style={{height: `${size*65/100}px`, width: `${size*65/100}px`}} src={image} alt='Cover de l&apos;album'/>
      </div>
    )
}

Disc.propTypes = {
  size: PropTypes.number,
  image: PropTypes.string,
  play: PropTypes.bool
}

Disc.defaultProps = {
  play: false
};

export default Disc