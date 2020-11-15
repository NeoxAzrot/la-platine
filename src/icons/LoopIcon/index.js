import React, { useState } from 'react'
import PropTypes from 'prop-types'

const LoopIcon = (props) => {
  const { active } = props
  const [isActive, setIsActive] = useState(active)

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  return(
    <svg id="Loop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 295.04 274.77" onClick={toggleActive}>
      <path d="M337.16,83.45c-11.43-6.57-23-12.88-34.52-19.32l-33.9-19c-6.33-3.54-12,6.18-5.68,9.72l63.38,35.46c.72.41,1.62.84,2.56,1.3H174.81A122,122,0,0,0,52.9,213.55h16A106,106,0,0,1,174.81,107.64H327.18q-15,10.71-30,21.41L268.75,149.3c-5.85,4.16-.23,13.92,5.68,9.71l61.72-44c4.62-3.29,9-6.63,10.35-12.53C348.4,94.4,344,87.36,337.16,83.45Z" transform="translate(-52.77 -44.4)" fill={isActive ? '#FFD315' : '#f6f6f6'}/>
      <path d="M331.81,150A106,106,0,0,1,225.9,255.93H72.53q15-10.71,30-21.41L131,214.27c5.85-4.16.23-13.92-5.68-9.71l-61.72,44c-4.62,3.3-9,6.64-10.35,12.54-1.9,8.07,2.55,15.11,9.34,19,11.43,6.57,23,12.88,34.52,19.32l33.9,19c6.33,3.53,12-6.18,5.68-9.72L73.27,273.23c-.72-.41-1.62-.84-2.56-1.3H225.9A122,122,0,0,0,347.81,150Z" transform="translate(-52.77 -44.4)" fill={isActive ? '#FFD315' : '#f6f6f6'}/>
    </svg>
  )
}

LoopIcon.propTypes = {
  active: PropTypes.bool
}

LoopIcon.defaultProps = {
  active: false
};

export default LoopIcon