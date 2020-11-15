import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ShuffleIcon = (props) => {
  const { active } = props
  const [isActive, setIsActive] = useState(active)

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  return(
    <svg id="Shuffle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336.14 215.22" onClick={toggleActive}>
      <path d="M356.86,138.74l0,2.67A3.09,3.09,0,0,0,356.86,138.74Z" transform="translate(-32.12 -93.61)" fill="none"/>
      <path d="M305.93,181.06c-5.69,4.33-.09,14.11,5.67,9.72l48.32-36.84c4-3,7.25-6.18,8.13-11.4,1.12-6.66-2.24-12.38-7.74-15.89-8.8-5.61-17.9-10.78-26.84-16.17l-26.6-16c-6.21-3.75-11.88,6-5.68,9.71l47.56,28.65c-22.49.15-41.91-.37-59.25-.85-44.85-1.22-71.92-2-91,10.84a46,46,0,0,0-13.26,13.51c-.27-.69-.55-1.37-.85-2-5.8-13-17-20-33.3-20.79L134,132.61c-27.9-1.44-27.9-1.44-35.88-1-7,.37-20,1-66,1.31l.09,16c46.45-.26,59.67-1,66.78-1.33s7.15-.38,34.21,1l17.06.88c20.24,1,22.67,12.43,24.06,42.34.11,2.34.22,4.71.36,7.1-.14,2.39-.25,4.76-.36,7.1-1.39,29.91-3.82,41.31-24.06,42.34l-17,.88c-27.08,1.4-27.08,1.4-34.23,1s-20.33-1.07-66.78-1.33l-.09,16c46.07.26,59.05.94,66,1.31,2.8.15,4.62.25,7,.25,4.41,0,10.77-.33,28.89-1.27l17-.88c16.3-.83,27.5-7.82,33.3-20.79.3-.67.58-1.35.85-2A45.82,45.82,0,0,0,198.49,255c13.91,9.34,32,11.48,58.21,11.48,9.75,0,20.62-.3,32.8-.63,17.24-.47,36.55-1,58.87-.86l-21,16-22.32,17c-5.68,4.33-.09,14.1,5.68,9.71l48.32-36.84c4-3,7.24-6.18,8.12-11.39,1.12-6.67-2.24-12.39-7.74-15.9-8.8-5.6-17.9-10.78-26.84-16.16s-17.73-10.69-26.6-16c-6.21-3.75-11.87,6-5.67,9.71L346.56,249c-21.77-.1-40.61.41-57.5.87-40.23,1.1-66.81,1.83-81.65-8.13-13.3-8.92-15.68-25-16.71-42.81,1-17.78,3.41-33.89,16.71-42.81,14.84-10,41.42-9.23,81.65-8.13,17.31.47,36.67,1,59.14.86L328.25,164Zm50.93-42.32a3.09,3.09,0,0,1,0,2.67Z" transform="translate(-32.12 -93.61)" fill={isActive ? '#FFD315' : '#f6f6f6'}/>
    </svg>
  )
}

ShuffleIcon.propTypes = {
  active: PropTypes.bool
}

ShuffleIcon.defaultProps = {
  active: false
};

export default ShuffleIcon