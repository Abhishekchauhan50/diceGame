
import { createSlice } from "@reduxjs/toolkit";


const RollSlice = createSlice({
    name: 'rollDice',
    initialState: { chose:0, rollNo: 0, score:0, statusclick: false},
    reducers:{
        choosen: (state, action)=>{
            state.chose = action.payload
        },


        

        // updateScore: (state,action)=>{
        //     state.score = state.score + action.payload
        // }
        match: (state, action)=>{
            state.score = state.score + action.payload
        },
        misMatch: (state, action)=>{
            state.score = state.score - action.payload
        }
        

    }
})


export default RollSlice.reducer

export const {choosen , match, misMatch} = RollSlice.actions 
