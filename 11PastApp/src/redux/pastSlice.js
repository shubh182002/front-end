import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
  pastes : localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem("pastes"))
  : [],
}

export const pastSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
     addToPastes: (state,action) => {
        const paste = action.payload

        // add check t paste already exist
        state.pastes.push(paste)
        localStorage.setItem("pastes",
        JSON.stringify(state.pastes))
        toast.success("Paste Created Successfully")

     },
     removeToPastes: (state,action ) => {
        const pasteId = action.payload

        console.log(pasteId)
        const index = state.pastes.findIndex((item) => 
        item.id === pasteId)

        if(index>=0){
          state.pastes.splice(index,1)
         
          localStorage.setItem("pastes",JSON.stringify(state.pastes))
          toast.success("Paste Deleted Successfully")
        }
     },
     updateToPaste: (state,action) => {
      const paste = action.payload
      const index = state.pastes.findIndex((item) =>
      item.id === paste.id)
      
      if(index >= 0){
        state.pastes[index] = paste

        localStorage.setItem("pastes",JSON.stringify(state.pastes))

        toast.success("Paste Updated")
      }
     },
     resetAllPaste: (state,action) => {
        state.pastes = []
        localStorage.removeItem("pastes")
        toast.success("All item removed")
     }
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, removeToPastes,updateToPaste,resetAllPaste } = pastSlice.actions

export default pastSlice.reducer