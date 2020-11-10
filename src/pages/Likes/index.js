import React from 'react'
import Layout from 'components/Layout'
import styles from './Likes.module.css'
import Title from 'components/Title'

const Likes = () => {
  return (
    <Layout>
      <Title name="Likes"/>
      <div className={styles.container}>
        Page des likes
      </div>
    </Layout>
  )
}

export default Likes
