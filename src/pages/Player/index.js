import React from 'react'
import Layout from 'components/Layout'
import styles from './Player.module.css'
import Title from 'components/Title'
import Disc from 'components/Disc'


const Player = () => {
  return (
    <Layout>
      <Title name="Lecteur"/>
      <div className={styles.container}>
        Page du player
      </div>
      <Disc/>
    </Layout>

  )
}

export default Player
