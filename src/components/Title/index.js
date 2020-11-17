import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const Title = (props) => {
  let { name } = props
  name = ' | ' + name
  if(window.location.pathname === '/') name = ''

  
  useEffect(() => {
    document.title = `La Platine${name}`;
  });
  return (
    <div></div>
  )
}

Title.propTypes = {
  name: PropTypes.string
}

export default Title
