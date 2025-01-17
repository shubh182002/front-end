import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pastes:localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem("pastes"))
  : []
}

export const pastSlice = createSlice({
  name: 'pastes',
  initialState,
  reducers: {
     addToPastes: (state,action) => {

     },
     removeToPastes: (state,action ) => {

     },
     updateToPaste: (state,action) => {

     },
     resetAllPaste: (state,action) => {

     }
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, removeToPastes,updateToPaste,resetAllPaste } = pastSlice.actions

export default pastSlice.reducer