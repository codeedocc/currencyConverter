import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  currency: number
}

const initialState: IInitialState = {
  currency: 0,
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload
    },
  },
})

export const currencyActions = currencySlice.actions
export const currencyReducer = currencySlice.reducer
