import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const Title = (props) => {
  const { name } = props
  return (
    <Helmet>
      <title>La Platine | {name}</title>
    </Helmet>
  )
}

Title.propTypes = {
  name: PropTypes.string
}

export default Title
