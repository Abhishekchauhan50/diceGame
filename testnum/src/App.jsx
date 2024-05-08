

import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'

            

function App() {

  let count = useSelector(state => state)
  

  const a =  count
  console.log(a)
 

  return (
    <>
      <h1>  ~ hello {count} </h1>
      <Comp1></Comp1>
      <Comp2></Comp2>
    </>
  )
}

export default App
