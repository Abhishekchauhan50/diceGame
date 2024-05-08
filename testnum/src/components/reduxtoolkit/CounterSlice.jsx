import { createSlice } from "@reduxjs/toolkit";


let CounterSlice =  createSlice({
    name: 'counter',
    initialState: 0,
    reducers:{
        add: (state)=>{
            return state+1
        },

        sub: (state)=>{
            return  state-1
        }
    }
})

export const {add ,sub } = CounterSlice.actions

export default CounterSlice.reducer 