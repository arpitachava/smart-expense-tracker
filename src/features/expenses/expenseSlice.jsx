import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  transactions: []
}

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload)
    },
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (item) => item.id !== action.payload
      )
    }
  }
})

export const { addTransaction, deleteTransaction } = expenseSlice.actions
export default expenseSlice.reducer
