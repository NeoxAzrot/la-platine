import React, { useState } from 'react'
import styles from './LikeIcon.module.css'
import PropTypes from 'prop-types'

const LikeIcon = (props) => {
  const { like } = props
  const [likeIsActive, setLikeIsActive] = useState(like)

  const toggleLike = () => {
    setLikeIsActive(!likeIsActive)
  }

  return(
    <svg id="Like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 369.89 340.28" className={styles.icon} onClick={toggleLike}>
      <path d="M210.15,81.89c6-15.38,48.34-40.5,87.15-33.95,40.8,6.89,68.09,46.15,74.49,72.46C395.1,216.17,201.54,366.15,198.5,366.15h1.59c-3,0-196.6-150-173.3-245.75,6.41-26.31,33.69-65.57,74.49-72.46,38.81-6.55,81.16,18.57,87.15,34l11.66,21.53Z" transform="translate(-14.35 -36.37)" fill={likeIsActive ? '#f6f6f6' : 'none'} stroke="#f6f6f6" strokeMiterlimit="10" strokeWidth="21px"/>
      <path d="M147.7,96.3" transform="translate(-14.35 -36.37)" fill="none" stroke="#f6f6f6" strokeMiterlimit="10" strokeWidth="16px"/>
    </svg>
  )
}

LikeIcon.propTypes = {
  like: PropTypes.bool
}

LikeIcon.defaultProps = {
  like: false
};

export default LikeIcon