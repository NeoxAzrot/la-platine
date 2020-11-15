import React from "react"
import styles from "./ArtistMostListenAccount.module.css"
import { Link } from 'react-router-dom'

const ArtistMostListenAccount = (props) => {
  const { artists } = props
  return (
    <div className={styles.container}>

      {artists.map((artist) => {
        return (
          <Link to="/search/artist" key={artist[0]}>
            <div className={styles.item}>
              <img className={styles.image} src={artist[1]} alt="Artiste"/>
              <div className={styles.name}>
                <p>{artist[2]}</p>
              </div>
            </div>
          </Link>
        )
      })}
        
    </div> 
  )
}
      
export default ArtistMostListenAccount
