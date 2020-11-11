import React from 'react'
import Menu from 'components/Menu'
import styles from './Layout.module.css'

const Layout = (props) => {
  const { children } = props
  return (
    <div className={styles.layout}>
      <Menu />
      {children}
    </div>
  )
}

export default Layout
