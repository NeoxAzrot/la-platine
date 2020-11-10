import React from 'react'
import Layout from 'components/Layout'
import styles from './Player.module.css'
import Title from 'components/Title'

const Player = () => {
  return (
    <Layout>
      <Title name="Lecteur"/>
      <div className={styles.container}>
        Page du player
      </div>
    </Layout>
  )
}

export default Player
