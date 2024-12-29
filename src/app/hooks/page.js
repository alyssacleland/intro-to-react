"use client"

import React, { useEffect, useState } from 'react';
import Counter from '@/components/Counter';

export default function Hooks() {
  const [stateHook, setStateHook] = useState('State Hook Default Value');
  
  // useEfect will start the timer and after the component renders, will rerender adter 5 seconds

// setTimeout:
// This is a JavaScript function that sets a timer to run some code after a specified delay. The syntax is: setTimeout(callback, delay)
/// callback: A function to run after the delay.
/// delay: Time in milliseconds to wait before running the callback (5000 milliseconds = 5 seconds).

// clearTimeout: This line ensures that if the component unmounts or the effect is re-run, React will clear the existing timer before setting a new one. This avoids running stale timers that could lead to unexpected behavior.
/// In the useEffect hook, the return statement is used to define a cleanup function. This cleanup function is called when: a.) The component is about to unmount, or b.) Before the effect runs again (if the dependencies change).

// the empty array [] (at the end) is the dependency array for the useEffect hook.
/// When useEffect is called, it looks at this array to decide whether to re-run the effect.
/// If the array is empty ([]), it means the effect should run only once
/// If you omit the empty array, the effect will run on every render, which can be inefficient.
/// If you include a variable in the array, the effect will run whenever that variable changes.
/// (A new render in React is triggered whenever state or props change.)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStateHook('The useEffect Loaded Me!');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);


  return ( 
  <div>
    {stateHook}
    <Counter />
    <Counter initialCount={100}/>
  </div>
  );
}
