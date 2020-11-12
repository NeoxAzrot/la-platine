import React from 'react'
import Layout from 'components/Layout'
import styles from './Artist.module.css'
import Title from 'components/Title'
import PlusInfosTirroir from 'components/PlusInfosTirroir'

const Artist = () => {
  return (
    <Layout>
      <Title name="Artiste"/>
      <div className={styles.container}>
        Page des artistes
        <PlusInfosTirroir title="Description" text="ça marche youpi" />  
      </div>
    </Layout>
  )
}

export default Artist
