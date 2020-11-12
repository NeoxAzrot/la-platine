import React from 'react'
import Layout from 'components/Layout'
import styles from './Artist.module.css'
import Title from 'components/Title'
import PlusInfosTirroir from 'components/PlusInfosTirroir'
import LinkSocialMedia from 'components/LinkSocialMedia'

const Artist = () => {
  return (
    <Layout>
      <Title name="Artiste"/>
      <div className={styles.container}>
        Page des artistes
        <PlusInfosTirroir title="Description" text="ça marche youpi" />  
        <LinkSocialMedia name="Instagram" url ="https://www.instagram.com/?hl=fr "/>
        <LinkSocialMedia name="Facebook" url= "https://www.facebook.com/"/>
        <LinkSocialMedia name="Twitter" url="https://twitter.com/?lang=fr"/>
      </div>
    </Layout>
  )
}

export default Artist
