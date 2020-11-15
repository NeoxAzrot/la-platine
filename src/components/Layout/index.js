import React from 'react'
import Menu from 'components/Menu'
import styles from './Layout.module.css'
import ReducePlayer from 'components/ReducePlayer'
import { useLocation } from 'react-router-dom'

const Layout = (props) => {
  const { children } = props
  
  const location = useLocation()
  let layoutHeight = "100vh"
  if(location.pathname !== "/player") layoutHeight = "calc(100vh - 60px - 47px)"

  return (
    <div className={styles.layout} style={{height: layoutHeight}}>
      {children}
      {location.pathname !== "/player" && (
          <div>
          <ReducePlayer />
          <Menu />
        </div>
      )}
    </div>
  )
}

export default Layout
