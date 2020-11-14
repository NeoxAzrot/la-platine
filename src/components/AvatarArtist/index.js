import React from 'react';
import styles from './AvatarArtist.module.css'
import PropTypes from 'prop-types'

const AvatarArtist =(props)=>  {
  const { url, alt } = props
  return (
    <div className={styles.container}>
      <img src={url} alt={alt} className={styles.image}/> 
    </div>
  );
}

AvatarArtist.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string
}

AvatarArtist.defaultProps = {
  alt: 'Artiste'
};

export default AvatarArtist