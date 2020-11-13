import React from 'react'
import styles from './NameArtist.module.css'

const NameArtist = (props) =>{
    return(
        <div className={styles.name}>
            {props.name}
            </div>
    )
}

export default NameArtist