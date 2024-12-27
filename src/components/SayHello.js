import React from 'react'
import PropTypes from 'prop-types'

export default function SayHello({ name, greeting }) {
  // could also pass in (props) and then access props.name below, because props is an object
  return (
  
    <div>Hello, {name}. {greeting}

    </div>


  )
}

SayHello.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.string.isRequired,
}
