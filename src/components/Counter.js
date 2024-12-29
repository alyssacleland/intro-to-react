'user client';

import React, { useState } from 'react'
import PropTypes from 'prop-types';

export default function Counter({ initialCount = 0 }) {
  const [counterValue, setCounterValue] = useState(initialCount);
  // setCounterValue is the state updater function returned by useState.
  // counterValue is the current state value.
  
    const updateCounterValue = (method) => {
      if(method === 'add') {
        // here we are passing the current state value to the updater function, with the operation to be performed.
        setCounterValue(counterValue + 1);
      }
      if(method === 'sub') {
        setCounterValue(counterValue - 1);
      }
    }
  return (
    <div>
     <h2>Counter</h2>
    <h4>{counterValue}</h4>
    <button type="button" onClick={(() => updateCounterValue('sub'))}>-</button>
    <button type="button" onClick={(() => updateCounterValue('add'))}>+</button>
    </div>
 
  )
}

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired,
}
