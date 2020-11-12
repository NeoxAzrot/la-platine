import React from 'react'
import styles from './BrasDeLecture.module.css'

const BrasDeLecture = () => {
    return (
      <div className={styles.container}>
        <img className={styles.album} style={{height: `302px`, width: `301px`}} src='images/Bras_De_Lecture.png' alt='Bras de Lecture'/>
      </div>
    )
}

export default BrasDeLecture