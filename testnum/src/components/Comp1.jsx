import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from './reduxtoolkit/CounterSlice'

function Comp1() {

  const dispatch = useDispatch()

  // let handleDispatch = ()=>{

  // }


  return (
    <div>
      <button onClick={()=>dispatch(add())}>incre</button>
    </div>
  )
}

export default Comp1