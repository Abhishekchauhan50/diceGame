
import {configureStore} from  '@reduxjs/toolkit'
import CounterSlice from './CounterSlice'


const Store = configureStore({
    reducer: CounterSlice
})

export default Store