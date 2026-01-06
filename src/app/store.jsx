import { configureStore } from '@reduxjs/toolkit'
import uiReducer from '../features/ui/uiSlice'
import expenseReducer from '../features/expenses/expenseSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    expenses: expenseReducer
  }
})
