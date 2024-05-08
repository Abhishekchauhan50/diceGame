import React, { useEffect, useState } from 'react'
import  DiceNumber from './Data'
import { useDispatch, useSelector } from 'react-redux'
import { choosen } from './reduxtoolkit/RollSlice'


function Nav() {

  const [choosenNumber , setChoosenNumber] = useState(0)

  const [status, setStatus] =  useState(false)

  const dispatch   = useDispatch()

  const  storeNumber = useSelector(state=>state)
  //console.log('abbhi'+ storeNumber)

  let handleChoose = (val)=>{
    //console.log(val);
    setChoosenNumber(val)
  }  

  useEffect(()=>{
    dispatch(choosen(choosenNumber))
  },[choosenNumber])

  // useEffect(()=>{
  //   if(storeNumber.chose==0 ){
  //     setStatus(true)
  //   }
  //   else if()
  // })



  console.log(choosenNumber);

  return (
    <>
    <div  className=' w-full  bg-green-700 flex flex-col gap-5 justify-between px-16 lg:flex-row'>
        <div>
          <h1 className='text-8xl  font-bold'>
            {storeNumber.score}
            </h1>
          <h1 className='text-4xl text-black'>Score</h1>
        </div>
        
        <div  className='flex  flex-col gap-2'>
          <p className='text-red-400 text-3xl font-semibold'> First, choose a number</p>
          <div className=' flex gap-3 '>
            {/* <h1 className='bg-black text-white p-4  rounded-lg text-2xl'>1</h1> */}
            {DiceNumber.map((val, index)=>{
              //console.log(val)
              return(<h1 onClick={()=>handleChoose(val)} key={index} className='bg-black text-white p-4  rounded-lg text-2xl'>{val}</h1>)
            })}
            
          </div>
          <h1 className='text-black text-2xl'>Select a  number</h1>
        </div>
      </div>
    </>
  )
}

export default Nav