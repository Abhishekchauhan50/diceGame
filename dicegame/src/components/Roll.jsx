import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { match, misMatch,   } from './reduxtoolkit/RollSlice'



  
function Roll() {

  let [dicenum , setDiceNum] = useState(1)
  const disspatch = useDispatch()

  let storeNumber = useSelector(state=>state)

  let handleRoll  = ()=>{
    let diceNumber = Math.floor(Math.random() * 6) + 1;

    // disspatch(random(diceNumber));
    setDiceNum(diceNumber);
    console.log("Dice Number:", diceNumber);
    console.log("Chose:", storeNumber.chose);
    console.log("Roll No:", storeNumber.rollNo);

    if (diceNumber === storeNumber.chose) {
        disspatch(match(2));
        console.log("Matched!");
    } 
    else if(diceNumber != storeNumber.chose) {
        disspatch(misMatch(1));
        console.log("Not Matched!");
    }
    
  }

  

  // function runfunc(){
    
  // }

  
    

  

  // useEffect(()=>{
  //   disspatch(random(dicenum))
  // },[dicenum])

  //console.log('xxcds')


  return (
    <>
    <div  className='h-[20rem] flex flex-col justify-center items-center '>
      <i className={`ri-dice-${dicenum}-line  text-[15rem] font-extralight`}></i>
      <button onClick={handleRoll} className='text-3xl bg-green-500 px-5 py-2 rounded-lg  '>Roll Dice</button>
    </div>
    </>
  )
}
 
export default Roll;

//ri-dice-3-line font-semibold text-8xl