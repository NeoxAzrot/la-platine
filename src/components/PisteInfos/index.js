import React from 'react'
import styles from './PisteInfos.module.css'

const PisteInfos = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles.title}>
            {props.title}
                <div className={styles.artist}>{props.artist}</div> 
                <div className={styles.vinyl}>{props.vinyl}</div>
            </div>
        </div>
    )
}

export default PisteInfos