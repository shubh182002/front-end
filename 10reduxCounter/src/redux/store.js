import { configureStore } from '@reduxjs/toolkit'
import coutReducer from '../features/couter/coutSlice'

export const store = configureStore({

  reducer: {
    counter:coutReducer,
  },
})