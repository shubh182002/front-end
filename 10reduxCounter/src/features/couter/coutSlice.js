import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value : 0,
}

export const coutSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment : (state) =>{
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        },
        addAmountAsNumber: (state,action) => {
          state.value += Number(action.payload)
        },
        
    }
})

export const {increment , decrement , reset, addAmountAsNumber} = coutSlice.actions

export default coutSlice.reducer