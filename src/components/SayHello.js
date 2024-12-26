import React from 'react'
import PropTypes from 'prop-types'

export default function SayHello({ name }) {
  return (
    <>
    <div>Hello, {name}</div>
    <p>This is a paragraph</p>
    </>
  )
}
//
// this exists
SayHello.propTypes = {
  name: PropTypes.string.isRequired,
}
