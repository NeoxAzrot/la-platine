import React from 'react'
import Layout from 'components/Layout'
import styles from './Artist.module.css'
import Title from 'components/Title'

const Artist = () => {
  return (
    <Layout>
      <Title name="Artiste"/>
      <div className={styles.container}>
        Page des artistes
      </div>
    </Layout>
  )
}

export default Artist
