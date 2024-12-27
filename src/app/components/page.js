import React from 'react'
import SayHello from '../../components/SayHello'

export default function Components() {
  const array =[
    {name: 'Alyssa', greeting: 'sup?'},
    {name: 'Oreo', greeting: 'woof'},
  ]
    return (
      <div>
        {
        array.map((item) => <SayHello name={item.name} greeting={item.greeting} />)
        }

  {/*   return (      array.map((item, i) => <SayHello key={i} name={item.name} greeting={item.greeting} />)  */}

      <SayHello name='Alyssa' greeting='sup?' />
    </div>
  )
}
