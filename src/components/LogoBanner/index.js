import React from 'react'
import styles from './LogoBanner.module.css'
import PropTypes from 'prop-types'

const LogoBanner = (props) => {
    const {size} = props
        return (
            <div className={styles.container}>
                <img className={styles.banner} style={{height: `${size}px`, width: `auto`}} src='images\LogoLaPlatineBanner.png'/>
            </div>
        )
}

LogoBanner.prototype = {
    size: PropTypes.number 
}

export default LogoBanner