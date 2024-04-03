import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './todoSlice'

//Creating Store
export const todoStore = configureStore({
    reducer: {
        todo : todoSlice.reducer,
    },
})