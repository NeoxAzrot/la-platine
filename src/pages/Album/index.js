import React from 'react'
import Layout from 'components/Layout'
import styles from './Album.module.css'
import Title from 'components/Title'

const Album = () => {
  return (
    <Layout>
      <Title name="Vinyle"/>
      <div className={styles.container}>
        Page des albums
      </div>
    </Layout>
  )
}

export default Album