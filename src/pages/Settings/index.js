import React from 'react'
import Layout from 'components/Layout'
import styles from './Settings.module.css'
import Title from 'components/Title'

const Settings = () => {
  return (
    <Layout>
      <Title name="Paramètres"/>
      <div className={styles.container}>
        Page des paramètres
      </div>
    </Layout>
  )
}

export default Settings
