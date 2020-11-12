import React from 'react'
import styles from './Disc.module.css'
import PropTypes from 'prop-types'

const Disc = (props) => {
  const { size, image } = props
    return (
      <div className={styles.container}>
        <img className={styles.album} style={{height: `${size}px`, width: `${size}px`}} src='../images/Vinyle.png' alt='Vinyle de l&apos;album'/>
        <img className={styles.cover} style={{height: `${size*65/100}px`, width: `${size*65/100}px`}} src={image} alt='Cover de l&apos;album'/>
      </div>
    )
}

Disc.propTypes = {
  size: PropTypes.number,
  image: PropTypes.string
}

export default Disc