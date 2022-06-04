import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filter'

export const store = configureStore({
  reducer: {
    filter
  },
})