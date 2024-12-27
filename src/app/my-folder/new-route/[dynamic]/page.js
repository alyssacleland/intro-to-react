import React from 'react'
import PropTypes from 'prop-types'

export default function Dynamo({ params }) {
  return (
    <div>{params.dynamic}</div>
  )
}
Dynamo.propTypes = {
  params: PropTypes.string.isRequired,
}
