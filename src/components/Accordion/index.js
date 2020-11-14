import React, { useState } from "react";
import styles from './Accordion.module.css'
import PropTypes from 'prop-types'
import Collapse from '@material-ui/core/Collapse';
import ArrowUpIcon from 'icons/ArrowUpIcon'

const Accordion = (props) => {
  const { title, children, visible } = props

  const [showInfoIsVisible, setShowInfoIsVisible] = useState(visible);

  const toggleShowInfo = () => {
    setShowInfoIsVisible(!showInfoIsVisible)
  }

  let className = styles.accordion
  if(showInfoIsVisible) {
    className += ` ${styles.active}`
  } 

  return (
    <div className={styles.container}>
      <button onClick={toggleShowInfo} className={className}>
        {title}
        <ArrowUpIcon/>
      </button>
      <Collapse in={showInfoIsVisible}>
        <div className={styles.moreInfo}>
          {children}
        </div>
      </Collapse>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool
}

Accordion.defaultProps = {
  visible: false
};

export default Accordion;
