import { configureStore } from '@reduxjs/toolkit'
import pastReducer from '../src/redux/pastSlice'
export const store = configureStore({
  reducer: {
    pastes : pastReducer
  },
})