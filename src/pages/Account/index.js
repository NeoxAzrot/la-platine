import React from 'react'
import Layout from 'components/Layout'
import styles from './Account.module.css'
import Title from 'components/Title'

const Account = () => {
  return (
    <Layout>
      <Title name="Compte"/>
      <div className={styles.container}>
        Page du compte
      </div>
    </Layout>
  )
}

export default Account
