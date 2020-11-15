import React from "react"
import styles from "./MyPistAccount.module.css"
import { Link } from 'react-router-dom'
import Disc from 'components/Disc'

const MyPistAccount = (props) => {
  const { singles } = props
  return (
    <div className={styles.container}>

      {singles.map((single) => {
        return (
          <div className={styles.item} key={single[0]}>
            <Link to="/player" className={styles.cover}><Disc size={78} image={single[1]}/></Link>
            <div className={styles.infos}>
              <Link to="/player" className={styles.title}>{single[2]}</Link>
              <Link to="/search/album" className={styles.album}>{single[3]}</Link>
              <Link to="/search/artist" className={styles.artist}>{single[4]}</Link>
            </div>
          </div> 
        )
      })}
        
    </div> 
  )
}
      
export default MyPistAccount
