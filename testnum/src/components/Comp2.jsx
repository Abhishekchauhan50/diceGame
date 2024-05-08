import React from 'react'
import { useDispatch } from 'react-redux'
import { sub } from './reduxtoolkit/CounterSlice'

function Comp2() {

  const dispatch = useDispatch()


  return (
    <div>
      <button onClick={()=>dispatch(sub())} >decre</button>  
    </div>
  )
}

export default Comp2