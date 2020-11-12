import React from 'react'
import Menu from 'components/Menu'
import styles from './Layout.module.css'
import ReducePlayer from 'components/ReducePlayer'

const Layout = (props) => {
  const { children } = props
  return (
    <div className={styles.layout}>
      {children}
      <ReducePlayer />
      <Menu />
    </div>
  )
}

export default Layout
