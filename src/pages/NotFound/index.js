import React from 'react'
import Layout from 'components/Layout'
import styles from './NotFound.module.css'
import Title from 'components/Title'
    
const NotFound = () => {
  return (
  <Layout>
    <Title name="Error 404"/>
    <div className={styles.container}>
      <div className={styles.notFound}>
        <div className={styles.notFound404}>
          <h3>Cette page n'existe pas.</h3>
          <h1><span>4</span><span>0</span><span>4</span></h1>
        </div>
        <h2>nous sommes désolés, mais la page que vous avez demandée n'a pas été trouvée</h2>
      </div>
    </div>
  </Layout>
  )
}

export default NotFound
