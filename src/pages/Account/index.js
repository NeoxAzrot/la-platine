import React from 'react'
import Layout from 'components/Layout'
import styles from './Account.module.css'
import Title from 'components/Title'
import SettingsIcon from 'icons/SettingsIcon'
import { Link } from 'react-router-dom'
import ContainerVinyl from 'components/ContainerVinyl'

const Account = () => {
  return (
    <Layout>
      <Title name="Compte"/>
      <div className={styles.container}>
        <Link to="/account/settings" className={styles.arrow}><SettingsIcon/></Link>
        <div>
          <h2>Mes vinyles</h2>
          <ContainerVinyl vinyls={
            [
              [
                "key1",
                "../images/album13.jpg"
              ],
              [
                "key2",
                "../images/album1.jpg"
              ],
              [
                "key3",
                "../images/album11.jpg"
              ],
              [
                "key4",
                "../images/album12.jpg"
              ]
            ]
          }/>
        </div>
        <div>
          <h2>Mes pistes</h2>
        </div>
        <div>
          <h2>Vinyles likés</h2>
          <ContainerVinyl vinyls={
            [
              [
                "key1",
                "../images/album13.jpg"
              ],
              [
                "key2",
                "../images/album14.jpg"
              ],
              [
                "key3",
                "../images/album6.jpg"
              ],
              [
                "key4",
                "../images/album12.jpg"
              ]
            ]
          }/>
        </div>
        <div>
          <h2>Artistes les plus écoutés</h2>
        </div>
        <div>
          <h2>Suggestions</h2>
        </div>
      </div>
    </Layout>
  )
}

export default Account
