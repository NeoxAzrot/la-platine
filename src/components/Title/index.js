import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const Title = (props) => {
  let { name } = props
  name = ' | ' + name
  if(window.location.pathname === '/') name = ''
  return (
    <Helmet>
      <title>La Platine{name}</title>
    </Helmet>
  )
}

Title.propTypes = {
  name: PropTypes.string
}

export default Title
