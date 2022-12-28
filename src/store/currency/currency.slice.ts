import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  primer: number
}

const initialState: IInitialState = {
  primer: 0,
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setPrimer: (state, action) => {
      state.primer = action.payload
    },
  },
})

export const currencyActions = currencySlice.actions
export const currencyReducer = currencySlice.reducer
