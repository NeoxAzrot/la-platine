import React from 'react'
import Layout from 'components/Layout'
import styles from './Settings.module.css'
import Title from 'components/Title'
import Slider from 'components/Slider'
import Switch from 'components/Switch'
    

const Settings = () => {
  return (
    <Layout>
      <Title name='Paramètres'/>
      <div className={styles.container}>
        Page des paramètres
        <Switch Text='Mode hors connexion'/>
        <Switch Text='Lecture en continu'/>
        <Switch Text='Afficher les titres indisponibles'/>
        <Switch Text='Normaliser le volume'/>
        <Switch Text='Lecture automatique'/>
        <Slider TextLeft='Off' TextRight='10s'/>
        <Slider TextLeft='Faible' TextRight='Elevée'/>
        <Switch Text='Notifications'/>
      </div>
    </Layout>
  )
}

export default Settings
