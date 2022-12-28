import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  fromPrice: number
  toPrice: number
}

const initialState: IInitialState = {
  fromPrice: 0,
  toPrice: 0,
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setFromPrice: (state, action) => {
      state.fromPrice = action.payload
    },
    setToPrice: (state, action) => {
      state.toPrice = action.payload
    },
  },
})

export const currencyActions = currencySlice.actions
export const currencyReducer = currencySlice.reducer
